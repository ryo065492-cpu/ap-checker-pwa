'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { after, test } = require('node:test');
const { generateRosterPdf } = require('../src/generate-pdf.cjs');
const { calculateAge, paginateRoster, resolveRoster, RosterError } = require('../src/model.cjs');
const { buildRosterHtml, escapeHtml, uniqueRoleSymbols } = require('../src/render-html.cjs');
const {
  extractPdfText,
  inspectPdf,
  verifyBackgroundRaster,
  verifySourceAssets,
} = require('../src/verify.cjs');

const rootDir = path.resolve(__dirname, '..');
const tempDir = path.join(rootDir, 'tmp', 'test-pdfs');
const baseData = JSON.parse(fs.readFileSync(path.join(rootDir, 'data', 'anonymous-roster.json'), 'utf8'));
const generated = new Map();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function fixtureForCount(count) {
  const data = clone(baseData);
  data.rosterOutputInformation.assignmentIds = data.rosterOutputInformation.assignmentIds.slice(0, count);
  return data;
}

async function generateCase(name, data) {
  fs.mkdirSync(tempDir, { recursive: true });
  const outputPath = path.join(tempDir, `${name}.pdf`);
  const result = await generateRosterPdf({ data, rootDir, outputPath });
  generated.set(name, { outputPath, result });
  return generated.get(name);
}

function metric(inspection, pageNumber, field) {
  return inspection.fieldMetrics.find((item) => item.pageNumber === pageNumber && item.field === field);
}

after(() => {
  fs.rmSync(tempDir, { recursive: true, force: true });
});

test('公式Excelとプレビュー画像のSHA-256が指定値と一致する', () => {
  const hashes = verifySourceAssets(rootDir);
  assert.equal(hashes.excelSha256, '49192e8c2725bef14bd9e00fae54cd12a32ae0d8fd5dec84dafceaf27347526c');
  assert.equal(hashes.previewSha256, '0361f6e8fe60e71f821ebae9b05228b8bb9870ab91200e17b1f99d74eb7a91eb');
  assert.equal(hashes.fontSha256, '5113756f8a3b5d01b2211025e267c50121e3b36f465b7bbaf3cdaf4c3430bfd0');
});

test('年齢は名簿作成日を基準に誕生日前・当日・後を計算する', () => {
  assert.equal(calculateAge('2000-07-15', '2026-07-14'), 25);
  assert.equal(calculateAge('2000-07-14', '2026-07-14'), 26);
  assert.equal(calculateAge('2000-07-13', '2026-07-14'), 26);
});

test('自社1社9名は同じ会社階層のまま8名＋1名に分割する', () => {
  const resolved = resolveRoster(fixtureForCount(9));
  const pages = paginateRoster(resolved);
  assert.equal(resolved.primeCompany.id, 'company-prime');
  assert.deepEqual(pages.map((page) => page.members.length), [8, 1]);
  assert.deepEqual(pages.map((page) => page.firstTierCompany.id), ['company-a', 'company-a']);
  assert.deepEqual(pages.map((page) => page.rosterCompany.id), ['company-b', 'company-b']);
  assert.deepEqual(pages.map((page) => page.siteCompany.constructionTier), [2, 2]);
  assert.notEqual(pages[0].firstTierCompany.id, resolved.primeCompany.id);
  assert.notEqual(pages[0].rosterCompany.id, pages[0].firstTierCompany.id);
});

test('保険・共済・会社階層・※欄を指定表示に正規化する', () => {
  const data = fixtureForCount(9);
  const resolved = resolveRoster(data);
  const { html, pages } = buildRosterHtml(data, 'data:image/jpeg;base64,/9j/2Q==');

  assert.deepEqual(resolved.selected.slice(0, 5).map((item) => item.insuranceDisplay), [
    { healthLeft: '協会けんぽ', pensionLeft: '厚生年金', employmentLeft: '', employmentRight: '0001' },
    { healthLeft: '匿名建設健康保険組合', pensionLeft: '厚生年金', employmentLeft: '適用除外', employmentRight: '' },
    { healthLeft: '建設国保', pensionLeft: '厚生年金', employmentLeft: '日雇保険', employmentRight: '' },
    { healthLeft: '国民健康保険', pensionLeft: '国民年金', employmentLeft: '', employmentRight: '0004' },
    { healthLeft: '適用除外', pensionLeft: '受給者', employmentLeft: '', employmentRight: '0005' },
  ]);
  assert.ok(resolved.selected.every((item) => ['有', '無'].includes(item.retirementDisplay.constructionIndustry)));
  assert.ok(resolved.selected.every((item) => ['有', '無'].includes(item.retirementDisplay.smallAndMediumEnterprise)));
  assert.ok(resolved.selected.filter((item) => item.assignment.insurance.employment.type === 'insured')
    .every((item) => /^\d{4}$/.test(item.insuranceDisplay.employmentRight)));

  assert.equal(pages[0].firstTierCompany.id, 'company-a');
  assert.equal(pages[0].rosterCompany.id, 'company-b');
  assert.equal(pages[1].firstTierCompany.id, 'company-a');
  assert.equal(pages[1].rosterCompany.id, 'company-b');
  assert.ok(!html.includes('-health-number'));
  assert.ok(!html.includes('-pension-number'));
  assert.doesNotMatch(html, /記号A|番号P|番号E|加入|未加入/);
  assert.ok(html.includes('class="role-mark'));
  assert.ok(html.includes('role-mark--wide'));
  assert.ok(!html.includes('現・作・職'));
  assert.deepEqual(uniqueRoleSymbols(['workerChief', 'workerChief', 'foreman']), ['作', '職']);
});

test('保険・共済の不正値と「習＋1特」をChromium起動前に拒否する', () => {
  const invalidEmployment = fixtureForCount(1);
  invalidEmployment.siteWorkerInformation.assignments[0].insurance.employment.insuredNumberLast4 = '123';
  assert.throws(
    () => resolveRoster(invalidEmployment),
    (error) => error instanceof RosterError && error.code === 'INVALID_EMPLOYMENT_NUMBER'
  );

  const invalidRetirement = fixtureForCount(1);
  invalidRetirement.siteWorkerInformation.assignments[0].retirementFunds.constructionIndustry = '有';
  assert.throws(
    () => resolveRoster(invalidRetirement),
    (error) => error instanceof RosterError && error.code === 'INVALID_RETIREMENT_FUNDS'
  );

  const combinedHealth = fixtureForCount(1);
  combinedHealth.siteWorkerInformation.assignments[0].insurance.health = {
    type: 'healthInsuranceAssociation',
    associationName: '国民健康保険／適用除外',
  };
  assert.throws(
    () => resolveRoster(combinedHealth),
    (error) => error instanceof RosterError && error.code === 'INVALID_INSURANCE'
  );

  const invalidRoles = fixtureForCount(1);
  invalidRoles.siteWorkerInformation.assignments[0].roles = ['foreignTrainee', 'specifiedSkilledWorker1'];
  assert.throws(
    () => resolveRoster(invalidRoles),
    (error) => error instanceof RosterError && error.code === 'INCOMPATIBLE_ROLE_COMBINATION'
  );
});

test('1名は1ページ、8名は1ページ、9名は2ページのA3横PDFになる', async () => {
  for (const [count, expectedPages] of [[1, 1], [8, 1], [9, 2]]) {
    const { outputPath, result } = await generateCase(`${count}-workers`, fixtureForCount(count));
    const pdf = await inspectPdf(outputPath);
    assert.equal(result.pages.length, expectedPages);
    assert.equal(pdf.pageCount, expectedPages);
    assert.equal(pdf.a3Landscape, true);
    assert.equal(result.inspection.backgroundChecks.length, expectedPages);
    assert.ok(result.inspection.backgroundChecks.every((item) =>
      item.sourceWidth === 4960 && item.sourceHeight === 3508 &&
      Math.max(Math.abs(item.leftDelta), Math.abs(item.topDelta), Math.abs(item.widthDelta), Math.abs(item.heightDelta)) <= 0.1
    ));
    if (count === 9) {
      assert.deepEqual(result.pages.map((page) => page.members.length), [8, 1]);
      for (const pageNumber of [1, 2]) {
        assert.equal(metric(result.inspection, pageNumber, 'first-tier-company-name').text, '匿名一次建設株式会社');
        assert.equal(metric(result.inspection, pageNumber, 'roster-company-name').text, '匿名未来施工株式会社');
        assert.equal(metric(result.inspection, pageNumber, 'construction-tier').text, '2');
      }
    }
  }
});

test('長い会社名と事業者IDを重ねず、教育・講習の1文字残りを防ぐ', async () => {
  const data = fixtureForCount(9);
  const rosterCompany = data.companyConstructionInformation.companies.find((company) => company.id === 'company-b');
  rosterCompany.name = '匿名テスト用非常に長い名称の未来施工技術研究建設株式会社';
  const { outputPath, result } = await generateCase('long-and-optional-fields', data);
  assert.equal(result.pages.length, 2);
  assert.deepEqual(result.pages.map((page) => page.members.length), [8, 1]);
  assert.equal(result.inspection.overflows.length, 0);
  assert.equal(result.inspection.fontReady, true);
  assert.ok(result.warnings.some((warning) => warning.code === 'QUALIFICATION_OVERFLOW'));
  assert.ok(result.inspection.text.includes('別紙参照'));
  assert.ok(!result.inspection.text.includes('現・作・職'));

  const longCompany = metric(result.inspection, 2, 'roster-company-name');
  const longCompanyId = metric(result.inspection, 2, 'roster-company-id');
  assert.ok(longCompany && longCompanyId && longCompany.contentRect && longCompanyId.contentRect);
  assert.ok(longCompany.lineCount <= 2);
  assert.ok(longCompany.lineTexts.every((line) => Array.from(line).length !== 1));
  assert.ok(longCompany.contentRect.bottom <= longCompanyId.rect.top + 0.5);
  assert.ok(longCompany.scrollWidth <= longCompany.clientWidth + 1);
  assert.ok(longCompany.scrollHeight <= longCompany.clientHeight + 1);
  assert.equal(longCompanyId.text, 'POC-BIZ-SELF');

  assert.equal(metric(result.inspection, 1, 'first-tier-company-name').text, '匿名一次建設株式会社');
  assert.equal(metric(result.inspection, 2, 'first-tier-company-name').text, '匿名一次建設株式会社');
  assert.equal(metric(result.inspection, 1, 'construction-tier').text, '2');
  assert.equal(metric(result.inspection, 2, 'construction-tier').text, '2');
  assert.equal(metric(result.inspection, 1, 'roster-company-name').text, rosterCompany.name);
  assert.equal(metric(result.inspection, 2, 'roster-company-name').text, rosterCompany.name);

  assert.ok(!result.inspection.fieldMetrics.some((item) => /-(health|pension)-number$/.test(item.field)));
  const employmentNumbers = result.inspection.fieldMetrics.filter((item) => /-employment-number$/.test(item.field));
  assert.ok(employmentNumbers.length > 0 && employmentNumbers.every((item) => /^\d{4}$/.test(item.text)));
  assert.ok(!metric(result.inspection, 1, 'worker-1-employment-name'));
  assert.equal(metric(result.inspection, 1, 'worker-2-employment-name').text, '適用除外');
  assert.equal(metric(result.inspection, 1, 'worker-3-employment-name').text, '日雇保険');
  const retirement = result.inspection.fieldMetrics.filter((item) => /-(construction|smaller-company)-retirement$/.test(item.field));
  assert.ok(retirement.length > 0 && retirement.every((item) => /^[有無]$/.test(item.text)));

  const courseFields = result.inspection.fieldMetrics.filter((item) => /-(education|skills|licenses)$/.test(item.field));
  assert.ok(courseFields.every((item) => item.lineTexts.every((line) => line !== '育' && line !== '習')));
  assert.ok(!result.inspection.text.includes('null'));
  assert.ok(!result.inspection.text.includes('undefined'));
  assert.equal(result.inspection.backgroundChecks.length, 2);

  const textPages = await extractPdfText(outputPath);
  const pdfText = textPages.join('\n');
  assert.equal(textPages.length, 2);
  assert.ok(textPages.every((text) => text.includes('匿名PDF PoC')));
  assert.ok(pdfText.includes('匿名'));
  assert.ok(pdfText.includes('別紙参照'));
  assert.ok(pdfText.includes('0001'));
  assert.doesNotMatch(pdfText, /\uFFFD|記号A|番号P|番号E|加入|未加入|現・作・職/);
  assert.ok(!pdfText.includes('2026年6月28日'), '送り出し教育日は出力しない');
});

test('背景は欠けず、A3全面へ同じ比率・位置で描画される', async () => {
  const target = generated.get('9-workers') ?? await generateCase('9-workers-background', fixtureForCount(9));
  const check = await verifyBackgroundRaster({ rootDir, pdfPath: target.outputPath, tempDir });
  assert.equal(check.pass, true);
  assert.ok(check.darkCoverage >= 0.97);
  assert.equal(check.pages.length, 2);
  assert.ok(check.pages.every((page) => page.pass));
});

test('0名と不正な「習＋1特」はPDF生成を拒否し、既存ファイルを上書きしない', async () => {
  fs.mkdirSync(tempDir, { recursive: true });
  const cases = [
    ['zero-workers', fixtureForCount(0), 'EMPTY_ROSTER'],
    ['invalid-role-combination', (() => {
      const data = fixtureForCount(1);
      data.siteWorkerInformation.assignments[0].roles = ['foreignTrainee', 'specifiedSkilledWorker1'];
      return data;
    })(), 'INCOMPATIBLE_ROLE_COMBINATION'],
  ];
  for (const [name, data, code] of cases) {
    const outputPath = path.join(tempDir, `${name}.pdf`);
    const sentinel = Buffer.from('do-not-overwrite');
    fs.writeFileSync(outputPath, sentinel);
    await assert.rejects(
      generateRosterPdf({ data, rootDir, outputPath }),
      (error) => error instanceof RosterError && error.code === code
    );
    assert.deepEqual(fs.readFileSync(outputPath), sentinel);
  }
});

test('利用者入力をHTMLとして解釈しない', () => {
  const dangerous = '<script>globalThis.compromised=true</script>';
  const data = fixtureForCount(1);
  data.workerInformation.workers[0].name = dangerous;
  data.companyConstructionInformation.companies[1].name = `${dangerous}株式会社`;
  const { html } = buildRosterHtml(data, 'data:image/jpeg;base64,/9j/2Q==');
  assert.ok(html.includes(escapeHtml(dangerous)));
  assert.ok(!html.includes(dangerous));
  assert.ok(!html.includes('localStorage'));
});
