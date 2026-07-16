'use strict';

const path = require('node:path');
const { verifyFinalPdf } = require('../src/verify.cjs');

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const pdfPath = path.join(rootDir, 'output', 'roster-poc.pdf');
  const result = await verifyFinalPdf({
    rootDir,
    pdfPath,
    expectedPages: 2,
    // 帳票見出しはJPEG背景のため、文字抽出は可変文字レイヤーを対象にする。
    expectedJapanese: ['匿名PDF PoC', '別紙参照', '協会けんぽ', '0001', '有', '無'],
  });
  const text = result.textPages.join('\n');
  const forbidden = text.match(/記号A|番号P|番号E|加入|未加入|現・作・職/);
  if (forbidden) {
    throw new Error(`PDFに禁止表記が残っています: ${forbidden[0]}`);
  }
  process.stdout.write(`${JSON.stringify({
    pageCount: result.pdf.pageCount,
    pageSizes: result.pdf.pages,
    background: result.background,
    japaneseText: 'OK',
  }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
