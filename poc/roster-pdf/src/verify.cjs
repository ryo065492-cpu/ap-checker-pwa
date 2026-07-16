'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { spawnSync } = require('node:child_process');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');
const layout = require('./layout.config.cjs');

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function verifySourceAssets(rootDir) {
  const previewPath = path.join(rootDir, layout.source.previewFile);
  const excelPath = path.join(rootDir, layout.source.excelFile);
  const fontPath = path.join(rootDir, layout.source.fontFile);
  const actual = {
    previewSha256: sha256(previewPath),
    excelSha256: sha256(excelPath),
    fontSha256: sha256(fontPath),
  };
  if (actual.previewSha256 !== layout.source.previewSha256) {
    throw new Error(`公式プレビュー画像のSHA-256が不一致です: ${actual.previewSha256}`);
  }
  if (actual.excelSha256 !== layout.source.excelSha256) {
    throw new Error(`公式ExcelのSHA-256が不一致です: ${actual.excelSha256}`);
  }
  if (actual.fontSha256 !== layout.source.fontSha256) {
    throw new Error(`同梱日本語フォントのSHA-256が不一致です: ${actual.fontSha256}`);
  }
  return actual;
}

async function inspectPdf(pdfPath) {
  const bytes = fs.readFileSync(pdfPath);
  const document = await PDFDocument.load(bytes);
  const pages = document.getPages().map((page, index) => {
    const size = page.getSize();
    return { pageNumber: index + 1, widthPt: size.width, heightPt: size.height };
  });
  const expectedWidthPt = layout.page.widthMm * 72 / 25.4;
  const expectedHeightPt = layout.page.heightMm * 72 / 25.4;
  const a3Landscape = pages.every((page) =>
    // ChromiumはCSS pxへ量子化するため、理論値との差を1pt未満まで許容する。
    Math.abs(page.widthPt - expectedWidthPt) <= 1.0 &&
    Math.abs(page.heightPt - expectedHeightPt) <= 1.0 &&
    page.widthPt > page.heightPt
  );
  return { pageCount: pages.length, pages, expectedWidthPt, expectedHeightPt, a3Landscape };
}

async function extractPdfText(pdfPath) {
  // ESMのpackage解決はNODE_PATHを参照しないため、CJS resolverで実体を確定してから読み込む。
  const pdfjsPath = require.resolve('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjs = await import(pathToFileURL(pdfjsPath).href);
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const document = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
  const pages = [];
  for (let index = 1; index <= document.numPages; index += 1) {
    const page = await document.getPage(index);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(' '));
  }
  await document.destroy();
  return pages;
}

function findPdftoppm() {
  const configured = process.env.PDFTOPPM_PATH;
  if (configured && fs.existsSync(configured)) return configured;
  return process.platform === 'win32' ? 'pdftoppm.exe' : 'pdftoppm';
}

function renderPdfPage(pdfPath, outputPrefix, pageNumber, dpi = 96) {
  const command = findPdftoppm();
  const needsShell = process.platform === 'win32' && /\.(cmd|bat)$/i.test(command);
  const result = spawnSync(command, ['-f', String(pageNumber), '-l', String(pageNumber), '-singlefile', '-r', String(dpi), '-png', pdfPath, outputPrefix], {
    encoding: 'utf8',
    shell: needsShell,
  });
  if (result.status !== 0) {
    throw new Error(`pdftoppmによるPDF描画に失敗しました: ${result.stderr || result.stdout || result.error?.message}`);
  }
  return `${outputPrefix}.png`;
}

function renderFirstPage(pdfPath, outputPrefix, dpi = 96) {
  return renderPdfPage(pdfPath, outputPrefix, 1, dpi);
}

async function verifyBackgroundRaster({ rootDir, pdfPath, tempDir = null }) {
  const ownedTemp = tempDir ?? fs.mkdtempSync(path.join(os.tmpdir(), 'roster-pdf-background-'));
  fs.mkdirSync(ownedTemp, { recursive: true });
  const pdf = await inspectPdf(pdfPath);
  const pageResults = [];
  let totalDarkSamples = 0;
  let totalMatchedSamples = 0;

  for (let pageNumber = 1; pageNumber <= pdf.pageCount; pageNumber += 1) {
    const outputPrefix = path.join(ownedTemp, `page-${pageNumber}`);
    const renderedPath = renderPdfPage(pdfPath, outputPrefix, pageNumber, 96);
    const rendered = sharp(renderedPath).removeAlpha().greyscale();
    const metadata = await rendered.metadata();
    const renderedRaw = await rendered.raw().toBuffer();
    const referenceRaw = await sharp(path.join(rootDir, layout.source.previewFile))
      .resize(metadata.width, metadata.height, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
      .greyscale()
      .raw()
      .toBuffer();

    const width = metadata.width;
    const height = metadata.height;
    let darkSamples = 0;
    let matchedSamples = 0;
    const radius = 1;
    for (let y = 1; y < height - 1; y += 2) {
      for (let x = 1; x < width - 1; x += 2) {
        const index = y * width + x;
        if (referenceRaw[index] >= 185) continue;
        darkSamples += 1;
        let darkest = 255;
        for (let dy = -radius; dy <= radius; dy += 1) {
          for (let dx = -radius; dx <= radius; dx += 1) {
            darkest = Math.min(darkest, renderedRaw[(y + dy) * width + x + dx]);
          }
        }
        if (darkest < 215) matchedSamples += 1;
      }
    }
    const darkCoverage = darkSamples === 0 ? 0 : matchedSamples / darkSamples;
    totalDarkSamples += darkSamples;
    totalMatchedSamples += matchedSamples;
    pageResults.push({
      pageNumber,
      renderedWidth: width,
      renderedHeight: height,
      darkSamples,
      matchedSamples,
      darkCoverage,
      pass: darkCoverage >= 0.97,
    });
  }

  const darkCoverage = totalDarkSamples === 0 ? 0 : totalMatchedSamples / totalDarkSamples;
  const result = {
    renderedWidth: pageResults[0]?.renderedWidth ?? 0,
    renderedHeight: pageResults[0]?.renderedHeight ?? 0,
    darkSamples: totalDarkSamples,
    matchedSamples: totalMatchedSamples,
    darkCoverage,
    pages: pageResults,
    pass: pageResults.length === pdf.pageCount && pageResults.every((page) => page.pass),
  };
  if (!tempDir) fs.rmSync(ownedTemp, { recursive: true, force: true });
  if (!result.pass) {
    throw new Error(`背景画像の罫線一致率が不足しています: ${(darkCoverage * 100).toFixed(2)}%`);
  }
  return result;
}

async function verifyFinalPdf({ rootDir, pdfPath, expectedPages = null, expectedJapanese = [] }) {
  const assets = verifySourceAssets(rootDir);
  const pdf = await inspectPdf(pdfPath);
  if (expectedPages !== null && pdf.pageCount !== expectedPages) {
    throw new Error(`PDFページ数が不正です: expected=${expectedPages}, actual=${pdf.pageCount}`);
  }
  if (!pdf.a3Landscape) {
    throw new Error(`PDFがA3横ではありません: ${JSON.stringify(pdf.pages)}`);
  }
  const textPages = await extractPdfText(pdfPath);
  const text = textPages.join('\n');
  if (text.includes('\uFFFD')) {
    throw new Error('PDF抽出文字列に置換文字 U+FFFD が含まれています。');
  }
  for (const expected of expectedJapanese) {
    if (!text.includes(expected)) {
      throw new Error(`PDFから期待する日本語を抽出できません: ${expected}`);
    }
  }
  const background = await verifyBackgroundRaster({ rootDir, pdfPath });
  return { assets, pdf, textPages, background };
}

module.exports = {
  extractPdfText,
  inspectPdf,
  renderFirstPage,
  renderPdfPage,
  sha256,
  verifyBackgroundRaster,
  verifyFinalPdf,
  verifySourceAssets,
};
