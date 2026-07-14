# Repository instructions for Codex

## Start here

Before doing any work, read these files in order:

1. `docs/PROJECT_HANDOFF_JA.md`
2. `docs/CODEX_HANDOFF_JA.md`
3. `deme-ui-foundation-v6/index.html`
4. `deme-roster-master-v9/index.html`

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
