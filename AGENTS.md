# Repository instructions for Codex

## Start here

Before doing any work, read these files in order:

1. `docs/PROJECT_HANDOFF_JA.md`
2. `docs/SECURITY_REQUIREMENTS_JA.md`
3. `docs/PRODUCTION_ARCHITECTURE_JA.md`
4. `docs/PRODUCTION_SETUP_CHECKLIST_JA.md`
5. `docs/IMPLEMENTATION_STATUS_JA.md`
6. `docs/CODEX_HANDOFF_JA.md`
7. `deme-ui-foundation-v6/index.html`
8. `deme-roster-master-v9/index.html`

## Project goal

Build a smartphone-first app for construction-site operations with these domains:

- worker master management
- site master management
- site-specific worker information
- worker roster PDF generation
- daily report entry
- monthly daily-report view
- site/month attendance summary

Initial implementation priority is the worker roster domain and the production-grade mobile UI foundation.

## Fixed requirements

- Smartphone operation is mandatory.
- Navigation starts from a home screen.
- Master management and document creation must be clearly separated.
- Daily report initial fields are: date, site, work description, labor units, overtime, notes.
- Labor units and overtime use 0.5 increments as the primary interaction, with direct numeric entry also allowed.
- Working time is calculated as labor units multiplied by 8 hours.
- Do not place monthly cumulative metrics on the daily-entry screen.
- Worker master, site master, and site-specific worker data are separate entities.
- Worker roster PDF flow is: select site, select workers, edit site-specific worker data, validate missing data, preview PDF, generate/share PDF.
- 初期版で管理・名簿出力するのは、自社作業員のみとする。
- 協力会社作業員、所属会社選択、複数の名簿作成会社管理は実装しない。
- 自社情報は1社分だけ管理する。
- 一次会社名、一次会社事業者ID、自社施工次数は現場情報として管理する。
- 一次会社は作業員の所属会社マスターではない。
- PDFは選択した自社作業員だけを出力する。
- 健康診断日はMVP対象外とし、利用目的・権限・保持期間が別途承認されるまで収集しない。

## Production security requirements

- Production is a single-customer environment owned by the customer.
- The customer owns the production repository, hosting, Supabase project, domain, billing, monitoring, logs, and backups.
- After handoff, the contractor must not retain production membership, secrets, database access, log access, backup access, or deployment access.
- Development, review, and support use anonymous synthetic data only. Never copy production data into development or preview environments.
- Production is invite-only and requires individual accounts and MFA.
- Protect all exposed tables, views, functions, and storage with deny-by-default RLS or equivalent server-side authorization.
- Keep secret/service-role keys out of browsers, Git, logs, chat, preview builds, and developer machines after handoff.
- The initial release is online-only. Do not persist PII in localStorage, sessionStorage, IndexedDB, or Service Worker caches.
- Prefer client-side roster PDF generation without server or Storage persistence. Any fallback server generation requires a separate security review.
- Do not add real data until every P0 gate in `docs/SECURITY_REQUIREMENTS_JA.md` is complete.
- The production source is developed with anonymous data, then transferred to a customer-owned private repository. Customer approval and customer-controlled CI are required for production deployment.

## Prototype policy

Existing prototypes are design history. Do not delete, rename, or overwrite them unless the user explicitly requests it.

In particular, preserve:

- `deme-ui-foundation-v6/index.html`
- `deme-roster-master-v9/index.html`

Create production code in a new application directory or a new dedicated repository after the architecture is approved.

## Current task mode

Unless explicitly told to implement, begin with an audit and planning deliverable. Do not install production dependencies or scaffold a framework without approval.

The first audit should produce Markdown covering:

1. recommended repository structure
2. data model
3. screens and component inventory
4. PDF implementation options and recommendation
5. unresolved questions and risks
6. phased implementation plan

## UX principles

- Use modern, professional, field-ready mobile UI.
- Avoid AI-like explanatory clutter.
- Prefer clear action labels over abbreviations.
- Make the next action obvious without a manual.
- Keep tap targets and contrast suitable for outdoor and one-handed use.
- Show validation as actionable guidance that links to the correct edit location.
- Do not reintroduce rejected patterns such as easy/detail modes, 31 date buttons on the entry screen, or ambiguous labels such as `月人工` and `勤務H`.

## Quality expectations

- Explain assumptions and separate confirmed requirements from proposals.
- Preserve user data and prototype history.
- Add tests when implementation begins.
- Report commands run, files changed, test results, and remaining risks.

## レビュー成果物の引渡し

- UI・PDF・ドキュメントの変更は、検証後に `codex-review` へcommit・pushする。
- 完了報告にはコミットSHAを必ず記載する。
- UI変更時は `review/latest/` の確認画像を同じ固定名で更新する。
- 新しい日付フォルダやV番号フォルダを増やさない。
- 実データ、秘密情報、`.env`、トークン、ブラウザプロファイルをcommitしない。
- レビュー画像・PDFは匿名データだけで作成する。
- `main` への反映は、明示的な承認後に別途行う。
