'use strict';

const layout = require('./layout.config.cjs');
const { paginateRoster, parseIsoDate, resolveRoster } = require('./model.cjs');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function protectedTextHtml(value, protectedTerms = []) {
  const text = String(value ?? '');
  const terms = [...new Set(protectedTerms.filter(Boolean))].sort((a, b) => b.length - a.length);
  if (terms.length === 0 || text.length === 0) return escapeHtml(text);
  const pattern = new RegExp(terms.map(escapeRegExp).join('|'), 'gu');
  let cursor = 0;
  let html = '';
  for (const match of text.matchAll(pattern)) {
    html += escapeHtml(text.slice(cursor, match.index));
    html += `<span class="no-wrap">${escapeHtml(match[0])}</span>`;
    cursor = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(cursor));
}

function formatJapaneseDate(value) {
  if (!value) return '';
  const { year, month, day } = parseIsoDate(value, '帳票日付');
  return `${year}年${month}月${day}日`;
}

function percent(value, dimension) {
  return `${(value / dimension) * 100}%`;
}

function normalizeBox(box) {
  return {
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    fontPt: box.fontPt ?? layout.font.basePt,
    minFontPt: box.minFontPt ?? layout.font.minPt,
    maxLines: box.maxLines ?? 2,
    align: box.align ?? 'center',
    mask: box.mask === true,
  };
}

function fieldHtml({
  id,
  value,
  box,
  fallback = '',
  className = '',
  protectedTerms = [],
  avoidOrphan = false,
  enforceMaxLines = false,
  containContent = false,
}) {
  const normalized = normalizeBox(box);
  const style = [
    `left:${percent(normalized.x, layout.page.sourceWidthPx)}`,
    `top:${percent(normalized.y, layout.page.sourceHeightPx)}`,
    `width:${percent(normalized.width, layout.page.sourceWidthPx)}`,
    `height:${percent(normalized.height, layout.page.sourceHeightPx)}`,
    `font-size:${normalized.fontPt}pt`,
    `text-align:${normalized.align}`,
    normalized.align === 'left' ? 'justify-content:flex-start' : normalized.align === 'right' ? 'justify-content:flex-end' : 'justify-content:center',
    normalized.mask ? 'background:#fff' : '',
  ].filter(Boolean).join(';');
  return `<div class="field ${escapeHtml(className)}" data-field="${escapeHtml(id)}" data-fit="true" data-max-font-pt="${normalized.fontPt}" data-min-font-pt="${normalized.minFontPt}" data-max-lines="${normalized.maxLines}" data-enforce-max-lines="${enforceMaxLines}" data-avoid-orphan="${avoidOrphan}" data-contain-content="${containContent}" data-fallback="${escapeHtml(fallback)}" style="${style}"><span class="field-text">${protectedTextHtml(value, protectedTerms)}</span></div>`;
}

function rowBox(column, rowIndex, inner = null) {
  const y = layout.table.top + (rowIndex * layout.table.rowHeight) + (inner?.y ?? 3);
  return {
    x: column.x,
    y,
    width: column.width,
    height: inner?.height ?? layout.table.rowHeight - 6,
    fontPt: inner?.fontPt,
    minFontPt: inner?.minFontPt,
    maxLines: inner?.maxLines,
    mask: inner?.mask,
  };
}

function uniqueRoleSymbols(roles) {
  const symbols = [];
  for (const role of Array.isArray(roles) ? roles : []) {
    const symbol = layout.roleSymbols[role];
    if (symbol && !symbols.includes(symbol)) symbols.push(symbol);
  }
  return symbols;
}

function roleFieldHtml({ id, roles, box }) {
  const normalized = normalizeBox(box);
  const style = [
    `left:${percent(normalized.x, layout.page.sourceWidthPx)}`,
    `top:${percent(normalized.y, layout.page.sourceHeightPx)}`,
    `width:${percent(normalized.width, layout.page.sourceWidthPx)}`,
    `height:${percent(normalized.height, layout.page.sourceHeightPx)}`,
    'text-align:center',
    'justify-content:center',
  ].join(';');
  const marks = uniqueRoleSymbols(roles).map((symbol) => {
    const wide = symbol === layout.roleSymbols.specifiedSkilledWorker1 ? ' role-mark--wide' : '';
    return `<span class="role-mark${wide}" data-role-symbol="${escapeHtml(symbol)}">${escapeHtml(symbol)}</span>`;
  }).join('');
  return `<div class="field role-field" data-field="${escapeHtml(id)}" style="${style}">${marks}</div>`;
}

function listOrFallback(items, config, warnings, workerId, kind) {
  const text = items.filter(Boolean).join('・');
  if (Array.from(text).length > config.maxChars) {
    warnings.push({
      code: 'QUALIFICATION_OVERFLOW',
      workerId,
      kind,
      originalText: text,
      renderedText: layout.fit.qualificationFallbackText,
    });
    return layout.fit.qualificationFallbackText;
  }
  return text;
}

function workerFields(member, rowIndex, warnings) {
  const { columns, inner, fields } = layout.table;
  const insurance = member.insuranceDisplay;
  const retirement = member.retirementDisplay;
  const educationNames = member.educations.map((item) => item.name);
  const skillNames = member.qualifications.filter((item) => item.kind === 'skill').map((item) => item.name);
  const licenseNames = member.qualifications.filter((item) => item.kind === 'license').map((item) => item.name);
  const educationText = listOrFallback(educationNames, fields.education, warnings, member.worker.id, 'education');
  const skillText = listOrFallback(skillNames, fields.skills, warnings, member.worker.id, 'skill');
  const licenseText = listOrFallback(licenseNames, fields.licenses, warnings, member.worker.id, 'license');
  const id = `worker-${rowIndex + 1}`;

  return [
    fieldHtml({ id: `${id}-number`, value: rowIndex + 1, box: { ...rowBox(columns.number, rowIndex), ...fields.number } }),
    fieldHtml({ id: `${id}-furigana`, value: member.worker.furigana, box: rowBox(columns.identity, rowIndex, inner.furigana) }),
    fieldHtml({ id: `${id}-name`, value: member.worker.name, box: rowBox(columns.identity, rowIndex, inner.name) }),
    fieldHtml({ id: `${id}-ccus-worker-id`, value: member.worker.ccusWorkerId ?? '', box: rowBox(columns.identity, rowIndex, inner.workerId) }),
    fieldHtml({ id: `${id}-trade`, value: member.assignment.trade, box: { ...rowBox(columns.trade, rowIndex), ...fields.trade } }),
    roleFieldHtml({ id: `${id}-roles`, roles: member.assignment.roles, box: { ...rowBox(columns.roles, rowIndex), ...fields.roles } }),
    fieldHtml({ id: `${id}-birth-date`, value: formatJapaneseDate(member.worker.birthDate), box: rowBox(columns.birthAge, rowIndex, inner.birthDate) }),
    fieldHtml({ id: `${id}-age`, value: `${member.age}歳`, box: rowBox(columns.birthAge, rowIndex, inner.age) }),
    fieldHtml({ id: `${id}-health-name`, value: insurance.healthLeft, box: rowBox(columns.insuranceNames, rowIndex, inner.insuranceLine1) }),
    fieldHtml({ id: `${id}-pension-name`, value: insurance.pensionLeft, box: rowBox(columns.insuranceNames, rowIndex, inner.insuranceLine2) }),
    insurance.employmentLeft ? fieldHtml({ id: `${id}-employment-name`, value: insurance.employmentLeft, box: rowBox(columns.insuranceNames, rowIndex, inner.insuranceLine3) }) : '',
    insurance.employmentRight ? fieldHtml({ id: `${id}-employment-number`, value: insurance.employmentRight, box: rowBox(columns.insuranceNumbers, rowIndex, inner.insuranceLine3) }) : '',
    fieldHtml({ id: `${id}-construction-retirement`, value: retirement.constructionIndustry, box: rowBox(columns.retirement, rowIndex, inner.retirementLine1) }),
    fieldHtml({ id: `${id}-smaller-company-retirement`, value: retirement.smallAndMediumEnterprise, box: rowBox(columns.retirement, rowIndex, inner.retirementLine2) }),
    fieldHtml({ id: `${id}-education`, value: educationText, fallback: layout.fit.qualificationFallbackText, box: { ...rowBox(columns.education, rowIndex), ...fields.education }, className: 'balanced-text', protectedTerms: layout.fit.courseProtectedTerms, avoidOrphan: true }),
    fieldHtml({ id: `${id}-skills`, value: skillText, fallback: layout.fit.qualificationFallbackText, box: { ...rowBox(columns.skills, rowIndex), ...fields.skills }, className: 'balanced-text', protectedTerms: layout.fit.courseProtectedTerms, avoidOrphan: true }),
    fieldHtml({ id: `${id}-licenses`, value: licenseText, fallback: layout.fit.qualificationFallbackText, box: { ...rowBox(columns.licenses, rowIndex), ...fields.licenses }, className: 'balanced-text', protectedTerms: layout.fit.courseProtectedTerms, avoidOrphan: true }),
    fieldHtml({ id: `${id}-entry-date`, value: formatJapaneseDate(member.assignment.siteEntryDate), box: rowBox(columns.dates, rowIndex, inner.entryDate) }),
    fieldHtml({ id: `${id}-acceptance-education-date`, value: formatJapaneseDate(member.assignment.acceptanceEducationDate), box: rowBox(columns.dates, rowIndex, inner.acceptanceDate) }),
  ].filter(Boolean).join('\n');
}

function pageHtml(resolved, page, backgroundDataUri, warnings) {
  const header = layout.header;
  const siteText = [resolved.site.name, resolved.site.ccusSiteId ? `現場ID ${resolved.site.ccusSiteId}` : ''].filter(Boolean).join('\n');
  const rosterDate = formatJapaneseDate(resolved.output.rosterDate);
  const submissionDate = formatJapaneseDate(resolved.output.submissionDate ?? resolved.output.rosterDate);
  const fields = [
    fieldHtml({ id: 'poc-label', value: `匿名PDF PoC（すべて架空データ） ${page.pageNumber}/${page.totalPages}`, box: header.proofLabel, className: 'poc-label' }),
    fieldHtml({ id: 'roster-date', value: `（${rosterDate}作成）`, box: header.rosterDate }),
    fieldHtml({ id: 'site-name-id', value: siteText, box: header.siteNameAndId }),
    fieldHtml({ id: 'supervisor-name', value: resolved.site.supervisorName, box: header.supervisorName }),
    fieldHtml({ id: 'first-tier-company-name', value: page.firstTierCompany.name, box: header.firstTierCompanyName, className: 'company-name balanced-text', protectedTerms: layout.fit.companyProtectedTerms, avoidOrphan: true, enforceMaxLines: true, containContent: true }),
    fieldHtml({ id: 'first-tier-company-id', value: page.firstTierCompany.ccusBusinessId ?? '', box: header.firstTierCompanyId }),
    fieldHtml({ id: 'construction-tier', value: page.siteCompany.constructionTier, box: header.constructionTier }),
    fieldHtml({ id: 'roster-company-name', value: page.rosterCompany.name, box: header.rosterCompanyName, className: 'company-name balanced-text', protectedTerms: layout.fit.companyProtectedTerms, avoidOrphan: true, enforceMaxLines: true, containContent: true }),
    fieldHtml({ id: 'roster-company-id', value: page.rosterCompany.ccusBusinessId ?? '', box: header.rosterCompanyId }),
    fieldHtml({ id: 'submission-date', value: `提出日　${submissionDate}`, box: header.submissionDate }),
    ...page.members.map((member, rowIndex) => workerFields(member, rowIndex, warnings)),
  ].join('\n');

  return `<section class="sheet" data-page="${page.pageNumber}" data-prime-company-id="${escapeHtml(resolved.primeCompany.id)}" data-first-tier-company-id="${escapeHtml(page.firstTierCompany.id)}" data-roster-company-id="${escapeHtml(page.rosterCompany.id)}">
    <img class="page-background" src="${backgroundDataUri}" alt="" aria-hidden="true">
    ${fields}
  </section>`;
}

function buildRosterHtml(data, backgroundDataUri, fontDataUri = '') {
  const resolved = resolveRoster(data);
  const pages = paginateRoster(resolved);
  const warnings = [];
  const fontStack = [layout.font.family, ...layout.font.fallbacks]
    .map((font) => font === 'sans-serif' ? font : `"${font}"`)
    .join(', ');
  const body = pages.map((page) => pageHtml(resolved, page, backgroundDataUri, warnings)).join('\n');
  const fontFace = fontDataUri
    ? `@font-face { font-family: "${layout.font.family}"; src: url("${fontDataUri}") format("truetype"); font-style: normal; font-weight: 100 900; font-display: block; }`
    : '';
  const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>匿名 作業員名簿 PoC</title>
  <style>
    ${fontFace}
    @page { size: ${layout.page.widthMm}mm ${layout.page.heightMm}mm; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; }
    body { font-family: ${fontStack}; color: ${layout.font.color}; }
    .sheet {
      position: relative;
      width: ${layout.page.widthMm}mm;
      height: ${layout.page.heightMm}mm;
      overflow: hidden;
      break-after: page;
      page-break-after: always;
    }
    .sheet:last-child { break-after: auto; page-break-after: auto; }
    .page-background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: fill;
      z-index: 0;
    }
    .field {
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      padding: 1px ${percent(layout.table.paddingPx, layout.page.sourceWidthPx)};
      line-height: ${layout.font.lineHeight};
      overflow: hidden;
      overflow-wrap: normal;
      word-break: normal;
      line-break: strict;
      letter-spacing: 0;
    }
    .field-text {
      display: block;
      width: 100%;
      max-width: 100%;
      white-space: pre-line;
    }
    .no-wrap { white-space: nowrap; }
    .balanced-text .field-text { text-wrap: balance; }
    .role-field {
      padding: 1px;
      gap: ${layout.roleMarks.gapPt}pt;
      flex-wrap: wrap;
      align-content: center;
      overflow: hidden;
    }
    .role-mark {
      display: inline-flex;
      flex: 0 0 ${layout.roleMarks.diameterPt}pt;
      width: ${layout.roleMarks.diameterPt}pt;
      height: ${layout.roleMarks.diameterPt}pt;
      align-items: center;
      justify-content: center;
      border: ${layout.roleMarks.borderPt}pt solid currentColor;
      border-radius: 50%;
      font-size: ${layout.roleMarks.fontPt}pt;
      line-height: 1;
      white-space: nowrap;
    }
    .role-mark--wide {
      flex-basis: ${layout.roleMarks.wideWidthPt}pt;
      width: ${layout.roleMarks.wideWidthPt}pt;
      border-radius: 999px;
    }
    .poc-label { color: #555; }
  </style>
</head>
<body>${body}</body>
</html>`;
  return { html, pages, resolved, warnings };
}

module.exports = {
  buildRosterHtml,
  escapeHtml,
  formatJapaneseDate,
  uniqueRoleSymbols,
};
