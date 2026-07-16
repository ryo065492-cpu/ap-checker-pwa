'use strict';

const layout = require('./layout.config.cjs');

class RosterError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'RosterError';
    this.code = code;
  }
}

function requireArray(container, key) {
  const value = container?.[key];
  if (!Array.isArray(value)) {
    throw new RosterError('INVALID_MODEL', `${key} は配列で指定してください。`);
  }
  return value;
}

function indexBy(items, label) {
  const map = new Map();
  for (const item of items) {
    if (!item || typeof item.id !== 'string' || item.id.length === 0) {
      throw new RosterError('INVALID_MODEL', `${label} の id が不正です。`);
    }
    if (map.has(item.id)) {
      throw new RosterError('DUPLICATE_ID', `${label} の id が重複しています: ${item.id}`);
    }
    map.set(item.id, item);
  }
  return map;
}

function parseIsoDate(value, label) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new RosterError('INVALID_DATE', `${label} は YYYY-MM-DD 形式で指定してください。`);
  }
  const [year, month, day] = value.split('-').map(Number);
  const check = new Date(Date.UTC(year, month - 1, day));
  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    throw new RosterError('INVALID_DATE', `${label} に存在しない日付が指定されています。`);
  }
  return { year, month, day };
}

function calculateAge(birthDate, rosterDate) {
  const birth = parseIsoDate(birthDate, '生年月日');
  const basis = parseIsoDate(rosterDate, '名簿作成日');
  const beforeBirthday =
    basis.month < birth.month ||
    (basis.month === birth.month && basis.day < birth.day);
  const age = basis.year - birth.year - (beforeBirthday ? 1 : 0);
  if (age < 0) {
    throw new RosterError('INVALID_DATE_ORDER', '生年月日は名簿作成日以前である必要があります。');
  }
  return age;
}

const HEALTH_INSURANCE_LABELS = Object.freeze({
  associationKenpo: '協会けんぽ',
  constructionNationalHealth: '建設国保',
  nationalHealth: '国民健康保険',
  exempt: '適用除外',
});

const PENSION_LABELS = Object.freeze({
  employeesPension: '厚生年金',
  nationalPension: '国民年金',
  recipient: '受給者',
});

const EMPLOYMENT_LABELS = Object.freeze({
  exempt: '適用除外',
  dayLabor: '日雇保険',
});

function normalizeInsurance(insurance, assignmentId) {
  if (!insurance || typeof insurance !== 'object') {
    throw new RosterError('INVALID_INSURANCE', `保険情報が不正です: ${assignmentId}`);
  }

  const health = insurance.health;
  if (!health || typeof health !== 'object' || typeof health.type !== 'string') {
    throw new RosterError('INVALID_INSURANCE', `健康保険の種別が不正です: ${assignmentId}`);
  }
  let healthLabel = HEALTH_INSURANCE_LABELS[health.type];
  if (health.type === 'healthInsuranceAssociation') {
    const associationName = typeof health.associationName === 'string' ? health.associationName.trim() : '';
    if (!associationName || /[\/／]/.test(associationName)) {
      throw new RosterError('INVALID_INSURANCE', `健康保険組合名が不正です: ${assignmentId}`);
    }
    healthLabel = associationName;
  }
  if (!healthLabel) {
    throw new RosterError('INVALID_INSURANCE', `健康保険の種別が未対応です: ${assignmentId}`);
  }

  const pension = insurance.pension;
  const pensionLabel = pension && typeof pension === 'object' ? PENSION_LABELS[pension.type] : null;
  if (!pensionLabel) {
    throw new RosterError('INVALID_INSURANCE', `年金の種別が不正です: ${assignmentId}`);
  }

  const employment = insurance.employment;
  if (!employment || typeof employment !== 'object' || !['insured', 'exempt', 'dayLabor'].includes(employment.type)) {
    throw new RosterError('INVALID_INSURANCE', `雇用保険の種別が不正です: ${assignmentId}`);
  }
  let employmentLeft = '';
  let employmentRight = '';
  if (employment.type === 'insured') {
    if (typeof employment.insuredNumberLast4 !== 'string' || !/^\d{4}$/.test(employment.insuredNumberLast4)) {
      throw new RosterError('INVALID_EMPLOYMENT_NUMBER', `雇用保険番号の下4桁が不正です: ${assignmentId}`);
    }
    employmentRight = employment.insuredNumberLast4;
  } else {
    if (employment.insuredNumberLast4 !== undefined && employment.insuredNumberLast4 !== null && employment.insuredNumberLast4 !== '') {
      throw new RosterError('INVALID_EMPLOYMENT_NUMBER', `通常加入者以外に雇用保険番号は指定できません: ${assignmentId}`);
    }
    employmentLeft = EMPLOYMENT_LABELS[employment.type];
  }

  return {
    value: {
      health: health.type === 'healthInsuranceAssociation'
        ? { type: health.type, associationName: healthLabel }
        : { type: health.type },
      pension: { ...pension },
      employment: { ...employment },
    },
    display: {
      healthLeft: healthLabel,
      pensionLeft: pensionLabel,
      employmentLeft,
      employmentRight,
    },
  };
}

function normalizeRetirementFunds(retirementFunds, assignmentId) {
  if (
    !retirementFunds ||
    typeof retirementFunds !== 'object' ||
    typeof retirementFunds.constructionIndustry !== 'boolean' ||
    typeof retirementFunds.smallAndMediumEnterprise !== 'boolean'
  ) {
    throw new RosterError('INVALID_RETIREMENT_FUNDS', `退職金共済情報が不正です: ${assignmentId}`);
  }
  return {
    value: {
      constructionIndustry: retirementFunds.constructionIndustry,
      smallAndMediumEnterprise: retirementFunds.smallAndMediumEnterprise,
    },
    display: {
      constructionIndustry: retirementFunds.constructionIndustry ? '有' : '無',
      smallAndMediumEnterprise: retirementFunds.smallAndMediumEnterprise ? '有' : '無',
    },
  };
}

function normalizeRoles(roles, assignmentId) {
  if (!Array.isArray(roles)) {
    throw new RosterError('INVALID_ROLE', `※欄の役割は配列で指定してください: ${assignmentId}`);
  }
  const normalized = [];
  for (const role of roles) {
    if (typeof role !== 'string' || !layout.roleSymbols[role]) {
      throw new RosterError('INVALID_ROLE', `※欄に未対応の役割があります: ${assignmentId}`);
    }
    if (!normalized.includes(role)) normalized.push(role);
  }
  if (normalized.includes('foreignTrainee') && normalized.includes('specifiedSkilledWorker1')) {
    throw new RosterError(
      'INCOMPATIBLE_ROLE_COMBINATION',
      `外国人技能実習生（習）と1号特定技能外国人（1特）は同時指定できません: ${assignmentId}`
    );
  }
  return normalized;
}

function resolveRoster(data) {
  const workers = requireArray(data?.workerInformation, 'workers');
  const sites = requireArray(data?.siteInformation, 'sites');
  const assignments = requireArray(data?.siteWorkerInformation, 'assignments');
  const companies = requireArray(data?.companyConstructionInformation, 'companies');
  const siteCompanies = requireArray(data?.companyConstructionInformation, 'siteCompanies');
  const qualifications = requireArray(data?.qualificationEducationInformation, 'qualifications');
  const educations = requireArray(data?.qualificationEducationInformation, 'educations');
  const output = data?.rosterOutputInformation;

  if (!output || typeof output !== 'object') {
    throw new RosterError('INVALID_MODEL', 'rosterOutputInformation が必要です。');
  }
  parseIsoDate(output.rosterDate, '名簿作成日');

  const assignmentIds = Array.isArray(output.assignmentIds) ? output.assignmentIds : [];
  if (assignmentIds.length === 0) {
    throw new RosterError('EMPTY_ROSTER', '作業員が0名のためPDFを生成できません。');
  }

  const workerById = indexBy(workers, '作業員情報');
  const siteById = indexBy(sites, '現場情報');
  const assignmentById = indexBy(assignments, '現場別作業員情報');
  const companyById = indexBy(companies, '会社情報');
  const siteCompanyById = indexBy(siteCompanies, '会社・施工次数情報');

  const site = siteById.get(output.siteId);
  if (!site) {
    throw new RosterError('UNRESOLVED_REFERENCE', `現場を解決できません: ${output.siteId}`);
  }

  const selected = assignmentIds.map((assignmentId, inputOrder) => {
    const assignment = assignmentById.get(assignmentId);
    if (!assignment) {
      throw new RosterError('UNRESOLVED_REFERENCE', `現場別作業員情報を解決できません: ${assignmentId}`);
    }
    if (assignment.siteId !== site.id) {
      throw new RosterError('SITE_MISMATCH', `別現場の作業員が含まれています: ${assignmentId}`);
    }
    const worker = workerById.get(assignment.workerId);
    const siteCompany = siteCompanyById.get(assignment.siteCompanyId);
    const firstTierCompany = siteCompany ? companyById.get(siteCompany.firstTierCompanyId) : null;
    const rosterCompany = siteCompany ? companyById.get(siteCompany.rosterCompanyId) : null;
    if (!worker || !siteCompany || !firstTierCompany || !rosterCompany || siteCompany.siteId !== site.id) {
      throw new RosterError('UNRESOLVED_REFERENCE', `作業員または所属会社を解決できません: ${assignmentId}`);
    }
    if (!Number.isInteger(siteCompany.constructionTier) || siteCompany.constructionTier < 1) {
      throw new RosterError('INVALID_COMPANY_HIERARCHY', `施工次数が不正です: ${siteCompany.id}`);
    }
    if (siteCompany.constructionTier === 1 && siteCompany.firstTierCompanyId !== siteCompany.rosterCompanyId) {
      throw new RosterError('INVALID_COMPANY_HIERARCHY', `1次の作成会社は一次会社と一致させてください: ${siteCompany.id}`);
    }
    const insurance = normalizeInsurance(assignment.insurance, assignment.id);
    const retirementFunds = normalizeRetirementFunds(assignment.retirementFunds, assignment.id);
    const normalizedAssignment = {
      ...assignment,
      roles: normalizeRoles(assignment.roles, assignment.id),
      insurance: insurance.value,
      retirementFunds: retirementFunds.value,
    };

    return {
      inputOrder,
      rosterOrder: Number.isFinite(assignment.rosterOrder) ? assignment.rosterOrder : inputOrder + 1,
      assignment: normalizedAssignment,
      worker,
      siteCompany,
      firstTierCompany,
      rosterCompany,
      insuranceDisplay: insurance.display,
      retirementDisplay: retirementFunds.display,
      age: calculateAge(worker.birthDate, output.rosterDate),
      qualifications: qualifications.filter((item) => item.workerId === worker.id),
      educations: educations.filter((item) => item.workerId === worker.id),
    };
  });

  const primeCompany = companyById.get(output.primeCompanyId);
  if (!primeCompany) {
    throw new RosterError('UNRESOLVED_REFERENCE', '元請会社情報を解決できません。');
  }

  return { output, site, primeCompany, selected };
}

function paginateRoster(resolved) {
  const groups = new Map();
  for (const item of resolved.selected) {
    const groupKey = item.rosterCompany.id;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        siteCompany: item.siteCompany,
        firstTierCompany: item.firstTierCompany,
        rosterCompany: item.rosterCompany,
        members: [],
      });
    } else {
      const group = groups.get(groupKey);
      if (
        group.firstTierCompany.id !== item.firstTierCompany.id ||
        group.siteCompany.constructionTier !== item.siteCompany.constructionTier
      ) {
        throw new RosterError('INVALID_COMPANY_HIERARCHY', `同一作成会社の一次会社または施工次数が一致しません: ${groupKey}`);
      }
    }
    groups.get(groupKey).members.push(item);
  }

  const pages = [];
  for (const group of groups.values()) {
    const members = group.members;
    members.sort((a, b) => a.rosterOrder - b.rosterOrder || a.inputOrder - b.inputOrder);
    for (let offset = 0; offset < members.length; offset += layout.page.maxWorkers) {
      const chunk = members.slice(offset, offset + layout.page.maxWorkers);
      pages.push({
        siteCompany: group.siteCompany,
        firstTierCompany: group.firstTierCompany,
        rosterCompany: group.rosterCompany,
        members: chunk,
      });
    }
  }

  return pages.map((page, index) => ({
    ...page,
    pageNumber: index + 1,
    totalPages: pages.length,
  }));
}

module.exports = {
  RosterError,
  calculateAge,
  paginateRoster,
  parseIsoDate,
  resolveRoster,
};
