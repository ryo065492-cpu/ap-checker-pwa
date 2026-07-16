'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { generateRosterPdf } = require('../src/generate-pdf.cjs');
const { verifySourceAssets } = require('../src/verify.cjs');

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const dataPath = path.join(rootDir, 'data', 'anonymous-roster.json');
  const outputPath = path.join(rootDir, 'output', 'roster-poc.pdf');
  verifySourceAssets(rootDir);
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const result = await generateRosterPdf({ data, rootDir, outputPath });
  process.stdout.write(`${JSON.stringify({
    outputPath,
    pageCount: result.pages.length,
    warnings: result.warnings,
    fontReady: result.inspection.fontReady,
    backgroundChecks: result.inspection.backgroundChecks,
  }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
