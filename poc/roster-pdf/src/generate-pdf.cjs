'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const layout = require('./layout.config.cjs');
const { buildRosterHtml } = require('./render-html.cjs');

function dataUriForJpeg(filePath) {
  return `data:image/jpeg;base64,${fs.readFileSync(filePath).toString('base64')}`;
}

function dataUriForFont(filePath) {
  return `data:font/ttf;base64,${fs.readFileSync(filePath).toString('base64')}`;
}

async function fitAndInspect(page) {
  return page.evaluate(async ({ stepPt, preferredFont }) => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((image) => image.complete ? image.decode() : new Promise((resolve, reject) => {
      image.addEventListener('load', () => image.decode().then(resolve, reject), { once: true });
      image.addEventListener('error', reject, { once: true });
    })));

    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const textRoot = (element) => element.querySelector('.field-text') ?? element;
    const visibleLineData = (element) => {
      const root = textRoot(element);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const glyphs = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        for (const segment of segmenter.segment(node.data)) {
          if (!segment.segment.trim()) continue;
          const range = document.createRange();
          range.setStart(node, segment.index);
          range.setEnd(node, segment.index + segment.segment.length);
          const rect = [...range.getClientRects()].find((item) => item.width > 0 && item.height > 0);
          if (rect) glyphs.push({ text: segment.segment, left: rect.left, top: rect.top });
        }
      }
      glyphs.sort((a, b) => a.top - b.top || a.left - b.left);
      const lines = [];
      for (const glyph of glyphs) {
        let line = lines.find((candidate) => Math.abs(candidate.top - glyph.top) <= 1.5);
        if (!line) {
          line = { top: glyph.top, glyphs: [] };
          lines.push(line);
        }
        line.glyphs.push(glyph);
      }
      return lines
        .sort((a, b) => a.top - b.top)
        .map((line) => line.glyphs.sort((a, b) => a.left - b.left).map((glyph) => glyph.text).join(''));
    };
    const contentRect = (element) => {
      const root = textRoot(element);
      const range = document.createRange();
      range.selectNodeContents(root);
      const rects = [...range.getClientRects()].filter((rect) => rect.width > 0 && rect.height > 0);
      if (rects.length === 0) return null;
      const left = Math.min(...rects.map((rect) => rect.left));
      const top = Math.min(...rects.map((rect) => rect.top));
      const right = Math.max(...rects.map((rect) => rect.right));
      const bottom = Math.max(...rects.map((rect) => rect.bottom));
      return { left, top, right, bottom, width: right - left, height: bottom - top };
    };
    const analyzeElement = (element) => {
      const lineTexts = visibleLineData(element);
      const maxLines = Number(element.dataset.maxLines || Number.POSITIVE_INFINITY);
      const enforceMaxLines = element.dataset.enforceMaxLines === 'true';
      const avoidOrphan = element.dataset.avoidOrphan === 'true';
      const containContent = element.dataset.containContent === 'true';
      const lastLine = lineTexts.at(-1) ?? '';
      const horizontalOverflow = element.scrollWidth > element.clientWidth + 1;
      const verticalOverflow = element.scrollHeight > element.clientHeight + 1;
      const lineOverflow = enforceMaxLines && lineTexts.length > maxLines;
      const orphan = avoidOrphan && lineTexts.length > 1 && Array.from(lastLine).length === 1;
      const elementRect = element.getBoundingClientRect();
      const bounds = contentRect(element);
      const contentOutside = containContent && bounds && (
        // Noto Sans JPのグリフ上端は行箱から最大0.5px程度張り出すため、
        // ID欄側（下端）よりも上端にだけ0.75pxの描画許容を設ける。
        bounds.top < elementRect.top - 0.75 ||
        bounds.bottom > elementRect.bottom + 0.1
      );
      return {
        lineTexts,
        horizontalOverflow,
        verticalOverflow,
        lineOverflow,
        orphan,
        contentOutside,
        invalid: horizontalOverflow || verticalOverflow || lineOverflow || orphan || contentOutside,
      };
    };

    const overflows = [];
    const fallbacks = [];
    for (const element of document.querySelectorAll('[data-fit="true"]')) {
      let size = Number(element.dataset.maxFontPt);
      const minimum = Number(element.dataset.minFontPt);
      const fallback = element.dataset.fallback;
      element.style.fontSize = `${size}pt`;

      let analysis = analyzeElement(element);
      while (analysis.invalid && size - stepPt >= minimum) {
        size -= stepPt;
        element.style.fontSize = `${size}pt`;
        analysis = analyzeElement(element);
      }

      if (analysis.invalid && fallback) {
        const original = element.textContent;
        textRoot(element).textContent = fallback;
        size = Number(element.dataset.maxFontPt);
        element.style.fontSize = `${size}pt`;
        analysis = analyzeElement(element);
        while (analysis.invalid && size - stepPt >= minimum) {
          size -= stepPt;
          element.style.fontSize = `${size}pt`;
          analysis = analyzeElement(element);
        }
        fallbacks.push({ field: element.dataset.field, original, rendered: fallback });
      }

      if (analysis.invalid || size < minimum - 0.01) {
        overflows.push({
          field: element.dataset.field,
          text: element.textContent,
          width: element.clientWidth,
          scrollWidth: element.scrollWidth,
          height: element.clientHeight,
          scrollHeight: element.scrollHeight,
          fontPt: size,
          minFontPt: minimum,
          lineTexts: analysis.lineTexts,
          lineOverflow: analysis.lineOverflow,
          orphan: analysis.orphan,
          contentOutside: analysis.contentOutside,
        });
      }
      element.dataset.finalFontPt = String(size);
    }

    const fieldMetrics = [...document.querySelectorAll('[data-field]')].map((element) => {
      const rect = element.getBoundingClientRect();
      const analysis = analyzeElement(element);
      return {
        pageNumber: Number(element.closest('.sheet')?.dataset.page ?? 0),
        field: element.dataset.field,
        text: element.textContent,
        fontPt: Number(element.dataset.finalFontPt || 0),
        lineTexts: analysis.lineTexts,
        lineCount: analysis.lineTexts.length,
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
        rect: { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height },
        contentRect: contentRect(element),
      };
    });

    const backgroundChecks = [...document.querySelectorAll('.sheet')].map((sheet) => {
      const image = sheet.querySelector('.page-background');
      const sheetRect = sheet.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      return {
        sourceWidth: image.naturalWidth,
        sourceHeight: image.naturalHeight,
        leftDelta: imageRect.left - sheetRect.left,
        topDelta: imageRect.top - sheetRect.top,
        widthDelta: imageRect.width - sheetRect.width,
        heightDelta: imageRect.height - sheetRect.height,
      };
    });

    return {
      overflows,
      fallbacks,
      fieldMetrics,
      backgroundChecks,
      fontReady: document.fonts.check(`12pt "${preferredFont}"`),
      pageCount: document.querySelectorAll('.sheet').length,
      text: document.body.innerText,
    };
  }, { stepPt: layout.fit.stepPt, preferredFont: layout.font.family });
}

async function generateRosterPdf({ data, rootDir, outputPath, launchOptions = {} }) {
  const backgroundPath = path.join(rootDir, layout.source.previewFile);
  const fontPath = path.join(rootDir, layout.source.fontFile);
  const backgroundDataUri = dataUriForJpeg(backgroundPath);
  const fontDataUri = dataUriForFont(fontPath);
  const rendered = buildRosterHtml(data, backgroundDataUri, fontDataUri);

  // 0名等のモデルエラーはここまでで発生させ、既存出力を触る前に停止する。
  const browser = await chromium.launch({ headless: true, ...launchOptions });
  try {
    const page = await browser.newPage({ viewport: { width: 1680, height: 1188 }, deviceScaleFactor: 1 });
    await page.emulateMedia({ media: 'print' });
    await page.setContent(rendered.html, { waitUntil: 'load' });
    const inspection = await fitAndInspect(page);

    if (inspection.overflows.length > 0) {
      const fields = inspection.overflows.map((item) => item.field).join(', ');
      throw new Error(`文字が設定下限内で収まりません: ${fields}`);
    }
    if (!inspection.fontReady) {
      throw new Error(`日本語フォントを利用できません: ${layout.font.family}`);
    }
    for (const check of inspection.backgroundChecks) {
      const correctSource = check.sourceWidth === layout.page.sourceWidthPx && check.sourceHeight === layout.page.sourceHeightPx;
      const aligned = Math.max(Math.abs(check.leftDelta), Math.abs(check.topDelta), Math.abs(check.widthDelta), Math.abs(check.heightDelta)) <= 0.1;
      if (!correctSource || !aligned) {
        throw new Error(`背景画像の寸法または配置が不正です: ${JSON.stringify(check)}`);
      }
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    await page.pdf({
      path: outputPath,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    return {
      ...rendered,
      inspection,
      warnings: [
        ...rendered.warnings,
        ...inspection.fallbacks.map((item) => ({ code: 'QUALIFICATION_OVERFLOW', ...item })),
      ],
      outputPath,
    };
  } finally {
    await browser.close();
  }
}

module.exports = {
  fitAndInspect,
  generateRosterPdf,
};
