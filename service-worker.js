<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="theme-color" content="#f6efe4" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="午睡チェック" />
    <link rel="manifest" href="./manifest.webmanifest" />
    <link rel="icon" href="./assets/icon.svg" type="image/svg+xml" />
    <title>午睡記録確認支援ツール</title>
    <style>
:root {
  --bg: #f4efe4;
  --bg-accent: #f8f4ec;
  --surface: rgba(255, 252, 247, 0.92);
  --surface-strong: #fffaf2;
  --line: rgba(95, 77, 54, 0.18);
  --text: #2f261e;
  --text-soft: #6b5a49;
  --brand: #006c67;
  --brand-strong: #004f4b;
  --brand-soft: #d6f2ef;
  --danger: #c93c2d;
  --danger-soft: #ffe0db;
  --warn: #be7a08;
  --warn-soft: #fff0ce;
  --info: #2a5db0;
  --info-soft: #dde9ff;
  --shadow: 0 18px 40px rgba(87, 63, 26, 0.12);
  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 10px;
  --tap: 52px;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  color: var(--text);
  background:
    radial-gradient(circle at top right, rgba(0, 108, 103, 0.14), transparent 24%),
    radial-gradient(circle at top left, rgba(201, 60, 45, 0.08), transparent 20%),
    linear-gradient(180deg, #fbf7ee 0%, #f2ebde 100%);
  font-family:
    "Hiragino Sans",
    "Yu Gothic",
    "Noto Sans JP",
    sans-serif;
}

body {
  padding: 20px 14px 48px;
}

.noscript-alert {
  max-width: var(--max);
  margin: 0 auto 14px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(201, 60, 45, 0.22);
  background: var(--danger-soft);
  color: #7f2319;
  line-height: 1.7;
  font-weight: 800;
}

.app-shell {
  max-width: var(--max);
  margin: 0 auto;
}

.hero {
  padding: 28px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 79, 75, 0.12);
  border-radius: 32px;
  background:
    linear-gradient(135deg, rgba(255, 250, 242, 0.96), rgba(239, 248, 246, 0.92)),
    var(--surface);
  box-shadow: var(--shadow);
}

.hero h1 {
  margin: 10px 0 12px;
  font-size: clamp(1.85rem, 4vw, 2.8rem);
  line-height: 1.15;
}

.hero__eyebrow {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--brand-soft);
  color: var(--brand-strong);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.hero__topline {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.hero__build {
  display: grid;
  justify-items: end;
  gap: 4px;
}

.hero__build-detail {
  font-size: 0.82rem;
  color: var(--text-soft);
}

.debug-banner {
  margin-bottom: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(215, 106, 52, 0.22);
  background: rgba(215, 106, 52, 0.12);
  color: #7a3d12;
  line-height: 1.6;
  font-weight: 700;
}

.hero__lead {
  max-width: 62ch;
  margin: 0;
  color: var(--text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.guide-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.guide-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0, 79, 75, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(239, 248, 246, 0.96));
}

.guide-card__step {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--brand);
  color: white;
  font-size: 1rem;
  font-weight: 900;
}

.guide-card strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1rem;
}

.guide-card p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.65;
}

.guide-card code,
.guide-note code {
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(0, 108, 103, 0.08);
  color: var(--brand-strong);
  font-family: inherit;
  font-size: 0.94rem;
}

.guide-note {
  margin-top: 14px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  background: rgba(0, 108, 103, 0.08);
  color: var(--text-soft);
  line-height: 1.7;
}

.guide-note strong {
  color: var(--brand-strong);
}

.environment-hint {
  margin-top: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(190, 122, 8, 0.2);
  background: var(--warn-soft);
  color: #6b4a08;
  line-height: 1.7;
}

.environment-hint strong {
  color: #6b3f00;
}

.layout {
  display: grid;
  gap: 18px;
}

.panel {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
}

.panel__title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.panel__title-row--spaced {
  margin-top: 20px;
}

.panel h2 {
  margin: 0;
  font-size: 1.15rem;
}

.support-panel {
  padding-top: 0;
}

.support-panel__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  list-style: none;
  cursor: pointer;
  padding: 20px 22px;
  margin: 0 -22px;
}

.support-panel__summary::-webkit-details-marker {
  display: none;
}

.support-panel__summary strong {
  display: block;
  font-size: 1rem;
}

.support-panel__hint {
  margin-top: 4px;
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.6;
}

.support-panel__summary-side {
  display: flex;
  align-items: center;
  gap: 8px;
}

.support-panel__body {
  padding-top: 0;
}

.support-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.support-panel__toggle {
  display: inline-flex;
  margin-bottom: 10px;
}

.control-grid,
.filter-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.field {
  display: grid;
  gap: 8px;
}

.field--info {
  align-content: start;
}

.field__label {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-soft);
}

.field__input,
.field__info {
  min-height: var(--tap);
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(0, 79, 75, 0.16);
  border-radius: var(--radius-md);
  background: var(--surface-strong);
  color: var(--text);
  font-size: 1rem;
}

.field__input[type="file"] {
  padding: 10px 12px;
}

.field__info {
  display: flex;
  align-items: center;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.button {
  min-height: var(--tap);
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    opacity 0.16s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button:disabled {
  opacity: 0.52;
  cursor: not-allowed;
  transform: none;
}

.button[data-state="not-ready"] {
  box-shadow: none;
  opacity: 0.72;
}

.button[aria-busy="true"] {
  opacity: 0.82;
  cursor: progress;
}

.button--primary {
  background: linear-gradient(135deg, #006c67, #0b8a83);
  color: white;
  box-shadow: 0 10px 24px rgba(0, 108, 103, 0.22);
}

.button--secondary {
  background: linear-gradient(135deg, #d76a34, #ea8b4a);
  color: white;
  box-shadow: 0 10px 24px rgba(215, 106, 52, 0.2);
}

.button--subtle {
  background: var(--brand-soft);
  color: var(--brand-strong);
}

.button--ghost {
  background: transparent;
  color: var(--text-soft);
  border: 1px solid rgba(95, 77, 54, 0.2);
}

.action-row--compact {
  margin-top: 12px;
  justify-content: flex-start;
}

.status-banner {
  min-height: 28px;
  margin-top: 14px;
  color: var(--text-soft);
  line-height: 1.6;
}

.error-box {
  margin-top: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(201, 60, 45, 0.2);
  background: var(--danger-soft);
  color: #7f2319;
  line-height: 1.7;
}

.diagnostic-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.diagnostic-item {
  min-height: 48px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(95, 77, 54, 0.14);
  background: var(--surface-strong);
  color: var(--text-soft);
  display: flex;
  align-items: center;
  font-weight: 800;
  line-height: 1.5;
}

.diagnostic-item--ok {
  border-color: rgba(0, 108, 103, 0.2);
  background: rgba(0, 108, 103, 0.08);
  color: var(--brand-strong);
}

.diagnostic-item--warn {
  border-color: rgba(201, 60, 45, 0.22);
  background: var(--danger-soft);
  color: #7f2319;
}

.diagnostic-item--pending {
  background: rgba(47, 38, 30, 0.04);
}

.diagnostic-note {
  margin: 14px 0 0;
  color: var(--text-soft);
  line-height: 1.7;
}

.diagnostic-copy-status {
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  background: rgba(0, 108, 103, 0.08);
  color: var(--brand-strong);
  line-height: 1.6;
  font-weight: 700;
}

.diagnostic-copy-status--warn {
  background: var(--warn-soft);
  color: #6b4a08;
}

.diagnostic-copy-fallback {
  width: 100%;
  min-height: 180px;
  margin-top: 12px;
  padding: 14px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.18);
  background: rgba(255, 255, 255, 0.92);
  color: var(--text);
  font: inherit;
  line-height: 1.6;
  resize: vertical;
}

.summary-cards {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.summary-card {
  min-height: 116px;
  padding: 18px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 242, 0.95));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.summary-card__value {
  font-size: 2.1rem;
  font-weight: 900;
}

.summary-card__label {
  color: var(--text-soft);
  font-weight: 700;
}

.summary-card--red .summary-card__value {
  color: var(--danger);
}

.summary-card--yellow .summary-card__value {
  color: var(--warn);
}

.summary-card--info .summary-card__value {
  color: var(--info);
}

.summary-card--neutral .summary-card__value,
.summary-card--empty .summary-card__value {
  color: var(--brand-strong);
}

.structure-summary {
  margin-top: 16px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: rgba(0, 108, 103, 0.06);
  color: var(--text-soft);
  line-height: 1.7;
}

.debug-output {
  margin: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: rgba(47, 38, 30, 0.04);
  border: 1px solid rgba(95, 77, 54, 0.12);
  color: var(--text-soft);
  font-family:
    "SFMono-Regular",
    "Cascadia Mono",
    "Consolas",
    monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
}

.debug-panel {
  overflow: hidden;
}

.debug-panel[open] {
  padding-top: 16px;
}

.debug-panel:not([open]) {
  padding: 0;
}

.debug-panel__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: var(--tap);
  padding: 18px 22px;
  cursor: pointer;
  list-style: none;
  font-weight: 800;
}

.debug-panel__summary::-webkit-details-marker {
  display: none;
}

.debug-panel__summary::after {
  content: "開く";
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 700;
}

.debug-panel[open] .debug-panel__summary::after {
  content: "閉じる";
}

.debug-panel__hint {
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 700;
}

.severity-filter {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.toggle-chip {
  position: relative;
}

.toggle-chip input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.toggle-chip span {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(95, 77, 54, 0.16);
  background: #fffaf4;
  font-weight: 700;
}

.toggle-chip input:checked + span {
  border-color: rgba(0, 108, 103, 0.3);
  background: var(--brand-soft);
  color: var(--brand-strong);
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(47, 38, 30, 0.06);
  color: var(--text-soft);
  font-weight: 700;
}

.meta-pill--build {
  background: rgba(0, 108, 103, 0.08);
  color: var(--brand-strong);
}

.meta-pill--debug {
  background: rgba(215, 106, 52, 0.14);
  color: #7a3d12;
}

.results-list {
  display: grid;
  gap: 16px;
}

.result-card {
  padding: 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.14);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(255, 250, 244, 0.98));
}

.result-card--empty {
  color: var(--text-soft);
}

.child-group {
  padding: 18px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(95, 77, 54, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 250, 244, 0.98));
  box-shadow: 0 10px 24px rgba(87, 63, 26, 0.08);
}

.child-group__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 14px;
}

.child-group__name {
  font-size: 1.18rem;
  font-weight: 900;
}

.child-group__subtitle {
  margin-top: 4px;
  color: var(--text-soft);
  font-size: 0.94rem;
}

.child-group__reviewers {
  margin-top: 6px;
  color: var(--text);
  font-size: 0.94rem;
  font-weight: 800;
  line-height: 1.5;
}

.child-group__chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.child-group__findings {
  display: grid;
  gap: 12px;
}

.finding-card {
  padding: 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.14);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 249, 242, 0.98));
}

.finding-card--red {
  border-color: rgba(201, 60, 45, 0.2);
  background: linear-gradient(180deg, rgba(255, 245, 243, 0.98), rgba(255, 250, 246, 0.98));
}

.finding-card--yellow {
  border-color: rgba(190, 122, 8, 0.18);
  background: linear-gradient(180deg, rgba(255, 249, 236, 0.98), rgba(255, 252, 246, 0.98));
}

.finding-card--info {
  border-color: rgba(42, 93, 176, 0.16);
  background: linear-gradient(180deg, rgba(242, 247, 255, 0.98), rgba(250, 252, 255, 0.98));
}

.finding-card__top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
}

.finding-card__time {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(47, 38, 30, 0.06);
  font-size: 1rem;
  font-weight: 900;
}

.finding-card__meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.finding-card__count {
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 700;
}

.finding-card__rule {
  margin-bottom: 8px;
  font-size: 1.05rem;
  font-weight: 900;
}

.finding-card__action {
  margin-bottom: 8px;
  color: var(--text);
  line-height: 1.7;
  font-weight: 700;
}

.result-card__top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}

.result-card__meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  color: var(--text-soft);
  font-size: 0.95rem;
}

.result-card__name {
  font-size: 1.06rem;
  font-weight: 800;
}

.result-card__rule {
  margin-bottom: 6px;
  font-weight: 800;
}

.result-card__message {
  color: var(--text-soft);
  line-height: 1.7;
}

.finding-card__message,
.finding-card__details {
  color: var(--text-soft);
  line-height: 1.7;
}

.finding-card__details {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed rgba(95, 77, 54, 0.16);
  font-size: 0.94rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 900;
}

.badge--red {
  color: #8a2419;
  background: var(--danger-soft);
}

.badge--yellow {
  color: #8b5a00;
  background: var(--warn-soft);
}

.badge--info {
  color: #234a8d;
  background: var(--info-soft);
}

@media (max-width: 720px) {
  body {
    padding: 12px 10px 32px;
  }

  .hero,
  .panel {
    padding: 18px;
    border-radius: 24px;
  }

  .hero__topline {
    justify-content: stretch;
  }

  .action-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .button {
    width: 100%;
  }

  .diagnostic-list {
    grid-template-columns: 1fr;
  }

  .guide-card {
    grid-template-columns: 38px 1fr;
  }

  .guide-card__step {
    width: 38px;
    height: 38px;
  }

  .debug-panel__summary {
    padding: 16px 18px;
  }

  .child-group {
    padding: 16px;
  }

  .finding-card {
    padding: 14px;
  }
}

.summary-card__description {
  margin-top: 8px;
  color: var(--text-soft);
  line-height: 1.5;
  font-size: 0.92rem;
}

.structure-summary__lead {
  color: var(--text);
  margin-bottom: 6px;
}

.structure-summary__meta {
  color: var(--text-soft);
}

.structure-summary__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.structure-summary__chip {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(0, 108, 103, 0.1);
  color: var(--brand-strong);
  font-weight: 700;
}

.view-mode-toggle {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.toggle-chip span {
  justify-content: center;
}

.results-guide {
  margin: 0 0 14px;
  color: var(--text-soft);
  line-height: 1.7;
}

.grouped-results,
.timeline-results {
  display: grid;
  gap: 16px;
}

.result-card {
  box-shadow: 0 10px 24px rgba(87, 63, 26, 0.06);
}

.result-card--red {
  border-color: rgba(201, 60, 45, 0.22);
  background: linear-gradient(180deg, rgba(255, 245, 243, 0.98), rgba(255, 250, 246, 0.98));
}

.result-card--yellow {
  border-color: rgba(190, 122, 8, 0.22);
  background: linear-gradient(180deg, rgba(255, 249, 236, 0.98), rgba(255, 252, 246, 0.98));
}

.result-card--info {
  border-color: rgba(42, 93, 176, 0.18);
  background: linear-gradient(180deg, rgba(242, 247, 255, 0.98), rgba(250, 252, 255, 0.98));
}

.result-card__name {
  margin-bottom: 6px;
}

.result-card__reviewer {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 10px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 108, 103, 0.09);
  color: var(--brand-strong);
  font-size: 0.94rem;
  font-weight: 900;
  line-height: 1.4;
}

.result-card__rule {
  margin-bottom: 10px;
  font-size: 1.08rem;
  font-weight: 900;
  line-height: 1.5;
}

.result-card__count {
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 700;
}

.result-card__action-label {
  margin-bottom: 4px;
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 700;
}

.result-card__action {
  margin-bottom: 10px;
  color: var(--text);
  line-height: 1.7;
  font-weight: 800;
}

.result-card__reason {
  margin-bottom: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.68);
  color: var(--text);
  font-weight: 800;
  line-height: 1.6;
}

.result-card__context {
  margin: 10px 0;
}

.context-list {
  display: grid;
  gap: 6px;
}

.context-list__row {
  display: grid;
  grid-template-columns: 52px 74px 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(47, 38, 30, 0.05);
  font-size: 0.94rem;
  line-height: 1.45;
}

.context-list__row--target {
  background: rgba(201, 60, 45, 0.11);
  font-weight: 900;
}

.context-list__marker {
  display: inline-flex;
  justify-content: center;
  padding: 3px 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  font-size: 0.82rem;
  font-weight: 900;
}

.context-list__time {
  font-weight: 900;
}

.result-card__message {
  line-height: 1.7;
}

.result-card__details {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed rgba(95, 77, 54, 0.16);
  color: var(--text-soft);
}

.result-card__details summary {
  cursor: pointer;
  font-weight: 700;
  color: var(--brand-strong);
}

.result-card__details div {
  margin-top: 8px;
  line-height: 1.7;
}

@media (max-width: 720px) {
  .summary-card {
    min-height: 126px;
  }

  .view-mode-toggle,
  .severity-filter {
    display: grid;
    grid-template-columns: 1fr;
  }

  .toggle-chip span {
    width: 100%;
  }

  .results-guide {
    margin-bottom: 12px;
  }

  .context-list__row {
    grid-template-columns: 48px 68px 1fr;
  }

  .context-list__row span:last-child {
    grid-column: 3;
  }
}

.sheet-alert-banner {
  display: grid;
  gap: 10px;
  margin-bottom: 14px;
}

.sheet-alert-banner__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.12);
  background: var(--surface-strong);
}

.sheet-alert-banner__item--red {
  border-color: rgba(201, 60, 45, 0.2);
  background: linear-gradient(180deg, rgba(255, 245, 243, 0.98), rgba(255, 250, 246, 0.98));
}

.sheet-alert-banner__item--yellow {
  border-color: rgba(190, 122, 8, 0.2);
  background: linear-gradient(180deg, rgba(255, 249, 236, 0.98), rgba(255, 252, 246, 0.98));
}

.sheet-alert-banner__title {
  font-size: 1rem;
  font-weight: 900;
}

.sheet-alert-banner__message,
.sheet-alert-banner__meta {
  margin-top: 4px;
  color: var(--text-soft);
  line-height: 1.6;
}

.review-board {
  display: grid;
  gap: 18px;
}

.review-block {
  border: 1px solid rgba(95, 77, 54, 0.12);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.66);
  overflow: hidden;
}

.review-block__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(95, 77, 54, 0.1);
  background: rgba(0, 108, 103, 0.06);
}

.review-block__title {
  font-size: 1rem;
  font-weight: 900;
}

.review-block__meta {
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 700;
}

.review-block__scroll {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.review-grid {
  width: max-content;
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.review-grid th,
.review-grid td {
  border-right: 1px solid rgba(95, 77, 54, 0.1);
  border-bottom: 1px solid rgba(95, 77, 54, 0.1);
  padding: 0;
  background: rgba(255, 255, 255, 0.7);
}

.review-grid thead th {
  position: sticky;
  top: 0;
  z-index: 4;
  background: #fff9f1;
}

.review-grid__name {
  position: sticky;
  left: 0;
  z-index: 3;
  min-width: 132px;
  max-width: 132px;
  padding: 10px 12px;
  background: #fff9f1;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 900;
}

.review-grid__name--head {
  z-index: 6;
}

.review-grid__label {
  position: sticky;
  left: 132px;
  z-index: 3;
  min-width: 68px;
  max-width: 68px;
  padding: 10px 8px;
  background: #fffdf8;
  text-align: center;
  color: var(--text-soft);
  font-size: 0.84rem;
  font-weight: 800;
}

.review-grid__label--head {
  z-index: 6;
}

.review-grid__time {
  min-width: 58px;
  padding: 10px 6px;
  background: #fff9f1;
  text-align: center;
  font-size: 0.84rem;
  font-weight: 900;
}

.review-cell {
  position: relative;
  display: grid;
  place-items: center;
  width: 58px;
  min-height: 48px;
  padding: 6px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  cursor: pointer;
}

.review-cell--reviewer {
  min-height: 44px;
}

.review-cell--plain {
  background: transparent;
}

.review-cell--red {
  background: linear-gradient(180deg, rgba(201, 60, 45, 0.18), rgba(255, 240, 236, 0.98));
  color: #85291f;
  font-weight: 900;
}

.review-cell--yellow {
  background: linear-gradient(180deg, rgba(190, 122, 8, 0.18), rgba(255, 247, 225, 0.98));
  color: #7b5600;
  font-weight: 900;
}

.review-cell--info {
  background: linear-gradient(180deg, rgba(42, 93, 176, 0.16), rgba(242, 247, 255, 0.98));
  color: #234a8d;
  font-weight: 900;
}

.review-cell--selected {
  outline: 3px solid rgba(0, 108, 103, 0.7);
  outline-offset: -3px;
  z-index: 2;
}

.review-cell--empty .review-cell__text {
  opacity: 0.34;
}

.review-cell__text {
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
}

.review-cell__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 999px;
  background: rgba(47, 38, 30, 0.12);
  color: var(--text);
  font-size: 0.74rem;
  font-weight: 900;
}

.cell-detail-panel {
  margin-top: 16px;
  padding: 16px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(95, 77, 54, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(255, 250, 244, 0.98));
}

.cell-detail-panel__empty,
.cell-detail-panel__empty-note {
  color: var(--text-soft);
  line-height: 1.7;
}

.cell-detail-panel__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.cell-detail-panel__title {
  font-size: 1.08rem;
  font-weight: 900;
}

.cell-detail-panel__meta {
  margin-top: 4px;
  color: var(--text-soft);
  font-size: 0.92rem;
}

.cell-detail-panel__summary {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin-bottom: 14px;
}

.cell-detail-panel__summary-item {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(0, 108, 103, 0.07);
}

.cell-detail-panel__summary-item span {
  display: block;
  color: var(--text-soft);
  font-size: 0.84rem;
  font-weight: 700;
}

.cell-detail-panel__summary-item strong {
  display: block;
  margin-top: 4px;
  font-size: 1rem;
}

.cell-detail-panel__section-title {
  margin: 16px 0 8px;
  font-size: 0.95rem;
  font-weight: 900;
}

.cell-detail-panel__findings {
  display: grid;
  gap: 10px;
}

.cell-detail-panel__finding {
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(95, 77, 54, 0.12);
  background: rgba(255, 255, 255, 0.76);
}

.cell-detail-panel__finding--red {
  border-color: rgba(201, 60, 45, 0.18);
  background: rgba(255, 245, 243, 0.98);
}

.cell-detail-panel__finding--yellow {
  border-color: rgba(190, 122, 8, 0.18);
  background: rgba(255, 249, 236, 0.98);
}

.cell-detail-panel__finding-top {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.cell-detail-panel__finding-reason,
.cell-detail-panel__finding-action,
.cell-detail-panel__finding-message {
  color: var(--text);
  line-height: 1.65;
}

.cell-detail-panel__nearby {
  display: grid;
  gap: 8px;
}

.cell-detail-panel__nearby-row {
  display: grid;
  grid-template-columns: 48px 68px 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(47, 38, 30, 0.05);
  line-height: 1.5;
}

.cell-detail-panel__nearby-row--target {
  background: rgba(0, 108, 103, 0.1);
  font-weight: 900;
}

.cell-detail-panel__nearby-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  font-size: 0.8rem;
  font-weight: 900;
}

.cell-detail-panel__nearby-time {
  font-weight: 900;
}

@media (max-width: 720px) {
  .review-grid__name {
    min-width: 112px;
    max-width: 112px;
    left: 0;
  }

  .review-grid__label {
    min-width: 60px;
    max-width: 60px;
    left: 112px;
  }

  .review-grid__time,
  .review-cell {
    min-width: 54px;
    width: 54px;
  }

  .cell-detail-panel__nearby-row {
    grid-template-columns: 44px 64px 1fr;
  }

  .cell-detail-panel__nearby-row span:last-child {
    grid-column: 3;
  }
}

    </style>
  </head>
  <body>
    <noscript>
      <div class="noscript-alert">
        このツールはJavaScriptが必要です。iPadではFilesからHTMLを直接開かず、Safariで配布URLを開いてホーム画面に追加してください。
      </div>
    </noscript>
    <div class="app-shell">
      <header class="hero">
        <div class="hero__topline">
          <div class="hero__build">
            <div id="build-version" class="meta-pill meta-pill--build">確認版 2026-04-24-2318</div>
            <div id="build-detail" class="hero__build-detail">build: 2026-04-24 23:18</div>
          </div>
        </div>
        <div id="debug-banner" class="debug-banner" hidden></div>
        <div class="hero__eyebrow">完全オフライン / 外部送信なし / iPadホーム画面対応</div>
        <h1>午睡記録確認支援ツール</h1>
        <p class="hero__lead">
          はいチーズ！の睡眠チェック表を読み込み、目視確認したい箇所を
          <strong>赤・黄・情報</strong>で一覧表示します。元ファイルは変更せず、
          ブラウザ内だけで処理します。
        </p>
      </header>

      <main class="layout">
        <section class="panel panel--guide">
          <div class="panel__title-row">
            <h2>iPadでの使い方</h2>
            <div class="meta-pill">本番運用: Safariでホーム画面に追加</div>
          </div>

          <div class="guide-grid">
            <article class="guide-card">
              <div class="guide-card__step">1</div>
              <div>
                <strong>初回だけSafariで配布URLを開く</strong>
                <p>インターネット接続できる状態で、配布されたURLを <strong>iPad Safari</strong> で開きます。</p>
              </div>
            </article>

            <article class="guide-card">
              <div class="guide-card__step">2</div>
              <div>
                <strong>共有からホーム画面に追加</strong>
                <p><strong>共有 → ホーム画面に追加</strong> を押すと、次回からアイコンから直接開けます。</p>
              </div>
            </article>

            <article class="guide-card">
              <div class="guide-card__step">3</div>
              <div>
                <strong>ホーム画面から開いてチェックする</strong>
                <p>以後はオフラインでも、ホーム画面のアイコンから開いて <code>.xlsx</code> を選んで使えます。</p>
              </div>
            </article>
          </div>

          <div class="guide-note">
            <strong>重要:</strong>
            iPadで <code>nap-checker.html</code> をFilesから直接開く方式は非推奨です。
            実機確認でJavaScriptが止まるケースがあったため、本番ではSafariから配布URLを開き、
            ホーム画面に追加して使ってください。
          </div>

          <div id="environment-hint" class="environment-hint">
            <strong>通信方針:</strong> 初回インストール時だけアプリ本体を読み込みます。
            xlsxはiPad内で読み取り、外部へ送信しません。
          </div>
        </section>

        <section class="panel panel--control">
          <div class="panel__title-row">
            <h2>1. ファイルを選ぶ</h2>
            <button id="demo-file-button" class="button button--subtle" type="button">
              ダミーxlsxで試す
            </button>
          </div>

          <div class="control-grid">
            <label class="field">
              <span class="field__label">午睡記録ファイル (.xlsx)</span>
              <input id="file-input" class="field__input" type="file" accept=".xlsx" />
            </label>

            <label class="field">
              <span class="field__label">チェックするシート</span>
              <select id="sheet-select" class="field__input" disabled>
                <option value="">先にxlsxを読み込んでください</option>
              </select>
            </label>
          </div>

          <div class="panel__title-row panel__title-row--spaced">
            <h2>2. 設定ファイル</h2>
            <button id="reset-config-button" class="button button--ghost" type="button">
              既定設定に戻す
            </button>
          </div>

          <div class="control-grid">
            <label class="field">
              <span class="field__label">設定JSONを読み込む</span>
              <input id="config-input" class="field__input" type="file" accept=".json,application/json" />
            </label>

            <div class="field field--info">
              <span class="field__label">現在の設定</span>
              <div id="config-status" class="field__info">既定設定を使用中</div>
            </div>
          </div>

          <div class="action-row">
            <button id="analyze-button" class="button button--primary" type="button">
              3. チェックする
            </button>
            <button id="download-csv-button" class="button button--secondary" type="button">
              CSVをダウンロード
            </button>
          </div>

          <div id="status-banner" class="status-banner" role="status" aria-live="polite"></div>
          <div id="error-box" class="error-box" hidden></div>
        </section>

        <section id="diagnostics-panel" class="panel panel--diagnostics" hidden>
          <div class="panel__title-row">
            <h2>iPadデバッグ診断</h2>
            <div id="diagnostic-mode-pill" class="meta-pill">debug=1</div>
          </div>
          <div class="action-row action-row--compact">
            <button id="copy-diagnostics-button" class="button button--ghost" type="button">
              診断情報をコピー
            </button>
          </div>
          <div id="diagnostic-copy-status" class="diagnostic-copy-status" hidden></div>
          <textarea id="diagnostic-copy-fallback" class="diagnostic-copy-fallback" hidden readonly></textarea>
          <div class="diagnostic-list">
            <div id="diagnostic-js" class="diagnostic-item diagnostic-item--pending">JavaScript: 確認中</div>
            <div id="diagnostic-url" class="diagnostic-item diagnostic-item--pending">開き方: 確認中</div>
            <div id="diagnostic-home" class="diagnostic-item diagnostic-item--pending">ホーム画面追加: 確認中</div>
            <div id="diagnostic-offline" class="diagnostic-item diagnostic-item--pending">オフライン準備: 確認中</div>
            <div id="diagnostic-file" class="diagnostic-item diagnostic-item--pending">ファイル読込: 未確認</div>
            <div id="diagnostic-analyze" class="diagnostic-item diagnostic-item--pending">チェックボタン: 未押下</div>
            <div id="diagnostic-demo" class="diagnostic-item diagnostic-item--pending">内蔵ダミーxlsx: 未押下</div>
            <div id="diagnostic-download" class="diagnostic-item diagnostic-item--pending">CSV保存: 未確認</div>
          </div>
          <p class="diagnostic-note">
            「内蔵ダミーxlsxで試す」が反応する場合は、JavaScriptとボタン操作は動いています。
            実ファイル選択だけが反応しない場合は、FilesプレビューではなくSafariまたはホーム画面アプリで開いてください。
          </p>
        </section>

        <details id="support-panel" class="panel panel--diagnostics support-panel">
          <summary class="support-panel__summary">
            <div>
              <strong>困ったとき / 診断・サポート</strong>
              <div class="support-panel__hint">不具合時の確認用です。診断情報は初期設定で個人名を伏せてコピーします。</div>
            </div>
            <div class="support-panel__summary-side">
              <div id="support-mode-pill" class="meta-pill">通常表示</div>
            </div>
          </summary>
          <div class="support-panel__body">
            <div class="panel__title-row">
              <h2>診断・サポート</h2>
              <div class="support-panel__actions">
                <button id="support-check-update-button" class="button button--ghost" type="button">
                  更新を確認
                </button>
                <button id="support-apply-update-button" class="button button--secondary" type="button" hidden>
                  更新して再読み込み
                </button>
              </div>
            </div>
            <p class="diagnostic-note">
              妻のiPadで違和感や不具合が出たときは、この欄を開いて
              <strong>診断情報をコピー</strong> を押すか、そのままスクショしてください。初期設定では、園児名や記録者名を含めずに共有できます。
            </p>
            <label class="toggle-chip support-panel__toggle">
              <input id="support-sensitive-toggle" type="checkbox" />
              <span>詳細診断を含める（ファイル名・最後に見た園児名を含む可能性があります）</span>
            </label>
            <div class="action-row action-row--compact">
              <button id="support-copy-button" class="button button--ghost" type="button">
                診断情報をコピー
              </button>
            </div>
            <div id="support-copy-status" class="diagnostic-copy-status" hidden></div>
            <textarea id="support-copy-fallback" class="diagnostic-copy-fallback" hidden readonly></textarea>
            <div class="diagnostic-list">
              <div id="support-version" class="diagnostic-item diagnostic-item--pending">アプリ版: 確認中</div>
              <div id="support-build" class="diagnostic-item diagnostic-item--pending">ビルド日時: 確認中</div>
              <div id="support-runtime" class="diagnostic-item diagnostic-item--pending">実行環境: 確認中</div>
              <div id="support-url" class="diagnostic-item diagnostic-item--pending">現在のURL: 確認中</div>
              <div id="support-pwa" class="diagnostic-item diagnostic-item--pending">PWA起動: 確認中</div>
              <div id="support-offline" class="diagnostic-item diagnostic-item--pending">オフライン状態: 確認中</div>
              <div id="support-service-worker" class="diagnostic-item diagnostic-item--pending">Service Worker: 確認中</div>
              <div id="support-update" class="diagnostic-item diagnostic-item--pending">更新状況: まだ確認していません</div>
              <div id="support-file" class="diagnostic-item diagnostic-item--pending">選択ファイル: 未選択</div>
              <div id="support-sheet" class="diagnostic-item diagnostic-item--pending">選択シート: 未選択</div>
              <div id="support-blocks" class="diagnostic-item diagnostic-item--pending">ブロック数: 未解析</div>
              <div id="support-children" class="diagnostic-item diagnostic-item--pending">園児数: 未解析</div>
              <div id="support-red-incidents" class="diagnostic-item diagnostic-item--pending">赤件数: 未解析</div>
              <div id="support-red-cells" class="diagnostic-item diagnostic-item--pending">赤コマ数: 未解析</div>
              <div id="support-yellow-incidents" class="diagnostic-item diagnostic-item--pending">黄件数: 未解析</div>
              <div id="support-selected-cell" class="diagnostic-item diagnostic-item--pending">最後に選択したセル: まだありません</div>
              <div id="support-last-error" class="diagnostic-item diagnostic-item--pending">最後のエラー: ありません</div>
              <div id="support-last-analysis" class="diagnostic-item diagnostic-item--pending">最終解析時刻: 未実行</div>
            </div>
          </div>
        </details>

        <section class="panel panel--summary">
          <div class="panel__title-row">
            <h2>結果サマリー</h2>
            <div id="file-meta" class="meta-pill">未読込</div>
          </div>

          <div id="summary-cards" class="summary-cards">
            <article class="summary-card summary-card--empty">
              <div class="summary-card__value">-</div>
              <div class="summary-card__label">赤</div>
              <div class="summary-card__description">すぐ確認したい項目です</div>
            </article>
            <article class="summary-card summary-card--empty">
              <div class="summary-card__value">-</div>
              <div class="summary-card__label">黄</div>
              <div class="summary-card__description">念のため確認したい項目です</div>
            </article>
            <article class="summary-card summary-card--empty">
              <div class="summary-card__value">-</div>
              <div class="summary-card__label">情報</div>
              <div class="summary-card__description">参考として見ておきたい項目です</div>
            </article>
            <article class="summary-card summary-card--empty">
              <div class="summary-card__value">-</div>
              <div class="summary-card__label">解析できた園児</div>
              <div class="summary-card__description">確認対象として読み取れた人数です</div>
            </article>
          </div>

          <div id="structure-summary" class="structure-summary">
            ファイルを選んでチェックすると、ここに結果のまとまりが表示されます。
          </div>
        </section>

        <section class="panel panel--review">
          <div class="panel__title-row">
            <h2>表レビュー</h2>
            <div id="review-count" class="meta-pill">要確認 0コマ</div>
          </div>
          <p id="review-guide" class="results-guide">
            元の表に近い並びで、赤と黄のコマを確認できます。
          </p>
          <div id="sheet-alert-banner" class="sheet-alert-banner" hidden></div>
          <div id="review-board" class="review-board">
            <article class="result-card result-card--empty">
              xlsx を読み込んで「チェックする」を押すと、ここに表レビューが表示されます。
            </article>
          </div>
          <section id="cell-detail-panel" class="cell-detail-panel">
            <div class="cell-detail-panel__empty">セルを押すと、このコマの状態・記録者・前後の状態をここで確認できます。</div>
          </section>
        </section>

        <section class="panel panel--filters">
          <div class="panel__title-row">
            <h2>補助表示の切り替え</h2>
          </div>

          <div class="filter-grid">
            <div class="field">
              <span class="field__label">表示方法</span>
              <div class="view-mode-toggle">
                <label class="toggle-chip">
                  <input type="radio" name="view-mode" value="grouped" checked />
                  <span>園児ごとにまとめる</span>
                </label>
                <label class="toggle-chip">
                  <input type="radio" name="view-mode" value="timeline" />
                  <span>時刻順で見る</span>
                </label>
              </div>
            </div>

            <div class="field">
              <span class="field__label">表示する種類</span>
              <div class="severity-filter">
                <label class="toggle-chip">
                  <input type="checkbox" name="severity-filter" value="red" checked />
                  <span>赤</span>
                </label>
                <label class="toggle-chip">
                  <input type="checkbox" name="severity-filter" value="yellow" checked />
                  <span>黄</span>
                </label>
                <label class="toggle-chip">
                  <input type="checkbox" name="severity-filter" value="info" checked />
                  <span>情報</span>
                </label>
              </div>
            </div>

            <label class="field">
              <span class="field__label">園児をしぼる</span>
              <select id="child-filter" class="field__input">
                <option value="">全員</option>
              </select>
            </label>
          </div>
        </section>

        <section class="panel panel--results">
          <div class="panel__title-row">
            <h2>補助一覧</h2>
            <div id="results-count" class="meta-pill">表示中 0件</div>
          </div>
          <p id="results-guide" class="results-guide">
            園児ごとに確認内容をまとめて表示します。
          </p>
          <div id="results-list" class="results-list" aria-live="polite">
            <article class="result-card result-card--empty">
              xlsx を読み込んで「チェックする」を押すと、ここに要確認箇所が表示されます。
            </article>
          </div>
        </section>

        <details id="debug-panel" class="panel panel--debug debug-panel">
          <summary class="debug-panel__summary">
            <span id="debug-panel-label">詳細ログ</span>
            <span id="debug-panel-hint" class="debug-panel__hint">必要なときだけ開く</span>
          </summary>
          <pre id="debug-output" class="debug-output">まだ詳細ログはありません。xlsx を読み込んでチェックすると、解析ヘッダとブロック判定がここに表示されます。</pre>
        </details>
      </main>
    </div>

    <script>
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).JSZip=e()}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});
    </script>
    <script>
(() => {
  const APP_BUILD_INFO = {"versionLabel":"確認版 2026-04-24-2318","buildLabel":"2026-04-24 23:18","buildId":"2026-04-24-231846","builtAtIso":"2026-04-24T14:18:46.669Z"};
  const DEFAULT_CONFIG = {
  "appName": "午睡記録確認支援ツール",
  "intervalMinutes": 5,
  "heuristics": {
    "timeSequenceMinLength": 6,
    "timeRowScanLimit": 80,
    "headerScanRows": 12,
    "coverageThreshold": 0.8,
    "minimumCoverageWindow": 4,
    "maxNameColumnScan": 12
  },
  "columns": {
    "nameKeywords": ["名前", "園児名", "氏名", "なまえ"],
    "ignoreStatusTexts": ["状態", "確認者"],
    "roleKeywords": ["状態", "確認者", "確認", "担当"]
  },
  "symbols": {
    "sleepStart": ["入"],
    "wake": ["起"],
    "supine": ["↑"],
    "left": ["←"],
    "right": ["→"],
    "prone": ["↓"],
    "proneReturn": ["↑↓"]
  },
  "symbolAliases": {
    "入眠": "入",
    "起床": "起",
    "仰向け": "↑",
    "左向き": "←",
    "右向き": "→",
    "うつぶせ": "↓",
    "うつぶせ返し": "↑↓"
  },
  "ruleOptions": {
    "requireReviewerFor": ["入", "起", "↑", "←", "→", "↓", "↑↓"],
    "proneRecoveryCategories": ["proneReturn", "supine", "left", "right"],
    "allowedRepeatCategories": ["supine"],
    "lateralConsecutiveThreshold": 3,
    "infoOnResleep": false
  },
  "reviewGrouping": {
    "groupableRuleKeys": ["proneOccurred", "lateralThreeConsecutive", "stateAfterWake"],
    "maxAdjacentGap": 0
  },
  "ui": {
    "showDebugPanelDefault": false,
    "defaultViewMode": "grouped",
    "showInfoByDefault": true,
    "sortResultsBy": {
      "grouped": "severity_then_child",
      "timeline": "time_then_severity"
    },
    "severityLabels": {
      "red": "赤",
      "yellow": "黄",
      "info": "情報"
    },
    "severityDescriptions": {
      "red": "すぐ確認したい項目",
      "yellow": "念のため見直したい項目",
      "info": "参考として見ておきたい項目"
    },
    "viewModeLabels": {
      "grouped": "園児ごとにまとめる",
      "timeline": "時刻順で見る"
    },
    "debugPanelLabel": "詳細ログ",
    "debugPanelHint": "必要なときだけ見る",
    "ruleShortTexts": {
      "うつぶせ": "うつぶせの記録があります",
      "横向き3回連続": "同じ横向きが3回続いています",
      "起床後記録": "起床後も記録が続いています",
      "記録者が1人のみ": "一覧表全体の記録者が1人だけです",
      "確認者未入力": "確認した人の記入が抜けています",
      "想定外記号": "いつもと違う記号が入っています",
      "2行セット崩れ": "状態と確認者の並びがずれている可能性があります"
    },
    "ruleActionTexts": {
      "うつぶせ": "うつぶせ後の体位と返し確認を見直してください。",
      "横向き3回連続": "同じ向きが続いていないか、体位変換や確認漏れがないか見直してください。",
      "起床後記録": "起床後の記録が続いていないか、再入眠として扱う内容か確認してください。",
      "記録者が1人のみ": "一覧表全体で記録者が1人だけになっていないか確認してください。",
      "確認者未入力": "確認した人の記入漏れがないか確認してください。",
      "想定外記号": "いつもと違う記号が入っていないか確認してください。",
      "2行セット崩れ": "状態と確認者の並びがずれていないか確認してください。"
    },
    "ruleReasonTexts": {
      "うつぶせ": "状態欄に「↓」が1回以上あります。",
      "横向き3回連続": "同じ横向き「←」または「→」が3コマ連続しています。",
      "起床後記録": "「起」の後に、再入眠なしで状態記録が続いています。",
      "記録者が1人のみ": "一覧表全体で登場する記録者が1人だけです。",
      "確認者未入力": "状態が入っているセルに、対応する確認者がありません。",
      "想定外記号": "設定にない記号が状態欄に入っています。",
      "2行セット崩れ": "状態行と確認者行の2行セットとして読み取れない行があります。"
    }
  },
  "rules": {
    "proneOccurred": {
      "severity": "red",
      "label": "うつぶせ"
    },
    "lateralThreeConsecutive": {
      "severity": "red",
      "label": "横向き3回連続"
    },
    "stateAfterWake": {
      "severity": "red",
      "label": "起床後記録"
    },
    "singleReviewerSheet": {
      "severity": "red",
      "label": "記録者が1人のみ"
    },
    "missingReviewerCell": {
      "severity": "yellow",
      "label": "確認者未入力"
    },
    "unexpectedSymbol": {
      "severity": "red",
      "label": "想定外記号"
    },
    "brokenPair": {
      "severity": "red",
      "label": "2行セット崩れ"
    }
  }
};
  const DEMO_XLSX_BASE64 = "UEsDBBQAAAAIAEejl1xGx01IlQAAAM0AAAAQAAAAZG9jUHJvcHMvYXBwLnhtbE3PTQvCMAwG4L9SdreZih6kDkQ9ip68zy51hbYpbYT67+0EP255ecgboi6JIia2mEXxLuRtMzLHDUDWI/o+y8qhiqHke64x3YGMsRoPpB8eA8OibdeAhTEMOMzit7Dp1C5GZ3XPlkJ3sjpRJsPiWDQ6sScfq9wcChDneiU+ixNLOZcrBf+LU8sVU57mym/8ZAW/B7oXUEsDBBQAAAAIAEejl1z2aovN7gAAACsCAAARAAAAZG9jUHJvcHMvY29yZS54bWzNks9qwzAMh19l+J4odkoOJs2lY6cNBits7GZstTWL/2BrJH37JVmbMrYH2NHSz58+gVodpQ4Jn1OImMhivhtd77PUcctORFECZH1Cp3I5JfzUPITkFE3PdISo9Ic6IoiqasAhKaNIwQws4kpkXWu01AkVhXTBG73i42fqF5jRgD069JSBlxxYN0+M57Fv4QaYYYTJ5e8CmpW4VP/ELh1gl+SY7ZoahqEc6iU37cDh7enxZVm3sD6T8hqnX9lKOkfcsuvk13p3v39gnahEU1SbQtR7zqVoJN+8z64//G7CLhh7sP/Y+CrYtfDrLrovUEsDBBQAAAAIAEejl1yZXJwjEAYAAJwnAAATAAAAeGwvdGhlbWUvdGhlbWUxLnhtbO1aW3PaOBR+76/QeGf2bQvGNoG2tBNzaXbbtJmE7U4fhRFYjWx5ZJGEf79HNhDLlg3tkk26mzwELOn7zkVH5+g4efPuLmLohoiU8nhg2S/b1ru3L97gVzIkEUEwGaev8MAKpUxetVppAMM4fckTEsPcgosIS3gUy9Zc4FsaLyPW6rTb3VaEaWyhGEdkYH1eLGhA0FRRWm9fILTlHzP4FctUjWWjARNXQSa5iLTy+WzF/NrePmXP6TodMoFuMBtYIH/Ob6fkTlqI4VTCxMBqZz9Wa8fR0kiAgsl9lAW6Sfaj0xUIMg07Op1YznZ89sTtn4zK2nQ0bRrg4/F4OLbL0otwHATgUbuewp30bL+kQQm0o2nQZNj22q6RpqqNU0/T933f65tonAqNW0/Ta3fd046Jxq3QeA2+8U+Hw66JxqvQdOtpJif9rmuk6RZoQkbj63oSFbXlQNMgAFhwdtbM0gOWXin6dZQa2R273UFc8FjuOYkR/sbFBNZp0hmWNEZynZAFDgA3xNFMUHyvQbaK4MKS0lyQ1s8ptVAaCJrIgfVHgiHF3K/99Ze7yaQzep19Os5rlH9pqwGn7bubz5P8c+jkn6eT101CznC8LAnx+yNbYYcnbjsTcjocZ0J8z/b2kaUlMs/v+QrrTjxnH1aWsF3Pz+SejHIju932WH32T0duI9epwLMi15RGJEWfyC265BE4tUkNMhM/CJ2GmGpQHAKkCTGWoYb4tMasEeATfbe+CMjfjYj3q2+aPVehWEnahPgQRhrinHPmc9Fs+welRtH2Vbzco5dYFQGXGN80qjUsxdZ4lcDxrZw8HRMSzZQLBkGGlyQmEqk5fk1IE/4rpdr+nNNA8JQvJPpKkY9psyOndCbN6DMawUavG3WHaNI8ev4F+Zw1ChyRGx0CZxuzRiGEabvwHq8kjpqtwhErQj5iGTYacrUWgbZxqYRgWhLG0XhO0rQR/FmsNZM+YMjszZF1ztaRDhGSXjdCPmLOi5ARvx6GOEqa7aJxWAT9nl7DScHogstm/bh+htUzbCyO90fUF0rkDyanP+kyNAejmlkJvYRWap+qhzQ+qB4yCgXxuR4+5Xp4CjeWxrxQroJ7Af/R2jfCq/iCwDl/Ln3Ppe+59D2h0rc3I31nwdOLW95GblvE+64x2tc0LihjV3LNyMdUr5Mp2DmfwOz9aD6e8e362SSEr5pZLSMWkEuBs0EkuPyLyvAqxAnoZFslCctU02U3ihKeQhtu6VP1SpXX5a+5KLg8W+Tpr6F0PizP+Txf57TNCzNDt3JL6raUvrUmOEr0scxwTh7LDDtnPJIdtnegHTX79l125COlMFOXQ7gaQr4Dbbqd3Do4npiRuQrTUpBvw/npxXga4jnZBLl9mFdt59jR0fvnwVGwo+88lh3HiPKiIe6hhpjPw0OHeXtfmGeVxlA0FG1srCQsRrdguNfxLBTgZGAtoAeDr1EC8lJVYDFbxgMrkKJ8TIxF6HDnl1xf49GS49umZbVuryl3GW0iUjnCaZgTZ6vK3mWxwVUdz1Vb8rC+aj20FU7P/lmtyJ8MEU4WCxJIY5QXpkqi8xlTvucrScRVOL9FM7YSlxi84+bHcU5TuBJ2tg8CMrm7Oal6ZTFnpvLfLQwJLFuIWRLiTV3t1eebnK56Inb6l3fBYPL9cMlHD+U751/0XUOufvbd4/pukztITJx5xREBdEUCI5UcBhYXMuRQ7pKQBhMBzZTJRPACgmSmHICY+gu98gy5KRXOrT45f0Usg4ZOXtIlEhSKsAwFIRdy4+/vk2p3jNf6LIFthFQyZNUXykOJwT0zckPYVCXzrtomC4Xb4lTNuxq+JmBLw3punS0n/9te1D20Fz1G86OZ4B6zh3OberjCRaz/WNYe+TLfOXDbOt4DXuYTLEOkfsF9ioqAEativrqvT/klnDu0e/GBIJv81tuk9t3gDHzUq1qlZCsRP0sHfB+SBmOMW/Q0X48UYq2msa3G2jEMeYBY8wyhZjjfh0WaGjPVi6w5jQpvQdVA5T/b1A1o9g00HJEFXjGZtjaj5E4KPNz+7w2wwsSO4e2LvwFQSwMEFAAAAAgAR6OXXAh0TTEBBQAA8B4AABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWytWWtvozgU/SuIkeZjwZhnmkSapM0TpGqq3f1MEydFwyMLbtPZX7+2IQlUmIvKWGoNvuccPzjcFnt8zvJfxSshVPlI4rSYqK+UnkaaVuxeSRIWd9mJpCxyyPIkpOw2P2rFKSfhXpCSWDN03daSMErV6Vi0PeXTcfZG4yglT7lSvCVJmP+ekTg7T1SkXhp+RsdXyhu06fgUHskzoX+dnnJ2p11V9lFC0iLKUiUnh4k6Q6MAWZwgEH9H5FzUrhU+lZcs+8Vv1vuJqqtcOiXKx/MpjlhnWFV+V5emqtDs5JMDnZM4nqgPlqqEOxq9kyfGmKgvGaVZIgbJhkxDytoOefYfSUX/JCYMzAZ2EmgmVUJbYqUS70kerfopB1AO6Adfqn/FvH+IRdKuE61fXxZgIZ4PW++XsCDzLP4n2tPXieqqyp4cwreY/szOK1KtuVjDXRYX4rdyLrHIVpXdW8GGU5HZCJIonagGq8MPXmtNgi4h4IqA+xLMimD2JVgVwepLsCuC3ZfgVASnL8GtCG5fglcRvL4EHhAMdtGXgi4U1Jtyedyo9/NGlweOxBPXSmsJXz6ENJyO8+ys5ALP/WdcjXZ1JHtTdxwx464XQNYapTyHPNOcRSMmSKffvyEDe969qC1b1KaLRG2ZennvmKy2LYO1K9+/GQgbPIB1y+ZAbGHL4LVju0YFdCuhUsBCdUEe9+7HGmXz4oPQduyHzec6KaNrUg0khqePxfQN6fQNZCHnnte6/XlUQmEOK2CdL5yhe57bNS8THO2DKfrCoi+e/t+npo0wvrPG2nttTI9SnI5NxxClyVjIGbZnivKpj6WUgXQT2aI0GSs5A7tl8ZqMtZzhYBuJ0mRspAxDd7EoZpOxlTNMZmFRmgxfznCq4jYZgZSBmeuv2IYbLNi7llA1u15dyyxfXdu4vsJtHoaUDA/bwsOmpzttCg+gAlv+VuYjxHQtD7cRFz2IVhtx2atHOX8F8dlqo1bmWsa8+RdEbEGEDyKCLkTDhTbsQrumldZ7mdvQOumeyIzMpTb/E4PZ+9P6qB9gJVZEjtVRq8LjYIXFYIXlYIXVYIW1TOHmQBCxBRE+iAi6EA0HOrADHTAPmnqV/7wqH7qtqzOHlOA8CCpI8yDEZOnIbDXmV4nLrxJXEFGeAGXMm/1AxBZE+CAi6EI07OfC9nOlCdD9YwkQVoIS4GCFxWCF5WCF1WCFtUzh5kAQsQURPogIuhANB3q9P3f45yL4uafDyZK9u41k6RmtyRKUgrMlLCFNlyBV+n8jyJSmr+WXO11JmTdnwpANDNnCEB+GBJ2Qpun67DEgaYpshIblyB5SUJIcLrEYLrEcLrGSStTsBkI2MGQLQ3wYEnRCmnbr3P2p7GbAH8YOrj6MW7PLHJTokdtACXlug6jy3AYxO3KbjFpzFQhZw5ANDNnCEB+GBJ2Qpqt67BQiLE9i+M8lMVgKTGIyiZpNBveyhHtZwZA1DNnAkC0M8WFI0Alp2qVzq7YJ7bGPh+CNPNOotsxx68s7ByV65Kuvb+GBVHm+smQv1VIeWslDa3loIw9t5SFfHgpaQ+XT12pnMQnJj+KMsVB22VtK+d5urfVy1GqMZuVpzueIM5q5be38cLa1XR/NUGvEGs3EcZx2G1J5FhyE+TFKCyUmBzY8/c5hM8tLm5Y3NDuJQ6Ly9LQ8WCLhnuQcwOKHLKOXG97B9ZB7+j9QSwMEFAAAAAgAR6OXXKR6yT4nAwAADA8AAA0AAAB4bC9zdHlsZXMueG1s3Vddb5swFP0riPcOAikLVYjU0kWatE2V2oe9OsEESzZm4FRJf/18bQIk5VbsQ1o1ohb7Hp9zP+wbK8tGHTl9LChVzkHwskncQqnqxvOabUEFaT7IipYayWUtiNLTeuc1VU1J1gBJcC/w/cgThJXualnuxVqoxtnKfakSd9aZHPv6nGljNHcdK5fKjCbuUT9XQlxlmVPcCHHTNK63Wnqt1mqZy7KXDF1r0MJEUOeZ8MRNCWebmgErJ4LxozUHYNhKLmtH6VwoxKMtzYuFZ3YGabY6gpWyNr6tB/t/0y7v1erdJnF9f22e6et9f76e3w3WmxckyDjvErx2rWG1rIhStC7XemI4xvgKctrx07HSGe5qcpwF1+5kQiM5y8DlLj2PNUqjj0ZmQP1T0bvF7SL8y6L30Tr4tEZFzUvXeCPrjNZdlQP3ZFotOc2VptdsV8BbycoDUCkp9CBjZCdLYrbgxBgyHdNBiasK0wFnO36/SOM738QGS1sfExlmrQlnIkGvPMU9kWEXDxJrB7peW8r5I4h8z8/a+ZAPWtmHRi67oa50O7QydgKOhmpWeyB7/VuyTsWepbrb6wxKM/+xl4o+1DRnBzM/5J1/TH3WqwcX6qSq+PGWs10pqM19ssPVkpx4TiFr9qK9wTfCVhto7TrPtFZsO7BAhQ75pDDD9xZmMIgz6OOcv7c4J5yp2b8J02vbYdBzZx3XWR248RL3G1ydvHfsbPaMK1a2s4JlGS1fNZ6WV2Sjr/ozfb0+oznZc/XUgYnbj7/SjO1F3K16gGK0q/rxF/immkXdhad9sTKjB5ql7VR/9VxcL/AA4RLpL9XXCMax2DgCGOYHiwDjWBbm53/KZ4HmYzEstsUoskA5C5RjWWNIaj6Yn3FOrJ/xTOM4DKMIq2iajkaQYnWLIvgbV8NiAwbmBzz9Wq3x3cZPyNvnANvTt04Ilil+ErFM8VoDMl43YMTx+G5jfoCB7QJ2dsD/uB84U+OcMIRdxWLDOhhH4hhD4CyOn9EoQqoTwWd8f7AuCcM4HkcAG48gDDEEuhFHsAggBgwJ7e+Ni/vIO91TXv/7d/UTUEsDBBQAAAAIAEejl1yXirscwAAAABMCAAALAAAAX3JlbHMvLnJlbHOdkrluwzAMQH/F0J4wB9AhiDNl8RYE+QFWog/YEgWKRZ2/r9qlcZALGXk9PBLcHmlA7TiktoupGP0QUmla1bgBSLYlj2nOkUKu1CweNYfSQETbY0OwWiw+QC4ZZre9ZBanc6RXiFzXnaU92y9PQW+ArzpMcUJpSEszDvDN0n8y9/MMNUXlSiOVWxp40+X+duBJ0aEiWBaaRcnToh2lfx3H9pDT6a9jIrR6W+j5cWhUCo7cYyWMcWK0/jWCyQ/sfgBQSwMEFAAAAAgAR6OXXPSauPw3AQAAJwIAAA8AAAB4bC93b3JrYm9vay54bWyNUdFOwzAM/JUq79BSjUlMdC9MwCQEE0O8p627WkviyvE22NfjtqqYxAtPyZ2ty93l/kS8L4n2yZd3IRamFekWaRqrFryN19RB0ElD7K0o5F0aOwZbxxZAvEvzLJun3mIwy/tJa8PpJSCBSpCCkj3xiXCKv/MeJkeMWKJD+S7McHdgEo8BPZ6hLkxmktjS6ZkYzxTEum3F5FxhbsbBJ7Bg9Yfe9iY/bBkHRmz5btVIYeaZCjbIUYaNQd+qxyPo8ogOQo/oBHhlBZ6YDh2GXS+jKdKLGEMP0zmWuOD/1EhNgxWsqDp4CDL2yOB6gyG22EWTBOuhMHmWz6+y2VU+hNJX1vUYUNTZRV28QB3wuh49TsZqaDBA/apaUXktqdpw0h+DTj67vbnTMg7OPSj3Fl7I1lPO6Y+WP1BLAwQUAAAACABHo5dcJB6boq0AAAD4AQAAGgAAAHhsL19yZWxzL3dvcmtib29rLnhtbC5yZWxztZE9DoMwDIWvEuUANVCpQwVMXVgrLhAF8yMSEsWuCrcvhQGQOnRhsp4tf+/JTp9oFHduoLbzJEZrBspky+zvAKRbtIouzuMwT2oXrOJZhga80r1qEJIoukHYM2Se7pminDz+Q3R13Wl8OP2yOPAPMLxd6KlFZClKFRrkTMJotjbBUuLLTJaiqDIZiiqWcFog4skgbWlWfbBPTrTneRc390WuzeMJrt8McHh0/gFQSwMEFAAAAAgAR6OXXGWQeZIZAQAAzwMAABMAAABbQ29udGVudF9UeXBlc10ueG1srZNNTsMwEIWvEmVbJS4sWKCmG2ALXXABY08aq/6TZ1rS2zNO2kqgEhWFTax43rzPnpes3o8RsOid9diUHVF8FAJVB05iHSJ4rrQhOUn8mrYiSrWTWxD3y+WDUMETeKooe5Tr1TO0cm+peOl5G03wTZnAYlk8jcLMakoZozVKEtfFwesflOpEqLlz0GBnIi5YUIqrhFz5HXDqeztASkZDsZGJXqVjleitQDpawHra4soZQ9saBTqoveOWGmMCqbEDIGfr0XQxTSaeMIzPu9n8wWYKyMpNChE5sQR/x50jyd1VZCNIZKaveCGy9ez7QU5bg76RzeP9DGk35IFiWObP+HvGF/8bzvERwu6/P7G81k4af+aL4T9efwFQSwECFAAUAAAACABHo5dcRsdNSJUAAADNAAAAEAAAAAAAAAAAAAAAgAEAAAAAZG9jUHJvcHMvYXBwLnhtbFBLAQIUABQAAAAIAEejl1z2aovN7gAAACsCAAARAAAAAAAAAAAAAACAAcMAAABkb2NQcm9wcy9jb3JlLnhtbFBLAQIUABQAAAAIAEejl1yZXJwjEAYAAJwnAAATAAAAAAAAAAAAAACAAeABAAB4bC90aGVtZS90aGVtZTEueG1sUEsBAhQAFAAAAAgAR6OXXAh0TTEBBQAA8B4AABgAAAAAAAAAAAAAALaBIQgAAHhsL3dvcmtzaGVldHMvc2hlZXQxLnhtbFBLAQIUABQAAAAIAEejl1ykesk+JwMAAAwPAAANAAAAAAAAAAAAAACAAVgNAAB4bC9zdHlsZXMueG1sUEsBAhQAFAAAAAgAR6OXXJeKuxzAAAAAEwIAAAsAAAAAAAAAAAAAAIABqhAAAF9yZWxzLy5yZWxzUEsBAhQAFAAAAAgAR6OXXPSauPw3AQAAJwIAAA8AAAAAAAAAAAAAAIABkxEAAHhsL3dvcmtib29rLnhtbFBLAQIUABQAAAAIAEejl1wkHpuirQAAAPgBAAAaAAAAAAAAAAAAAACAAfcSAAB4bC9fcmVscy93b3JrYm9vay54bWwucmVsc1BLAQIUABQAAAAIAEejl1xlkHmSGQEAAM8DAAATAAAAAAAAAAAAAACAAdwTAABbQ29udGVudF9UeXBlc10ueG1sUEsFBgAAAAAJAAkAPgIAACYVAAAAAA==";

  function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function createCellKey(row, col) {
    return `${row}:${col}`;
  }

  function normalizeText(value) {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
  }

  function columnLettersToIndex(letters) {
    let value = 0;
    for (const char of letters.toUpperCase()) {
      value = value * 26 + (char.charCodeAt(0) - 64);
    }
    return value;
  }

  function indexToColumnLetters(index) {
    let current = index;
    let result = "";

    while (current > 0) {
      const remainder = (current - 1) % 26;
      result = String.fromCharCode(65 + remainder) + result;
      current = Math.floor((current - 1) / 26);
    }

    return result;
  }

  function parseCellReference(ref) {
    const match = /^([A-Z]+)(\d+)$/i.exec(ref);
    if (!match) {
      return null;
    }

    return {
      col: columnLettersToIndex(match[1]),
      row: Number(match[2]),
    };
  }

  function parseRangeReference(ref) {
    const [startRef, endRef = startRef] = ref.split(":");
    const start = parseCellReference(startRef);
    const end = parseCellReference(endRef);

    if (!start || !end) {
      return null;
    }

    return { start, end };
  }

  function excelSerialToMinutes(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      return null;
    }

    let fraction = value % 1;
    if (fraction < 0) {
      fraction += 1;
    }

    const minutes = Math.round(fraction * 24 * 60) % (24 * 60);
    return Number.isFinite(minutes) ? minutes : null;
  }

  function parseTimeText(value) {
    const text = normalizeText(value).replaceAll("：", ":");
    if (!text) {
      return null;
    }

    const match = /(\d{1,2}):(\d{2})/.exec(text);
    if (!match) {
      return null;
    }

    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (hours > 23 || minutes > 59) {
      return null;
    }

    return hours * 60 + minutes;
  }

  function formatMinutes(minutes) {
    if (minutes === null || minutes === undefined || Number.isNaN(minutes)) {
      return "-";
    }

    const normalized = ((minutes % (24 * 60)) + 24 * 60) % (24 * 60);
    const hours = Math.floor(normalized / 60);
    const remainder = normalized % 60;
    return `${String(hours).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function positiveModulo(value, mod) {
    return ((value % mod) + mod) % mod;
  }

  function sortFindings(findings) {
    const severityRank = { red: 0, yellow: 1, info: 2 };

    return [...findings].sort((left, right) => {
      const severityDelta = severityRank[left.severity] - severityRank[right.severity];
      if (severityDelta !== 0) {
        return severityDelta;
      }

      if (left.childName !== right.childName) {
        return left.childName.localeCompare(right.childName, "ja");
      }

      if (left.timeSort !== right.timeSort) {
        return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
      }

      return left.ruleName.localeCompare(right.ruleName, "ja");
    });
  }

  function compileConfig(config) {
    const tokenToCategory = new Map();
    const tokenToCanonical = new Map();

    for (const [category, tokens] of Object.entries(config.symbols ?? {})) {
      for (const token of tokens ?? []) {
        const normalized = normalizeText(token);
        if (!normalized) {
          continue;
        }

        tokenToCategory.set(normalized, category);
        tokenToCanonical.set(normalized, normalized);
      }
    }

    for (const [alias, canonicalValue] of Object.entries(config.symbolAliases ?? {})) {
      const normalizedAlias = normalizeText(alias);
      const normalizedCanonical = normalizeText(canonicalValue);
      const category = tokenToCategory.get(normalizedCanonical);

      if (!normalizedAlias || !normalizedCanonical || !category) {
        continue;
      }

      tokenToCategory.set(normalizedAlias, category);
      tokenToCanonical.set(normalizedAlias, normalizedCanonical);
    }

    return {
      ...config,
      compiled: {
        tokenToCategory,
        tokenToCanonical,
        nameKeywords: new Set((config.columns?.nameKeywords ?? []).map(normalizeText).filter(Boolean)),
        ignoreStatusTexts: new Set((config.columns?.ignoreStatusTexts ?? []).map(normalizeText).filter(Boolean)),
        roleKeywords: new Set((config.columns?.roleKeywords ?? []).map(normalizeText).filter(Boolean)),
        requireReviewer: new Set((config.ruleOptions?.requireReviewerFor ?? []).map(normalizeText).filter(Boolean)),
        proneRecoveryCategories: new Set(config.ruleOptions?.proneRecoveryCategories ?? []),
        allowedRepeatCategories: new Set(config.ruleOptions?.allowedRepeatCategories ?? []),
      },
    };
  }

  function classifyStatus(text, config) {
    const normalized = normalizeText(text);
    if (!normalized) {
      return {
        present: false,
        raw: "",
        normalized: "",
        known: false,
        category: null,
        canonical: "",
      };
    }

    if (config.compiled.ignoreStatusTexts.has(normalized)) {
      return {
        present: false,
        raw: normalized,
        normalized,
        known: false,
        category: null,
        canonical: normalized,
        ignored: true,
      };
    }

    const category = config.compiled.tokenToCategory.get(normalized) ?? null;
    return {
      present: true,
      raw: text,
      normalized,
      known: Boolean(category),
      category,
      canonical: config.compiled.tokenToCanonical.get(normalized) ?? normalized,
    };
  }

  function isRuleEnabled(config, ruleKey) {
    return Boolean(config.rules?.[ruleKey]);
  }

  function getRuleMeta(config, ruleKey) {
    return config.rules?.[ruleKey] ?? {
      severity: "info",
      label: ruleKey,
    };
  }

  function getCell(sheet, row, col) {
    return sheet.cellMap.get(createCellKey(row, col)) ?? null;
  }

  function getCellText(sheet, row, col) {
    const cell = getCell(sheet, row, col);
    if (!cell) {
      return "";
    }

    return normalizeText(cell.display ?? cell.text ?? cell.raw ?? "");
  }

  function getRangeTexts(sheet, row, startCol, endCol) {
    const values = [];
    for (let col = startCol; col <= endCol; col += 1) {
      values.push(getCellText(sheet, row, col));
    }
    return values;
  }

  function countNonEmptyRange(sheet, row, startCol, endCol) {
    let count = 0;
    for (let col = startCol; col <= endCol; col += 1) {
      if (getCellText(sheet, row, col)) {
        count += 1;
      }
    }
    return count;
  }

  function extractTimeMinutes(cell) {
    if (!cell) {
      return null;
    }

    const textMinutes = parseTimeText(cell.display ?? cell.text ?? cell.raw);
    if (textMinutes !== null) {
      return textMinutes;
    }

    if (typeof cell.raw === "number" && Number.isFinite(cell.raw) && cell.raw > 0 && cell.raw < 1) {
      return excelSerialToMinutes(cell.raw);
    }

    return null;
  }

  function extractHourValue(cell) {
    if (!cell) {
      return null;
    }

    if (typeof cell.raw === "number" && Number.isInteger(cell.raw) && cell.raw >= 0 && cell.raw <= 23) {
      return cell.raw;
    }

    const text = String(cell.display ?? cell.text ?? cell.raw ?? "").replaceAll("：", ":").trim();
    if (!text) {
      return null;
    }

    const hourTextMatch = /(\d{1,2})\s*時/.exec(text);
    if (hourTextMatch) {
      const hours = Number(hourTextMatch[1]);
      return hours >= 0 && hours <= 23 ? hours : null;
    }

    const timeMinutes = parseTimeText(text);
    if (timeMinutes !== null && timeMinutes % 60 === 0) {
      return Math.floor(timeMinutes / 60);
    }

    if (/^\d{1,2}$/.test(text)) {
      const hours = Number(text);
      return hours >= 0 && hours <= 23 ? hours : null;
    }

    return null;
  }

  function extractMinuteValue(cell, intervalMinutes) {
    if (!cell) {
      return null;
    }

    if (typeof cell.raw === "number" && Number.isInteger(cell.raw) && cell.raw >= 0 && cell.raw < 60) {
      return cell.raw;
    }

    const text = String(cell.display ?? cell.text ?? cell.raw ?? "").replaceAll("：", ":").trim();
    if (!text) {
      return null;
    }

    if (/^\d{1,2}$/.test(text)) {
      const minutes = Number(text);
      if (minutes >= 0 && minutes < 60) {
        return minutes;
      }
    }

    const timeMinutes = parseTimeText(text);
    if (timeMinutes !== null) {
      return timeMinutes % 60;
    }

    if (intervalMinutes && text === "0") {
      return 0;
    }

    return null;
  }

  function scoreTimeRuns(tokens, intervalMinutes, minLength) {
    let bestRun = null;
    let currentRun = [];

    function commitRun() {
      if (currentRun.length >= minLength) {
        if (!bestRun || currentRun.length > bestRun.length) {
          bestRun = [...currentRun];
        }
      }
    }

    for (const token of tokens) {
      if (currentRun.length === 0) {
        currentRun.push(token);
        continue;
      }

      const previous = currentRun[currentRun.length - 1];
      const minuteDelta = positiveModulo(token.minutes - previous.minutes, 24 * 60);
      const columnDelta = token.col - previous.col;

      if (columnDelta === 1 && minuteDelta === intervalMinutes) {
        currentRun.push(token);
        continue;
      }

      commitRun();
      currentRun = [token];
    }

    commitRun();
    return bestRun;
  }

  function buildCandidateSummary(run) {
    if (!run?.length) {
      return null;
    }

    return {
      startCol: run[0].col,
      endCol: run[run.length - 1].col,
      timeRange: `${run[0].label} - ${run[run.length - 1].label}`,
      runLength: run.length,
    };
  }

  function buildSingleRowCandidate(sheet, row, config) {
    const minLength = config.heuristics?.timeSequenceMinLength ?? 6;
    const tokens = [];

    for (let col = 1; col <= sheet.maxCol; col += 1) {
      const cell = getCell(sheet, row, col);
      const minutes = extractTimeMinutes(cell);
      if (minutes === null) {
        continue;
      }

      tokens.push({
        row,
        col,
        minutes,
        label: formatMinutes(minutes),
      });
    }

    const run = tokens.length >= minLength ? scoreTimeRuns(tokens, config.intervalMinutes ?? 5, minLength) : null;
    const summary = buildCandidateSummary(run);
    const reason =
      summary
        ? "単一行ヘッダとして採用"
        : tokens.length === 0
          ? "HH:MM 形式の時刻セルが見つかりません"
          : tokens.length < minLength
            ? `時刻セルが ${minLength} 列未満です (${tokens.length} 列)`
            : "5分刻みの連続時刻になりません";

    return {
      block:
        summary
          ? {
              kind: "single",
              headerStartRow: row,
              headerEndRow: row,
              startCol: summary.startCol,
              endCol: summary.endCol,
              columns: run,
            }
          : null,
      debug: {
        kind: "single",
        headerRows: [row],
        accepted: Boolean(summary),
        reason,
        tokenCount: tokens.length,
        startCol: summary?.startCol ?? null,
        endCol: summary?.endCol ?? null,
        timeRange: summary?.timeRange ?? null,
        interesting: Boolean(summary) || tokens.length > 0,
      },
    };
  }

  function buildStackedHeaderCandidate(sheet, hourRow, minuteRow, config) {
    const minLength = config.heuristics?.timeSequenceMinLength ?? 6;
    const intervalMinutes = config.intervalMinutes ?? 5;
    const tokens = [];
    let hourMatches = 0;
    let minuteMatches = 0;

    for (let col = 1; col <= sheet.maxCol; col += 1) {
      const hour = extractHourValue(getCell(sheet, hourRow, col));
      const minute = extractMinuteValue(getCell(sheet, minuteRow, col), intervalMinutes);

      if (hour !== null) {
        hourMatches += 1;
      }
      if (minute !== null) {
        minuteMatches += 1;
      }

      if (hour === null || minute === null) {
        continue;
      }

      const minutes = hour * 60 + minute;
      tokens.push({
        row: minuteRow,
        col,
        minutes,
        label: formatMinutes(minutes),
      });
    }

    const run = tokens.length >= minLength ? scoreTimeRuns(tokens, intervalMinutes, minLength) : null;
    const summary = buildCandidateSummary(run);
    let reason = "2行ヘッダとして採用";

    if (!summary) {
      if (hourMatches === 0) {
        reason = "上段の「13時」形式ヘッダが見つかりません";
      } else if (minuteMatches === 0) {
        reason = "下段の分ヘッダが見つかりません";
      } else if (tokens.length < minLength) {
        reason = `上下ヘッダを組み合わせた時刻列が ${minLength} 列未満です (${tokens.length} 列)`;
      } else {
        reason = "上下ヘッダを組み合わせても 5 分刻みの連続時刻になりません";
      }
    }

    return {
      block:
        summary
          ? {
              kind: "stacked",
              headerStartRow: hourRow,
              headerEndRow: minuteRow,
              startCol: summary.startCol,
              endCol: summary.endCol,
              columns: run,
            }
          : null,
      debug: {
        kind: "stacked",
        headerRows: [hourRow, minuteRow],
        accepted: Boolean(summary),
        reason,
        hourMatches,
        minuteMatches,
        tokenCount: tokens.length,
        startCol: summary?.startCol ?? null,
        endCol: summary?.endCol ?? null,
        timeRange: summary?.timeRange ?? null,
        interesting: Boolean(summary) || hourMatches > 0 || minuteMatches > 0,
      },
    };
  }

  function compareBlockPriority(left, right) {
    if (left.columns.length !== right.columns.length) {
      return left.columns.length - right.columns.length;
    }

    if (left.kind !== right.kind) {
      return left.kind === "stacked" ? 1 : -1;
    }

    return right.headerStartRow - left.headerStartRow;
  }

  function finalizeTimeBlocks(rawBlocks, sheet) {
    const sorted = [...rawBlocks].sort((left, right) => {
      if (left.headerStartRow !== right.headerStartRow) {
        return left.headerStartRow - right.headerStartRow;
      }

      if (left.startCol !== right.startCol) {
        return left.startCol - right.startCol;
      }

      return right.columns.length - left.columns.length;
    });

    const deduped = [];
    for (const block of sorted) {
      const previous = deduped[deduped.length - 1];
      if (!previous) {
        deduped.push(block);
        continue;
      }

      const overlapsHeader =
        block.headerStartRow <= previous.headerEndRow && previous.headerStartRow <= block.headerEndRow;

      if (!overlapsHeader) {
        deduped.push(block);
        continue;
      }

      if (compareBlockPriority(block, previous) > 0) {
        deduped[deduped.length - 1] = block;
      }
    }

    return deduped.map((block, index) => {
      const nextBlock = deduped[index + 1];
      const dataStartRow = block.headerEndRow + 1;
      const dataEndRow = Math.max(dataStartRow, nextBlock ? nextBlock.headerStartRow - 1 : sheet.maxRow);

      return {
        ...block,
        blockIndex: index + 1,
        dataStartRow,
        dataEndRow,
      };
    });
  }

  function findTimeBlocks(sheet, config) {
    const scanLimit = Math.min(sheet.maxRow, config.heuristics?.timeRowScanLimit ?? sheet.maxRow);
    const candidateDebug = [];
    const rawBlocks = [];

    for (let row = 1; row <= scanLimit; row += 1) {
      const singleCandidate = buildSingleRowCandidate(sheet, row, config);
      if (singleCandidate.debug.interesting) {
        candidateDebug.push(singleCandidate.debug);
      }
      if (singleCandidate.block) {
        rawBlocks.push(singleCandidate.block);
      }

      if (row >= scanLimit) {
        continue;
      }

      const stackedCandidate = buildStackedHeaderCandidate(sheet, row, row + 1, config);
      if (stackedCandidate.debug.interesting) {
        candidateDebug.push(stackedCandidate.debug);
      }
      if (stackedCandidate.block) {
        rawBlocks.push(stackedCandidate.block);
      }
    }

    const blocks = finalizeTimeBlocks(rawBlocks, sheet);
    const acceptedBlocks = blocks.map((block) => ({
      blockIndex: block.blockIndex,
      kind: block.kind,
      headerRows: [block.headerStartRow, block.headerEndRow],
      columnRange: `${indexToColumnLetters(block.startCol)}:${indexToColumnLetters(block.endCol)}`,
      timeRange: `${block.columns[0]?.label ?? "-"} - ${block.columns[block.columns.length - 1]?.label ?? "-"}`,
      dataRows: [block.dataStartRow, block.dataEndRow],
    }));

    return {
      blocks,
      debug: {
        scanLimit,
        candidates: candidateDebug.map((candidate) => ({
          ...candidate,
          columnRange:
            candidate.startCol && candidate.endCol
              ? `${indexToColumnLetters(candidate.startCol)}:${indexToColumnLetters(candidate.endCol)}`
              : null,
        })),
        acceptedBlocks,
        blockCount: blocks.length,
      },
    };
  }

  function rowLooksLikeHeader(text) {
    return text.includes("記録") || text.includes("午睡") || text.includes("睡眠");
  }

  function findNameColumn(sheet, timeAxis, config) {
    const searchEndCol = Math.max(1, timeAxis.startCol - 1);
    const headerScanRows = config.heuristics?.headerScanRows ?? 12;
    const maxScanCol = Math.min(searchEndCol, config.heuristics?.maxNameColumnScan ?? searchEndCol);
    const debug = {
      searchEndCol,
      maxScanCol,
      searchRows: {
        headerStart: Math.max(1, timeAxis.headerStartRow - headerScanRows),
        headerEnd: Math.min(sheet.maxRow, timeAxis.headerEndRow + 1),
        dataStart: timeAxis.dataStartRow,
        dataEnd: timeAxis.dataEndRow,
      },
      matchedKeyword: null,
      candidates: [],
    };

    for (let row = debug.searchRows.headerStart; row <= debug.searchRows.headerEnd; row += 1) {
      for (let col = 1; col <= searchEndCol; col += 1) {
        const text = getCellText(sheet, row, col);
        if (!text) {
          continue;
        }

        if ([...config.compiled.nameKeywords].some((keyword) => text.includes(keyword))) {
          debug.matchedKeyword = {
            row,
            col,
            column: indexToColumnLetters(col),
            text,
          };
          return { column: col, debug };
        }
      }
    }

    let bestCol = null;
    let bestScore = -1;

    for (let col = 1; col <= maxScanCol; col += 1) {
      const names = new Set();
      let activeRows = 0;
      let penalty = 0;

      for (let row = timeAxis.dataStartRow; row <= timeAxis.dataEndRow; row += 1) {
        const text = getCellText(sheet, row, col);
        if (!text) {
          continue;
        }

        if (rowLooksLikeHeader(text) || config.compiled.roleKeywords.has(text)) {
          penalty += 4;
          continue;
        }

        if (parseTimeText(text) !== null) {
          penalty += 2;
          continue;
        }

        if (classifyStatus(text, config).known) {
          penalty += 2;
          continue;
        }

        names.add(text);
        if (countNonEmptyRange(sheet, row, timeAxis.startCol, timeAxis.endCol) > 0) {
          activeRows += 1;
        }
      }

      const score = names.size * 3 + activeRows - penalty;
      debug.candidates.push({
        col,
        column: indexToColumnLetters(col),
        distinctNames: names.size,
        activeRows,
        penalty,
        score,
      });

      if (score > bestScore) {
        bestCol = col;
        bestScore = score;
      }
    }

    debug.candidates.sort((left, right) => right.score - left.score || left.col - right.col);
    debug.candidates = debug.candidates.slice(0, 5);

    return {
      column: bestScore > 0 ? bestCol : null,
      debug,
    };
  }

  function isSkippableCandidateRow(sheet, row, layout, config) {
    const nameText = getCellText(sheet, row, layout.nameColumn);
    const timeTexts = getRangeTexts(sheet, row, layout.timeAxis.startCol, layout.timeAxis.endCol);
    const nonEmptyCount = timeTexts.filter(Boolean).length;

    if (!nameText && nonEmptyCount === 0) {
      return true;
    }

    if (nameText && rowLooksLikeHeader(nameText)) {
      return true;
    }

    if (nameText && config.compiled.roleKeywords.has(nameText) && nonEmptyCount === 0) {
      return true;
    }

    return false;
  }

  function chooseChildName(topName, bottomName, row) {
    if (topName) {
      return topName;
    }
    if (bottomName) {
      return bottomName;
    }
    return `未設定(行${row})`;
  }

  function findChildPairs(sheet, layout, config) {
    const candidates = [];
    const debug = {
      dataRows: [layout.timeAxis.dataStartRow, layout.timeAxis.dataEndRow],
      candidateRows: [],
      rejected: [],
    };

    for (let row = layout.timeAxis.dataStartRow; row <= layout.timeAxis.dataEndRow; row += 1) {
      if (isSkippableCandidateRow(sheet, row, layout, config)) {
        continue;
      }

      const timeTexts = getRangeTexts(sheet, row, layout.timeAxis.startCol, layout.timeAxis.endCol);
      const statusLikeCount = timeTexts.filter((text) => classifyStatus(text, config).present).length;
      const timeCount = timeTexts.filter(Boolean).length;
      if (timeCount === 0) {
        continue;
      }

      const candidate = {
        row,
        name: getCellText(sheet, row, layout.nameColumn),
        timeCount,
        statusLikeCount,
      };
      candidates.push(candidate);
      debug.candidateRows.push(candidate);
    }

    const pairs = [];
    const structureFindings = [];

    for (let index = 0; index < candidates.length; ) {
      const first = candidates[index];
      const second = candidates[index + 1];

      if (!second) {
        const message = `行 ${first.row} に対応する確認者行が見つかりません。1人2行セットが崩れている可能性があります。`;
        structureFindings.push({
          sheetName: sheet.name,
          blockIndex: layout.blockIndex,
          childName: chooseChildName(first.name, "", first.row),
          ruleKey: "brokenPair",
          time: "-",
          timeSort: Number.MAX_SAFE_INTEGER,
          severity: config.rules.brokenPair.severity,
          ruleName: config.rules.brokenPair.label,
          message,
        });
        debug.rejected.push({ row: first.row, reason: message });
        break;
      }

      if (second.row !== first.row + 1) {
        const message = `行 ${first.row} の次行が確認者行として続いていません。2行セット検出に失敗しました。`;
        structureFindings.push({
          sheetName: sheet.name,
          blockIndex: layout.blockIndex,
          childName: chooseChildName(first.name, "", first.row),
          ruleKey: "brokenPair",
          time: "-",
          timeSort: Number.MAX_SAFE_INTEGER,
          severity: config.rules.brokenPair.severity,
          ruleName: config.rules.brokenPair.label,
          message,
        });
        debug.rejected.push({ row: first.row, reason: message });
        index += 1;
        continue;
      }

      if (first.timeCount === 0 && second.timeCount === 0) {
        index += 2;
        continue;
      }

      pairs.push({
        childName: chooseChildName(first.name, second.name, first.row),
        stateRow: first.row,
        reviewerRow: second.row,
      });
      index += 2;
    }

    debug.pairCount = pairs.length;

    return { pairs, structureFindings, debug };
  }

  function buildChildRecord(sheet, layout, pair, config) {
    const intervals = layout.timeAxis.columns.map((column) => {
      const statusText = getCellText(sheet, pair.stateRow, column.col);
      const reviewerText = getCellText(sheet, pair.reviewerRow, column.col);
      return {
        col: column.col,
        timeLabel: column.label,
        timeMinutes: column.minutes,
        statusText,
        reviewerText,
        status: classifyStatus(statusText, config),
      };
    });

    return {
      sheetName: sheet.name,
      blockIndex: layout.blockIndex,
      childName: pair.childName,
      stateRow: pair.stateRow,
      reviewerRow: pair.reviewerRow,
      intervals,
    };
  }

  function buildChildRecords(sheet, layout, pairs, config) {
    return pairs.map((pair) => buildChildRecord(sheet, layout, pair, config));
  }

  function makeFinding(record, config, ruleKey, message, options = {}) {
    const rule = getRuleMeta(config, ruleKey);
    const reviewerNames = uniqueReviewerNames(options.reviewerNames ?? []);
    return {
      sheetName: record.sheetName,
      blockIndex: record.blockIndex,
      stateRow: record.stateRow,
      reviewerRow: record.reviewerRow,
      childName: record.childName,
      ruleKey,
      time: options.time ?? "-",
      timeSort: options.timeSort ?? Number.MAX_SAFE_INTEGER,
      severity: options.severity ?? rule.severity,
      ruleName: rule.label,
      message,
      reviewerNames,
      reviewerText: reviewerNames.join("、"),
      context: options.context ?? null,
      contextRows: buildFindingContextRows(record, options.context),
    };
  }

  function normalizeReviewerName(value) {
    return String(value ?? "").trim();
  }

  function uniqueReviewerNames(values) {
    const seen = new Set();
    const names = [];

    for (const value of values) {
      const name = normalizeReviewerName(value);
      if (!name || seen.has(name)) {
        continue;
      }
      seen.add(name);
      names.push(name);
    }

    return names;
  }

  function reviewersForIntervals(record, startIndex, endIndex = startIndex) {
    const names = [];
    for (let index = startIndex; index <= endIndex; index += 1) {
      names.push(record.intervals[index]?.reviewerText);
    }
    return uniqueReviewerNames(names);
  }

  function buildFindingContextRows(record, context) {
    if (!record || !Number.isInteger(context?.startIndex) || !Number.isInteger(context?.endIndex)) {
      return [];
    }

    const windowStart = Math.max(0, context.startIndex - 1);
    const windowEnd = Math.min(record.intervals.length - 1, context.endIndex + 1);
    const rows = [];

    for (let index = windowStart; index <= windowEnd; index += 1) {
      const interval = record.intervals[index];
      rows.push({
        marker: index < context.startIndex ? "前" : index > context.endIndex ? "後" : "対象",
        time: interval.timeLabel,
        status: interval.statusText || "(空欄)",
        reviewer: interval.reviewerText || "-",
      });
    }

    return rows;
  }

  function buildTimeRangeLabel(start, end) {
    return start === end ? start : `${start} - ${end}`;
  }

  function collectRuns(intervals, predicate, startIndex, endIndex) {
    const runs = [];
    let current = null;

    for (let index = startIndex; index <= endIndex; index += 1) {
      const interval = intervals[index];
      if (!predicate(interval, index)) {
        if (current) {
          runs.push(current);
          current = null;
        }
        continue;
      }

      if (!current) {
        current = { startIndex: index, endIndex: index };
        continue;
      }

      current.endIndex = index;
    }

    if (current) {
      runs.push(current);
    }

    return runs;
  }

  function intervalLabel(interval) {
    return interval?.timeLabel ?? "-";
  }

  function pushLateralFindings(record, config, segment, currentIndex, findings) {
    if (!isRuleEnabled(config, "lateralThreeConsecutive")) {
      return;
    }

    const startIndex = segment.lateralStreakStartIndex ?? currentIndex;
    const startTime = intervalLabel(record.intervals[startIndex]);
    const endTime = intervalLabel(record.intervals[currentIndex]);

    for (let index = startIndex; index <= currentIndex; index += 1) {
      if (segment.lateralFlaggedIndices.has(index)) {
        continue;
      }

      const interval = record.intervals[index];
      findings.push(
        makeFinding(
          record,
          config,
          "lateralThreeConsecutive",
          `横向きが3回以上連続しています (${buildTimeRangeLabel(startTime, endTime)})。このコマを確認してください。`,
          {
            time: interval.timeLabel,
            timeSort: interval.timeMinutes,
            reviewerNames: reviewersForIntervals(record, index),
            context: { startIndex, endIndex: currentIndex },
          },
        ),
      );
      segment.lateralFlaggedIndices.add(index);
    }
  }

  function evaluateChildRecord(record, config) {
    const findings = [];
    const segments = [];
    const lateralThreshold = config.ruleOptions?.lateralConsecutiveThreshold ?? 3;

    let currentSegment = null;
    let hasClosedSegment = false;
    let hasOpenedSegment = false;

    for (let index = 0; index < record.intervals.length; index += 1) {
      const interval = record.intervals[index];
      const { status } = interval;

      if (!status.present) {
        continue;
      }

      if (!status.known && isRuleEnabled(config, "unexpectedSymbol")) {
        findings.push(
          makeFinding(
            record,
            config,
            "unexpectedSymbol",
            `未定義の記号「${status.normalized}」を検出しました。設定ファイルの symbols / symbolAliases を確認してください。`,
            {
              time: interval.timeLabel,
              timeSort: interval.timeMinutes,
              reviewerNames: reviewersForIntervals(record, index),
              context: { startIndex: index, endIndex: index },
            },
          ),
        );
      }

      if (config.compiled.requireReviewer.has(status.canonical) && !interval.reviewerText && isRuleEnabled(config, "missingReviewerCell")) {
        findings.push(
          makeFinding(
            record,
            config,
            "missingReviewerCell",
            `${status.canonical} が入力されていますが、確認者が空欄です。`,
            {
              time: interval.timeLabel,
              timeSort: interval.timeMinutes,
              reviewerNames: [],
              context: { startIndex: index, endIndex: index },
            },
          ),
        );
      }

      if (!status.known) {
        if (currentSegment) {
          currentSegment.populatedIndices.add(index);
          currentSegment.lastObservedIndex = index;
        }
        continue;
      }

      if (!currentSegment && status.category === "prone" && isRuleEnabled(config, "proneOccurred")) {
        findings.push(
          makeFinding(record, config, "proneOccurred", "うつぶせの記録があります。前後の向きと返し確認を確認してください。", {
            time: interval.timeLabel,
            timeSort: interval.timeMinutes,
            reviewerNames: reviewersForIntervals(record, index),
            context: { startIndex: index, endIndex: index },
          }),
        );
      }

      if (status.category === "sleepStart") {
        if (!currentSegment) {
          if (hasClosedSegment && config.ruleOptions?.infoOnResleep && isRuleEnabled(config, "resleep")) {
            findings.push(
              makeFinding(record, config, "resleep", "起床後に再入眠しています。業務ルール上は正常です。", {
                time: interval.timeLabel,
                timeSort: interval.timeMinutes,
                reviewerNames: reviewersForIntervals(record, index),
                context: { startIndex: index, endIndex: index },
              }),
            );
          }

          currentSegment = {
            startIndex: index,
            endIndex: null,
            populatedIndices: new Set([index]),
            missingReviewerIndices: new Set(!interval.reviewerText ? [index] : []),
            lastObservedIndex: index,
            lastPostureCategory: null,
            lateralStreakCategory: null,
            lateralStreakStartIndex: null,
            lateralStreakCount: 0,
            lateralFlaggedIndices: new Set(),
            pendingProneIndex: null,
          };
          segments.push(currentSegment);
          hasOpenedSegment = true;
        } else {
          currentSegment.populatedIndices.add(index);
          currentSegment.lastObservedIndex = index;
        }

        continue;
      }

      if (status.category === "wake") {
        if (!currentSegment) {
          const ruleKey = hasOpenedSegment || hasClosedSegment ? "stateAfterWake" : "missingSleepStart";
          if (isRuleEnabled(config, ruleKey)) {
            findings.push(
              makeFinding(
                record,
                config,
                ruleKey,
                ruleKey === "stateAfterWake"
                  ? "起床後の待機区間で起床以外の状態が続いている可能性があります。"
                  : "入眠記録がないまま状態記録が始まっています。",
                {
                  time: interval.timeLabel,
                  timeSort: interval.timeMinutes,
                  reviewerNames: reviewersForIntervals(record, index),
                  context: { startIndex: index, endIndex: index },
                },
              ),
            );
          }
          hasClosedSegment = true;
          continue;
        }

        currentSegment.populatedIndices.add(index);
        currentSegment.lastObservedIndex = index;
        currentSegment.endIndex = index;
        currentSegment = null;
        hasClosedSegment = true;
        continue;
      }

      if (!currentSegment) {
        const ruleKey = hasOpenedSegment || hasClosedSegment ? "stateAfterWake" : "missingSleepStart";
        if (isRuleEnabled(config, ruleKey)) {
          findings.push(
            makeFinding(
              record,
              config,
              ruleKey,
              ruleKey === "stateAfterWake"
                ? "起床の後に、再入眠なしで状態記録が続いています。"
                : "入眠記録がないのに状態記録が始まっています。",
              {
                time: interval.timeLabel,
                timeSort: interval.timeMinutes,
                reviewerNames: reviewersForIntervals(record, index),
                context: { startIndex: index, endIndex: index },
              },
            ),
          );
        }
        continue;
      }

      currentSegment.populatedIndices.add(index);
      currentSegment.lastObservedIndex = index;
      if (!interval.reviewerText) {
        currentSegment.missingReviewerIndices.add(index);
      }

      if (status.category === "prone" && isRuleEnabled(config, "proneOccurred")) {
        findings.push(
          makeFinding(record, config, "proneOccurred", "うつぶせの記録があります。前後の向きと返し確認を確認してください。", {
            time: interval.timeLabel,
            timeSort: interval.timeMinutes,
            reviewerNames: reviewersForIntervals(record, index),
            context: { startIndex: index, endIndex: index },
          }),
        );
      }

      if (status.category === "left" || status.category === "right") {
        if (currentSegment.lateralStreakCategory === status.category) {
          currentSegment.lateralStreakCount += 1;
        } else {
          currentSegment.lateralStreakCategory = status.category;
          currentSegment.lateralStreakStartIndex = index;
          currentSegment.lateralStreakCount = 1;
        }

        if (
          currentSegment.lateralStreakCount === lateralThreshold &&
          isRuleEnabled(config, "lateralThreeConsecutive")
        ) {
          pushLateralFindings(record, config, currentSegment, index, findings);
        } else if (
          currentSegment.lateralStreakCount > lateralThreshold &&
          isRuleEnabled(config, "lateralThreeConsecutive")
        ) {
          pushLateralFindings(record, config, currentSegment, index, findings);
        }
      } else {
        currentSegment.lateralStreakCategory = null;
        currentSegment.lateralStreakStartIndex = null;
        currentSegment.lateralStreakCount = 0;
        currentSegment.lateralFlaggedIndices = new Set();
      }

      if (
        status.category === "prone" &&
        currentSegment.lastPostureCategory === "prone" &&
        isRuleEnabled(config, "continuousProne")
      ) {
        findings.push(
          makeFinding(record, config, "continuousProne", "うつぶせが連続しています。継続記録か、返し漏れかを確認してください。", {
            time: interval.timeLabel,
            timeSort: interval.timeMinutes,
            reviewerNames: reviewersForIntervals(record, index),
            context: { startIndex: index, endIndex: index },
          }),
        );
      }

      if (status.category === "prone") {
        currentSegment.pendingProneIndex = index;
      } else if (config.compiled.proneRecoveryCategories.has(status.category)) {
        currentSegment.pendingProneIndex = null;
      }

      currentSegment.lastPostureCategory = status.category;
    }

    for (const segment of segments) {
      const endIndex = segment.endIndex ?? segment.lastObservedIndex;

      if (segment.pendingProneIndex !== null && isRuleEnabled(config, "proneAtEnd")) {
        const proneInterval = record.intervals[segment.pendingProneIndex];
        findings.push(
          makeFinding(
            record,
            config,
            "proneAtEnd",
            "うつぶせの後に返し確認がないまま記録が終了しています。",
            {
              time: proneInterval.timeLabel,
              timeSort: proneInterval.timeMinutes,
              reviewerNames: reviewersForIntervals(record, segment.pendingProneIndex),
              context: { startIndex: segment.pendingProneIndex, endIndex: segment.pendingProneIndex },
            },
          ),
        );
      }

      if (segment.endIndex === null && isRuleEnabled(config, "missingWake")) {
        findings.push(
          makeFinding(record, config, "missingWake", "起床記録がないまま記録が終了しています。", {
            time: record.intervals[endIndex]?.timeLabel ?? "-",
            timeSort: record.intervals[endIndex]?.timeMinutes ?? Number.MAX_SAFE_INTEGER,
            reviewerNames: reviewersForIntervals(record, endIndex),
            context: { startIndex: endIndex, endIndex },
          }),
        );
      }

      if (endIndex > segment.startIndex + 1 && isRuleEnabled(config, "blankWithinSleep")) {
        const blankRuns = collectRuns(
          record.intervals,
          (interval) => !interval.status.present,
          segment.startIndex + 1,
          endIndex - 1,
        );

        for (const run of blankRuns) {
          const startTime = intervalLabel(record.intervals[run.startIndex]);
          const endTime = intervalLabel(record.intervals[run.endIndex]);
          findings.push(
            makeFinding(
              record,
              config,
              "blankWithinSleep",
              `入眠〜起床の間で状態空欄があります (${buildTimeRangeLabel(startTime, endTime)})。`,
              {
                time: startTime,
                timeSort: record.intervals[run.startIndex]?.timeMinutes ?? Number.MAX_SAFE_INTEGER,
                reviewerNames: reviewersForIntervals(record, run.startIndex, run.endIndex),
                context: { startIndex: run.startIndex, endIndex: run.endIndex },
              },
            ),
          );
        }
      }

      if (segment.missingReviewerIndices.size > 0 && isRuleEnabled(config, "reviewerGapSummary")) {
        const sorted = [...segment.missingReviewerIndices].sort((left, right) => left - right);
        const startTime = intervalLabel(record.intervals[sorted[0]]);
        const endTime = intervalLabel(record.intervals[sorted[sorted.length - 1]]);
        findings.push(
          makeFinding(
            record,
            config,
            "reviewerGapSummary",
            `確認者抜けがある区間があります (${buildTimeRangeLabel(startTime, endTime)})。`,
            {
              time: startTime,
              timeSort: record.intervals[sorted[0]]?.timeMinutes ?? Number.MAX_SAFE_INTEGER,
              reviewerNames: reviewersForIntervals(record, sorted[0], sorted[sorted.length - 1]),
              context: { startIndex: sorted[0], endIndex: sorted[sorted.length - 1] },
            },
          ),
        );
      }

      const expectedSlots = endIndex - segment.startIndex + 1;
      const recordedSlots = [...segment.populatedIndices].filter(
        (index) => index >= segment.startIndex && index <= endIndex,
      ).length;
      const threshold = config.heuristics?.coverageThreshold ?? 0.8;
      const minimumWindow = config.heuristics?.minimumCoverageWindow ?? 4;
      if (
        expectedSlots >= minimumWindow &&
        recordedSlots / expectedSlots < threshold &&
        isRuleEnabled(config, "insufficientCoverage")
      ) {
        const startLabel = record.intervals[segment.startIndex]?.timeLabel ?? formatMinutes(0);
        const endLabel = record.intervals[endIndex]?.timeLabel ?? formatMinutes(0);
        findings.push(
          makeFinding(
            record,
            config,
            "insufficientCoverage",
            `記録数不足の候補です (${startLabel} - ${endLabel} で ${recordedSlots}/${expectedSlots} 件)。`,
            {
              time: startLabel,
              timeSort: record.intervals[segment.startIndex]?.timeMinutes ?? Number.MAX_SAFE_INTEGER,
              reviewerNames: reviewersForIntervals(record, segment.startIndex, endIndex),
              context: { startIndex: segment.startIndex, endIndex },
            },
          ),
        );
      }
    }

    return findings;
  }

  function collectReviewerStats(records) {
    const byName = new Map();

    for (const record of records) {
      for (const interval of record.intervals) {
        const name = normalizeReviewerName(interval.reviewerText);
        if (!name) {
          continue;
        }

        if (!byName.has(name)) {
          byName.set(name, {
            name,
            count: 0,
            children: new Set(),
            firstTime: interval.timeLabel,
          });
        }

        const entry = byName.get(name);
        entry.count += 1;
        entry.children.add(record.childName);
      }
    }

    const reviewers = [...byName.values()].map((entry) => ({
      name: entry.name,
      count: entry.count,
      childCount: entry.children.size,
      firstTime: entry.firstTime,
    }));

    return {
      uniqueCount: reviewers.length,
      names: reviewers.map((entry) => entry.name),
      reviewers,
    };
  }

  function createRecordKey(item) {
    return [item.sheetName ?? "", item.blockIndex ?? "", item.stateRow ?? "", item.reviewerRow ?? "", item.childName ?? ""].join("|");
  }

  function createReviewGroupingKey(item) {
    return [createRecordKey(item), item.severity ?? "", item.ruleKey ?? item.ruleName ?? ""].join("|");
  }

  function buildRecordIndex(records) {
    const index = new Map();
    for (const record of records) {
      index.set(createRecordKey(record), record);
    }
    return index;
  }

  function toFiniteTimeSort(value) {
    return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
  }

  function getReviewGroupingOptions(config) {
    return {
      groupableRuleKeys: new Set(config.reviewGrouping?.groupableRuleKeys ?? []),
      maxAdjacentGap: Number.isInteger(config.reviewGrouping?.maxAdjacentGap) ? config.reviewGrouping.maxAdjacentGap : 0,
    };
  }

  function buildReviewTimeLabel(record, startIndex, endIndex, fallbackTime) {
    if (!record || !Number.isInteger(startIndex) || !Number.isInteger(endIndex)) {
      return fallbackTime ?? "-";
    }

    const start = record.intervals[startIndex]?.timeLabel ?? fallbackTime ?? "-";
    const end = record.intervals[endIndex]?.timeLabel ?? start;
    return start === end ? start : `${start} - ${end}`;
  }

  function buildReviewMessage(item, rawFindings) {
    if ((rawFindings?.length ?? 0) <= 1) {
      return rawFindings?.[0]?.message ?? item.message ?? "";
    }

    if (item.ruleKey === "proneOccurred") {
      return `うつぶせの記録が続いています (${item.time})。前後の向きと返し確認を確認してください。`;
    }

    if (item.ruleKey === "stateAfterWake") {
      return `起床後の記録が続いています (${item.time})。起床後の追加入力や再入眠の扱いを確認してください。`;
    }

    return rawFindings?.[0]?.message ?? item.message ?? "";
  }

  function canGroupReviewFinding(previous, current, options) {
    if (!options.groupableRuleKeys.has(previous.ruleKey ?? "")) {
      return false;
    }

    if ((previous.ruleKey ?? "") !== (current.ruleKey ?? "")) {
      return false;
    }

    if (createReviewGroupingKey(previous) !== createReviewGroupingKey(current)) {
      return false;
    }

    if (!Number.isInteger(previous.context?.startIndex) || !Number.isInteger(previous.context?.endIndex)) {
      return false;
    }

    if (!Number.isInteger(current.context?.startIndex) || !Number.isInteger(current.context?.endIndex)) {
      return false;
    }

    return current.context.startIndex <= previous.context.endIndex + options.maxAdjacentGap + 1;
  }

  function buildReviewItems(findings, records, config) {
    const options = getReviewGroupingOptions(config);
    const recordIndex = buildRecordIndex(records);
    const sorted = [...findings].sort((left, right) => {
      const recordDelta = createRecordKey(left).localeCompare(createRecordKey(right), "ja");
      if (recordDelta !== 0) {
        return recordDelta;
      }

      if ((left.ruleKey ?? left.ruleName) !== (right.ruleKey ?? right.ruleName)) {
        return String(left.ruleKey ?? left.ruleName).localeCompare(String(right.ruleKey ?? right.ruleName), "ja");
      }

      return toFiniteTimeSort(left.timeSort) - toFiniteTimeSort(right.timeSort);
    });

    const grouped = [];
    for (const finding of sorted) {
      const previous = grouped[grouped.length - 1];
      if (!previous || !canGroupReviewFinding(previous, finding, options)) {
        grouped.push({
          ...finding,
          ruleKey: finding.ruleKey ?? finding.ruleName,
          context: {
            startIndex: finding.context?.startIndex,
            endIndex: finding.context?.endIndex,
          },
          rawFindings: [finding],
        });
        continue;
      }

      previous.rawFindings.push(finding);
      previous.context.startIndex = Math.min(previous.context.startIndex, finding.context.startIndex);
      previous.context.endIndex = Math.max(previous.context.endIndex, finding.context.endIndex);
    }

    return sortFindings(
      grouped.map((group) => {
        const record = recordIndex.get(createRecordKey(group.rawFindings[0]));
        const reviewerNames = uniqueReviewerNames(group.rawFindings.flatMap((finding) => finding.reviewerNames ?? []));
        const item = {
          ...group.rawFindings[0],
          time: buildReviewTimeLabel(record, group.context.startIndex, group.context.endIndex, group.rawFindings[0]?.time),
          timeSort: Number.isInteger(group.context.startIndex)
            ? toFiniteTimeSort(record?.intervals[group.context.startIndex]?.timeMinutes ?? group.rawFindings[0]?.timeSort)
            : toFiniteTimeSort(group.rawFindings[0]?.timeSort),
          reviewerNames,
          reviewerText: reviewerNames.join("、"),
          count: group.rawFindings.length,
          rawFindingCount: group.rawFindings.length,
          context: {
            startIndex: group.context.startIndex,
            endIndex: group.context.endIndex,
          },
          contextRows:
            record && Number.isInteger(group.context.startIndex) && Number.isInteger(group.context.endIndex)
              ? buildFindingContextRows(record, group.context)
              : [],
          details: [...new Set(group.rawFindings.map((finding) => finding.message).filter(Boolean))],
          sourceFindings: group.rawFindings,
        };

        item.message = buildReviewMessage(item, group.rawFindings);
        if (item.message && !item.details.includes(item.message)) {
          item.details = [item.message, ...item.details];
        }

        return item;
      }),
    );
  }

  function summarizeReviewTotals(reviewItems) {
    const totals = { red: 0, yellow: 0, info: 0 };
    for (const item of reviewItems) {
      if (totals[item.severity] !== undefined) {
        totals[item.severity] += 1;
      }
    }
    return totals;
  }

  function evaluateSheetReviewerStats(reviewerStats, config) {
    if (reviewerStats.uniqueCount !== 1 || !isRuleEnabled(config, "singleReviewerSheet")) {
      return [];
    }

    const rule = getRuleMeta(config, "singleReviewerSheet");
    const reviewerName = reviewerStats.names[0];
    return [
      {
        childName: "一覧全体",
        ruleKey: "singleReviewerSheet",
        time: "-",
        timeSort: Number.MAX_SAFE_INTEGER - 1,
        severity: rule.severity,
        ruleName: rule.label,
        message: `一覧表全体で記録者が「${reviewerName}」さん1人だけです。複数人で確認する運用か確認してください。`,
        reviewerNames: [reviewerName],
        reviewerText: reviewerName,
      },
    ];
  }

  class AnalysisError extends Error {
    constructor(message, debug = null) {
      super(message);
      this.name = "AnalysisError";
      this.debug = debug;
    }
  }

  function summarizeFindings(findings, reviewItems, records, layouts, reviewerStats) {
    const totals = { red: 0, yellow: 0, info: 0 };
    for (const finding of findings) {
      totals[finding.severity] += 1;
    }

    const blockSummaries = layouts.map((layout) => ({
      blockIndex: layout.blockIndex,
      headerRows:
        layout.timeAxis.headerStartRow === layout.timeAxis.headerEndRow
          ? `${layout.timeAxis.headerStartRow}行`
          : `${layout.timeAxis.headerStartRow}-${layout.timeAxis.headerEndRow}行`,
      columnRange: `${indexToColumnLetters(layout.timeAxis.startCol)}:${indexToColumnLetters(layout.timeAxis.endCol)}`,
      dataRows: `${layout.timeAxis.dataStartRow}-${layout.timeAxis.dataEndRow}`,
      timeRange: `${formatMinutes(layout.timeAxis.columns[0]?.minutes ?? 0)} - ${formatMinutes(
        layout.timeAxis.columns[layout.timeAxis.columns.length - 1]?.minutes ?? 0,
      )}`,
      nameColumn: indexToColumnLetters(layout.nameColumn),
      pairCount: records.filter((record) => record.blockIndex === layout.blockIndex).length,
    }));

    return {
      totals,
      reviewTotals: summarizeReviewTotals(reviewItems),
      reviewItemCount: reviewItems.length,
      childCount: records.length,
      blockCount: layouts.length,
      timeRange: [...new Set(blockSummaries.map((block) => block.timeRange))].join(" / "),
      blockSummaries,
      reviewerStats,
    };
  }

  function analyzeSheet(sheet, rawConfig) {
    const config = compileConfig(rawConfig);
    const { blocks: timeBlocks, debug: timeDebug } = findTimeBlocks(sheet, config);
    if (timeBlocks.length === 0) {
      throw new AnalysisError(
        "時刻列を検出できませんでした。設定ファイルの時刻間隔か、シート構造を確認してください。",
        { timeBlocks: timeDebug, blocks: [] },
      );
    }

    const layouts = [];
    const records = [];
    const collectedFindings = [];
    const blockDebug = [];

    for (const timeAxis of timeBlocks) {
      const { column: nameColumn, debug: nameDebug } = findNameColumn(sheet, timeAxis, config);
      if (!nameColumn) {
        blockDebug.push({
          blockIndex: timeAxis.blockIndex,
          timeAxis,
          nameColumn: null,
          nameDebug,
          pairDebug: null,
        });
        continue;
      }

      const layout = {
        blockIndex: timeAxis.blockIndex,
        timeAxis,
        nameColumn,
      };
      const { pairs, structureFindings, debug: pairDebug } = findChildPairs(sheet, layout, config);
      const blockRecords = buildChildRecords(sheet, layout, pairs, config);
      const blockFindings = [
        ...structureFindings,
        ...blockRecords.flatMap((record) => evaluateChildRecord(record, config)),
      ];

      layouts.push(layout);
      records.push(...blockRecords);
      collectedFindings.push(...blockFindings);
      blockDebug.push({
        blockIndex: timeAxis.blockIndex,
        timeAxis,
        nameColumn,
        nameDebug,
        pairDebug,
      });
    }

    if (layouts.length === 0) {
      throw new AnalysisError(
        "名前列を検出できませんでした。名前列の見出しか、設定ファイルの nameKeywords を確認してください。",
        { timeBlocks: timeDebug, blocks: blockDebug },
      );
    }

    if (records.length === 0 && collectedFindings.length === 0) {
      throw new AnalysisError(
        "1人2行セットを検出できませんでした。シート構造が想定と大きく異なる可能性があります。",
        { timeBlocks: timeDebug, blocks: blockDebug },
      );
    }

    const reviewerStats = collectReviewerStats(records);
    collectedFindings.push(...evaluateSheetReviewerStats(reviewerStats, config));
    const findings = sortFindings(collectedFindings);
    const reviewItems = buildReviewItems(findings, records, config);

    return {
      layout: layouts[0],
      layouts,
      records,
      findings,
      reviewItems,
      summary: summarizeFindings(findings, reviewItems, records, layouts, reviewerStats),
      debug: {
        timeBlocks: timeDebug,
        blocks: blockDebug,
      },
    };
  }

  function ensureJsZip() {
    const jszip = globalThis.JSZip;
    if (!jszip) {
      throw new Error("JSZip の読み込みに失敗しました。配布ファイルが壊れていないか確認してください。");
    }
    return jszip;
  }

  function parseXml(xmlText) {
    const parser = new DOMParser();
    return parser.parseFromString(xmlText, "application/xml");
  }

  function getChildElementsByTagName(element, tagName) {
    return [...element.getElementsByTagName(tagName)];
  }

  function collectRichText(node) {
    return [...node.getElementsByTagName("t")].map((item) => item.textContent ?? "").join("");
  }

  function normalizeXmlPath(basePath, relativePath) {
    if (relativePath.startsWith("/")) {
      return relativePath.replace(/^\/+/, "");
    }

    const baseSegments = basePath.split("/");
    baseSegments.pop();
    const inputSegments = relativePath.split("/");
    const output = [...baseSegments];

    for (const segment of inputSegments) {
      if (!segment || segment === ".") {
        continue;
      }

      if (segment === "..") {
        output.pop();
        continue;
      }

      output.push(segment);
    }

    return output.join("/");
  }

  function getWorkbookRelationships(document) {
    const relationships = new Map();
    for (const node of getChildElementsByTagName(document, "Relationship")) {
      const id = node.getAttribute("Id");
      const target = node.getAttribute("Target");
      if (id && target) {
        relationships.set(id, target);
      }
    }
    return relationships;
  }

  function getBuiltInFormatCode(numFmtId) {
    const map = {
      18: "h:mm AM/PM",
      19: "h:mm:ss AM/PM",
      20: "h:mm",
      21: "h:mm:ss",
      22: "m/d/yy h:mm",
      45: "mm:ss",
      46: "[h]:mm:ss",
      47: "mmss.0",
    };
    return map[numFmtId] ?? "";
  }

  function looksTimeLikeFormat(formatCode, numFmtId) {
    if ([18, 19, 20, 21, 22, 45, 46, 47].includes(numFmtId)) {
      return true;
    }

    const normalized = String(formatCode ?? "").toLowerCase();
    return normalized.includes("h") || normalized.includes("am/pm") || normalized.includes("a/p");
  }

  function parseStyles(document) {
    const customFormats = new Map();
    for (const node of getChildElementsByTagName(document, "numFmt")) {
      const id = Number(node.getAttribute("numFmtId"));
      const formatCode = node.getAttribute("formatCode") ?? "";
      if (Number.isFinite(id)) {
        customFormats.set(id, formatCode);
      }
    }

    const styleInfo = [];
    const cellXfsNodes = document.getElementsByTagName("cellXfs")[0];
    if (!cellXfsNodes) {
      return styleInfo;
    }

    for (const xf of getChildElementsByTagName(cellXfsNodes, "xf")) {
      const numFmtId = Number(xf.getAttribute("numFmtId") ?? "0");
      const formatCode = customFormats.get(numFmtId) ?? getBuiltInFormatCode(numFmtId);
      styleInfo.push({
        numFmtId,
        formatCode,
        timeLike: looksTimeLikeFormat(formatCode, numFmtId),
      });
    }

    return styleInfo;
  }

  function parseSharedStrings(document) {
    return getChildElementsByTagName(document, "si").map((node) => collectRichText(node));
  }

  function decodeCellValue(cellNode, sharedStrings, styles) {
    const type = cellNode.getAttribute("t") ?? "n";
    const styleIndex = Number(cellNode.getAttribute("s") ?? "0");
    const style = styles[styleIndex] ?? { timeLike: false };
    const valueNode = cellNode.getElementsByTagName("v")[0];
    const inlineNode = cellNode.getElementsByTagName("is")[0];

    let raw = null;
    if (type === "inlineStr" && inlineNode) {
      raw = collectRichText(inlineNode);
    } else if (valueNode) {
      const text = valueNode.textContent ?? "";
      if (type === "s") {
        raw = sharedStrings[Number(text)] ?? "";
      } else if (type === "b") {
        raw = text === "1";
      } else if (type === "str") {
        raw = text;
      } else {
        const numericValue = Number(text);
        raw = Number.isNaN(numericValue) ? text : numericValue;
      }
    }

    let display = "";
    if (typeof raw === "number" && style.timeLike) {
      const minutes = (((raw % 1) + 1) % 1) * 24 * 60;
      const rounded = Math.round(minutes) % (24 * 60);
      display = `${String(Math.floor(rounded / 60)).padStart(2, "0")}:${String(rounded % 60).padStart(2, "0")}`;
    } else if (raw === true) {
      display = "TRUE";
    } else if (raw === false) {
      display = "FALSE";
    } else {
      display = raw === null ? "" : String(raw);
    }

    return {
      raw,
      text: raw === null ? "" : String(raw),
      display,
      type,
      styleIndex,
    };
  }

  function expandMergedCells(cellMap, merges) {
    for (const mergeRef of merges) {
      const range = parseRangeReference(mergeRef);
      if (!range) {
        continue;
      }

      const rootCell = cellMap.get(createCellKey(range.start.row, range.start.col)) ?? {
        row: range.start.row,
        col: range.start.col,
        raw: "",
        text: "",
        display: "",
        type: "empty",
        styleIndex: 0,
      };

      for (let row = range.start.row; row <= range.end.row; row += 1) {
        for (let col = range.start.col; col <= range.end.col; col += 1) {
          const key = createCellKey(row, col);
          const existingCell = cellMap.get(key) ?? null;
          const existingText = String(existingCell?.display ?? existingCell?.text ?? existingCell?.raw ?? "").trim();

          if (existingCell && existingText) {
            continue;
          }

          cellMap.set(key, {
            ...(existingCell ?? {}),
            row,
            col,
            raw: rootCell.raw,
            text: rootCell.text,
            display: rootCell.display,
            type: rootCell.type,
            styleIndex: existingCell?.styleIndex ?? rootCell.styleIndex,
            merged: true,
            mergeRoot: `${range.start.row}:${range.start.col}`,
          });
        }
      }
    }
  }

  async function readTextFromZip(zip, path) {
    const file = zip.file(path);
    if (!file) {
      return null;
    }
    return file.async("string");
  }

  async function parseSheet(zip, path, sharedStrings, styles, name) {
    const xmlText = await readTextFromZip(zip, path);
    if (!xmlText) {
      throw new Error(`シート XML を読み込めませんでした: ${name}`);
    }

    const document = parseXml(xmlText);
    const cellMap = new Map();
    let maxRow = 0;
    let maxCol = 0;

    for (const cellNode of getChildElementsByTagName(document, "c")) {
      const ref = cellNode.getAttribute("r");
      if (!ref) {
        continue;
      }

      const position = parseCellReference(ref);
      if (!position) {
        continue;
      }

      const value = decodeCellValue(cellNode, sharedStrings, styles);
      cellMap.set(createCellKey(position.row, position.col), {
        row: position.row,
        col: position.col,
        ...value,
      });
      maxRow = Math.max(maxRow, position.row);
      maxCol = Math.max(maxCol, position.col);
    }

    const merges = getChildElementsByTagName(document, "mergeCell").map((node) => node.getAttribute("ref")).filter(Boolean);
    expandMergedCells(cellMap, merges);

    for (const mergeRef of merges) {
      const range = parseRangeReference(mergeRef);
      if (!range) {
        continue;
      }
      maxRow = Math.max(maxRow, range.end.row);
      maxCol = Math.max(maxCol, range.end.col);
    }

    return {
      name,
      path,
      maxRow,
      maxCol,
      cellMap,
      merges,
    };
  }

  async function readWorkbook(arrayBuffer) {
    const JSZip = ensureJsZip();
    const zip = await JSZip.loadAsync(arrayBuffer);

    const workbookXml = await readTextFromZip(zip, "xl/workbook.xml");
    if (!workbookXml) {
      throw new Error("workbook.xml を検出できませんでした。xlsx 形式を確認してください。");
    }

    const workbookRelsXml = await readTextFromZip(zip, "xl/_rels/workbook.xml.rels");
    if (!workbookRelsXml) {
      throw new Error("workbook.xml.rels を検出できませんでした。破損した xlsx の可能性があります。");
    }

    const sharedStringsXml = await readTextFromZip(zip, "xl/sharedStrings.xml");
    const stylesXml = await readTextFromZip(zip, "xl/styles.xml");

    const workbookDocument = parseXml(workbookXml);
    const workbookRelsDocument = parseXml(workbookRelsXml);
    const sharedStrings = sharedStringsXml ? parseSharedStrings(parseXml(sharedStringsXml)) : [];
    const styles = stylesXml ? parseStyles(parseXml(stylesXml)) : [];
    const relationships = getWorkbookRelationships(workbookRelsDocument);

    const sheets = [];
    for (const sheetNode of getChildElementsByTagName(workbookDocument, "sheet")) {
      const name = sheetNode.getAttribute("name") ?? "Sheet";
      const relationshipId = sheetNode.getAttribute("r:id");
      const target = relationshipId ? relationships.get(relationshipId) : null;
      if (!target) {
        continue;
      }

      const path = normalizeXmlPath("xl/workbook.xml", target);
      sheets.push(await parseSheet(zip, path, sharedStrings, styles, name));
    }

    return { sheets };
  }

  function escapeCsv(value) {
    const text = value === null || value === undefined ? "" : String(value);
    if (/[,"\n]/.test(text)) {
      return `"${text.replaceAll('"', '""')}"`;
    }
    return text;
  }

  function downloadFindingsCsv(findings, fileName = "nap-check-results.csv") {
    const rows = [
      ["園児名", "時刻", "種別", "ルール名", "詳細メッセージ"],
      ...findings.map((finding) => [
        finding.childName,
        finding.time,
        finding.severity,
        finding.ruleName,
        finding.message,
      ]),
    ];

    const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\r\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 2000);
  }

  function base64ToArrayBuffer(base64) {
    const binaryString = globalThis.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let index = 0; index < binaryString.length; index += 1) {
      bytes[index] = binaryString.charCodeAt(index);
    }
    return bytes.buffer;
  }

  const DEFAULT_UI_SETTINGS = {
    showDebugPanelDefault: false,
    defaultViewMode: "grouped",
    showInfoByDefault: true,
    sortResultsBy: {
      grouped: "severity_then_child",
      timeline: "time_then_severity",
    },
    severityLabels: {
      red: "赤",
      yellow: "黄",
      info: "情報",
    },
    severityDescriptions: {
      red: "すぐ確認したい項目です",
      yellow: "念のため確認したい項目です",
      info: "参考として見ておきたい項目です",
    },
    viewModeLabels: {
      grouped: "園児ごとにまとめる",
      timeline: "時刻順で見る",
    },
    debugPanelLabel: "詳細ログ",
    debugPanelHint: "必要なときだけ開く",
    ruleShortTexts: {},
    ruleActionTexts: {},
    ruleReasonTexts: {},
  };

  const SEVERITY_ORDER = {
    red: 0,
    yellow: 1,
    info: 2,
  };

  function getUiSettings() {
    const ui = state.config?.ui ?? {};
    return {
      ...DEFAULT_UI_SETTINGS,
      ...ui,
      sortResultsBy: {
        ...DEFAULT_UI_SETTINGS.sortResultsBy,
        ...(ui.sortResultsBy ?? {}),
      },
      severityLabels: {
        ...DEFAULT_UI_SETTINGS.severityLabels,
        ...(ui.severityLabels ?? {}),
      },
      severityDescriptions: {
        ...DEFAULT_UI_SETTINGS.severityDescriptions,
        ...(ui.severityDescriptions ?? {}),
      },
      viewModeLabels: {
        ...DEFAULT_UI_SETTINGS.viewModeLabels,
        ...(ui.viewModeLabels ?? {}),
      },
      ruleShortTexts: {
        ...DEFAULT_UI_SETTINGS.ruleShortTexts,
        ...(ui.ruleShortTexts ?? {}),
      },
      ruleActionTexts: {
        ...DEFAULT_UI_SETTINGS.ruleActionTexts,
        ...(ui.ruleActionTexts ?? {}),
      },
      ruleReasonTexts: {
        ...DEFAULT_UI_SETTINGS.ruleReasonTexts,
        ...(ui.ruleReasonTexts ?? {}),
      },
    };
  }

  function applyUiDefaults() {
    const ui = getUiSettings();
    state.viewMode = ui.defaultViewMode === "timeline" ? "timeline" : "grouped";
    state.activeSeverities = new Set(["red", "yellow"]);
    if (ui.showInfoByDefault !== false) {
      state.activeSeverities.add("info");
    }

    if (elements?.debugPanel) {
      elements.debugPanel.open = Boolean(state.debugMode || ui.showDebugPanelDefault);
    }
  }

  const state = {
    config: cloneJson(DEFAULT_CONFIG),
    defaultConfig: cloneJson(DEFAULT_CONFIG),
    configLabel: "既定設定",
    workbook: null,
    selectedSheetName: "",
    analysis: null,
    debug: null,
    activeSeverities: new Set(["red", "yellow", "info"]),
    childFilter: "",
    viewMode: "grouped",
    diagnostics: {
      fileReads: 0,
      analyzeClicks: 0,
      demoClicks: 0,
      downloadClicks: 0,
    },
    pwaStatus: {
      secure: false,
      standalone: false,
      online: true,
      serviceWorkerSupported: false,
      registrationState: "unknown",
      hasController: false,
    },
    selectedReviewCell: null,
    sourceLabel: "未読込",
    debugMode: false,
    buildInfo: APP_BUILD_INFO,
    lastCopiedDiagnosticsText: "",
    currentErrorMessage: "",
    lastErrorMessage: "",
    lastAnalysisAt: "",
    supportIncludeSensitive: false,
    updateInfo: {
      status: "idle",
      message: "まだ確認していません",
      checkedAt: "",
      waiting: false,
    },
    supportListenersBound: false,
  };

  function getElements() {
    return {
      fileInput: document.querySelector("#file-input"),
      configInput: document.querySelector("#config-input"),
      resetConfigButton: document.querySelector("#reset-config-button"),
      sheetSelect: document.querySelector("#sheet-select"),
      analyzeButton: document.querySelector("#analyze-button"),
      demoFileButton: document.querySelector("#demo-file-button"),
      downloadCsvButton: document.querySelector("#download-csv-button"),
      summaryCards: document.querySelector("#summary-cards"),
      structureSummary: document.querySelector("#structure-summary"),
      reviewCount: document.querySelector("#review-count"),
      reviewGuide: document.querySelector("#review-guide"),
      sheetAlertBanner: document.querySelector("#sheet-alert-banner"),
      reviewBoard: document.querySelector("#review-board"),
      cellDetailPanel: document.querySelector("#cell-detail-panel"),
      resultsList: document.querySelector("#results-list"),
      resultsCount: document.querySelector("#results-count"),
      childFilter: document.querySelector("#child-filter"),
      configStatus: document.querySelector("#config-status"),
      statusBanner: document.querySelector("#status-banner"),
      errorBox: document.querySelector("#error-box"),
      fileMeta: document.querySelector("#file-meta"),
      buildVersion: document.querySelector("#build-version"),
      buildDetail: document.querySelector("#build-detail"),
      debugBanner: document.querySelector("#debug-banner"),
      resultsGuide: document.querySelector("#results-guide"),
      diagnosticsPanel: document.querySelector("#diagnostics-panel"),
      diagnosticModePill: document.querySelector("#diagnostic-mode-pill"),
      copyDiagnosticsButton: document.querySelector("#copy-diagnostics-button"),
      diagnosticCopyStatus: document.querySelector("#diagnostic-copy-status"),
      diagnosticCopyFallback: document.querySelector("#diagnostic-copy-fallback"),
      debugPanel: document.querySelector("#debug-panel"),
      debugPanelLabel: document.querySelector("#debug-panel-label"),
      debugPanelHint: document.querySelector("#debug-panel-hint"),
      debugOutput: document.querySelector("#debug-output"),
      environmentHint: document.querySelector("#environment-hint"),
      diagnosticJs: document.querySelector("#diagnostic-js"),
      diagnosticUrl: document.querySelector("#diagnostic-url"),
      diagnosticHome: document.querySelector("#diagnostic-home"),
      diagnosticOffline: document.querySelector("#diagnostic-offline"),
      diagnosticFile: document.querySelector("#diagnostic-file"),
      diagnosticAnalyze: document.querySelector("#diagnostic-analyze"),
      diagnosticDemo: document.querySelector("#diagnostic-demo"),
      diagnosticDownload: document.querySelector("#diagnostic-download"),
      supportPanel: document.querySelector("#support-panel"),
      supportModePill: document.querySelector("#support-mode-pill"),
      supportSensitiveToggle: document.querySelector("#support-sensitive-toggle"),
      supportCopyButton: document.querySelector("#support-copy-button"),
      supportCopyStatus: document.querySelector("#support-copy-status"),
      supportCopyFallback: document.querySelector("#support-copy-fallback"),
      supportCheckUpdateButton: document.querySelector("#support-check-update-button"),
      supportApplyUpdateButton: document.querySelector("#support-apply-update-button"),
      supportVersion: document.querySelector("#support-version"),
      supportBuild: document.querySelector("#support-build"),
      supportRuntime: document.querySelector("#support-runtime"),
      supportUrl: document.querySelector("#support-url"),
      supportPwa: document.querySelector("#support-pwa"),
      supportOffline: document.querySelector("#support-offline"),
      supportServiceWorker: document.querySelector("#support-service-worker"),
      supportUpdate: document.querySelector("#support-update"),
      supportFile: document.querySelector("#support-file"),
      supportSheet: document.querySelector("#support-sheet"),
      supportBlocks: document.querySelector("#support-blocks"),
      supportChildren: document.querySelector("#support-children"),
      supportRedIncidents: document.querySelector("#support-red-incidents"),
      supportRedCells: document.querySelector("#support-red-cells"),
      supportYellowIncidents: document.querySelector("#support-yellow-incidents"),
      supportSelectedCell: document.querySelector("#support-selected-cell"),
      supportLastError: document.querySelector("#support-last-error"),
      supportLastAnalysis: document.querySelector("#support-last-analysis"),
      severityInputs: [...document.querySelectorAll('input[name="severity-filter"]')],
      viewModeInputs: [...document.querySelectorAll('input[name="view-mode"]')],
    };
  }

  let elements = null;

  function setStatus(message) {
    elements.statusBanner.textContent = message;
  }

  function setError(message) {
    if (!message) {
      elements.errorBox.hidden = true;
      elements.errorBox.textContent = "";
      return;
    }

    elements.errorBox.hidden = false;
    elements.errorBox.textContent = message;
  }

  function getSelectedSheet() {
    return state.workbook?.sheets.find((sheet) => sheet.name === state.selectedSheetName) ?? null;
  }

  function getFilteredFindings() {
    const findings = state.analysis?.reviewItems ?? state.analysis?.findings ?? [];
    return findings.filter((finding) => {
      if (!state.activeSeverities.has(finding.severity)) {
        return false;
      }

      if (state.childFilter && finding.childName !== state.childFilter) {
        return false;
      }

      return true;
    });
  }

  const severityLabels = {
    red: "赤",
    yellow: "黄",
    info: "情報",
  };

  function summarizeSeverityCounts(findings) {
    const totals = { red: 0, yellow: 0, info: 0 };
    for (const finding of findings) {
      if (totals[finding.severity] !== undefined) {
        totals[finding.severity] += 1;
      }
    }
    return totals;
  }

  function buildTimeRangeText(items) {
    const timedItems = items
      .filter((item) => item.time && item.time !== "-" && Number.isFinite(item.timeSort))
      .sort((left, right) => left.timeSort - right.timeSort);

    if (timedItems.length === 0) {
      return "時刻の確認";
    }

    const ranges = [];
    let currentStart = timedItems[0];
    let currentEnd = timedItems[0];

    for (let index = 1; index < timedItems.length; index += 1) {
      const item = timedItems[index];
      if (item.timeSort - currentEnd.timeSort === 5) {
        currentEnd = item;
        continue;
      }

      ranges.push(currentStart.time === currentEnd.time ? currentStart.time : `${currentStart.time} - ${currentEnd.time}`);
      currentStart = item;
      currentEnd = item;
    }

    ranges.push(currentStart.time === currentEnd.time ? currentStart.time : `${currentStart.time} - ${currentEnd.time}`);
    return ranges.join(", ");
  }

  function buildActionText(ruleName, severity) {
    const actions = {
      うつぶせ連続: "うつぶせが続いていないか確認してください。",
      うつぶせ返し未確認: "返し確認の記録漏れがないか確認してください。",
      入眠記録なしで開始: "最初の記録が入眠から始まっているか確認してください。",
      起床記録なしで終了: "起床の記録漏れがないか確認してください。",
      起床後に状態が継続: "起床後の記録が続いていないか確認してください。",
      確認者未入力: "確認した人の記入漏れがないか確認してください。",
      想定外記号: "いつもと違う記号が入っていないか確認してください。",
      "2行セット崩れ": "状態と確認者の並びがずれていないか確認してください。",
      うつぶせ出現: "うつぶせ後の返し確認ができているか見直してください。",
      "入眠〜起床間の空欄": "途中の記録漏れがないか確認してください。",
      確認者抜け区間あり: "確認した人の記録漏れがないか確認してください。",
      記録数不足候補: "記録の間隔が足りているか確認してください。",
      再入眠: "再入眠として問題ないか確認してください。",
    };

    return actions[ruleName] ?? (severity === "info" ? "参考情報です。" : "記録内容を確認してください。");
  }

  function aggregateFindings(findings) {
    const groups = new Map();

    for (const finding of findings) {
      const key = JSON.stringify([finding.childName, finding.severity, finding.ruleName]);
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key).push(finding);
    }

    const aggregated = [];
    for (const items of groups.values()) {
      const sortedItems = [...items].sort((left, right) => {
        if (left.timeSort !== right.timeSort) {
          return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
        }
        return left.message.localeCompare(right.message, "ja");
      });

      const first = sortedItems[0];
      const messages = [...new Set(sortedItems.map((item) => item.message))];
      const timeLabel = buildTimeRangeText(sortedItems);
      aggregated.push({
        childName: first.childName,
        severity: first.severity,
        ruleName: first.ruleName,
        time: timeLabel,
        timeSort: sortedItems[0]?.timeSort ?? Number.MAX_SAFE_INTEGER,
        message: messages[0] ?? "",
        details: messages,
        count: sortedItems.length,
        action: buildActionText(first.ruleName, first.severity),
      });
    }

    return aggregated.sort((left, right) => {
      const severityRank = { red: 0, yellow: 1, info: 2 };
      const severityDelta = severityRank[left.severity] - severityRank[right.severity];
      if (severityDelta !== 0) {
        return severityDelta;
      }

      if (left.childName !== right.childName) {
        return left.childName.localeCompare(right.childName, "ja");
      }

      if (left.timeSort !== right.timeSort) {
        return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
      }

      return left.ruleName.localeCompare(right.ruleName, "ja");
    });
  }

  function getDisplayFindings() {
    return aggregateFindings(getFilteredFindings());
  }

  function getAllDisplayFindings() {
    return aggregateFindings(state.analysis?.findings ?? []);
  }

  function getSeverityMeta(severity) {
    const ui = getUiSettings();
    return {
      label: ui.severityLabels[severity] ?? severity,
      description: ui.severityDescriptions[severity] ?? "",
    };
  }

  function summarizeSeverityCounts(findings) {
    const totals = { red: 0, yellow: 0, info: 0 };
    for (const finding of findings) {
      if (totals[finding.severity] !== undefined) {
        totals[finding.severity] += 1;
      }
    }
    return totals;
  }

  function buildTimeRangeText(items) {
    const timedItems = items
      .filter((item) => item.time && item.time !== "-" && Number.isFinite(item.timeSort))
      .sort((left, right) => left.timeSort - right.timeSort);

    if (timedItems.length === 0) {
      return "時刻未特定";
    }

    const ranges = [];
    let currentStart = timedItems[0];
    let currentEnd = timedItems[0];

    for (let index = 1; index < timedItems.length; index += 1) {
      const item = timedItems[index];
      if (item.timeSort - currentEnd.timeSort === 5) {
        currentEnd = item;
        continue;
      }

      ranges.push(currentStart.time === currentEnd.time ? currentStart.time : `${currentStart.time} - ${currentEnd.time}`);
      currentStart = item;
      currentEnd = item;
    }

    ranges.push(currentStart.time === currentEnd.time ? currentStart.time : `${currentStart.time} - ${currentEnd.time}`);
    return ranges.join(", ");
  }

  function buildDefaultActionText(ruleName, severity) {
    if (severity === "red") {
      return "記録の前後を含めて、早めに確認してください。";
    }

    if (severity === "yellow") {
      return "念のため前後の記録も確認してください。";
    }

    return "参考情報です。必要に応じて前後の記録を確認してください。";
  }

  function getReviewerNamesFromFinding(finding) {
    return uniqueReviewerNames(finding.reviewerNames ?? (finding.reviewerText ? [finding.reviewerText] : []));
  }

  function formatReviewerDisplay(names, fallback = "未入力または対象なし") {
    const reviewerNames = uniqueReviewerNames(names);
    return reviewerNames.length > 0 ? reviewerNames.join("、") : fallback;
  }

  function getRuleShortText(finding) {
    const ui = getUiSettings();
    return ui.ruleShortTexts[finding.ruleName] ?? finding.ruleName;
  }

  function getRuleActionText(finding) {
    const ui = getUiSettings();
    return ui.ruleActionTexts[finding.ruleName] ?? buildDefaultActionText(finding.ruleName, finding.severity);
  }

  function getRuleReasonText(finding) {
    const ui = getUiSettings();
    return ui.ruleReasonTexts[finding.ruleName] ?? "この条件が設定ルールに当てはまりました。";
  }

  function getContextRowsFromFinding(finding) {
    return Array.isArray(finding.contextRows) ? finding.contextRows : [];
  }

  function dedupeContextRows(rows) {
    const seen = new Set();
    const output = [];

    for (const row of rows) {
      const key = `${row.marker}|${row.time}|${row.status}|${row.reviewer}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      output.push(row);
    }

    return output;
  }

  function aggregateFindings(findings) {
    const groups = new Map();

    for (const finding of findings) {
      const key = JSON.stringify([finding.childName, finding.severity, finding.ruleName]);
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key).push(finding);
    }

    const aggregated = [];
    for (const [key, items] of groups.entries()) {
      const sortedItems = [...items].sort((left, right) => {
        if (left.timeSort !== right.timeSort) {
          return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
        }
        return left.message.localeCompare(right.message, "ja");
      });

      const first = sortedItems[0];
      const messages = [...new Set(sortedItems.map((item) => item.message))];
      const reviewerNames = uniqueReviewerNames(sortedItems.flatMap((item) => getReviewerNamesFromFinding(item)));
      const contextRows = dedupeContextRows(sortedItems.flatMap((item) => getContextRowsFromFinding(item)));
      aggregated.push({
        id: key,
        aggregateKey: key,
        childName: first.childName,
        severity: first.severity,
        ruleName: first.ruleName,
        shortText: getRuleShortText(first),
        time: buildTimeRangeText(sortedItems),
        timeSort: sortedItems[0]?.timeSort ?? Number.MAX_SAFE_INTEGER,
        message: messages[0] ?? "",
        details: messages,
        count: sortedItems.length,
        action: getRuleActionText(first),
        reason: getRuleReasonText(first),
        contextRows,
        reviewerNames,
        reviewerText: formatReviewerDisplay(
          reviewerNames,
          first.ruleName === "確認者未入力" ? "未入力" : "未入力または対象なし",
        ),
        sourceFindings: sortedItems,
      });
    }

    return aggregated;
  }

  function compareFindingsBySeverityThenChild(left, right) {
    const severityDelta = SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity];
    if (severityDelta !== 0) {
      return severityDelta;
    }

    if (left.childName !== right.childName) {
      return left.childName.localeCompare(right.childName, "ja");
    }

    if (left.timeSort !== right.timeSort) {
      return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
    }

    return left.ruleName.localeCompare(right.ruleName, "ja");
  }

  function compareFindingsByTimeline(left, right) {
    if (left.timeSort !== right.timeSort) {
      return (left.timeSort ?? Number.MAX_SAFE_INTEGER) - (right.timeSort ?? Number.MAX_SAFE_INTEGER);
    }

    const severityDelta = SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity];
    if (severityDelta !== 0) {
      return severityDelta;
    }

    if (left.childName !== right.childName) {
      return left.childName.localeCompare(right.childName, "ja");
    }

    return left.ruleName.localeCompare(right.ruleName, "ja");
  }

  function sortDisplayFindings(findings, mode = state.viewMode) {
    const ui = getUiSettings();
    const sortKey = ui.sortResultsBy?.[mode];

    if (sortKey === "time_then_severity") {
      return [...findings].sort(compareFindingsByTimeline);
    }

    return [...findings].sort(compareFindingsBySeverityThenChild);
  }

  function buildChildGroups(findings) {
    const groupMap = new Map();

    for (const finding of findings) {
      if (!groupMap.has(finding.childName)) {
        groupMap.set(finding.childName, {
          childName: finding.childName,
          findings: [],
        });
      }

      groupMap.get(finding.childName).findings.push(finding);
    }

    return [...groupMap.values()]
      .map((group) => ({
        ...group,
        findings: sortDisplayFindings(group.findings, "grouped"),
        totals: summarizeSeverityCounts(group.findings),
        reviewerNames: uniqueReviewerNames(group.findings.flatMap((finding) => getReviewerNamesFromFinding(finding))),
      }))
      .sort((left, right) => {
        if (left.totals.red !== right.totals.red) {
          return right.totals.red - left.totals.red;
        }
        if (left.totals.yellow !== right.totals.yellow) {
          return right.totals.yellow - left.totals.yellow;
        }
        if (left.totals.info !== right.totals.info) {
          return right.totals.info - left.totals.info;
        }
        return left.childName.localeCompare(right.childName, "ja");
      });
  }

  function getDisplayFindings() {
    return sortDisplayFindings(getFilteredFindings(), state.viewMode);
  }

  function getAllDisplayFindings() {
    return sortDisplayFindings(state.analysis?.reviewItems ?? state.analysis?.findings ?? [], "grouped");
  }

  function formatDebugReport(debug) {
    if (!debug) {
      return "まだデバッグ情報はありません。xlsx を読み込んで「チェックする」を押すと、時刻ヘッダ候補とブロック判定をここに表示します。";
    }

    const lines = [];
    const timeDebug = debug.timeBlocks ?? {};
    lines.push("[時刻ヘッダ候補]");
    lines.push(`- 探索行数: 1 - ${timeDebug.scanLimit ?? "-"}`);
    lines.push(`- 採用ブロック数: ${timeDebug.blockCount ?? 0}`);

    for (const candidate of timeDebug.candidates ?? []) {
      const headerLabel =
        candidate.headerRows?.length === 2
          ? `${candidate.headerRows[0]}-${candidate.headerRows[1]}行`
          : `${candidate.headerRows?.[0] ?? "-"}行`;
      const statusLabel = candidate.accepted ? "採用" : "不採用";
      const rangeLabel = candidate.columnRange ? ` / 列 ${candidate.columnRange}` : "";
      const timeRangeLabel = candidate.timeRange ? ` / ${candidate.timeRange}` : "";
      lines.push(`- ${headerLabel} / ${candidate.kind} / ${statusLabel}${rangeLabel}${timeRangeLabel}`);
      lines.push(`  理由: ${candidate.reason}`);
    }

    lines.push("");
    lines.push("[ブロックごとの判定]");
    for (const block of debug.blocks ?? []) {
      const headerLabel =
        block.timeAxis.headerStartRow === block.timeAxis.headerEndRow
          ? `${block.timeAxis.headerStartRow}行`
          : `${block.timeAxis.headerStartRow}-${block.timeAxis.headerEndRow}行`;
      const columnRange = `${indexToColumnLetters(block.timeAxis.startCol)}:${indexToColumnLetters(block.timeAxis.endCol)}`;
      const timeRange = `${block.timeAxis.columns[0]?.label ?? "-"} - ${block.timeAxis.columns[block.timeAxis.columns.length - 1]?.label ?? "-"}`;
      const nameColumn = block.nameColumn ? indexToColumnLetters(block.nameColumn) : "未検出";
      const pairCount = block.pairDebug?.pairCount ?? 0;
      lines.push(`- ブロック${block.blockIndex}: ヘッダ ${headerLabel} / 時刻列 ${columnRange} / ${timeRange}`);
      lines.push(`  データ行: ${block.timeAxis.dataStartRow}-${block.timeAxis.dataEndRow} / 名前列: ${nameColumn} / 2行セット: ${pairCount}`);
      if (block.nameDebug?.matchedKeyword) {
        lines.push(
          `  名前列根拠: ${block.nameDebug.matchedKeyword.row}行 ${block.nameDebug.matchedKeyword.column}列 の「${block.nameDebug.matchedKeyword.text}」`,
        );
      } else if (block.nameDebug?.candidates?.length) {
        const topCandidate = block.nameDebug.candidates[0];
        lines.push(
          `  名前列候補上位: ${topCandidate.column}列 (score=${topCandidate.score}, names=${topCandidate.distinctNames}, active=${topCandidate.activeRows})`,
        );
      }
      for (const rejected of block.pairDebug?.rejected ?? []) {
        lines.push(`  不採用: 行 ${rejected.row} / ${rejected.reason}`);
      }
    }

    return lines.join("\n");
  }

  function renderDebug() {
    if (!elements.debugOutput) {
      return;
    }

    elements.debugOutput.textContent = formatDebugReport(state.debug);
  }

  function renderSummary() {
    const displayFindings = getAllDisplayFindings();
    const totals = state.analysis ? summarizeSeverityCounts(displayFindings) : { red: "-", yellow: "-", info: "-" };
    const childCount = state.analysis?.summary?.childCount ?? "-";
    const reviewerCount = state.analysis?.summary?.reviewerStats?.uniqueCount ?? "-";
    const cards = [
      { label: "赤", value: totals.red, className: "summary-card--red" },
      { label: "黄", value: totals.yellow, className: "summary-card--yellow" },
      { label: "情報", value: totals.info, className: "summary-card--info" },
      { label: "解析できた園児", value: childCount, className: "summary-card--neutral" },
    ];

    elements.summaryCards.innerHTML = cards
      .map(
        (card) => `
          <article class="summary-card ${card.className}">
            <div class="summary-card__value">${card.value}</div>
            <div class="summary-card__label">${card.label}</div>
          </article>
        `,
      )
      .join("");

    if (!state.analysis) {
      elements.structureSummary.textContent =
        "ファイルを読み込むと、検出した名前列・時刻列・2行セット数をここに表示します。";
      return;
    }

    const { summary } = state.analysis;
    const blockLines = (summary.blockSummaries ?? [])
      .map(
        (block) =>
          `ブロック${block.blockIndex}: ヘッダ ${block.headerRows} / 時刻列 ${block.columnRange} / 名前列 ${block.nameColumn} / 2行セット ${block.pairCount} 人分`,
      )
      .join("<br />");

    elements.structureSummary.innerHTML = `
      <strong>検出結果</strong><br />
      ブロック数: ${summary.blockCount ?? 1} /
      時刻範囲: ${summary.timeRange} /
      解析できた園児: ${summary.childCount} 人
      <br /><br />
      ${blockLines}
    `;
  }

  function renderChildFilter() {
    const currentValue = state.childFilter;
    const names = [...new Set((state.analysis?.records ?? []).map((record) => record.childName))].sort((left, right) =>
      left.localeCompare(right, "ja"),
    );

    elements.childFilter.innerHTML = [
      `<option value="">全員</option>`,
      ...names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`),
    ].join("");

    elements.childFilter.value = names.includes(currentValue) ? currentValue : "";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderResults() {
    const findings = getDisplayFindings();
    elements.resultsCount.textContent = `${findings.length}件`;
    elements.downloadCsvButton.disabled = findings.length === 0;

    if (findings.length === 0) {
      elements.resultsList.innerHTML =
        `<article class="result-card result-card--empty">この条件では、確認しておきたい項目はありません。</article>`;
      return;
    }

    const groupMap = new Map();
    for (const finding of findings) {
      if (!groupMap.has(finding.childName)) {
        groupMap.set(finding.childName, {
          childName: finding.childName,
          findings: [],
        });
      }
      groupMap.get(finding.childName).findings.push(finding);
    }

    const groups = [...groupMap.values()].sort((left, right) => {
      const leftTotals = summarizeSeverityCounts(left.findings);
      const rightTotals = summarizeSeverityCounts(right.findings);
      if (leftTotals.red !== rightTotals.red) {
        return rightTotals.red - leftTotals.red;
      }
      if (leftTotals.yellow !== rightTotals.yellow) {
        return rightTotals.yellow - leftTotals.yellow;
      }
      if (leftTotals.info !== rightTotals.info) {
        return rightTotals.info - leftTotals.info;
      }
      return left.childName.localeCompare(right.childName, "ja");
    });

    elements.resultsList.innerHTML = groups
      .map((group) => {
        const totals = summarizeSeverityCounts(group.findings);
        const chips = Object.entries(severityLabels)
          .filter(([severity]) => totals[severity] > 0)
          .map(
            ([severity, label]) =>
              `<span class="badge badge--${severity}">${label} ${totals[severity]}件</span>`,
          )
          .join("");

        const cards = group.findings
          .map(
            (finding) => `
              <article class="finding-card finding-card--${finding.severity}">
                <div class="finding-card__top">
                  <div class="finding-card__time">${escapeHtml(finding.time)}</div>
                  <div class="finding-card__meta">
                    <span class="badge badge--${finding.severity}">${severityLabels[finding.severity]}</span>
                    ${finding.count > 1 ? `<span class="finding-card__count">${finding.count}件をまとめて表示</span>` : ""}
                  </div>
                </div>
                <div class="finding-card__rule">${escapeHtml(finding.ruleName)}</div>
                <div class="finding-card__action">確認したいこと: ${escapeHtml(finding.action)}</div>
                <div class="finding-card__message">${escapeHtml(finding.message)}</div>
                ${
                  finding.details.length > 1
                    ? `<div class="finding-card__details">${finding.details
                        .map((detail) => `<div>${escapeHtml(detail)}</div>`)
                        .join("")}</div>`
                    : ""
                }
              </article>
            `,
          )
          .join("");

        return `
          <section class="child-group">
            <div class="child-group__header">
              <div>
                <div class="child-group__name">${escapeHtml(group.childName)}</div>
                <div class="child-group__subtitle">確認が必要な内容をまとめて表示しています</div>
              </div>
              <div class="child-group__chips">${chips}</div>
            </div>
            <div class="child-group__findings">
              ${cards}
            </div>
          </section>
        `;
      })
      .join("");
  }

  function updateControls() {
    const hasWorkbook = Boolean(state.workbook?.sheets?.length);
    elements.sheetSelect.disabled = !hasWorkbook;
    elements.analyzeButton.disabled = !hasWorkbook || !state.selectedSheetName || !state.config;
    elements.configStatus.textContent = state.config
      ? `${state.configLabel} を使用中`
      : "設定の読み込みに失敗しています";
    elements.fileMeta.textContent = state.sourceLabel;
  }

  function renderAll() {
    renderSummary();
    renderChildFilter();
    renderResults();
    renderDebug();
    updateControls();
  }

  function renderDebug() {
    if (!elements.debugOutput) {
      return;
    }

    const ui = getUiSettings();
    if (elements.debugPanelLabel) {
      elements.debugPanelLabel.textContent = ui.debugPanelLabel;
    }
    if (elements.debugPanelHint) {
      elements.debugPanelHint.textContent = ui.debugPanelHint;
    }

    elements.debugOutput.textContent = formatDebugReport(state.debug);
  }

  function renderSummaryCard(card) {
    return `
      <article class="summary-card ${card.className}">
        <div class="summary-card__value">${card.value}</div>
        <div class="summary-card__label">${card.label}</div>
        <div class="summary-card__description">${card.description}</div>
      </article>
    `;
  }

  function renderSummary() {
    const ui = getUiSettings();
    const totals = state.analysis?.summary?.totals ?? { red: "-", yellow: "-", info: "-" };
    const childCount = state.analysis?.summary?.childCount ?? "-";
    const reviewerCount = state.analysis?.summary?.reviewerStats?.uniqueCount ?? "-";
    const cards = [
      {
        label: ui.severityLabels.red,
        value: totals.red,
        description: ui.severityDescriptions.red,
        className: "summary-card--red",
      },
      {
        label: ui.severityLabels.yellow,
        value: totals.yellow,
        description: ui.severityDescriptions.yellow,
        className: "summary-card--yellow",
      },
      {
        label: ui.severityLabels.info,
        value: totals.info,
        description: ui.severityDescriptions.info,
        className: "summary-card--info",
      },
      {
        label: "解析できた園児",
        value: childCount,
        description: "確認対象として読み取れた人数です",
        className: "summary-card--neutral",
      },
      {
        label: "記録者",
        value: reviewerCount === "-" ? "-" : `${reviewerCount}人`,
        description: "シート全体で確認できた記録者数です",
        className: "summary-card--neutral",
      },
    ];

    elements.summaryCards.innerHTML = cards.map(renderSummaryCard).join("");

    if (!state.analysis) {
      elements.structureSummary.innerHTML = `
        <div class="structure-summary__lead"><strong>ファイルを選んでチェックすると、ここに結果のまとまりが表示されます。</strong></div>
        <div class="structure-summary__meta">赤・黄・情報の件数と、園児ごとの確認結果をすぐ追える画面になります。</div>
      `;
      return;
    }

    const { summary } = state.analysis;
    const reviewerNames = summary.reviewerStats?.names ?? [];
    const reviewerText = reviewerNames.length > 0 ? reviewerNames.join("、") : "記録者名を検出できませんでした";
    const reviewRedCount = summary.reviewTotals?.red ?? summary.totals?.red ?? 0;
    const blockChips = (summary.blockSummaries ?? [])
      .map(
        (block) =>
          `<span class="structure-summary__chip">ブロック${block.blockIndex}: ${block.pairCount}人</span>`,
      )
      .join("");

    elements.structureSummary.innerHTML = `
      <div class="structure-summary__lead"><strong>${summary.childCount}人分の記録を確認できました。</strong></div>
      <div class="structure-summary__meta">対象時間: ${summary.timeRange} / 記録のまとまり: ${summary.blockCount}か所 / シート全体の記録者: ${escapeHtml(reviewerText)}</div>
      <div class="structure-summary__meta">赤の生検出: ${summary.totals?.red ?? 0}件 / 現場で確認する赤まとまり: ${reviewRedCount}件</div>
      <div class="structure-summary__chips">${blockChips}</div>
    `;
  }

  function renderChildFilter() {
    const currentValue = state.childFilter;
    const names = [...new Set((state.analysis?.records ?? []).map((record) => record.childName))].sort((left, right) =>
      left.localeCompare(right, "ja"),
    );

    elements.childFilter.innerHTML = [
      `<option value="">全員</option>`,
      ...names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`),
    ].join("");

    state.childFilter = names.includes(currentValue) ? currentValue : "";
    elements.childFilter.value = state.childFilter;
  }

  function renderFilterControls() {
    const ui = getUiSettings();

    for (const input of elements.severityInputs ?? []) {
      input.checked = state.activeSeverities.has(input.value);
      const label = input.nextElementSibling;
      if (label) {
        label.textContent = ui.severityLabels[input.value] ?? input.value;
      }
    }

    for (const input of elements.viewModeInputs ?? []) {
      input.checked = input.value === state.viewMode;
      const label = input.nextElementSibling;
      if (label) {
        label.textContent = ui.viewModeLabels[input.value] ?? input.value;
      }
    }
  }

  function renderEmptyResults() {
    return `
      <article class="result-card result-card--empty">
        現在の絞り込みでは、表示する要確認箇所はありません。
      </article>
    `;
  }

  function renderResultCard(finding, options = {}) {
    const severity = getSeverityMeta(finding.severity);
    const detailMessages = (finding.details ?? []).filter((detail) => detail && detail !== finding.message);
    const detailText = finding.message && finding.message !== finding.shortText ? finding.message : "";
    const reviewerLabel =
      finding.ruleKey === "singleReviewerSheet"
        ? "記録者（シート全体）"
        : finding.count > 1 || String(finding.time ?? "").includes(" - ")
          ? "記録者（この区間）"
          : "記録者（この時刻）";
    const contextRows = Array.isArray(finding.contextRows) ? finding.contextRows : [];
    const contextHtml = contextRows.length
      ? `
        <div class="result-card__context">
          <div class="result-card__action-label">前後の状態</div>
          <div class="context-list">
            ${contextRows
              .map(
                (row) => `
                  <div class="context-list__row context-list__row--${row.marker === "対象" ? "target" : "side"}">
                    <span class="context-list__marker">${escapeHtml(row.marker)}</span>
                    <span class="context-list__time">${escapeHtml(row.time)}</span>
                    <span>状態: ${escapeHtml(row.status)}</span>
                    <span>記録者: ${escapeHtml(row.reviewer)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      `
      : "";

    return `
      <article class="result-card result-card--${finding.severity}">
        <div class="result-card__top">
          <div class="result-card__time">${escapeHtml(finding.time)}</div>
          <div class="result-card__meta">
            <span class="badge badge--${finding.severity}">${escapeHtml(severity.label)}</span>
            ${finding.count > 1 ? `<span class="result-card__count">生の検出 ${finding.count}件を集約</span>` : ""}
          </div>
        </div>
        ${options.showChildName ? `<div class="result-card__name">${escapeHtml(finding.childName)}</div>` : ""}
        <div class="result-card__reviewer">${escapeHtml(reviewerLabel)}: ${escapeHtml(finding.reviewerText ?? formatReviewerDisplay(finding.reviewerNames ?? []))}</div>
        <div class="result-card__rule">${escapeHtml(finding.shortText)}</div>
        <div class="result-card__reason">判定理由: ${escapeHtml(finding.reason ?? "設定された条件に当てはまりました。")}</div>
        <div class="result-card__action-label">確認したいこと</div>
        <div class="result-card__action">${escapeHtml(finding.action)}</div>
        ${contextHtml}
        ${detailText ? `<div class="result-card__message">${escapeHtml(detailText)}</div>` : ""}
        ${
          detailMessages.length > 0
            ? `<details class="result-card__details"><summary>記録の詳細を見る</summary>${detailMessages
                .map((detail) => `<div>${escapeHtml(detail)}</div>`)
                .join("")}</details>`
            : ""
        }
      </article>
    `;
  }

  function renderGroupedResults(findings) {
    const groups = buildChildGroups(findings);
    if (groups.length === 0) {
      return renderEmptyResults();
    }

    return `
      <div class="grouped-results">
        ${groups
          .map((group) => {
            const chips = Object.entries(group.totals)
              .filter(([, count]) => count > 0)
              .map(([severity, count]) => {
                const meta = getSeverityMeta(severity);
                return `<span class="badge badge--${severity}">${escapeHtml(meta.label)} ${count}件</span>`;
              })
              .join("");

            return `
              <section class="child-group">
                <div class="child-group__header">
                  <div>
                    <div class="child-group__name">${escapeHtml(group.childName)}</div>
                    <div class="child-group__subtitle">${group.findings.length}件の要確認をまとめています</div>
                    <div class="child-group__reviewers">記録者（この園児の要確認内）: ${escapeHtml(formatReviewerDisplay(group.reviewerNames, "未入力または対象なし"))}</div>
                  </div>
                  <div class="child-group__chips">${chips}</div>
                </div>
                <div class="child-group__findings">
                  ${group.findings.map((finding) => renderResultCard(finding)).join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderTimelineResults(findings) {
    if (findings.length === 0) {
      return renderEmptyResults();
    }

    return `
      <div class="timeline-results">
        ${sortDisplayFindings(findings, "timeline")
          .map((finding) => renderResultCard(finding, { showChildName: true }))
          .join("")}
      </div>
    `;
  }

  function renderResults() {
    const findings = getDisplayFindings();
    const ui = getUiSettings();
    elements.resultsCount.textContent = `表示中 ${findings.length}件`;
    elements.downloadCsvButton.disabled = findings.length === 0;

    if (elements.resultsGuide) {
      elements.resultsGuide.textContent =
        state.viewMode === "timeline"
          ? "時刻の流れに沿って、要確認のまとまりを順番に見られます。"
          : `園児ごとに確認内容をまとめています。連続した同種の赤は1件に集約して表示します。${ui.severityLabels.red}はすぐ確認、${ui.severityLabels.yellow}は念のため確認、${ui.severityLabels.info}は参考情報です。`;
    }

    elements.resultsList.innerHTML =
      state.viewMode === "timeline" ? renderTimelineResults(findings) : renderGroupedResults(findings);
  }

  function updateControls() {
    const hasWorkbook = Boolean(state.workbook?.sheets?.length);
    elements.sheetSelect.disabled = !hasWorkbook;
    elements.analyzeButton.disabled = !hasWorkbook || !state.selectedSheetName || !state.config;
    elements.childFilter.disabled = !(state.analysis?.records?.length > 0);
    elements.configStatus.textContent = state.config
      ? `${state.configLabel} を使用中`
      : "設定ファイルの読み込みに失敗しています";
    elements.fileMeta.textContent = state.sourceLabel;
  }

  function renderAll() {
    renderSummary();
    renderChildFilter();
    renderFilterControls();
    renderResults();
    renderDebug();
    updateControls();
  }

  function populateSheetSelect() {
    const sheets = state.workbook?.sheets ?? [];
    if (sheets.length === 0) {
      elements.sheetSelect.innerHTML = `<option value="">先にxlsxを読み込んでください</option>`;
      state.selectedSheetName = "";
      return;
    }

    elements.sheetSelect.innerHTML = sheets
      .map((sheet) => `<option value="${escapeHtml(sheet.name)}">${escapeHtml(sheet.name)}</option>`)
      .join("");

    if (!state.selectedSheetName || !sheets.some((sheet) => sheet.name === state.selectedSheetName)) {
      state.selectedSheetName = sheets[0].name;
    }
    elements.sheetSelect.value = state.selectedSheetName;
  }

  async function readJsonFile(file) {
    const text = await file.text();
    return JSON.parse(text);
  }

  async function readWorkbookFile(fileOrBuffer, sourceLabel) {
    setError("");
    setStatus("xlsx を読み込んでいます...");

    const arrayBuffer = fileOrBuffer instanceof ArrayBuffer ? fileOrBuffer : await fileOrBuffer.arrayBuffer();
    const workbook = await readWorkbook(arrayBuffer);
    if (!workbook.sheets.length) {
      throw new Error("シートを検出できませんでした。xlsx の内容を確認してください。");
    }

    state.workbook = workbook;
    state.selectedSheetName = workbook.sheets[0].name;
    state.analysis = null;
    state.debug = null;
    state.sourceLabel = sourceLabel;
    populateSheetSelect();
    renderAll();
    setStatus("xlsx の読み込みが完了しました。シートを選んで「チェックする」を押してください。");
  }

  async function handleAnalyze() {
    const sheet = getSelectedSheet();
    if (!sheet || !state.config) {
      return;
    }

    setError("");
    setStatus("シートを解析しています...");

    try {
      state.analysis = analyzeSheet(sheet, state.config);
      state.debug = state.analysis.debug ?? null;
      renderAll();
      setStatus("解析が完了しました。要確認箇所を一覧で確認できます。");
    } catch (error) {
      state.analysis = null;
      state.debug = error instanceof AnalysisError ? error.debug ?? null : null;
      renderAll();
      if (error instanceof AnalysisError) {
        setError(error.message);
        setStatus("シート構造の判定に失敗しました。設定またはシート構造を確認してください。");
        return;
      }

      throw error;
    }
  }

  async function handleDemoFile() {
    setError("");
    setStatus("ダミーxlsxを読み込んでいます...");
    const buffer = base64ToArrayBuffer(DEMO_XLSX_BASE64);
    await readWorkbookFile(buffer, "内蔵ダミーxlsx");
  }

  function handleSeverityToggle(event) {
    const checkbox = event.target;
    if (!(checkbox instanceof HTMLInputElement)) {
      return;
    }

    if (checkbox.checked) {
      state.activeSeverities.add(checkbox.value);
    } else {
      state.activeSeverities.delete(checkbox.value);
    }

    renderResults();
  }

  function bindEvents() {
    elements.fileInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      try {
        await readWorkbookFile(file, file.name);
      } catch (error) {
        setError(error.message);
        setStatus("xlsx の読み込みに失敗しました。");
      }
    });

    elements.configInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      try {
        state.config = await readJsonFile(file);
        state.configLabel = file.name;
        setError("");
        setStatus("設定ファイルを差し替えました。");
        renderAll();
      } catch (error) {
        setError(`設定ファイルの読み込みに失敗しました: ${error.message}`);
        setStatus("設定ファイルを読み込めませんでした。");
      }
    });

    elements.resetConfigButton.addEventListener("click", () => {
      state.config = cloneJson(state.defaultConfig);
      state.configLabel = "既定設定";
      setError("");
      setStatus("設定を既定値に戻しました。");
      renderAll();
    });

    elements.sheetSelect.addEventListener("change", (event) => {
      state.selectedSheetName = event.target.value;
      updateControls();
    });

    elements.analyzeButton.addEventListener("click", async () => {
      try {
        await handleAnalyze();
      } catch (error) {
        setError(error.message);
        setStatus("解析中にエラーが発生しました。");
      }
    });

    elements.demoFileButton.addEventListener("click", async () => {
      try {
        await handleDemoFile();
      } catch (error) {
        setError(error.message);
        setStatus("ダミーxlsxの読み込みに失敗しました。");
      }
    });

    elements.downloadCsvButton.addEventListener("click", () => {
      downloadFindingsCsv(getDisplayFindings());
    });

    elements.childFilter.addEventListener("change", (event) => {
      state.childFilter = event.target.value;
      renderResults();
    });

    document.querySelectorAll('.toggle-chip input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", handleSeverityToggle);
    });
  }

  function init() {
    elements = getElements();
    setStatus("オフライン準備完了です。iPadでは「ファイル」アプリに保存した nap-checker.html を開き、xlsx を選んで開始してください。");
    renderAll();
    bindEvents();
  }

  function handleSeverityToggle(event) {
    const checkbox = event.target;
    if (!(checkbox instanceof HTMLInputElement)) {
      return;
    }

    if (checkbox.checked) {
      state.activeSeverities.add(checkbox.value);
    } else {
      state.activeSeverities.delete(checkbox.value);
    }

    renderResults();
  }

  function handleViewModeToggle(event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.checked) {
      return;
    }

    state.viewMode = input.value === "timeline" ? "timeline" : "grouped";
    renderResults();
  }

  function bindEvents() {
    elements.fileInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      try {
        await readWorkbookFile(file, file.name);
      } catch (error) {
        setError(error.message);
        setStatus("xlsx の読み込みに失敗しました。");
      }
    });

    elements.configInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      try {
        state.config = await readJsonFile(file);
        state.configLabel = file.name;
        applyUiDefaults();
        setError("");
        setStatus("設定ファイルを読み込みました。");
        renderAll();
      } catch (error) {
        setError(`設定ファイルの読み込みに失敗しました: ${error.message}`);
        setStatus("設定ファイルを読み込めませんでした。");
      }
    });

    elements.resetConfigButton.addEventListener("click", () => {
      state.config = cloneJson(state.defaultConfig);
      state.configLabel = "既定設定";
      applyUiDefaults();
      setError("");
      setStatus("設定を既定に戻しました。");
      renderAll();
    });

    elements.sheetSelect.addEventListener("change", (event) => {
      state.selectedSheetName = event.target.value;
      updateControls();
    });

    elements.analyzeButton.addEventListener("click", async () => {
      try {
        await handleAnalyze();
      } catch (error) {
        setError(error.message);
        setStatus("チェック中にエラーが発生しました。");
      }
    });

    elements.demoFileButton.addEventListener("click", async () => {
      try {
        await handleDemoFile();
      } catch (error) {
        setError(error.message);
        setStatus("ダミーxlsxの読み込みに失敗しました。");
      }
    });

    elements.downloadCsvButton.addEventListener("click", () => {
      downloadFindingsCsv(getDisplayFindings());
    });

    elements.childFilter.addEventListener("change", (event) => {
      state.childFilter = event.target.value;
      renderResults();
    });

    for (const checkbox of elements.severityInputs ?? []) {
      checkbox.addEventListener("change", handleSeverityToggle);
    }

    for (const input of elements.viewModeInputs ?? []) {
      input.addEventListener("change", handleViewModeToggle);
    }

    elements.copyDiagnosticsButton?.addEventListener("click", async () => {
      await copyDiagnosticInfo();
    });
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未読込";
    applyUiDefaults();
    setStatus("オフラインで準備完了です。xlsx を選んでチェックしてください。");
    renderAll();
    bindEvents();
  }

  function getNowLabel() {
    return new Date().toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  function setStatus(message) {
    if (!elements?.statusBanner) {
      return;
    }

    elements.statusBanner.textContent = `${message}（${getNowLabel()}）`;
  }

  function setError(message) {
    if (!elements?.errorBox) {
      return;
    }

    if (!message) {
      elements.errorBox.hidden = true;
      elements.errorBox.textContent = "";
      return;
    }

    elements.errorBox.hidden = false;
    elements.errorBox.textContent = message;
  }

  function setDiagnostic(element, ok, message) {
    if (!element) {
      return;
    }

    element.classList.remove("diagnostic-item--ok", "diagnostic-item--warn", "diagnostic-item--pending");
    element.classList.add(ok ? "diagnostic-item--ok" : "diagnostic-item--warn");
    element.textContent = message;
  }

  function renderDiagnostics() {
    const supportsFileApi = Boolean(globalThis.File && globalThis.FileReader && globalThis.Blob);
    const supportsDownload = Boolean(globalThis.Blob && globalThis.URL?.createObjectURL);
    const isAppleTouch =
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isFileOpen = location.protocol === "file:";
    const isStandalone =
      globalThis.matchMedia?.("(display-mode: standalone)")?.matches ||
      Boolean(navigator.standalone);

    setDiagnostic(elements.diagnosticJs, true, "JavaScript: 動作しています");
    setDiagnostic(
      elements.diagnosticFile,
      supportsFileApi,
      supportsFileApi
        ? `ファイル読込: 利用できます（読込 ${state.diagnostics.fileReads}回）`
        : "ファイル読込: この開き方では利用できない可能性があります",
    );
    setDiagnostic(
      elements.diagnosticAnalyze,
      state.diagnostics.analyzeClicks > 0,
      `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`,
    );
    setDiagnostic(
      elements.diagnosticDemo,
      state.diagnostics.demoClicks > 0,
      `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`,
    );
    setDiagnostic(
      elements.diagnosticDownload,
      supportsDownload,
      supportsDownload
        ? `CSV保存: 作成機能があります（押下 ${state.diagnostics.downloadClicks}回）`
        : "CSV保存: この開き方では保存できない可能性があります",
    );

    if (elements.environmentHint) {
      if (isAppleTouch && isFileOpen) {
        elements.environmentHint.innerHTML =
          `<strong>非推奨の開き方です:</strong> iPadではFilesからHTMLを直接開くと、JavaScriptやオフライン準備が安定しません。初回はSafariで配布URLを開き、<strong>共有 → ホーム画面に追加</strong> してください。`;
      } else if (isAppleTouch && isStandalone) {
        elements.environmentHint.innerHTML =
          `<strong>ホーム画面アプリとして利用中です:</strong> この端末内でxlsxを読み取り、外部へ送信せずに解析します。ネット接続がない状態でも利用できます。`;
      } else if (isAppleTouch) {
        elements.environmentHint.innerHTML =
          `<strong>iPad Safariで開いています:</strong> 初回はこの画面から<strong>共有 → ホーム画面に追加</strong>を行うと、次回からオフラインで使えます。xlsxはiPad内で処理し、外部へ送信しません。`;
      } else {
        elements.environmentHint.innerHTML =
          `<strong>確認用のブラウザ表示です:</strong> 本番のiPadではSafariで配布URLを開き、ホーム画面に追加して使います。`;
      }
    }
  }

  function setButtonBusy(button, busy, busyText = "処理中...") {
    if (!button) {
      return () => {};
    }

    const previousText = button.textContent;
    button.setAttribute("aria-busy", busy ? "true" : "false");
    if (busy) {
      button.textContent = busyText;
    }

    return () => {
      button.setAttribute("aria-busy", "false");
      button.textContent = previousText;
    };
  }

  function updateControls() {
    const hasWorkbook = Boolean(state.workbook?.sheets?.length);
    const hasFindings = getDisplayFindings().length > 0;

    elements.sheetSelect.disabled = !hasWorkbook;
    elements.analyzeButton.disabled = false;
    elements.downloadCsvButton.disabled = false;
    elements.analyzeButton.dataset.state = !hasWorkbook || !state.selectedSheetName || !state.config ? "not-ready" : "ready";
    elements.downloadCsvButton.dataset.state = hasFindings ? "ready" : "not-ready";
    elements.childFilter.disabled = !(state.analysis?.records?.length > 0);
    elements.configStatus.textContent = state.config ? `${state.configLabel} を使用中` : "設定ファイルの読み込みに失敗しています";
    elements.fileMeta.textContent = state.sourceLabel;
    renderDiagnostics();
  }

  async function readWorkbookFile(fileOrBuffer, sourceLabel) {
    setError("");
    setStatus("xlsx を読み込んでいます...");

    try {
      const arrayBuffer = fileOrBuffer instanceof ArrayBuffer ? fileOrBuffer : await fileOrBuffer.arrayBuffer();
      const workbook = await readWorkbook(arrayBuffer);
      if (!workbook.sheets.length) {
        throw new Error("シートを検出できませんでした。xlsx の内容を確認してください。");
      }

      state.diagnostics.fileReads += 1;
      state.workbook = workbook;
      state.selectedSheetName = workbook.sheets[0].name;
      state.analysis = null;
      state.debug = null;
      state.childFilter = "";
      state.selectedReviewCell = null;
      state.sourceLabel = sourceLabel;
      populateSheetSelect();
      renderAll();
      setStatus("xlsx の読み込みが完了しました。シートを選んで「チェックする」を押してください。");
      setDiagnostic(elements.diagnosticFile, true, `ファイル読込: 成功しました（読込 ${state.diagnostics.fileReads}回）`);
    } catch (error) {
      setDiagnostic(elements.diagnosticFile, false, "ファイル読込: 失敗しました。Safariまたはホーム画面アプリで開いているか確認してください");
      throw error;
    }
  }

  async function handleAnalyze() {
    state.diagnostics.analyzeClicks += 1;
    setDiagnostic(elements.diagnosticAnalyze, true, `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`);

    if (!state.workbook?.sheets?.length) {
      setStatus("チェックボタンは押せています。先にxlsxファイルを選んでください。");
      setError("ファイル未選択です。iPadではFilesのプレビュー直開きではなく、Safariまたはホーム画面アプリから開いてください。");
      updateControls();
      return;
    }

    if (!state.selectedSheetName) {
      setStatus("チェックボタンは押せています。チェックするシートを選んでください。");
      setError("シート未選択です。シート一覧から対象日を選んでください。");
      updateControls();
      return;
    }

    if (!state.config) {
      setStatus("チェックボタンは押せていますが、設定が読み込めていません。");
      setError("設定ファイルが未読込です。既定設定に戻すか、設定JSONを読み込んでください。");
      updateControls();
      return;
    }

    const sheet = getSelectedSheet();
    if (!sheet) {
      setStatus("選択中のシートを読み取れませんでした。");
      setError("シート未選択、またはシート名が変わっています。もう一度シートを選び直してください。");
      updateControls();
      return;
    }

    const restoreButton = setButtonBusy(elements.analyzeButton, true, "解析中...");
    setError("");
    setStatus("解析中です。少しお待ちください...");
    await new Promise((resolve) => requestAnimationFrame(resolve));

    try {
      state.selectedReviewCell = null;
      state.analysis = analyzeSheet(sheet, state.config);
      state.debug = state.analysis.debug ?? null;
      state.lastAnalysisAt = new Date().toISOString();
      renderAll();
      setStatus("解析が完了しました。要確認箇所を一覧で確認できます。");
    } catch (error) {
      state.analysis = null;
      state.debug = error instanceof AnalysisError ? error.debug ?? null : null;
      renderAll();
      if (error instanceof AnalysisError) {
        setError(error.message);
        setStatus("シート構造の判定に失敗しました。詳細ログを確認できます。");
        return;
      }

      throw error;
    } finally {
      restoreButton();
      updateControls();
    }
  }

  async function handleDemoFile() {
    state.diagnostics.demoClicks += 1;
    setDiagnostic(elements.diagnosticDemo, true, `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`);
    const restoreButton = setButtonBusy(elements.demoFileButton, true, "ダミー読込中...");
    setError("");
    setStatus("内蔵ダミーxlsxボタンの押下を検知しました。読み込んでいます...");

    try {
      const buffer = base64ToArrayBuffer(DEMO_XLSX_BASE64);
      await readWorkbookFile(buffer, "内蔵ダミーxlsx");
      setStatus("内蔵ダミーxlsxを読み込めました。続けて「チェックする」を押してください。");
    } finally {
      restoreButton();
      updateControls();
    }
  }

  function downloadFindingsCsv(findings, fileName = "nap-check-results.csv") {
    state.diagnostics.downloadClicks += 1;
    renderDiagnostics();

    const rowsToExport = Array.isArray(findings) ? findings : [];
    if (rowsToExport.length === 0) {
      setStatus("CSVボタンは押せています。出力する結果がまだありません。");
      setError("CSVを作るには、先にxlsxを読み込んで「チェックする」を押してください。結果が0件の場合もCSV出力は省略しています。");
      updateControls();
      return;
    }

    try {
      const rows = [
        ["園児名", "時刻", "種別", "確認内容", "記録者", "詳細メッセージ"],
        ...rowsToExport.map((finding) => [
          finding.childName,
          finding.time,
          finding.severity,
          finding.ruleName,
          finding.reviewerText ?? formatReviewerDisplay(finding.reviewerNames ?? [], ""),
          finding.message,
        ]),
      ];
      const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\r\n");
      const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName;
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      setStatus("CSVを作成しました。iPadでは保存先の確認画面が出る場合があります。");
      setError("");
    } catch (error) {
      setStatus("CSVボタンは押せていますが、保存処理に失敗しました。");
      setError(`CSVを保存できませんでした。Filesプレビューではなく、Safariまたはホーム画面アプリで開いて再試行してください。詳細: ${error.message}`);
    } finally {
      updateControls();
    }
  }

  function handleSeverityToggle(event) {
    const checkbox = event.target;
    if (!(checkbox instanceof HTMLInputElement)) {
      return;
    }

    if (checkbox.checked) {
      state.activeSeverities.add(checkbox.value);
    } else {
      state.activeSeverities.delete(checkbox.value);
    }

    renderReviewBoard();
    renderResults();
    updateControls();
  }

  function handleViewModeToggle(event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.checked) {
      return;
    }

    state.viewMode = input.value === "timeline" ? "timeline" : "grouped";
    renderResults();
    updateControls();
  }

  function bindEvents() {
    elements.fileInput.addEventListener("click", () => {
      setStatus("ファイル選択欄を押しました。xlsxを選んでください。");
      setDiagnostic(elements.diagnosticFile, true, "ファイル読込: ファイル選択欄の押下を検知");
    });

    elements.fileInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        setStatus("ファイル選択は開きましたが、xlsxが選ばれていません。");
        setError("ファイル未選択です。Filesプレビューで選択画面が開かない場合は、Safariまたはホーム画面アプリで開いてください。");
        return;
      }

      try {
        await readWorkbookFile(file, file.name);
      } catch (error) {
        setError(`xlsx の読み込みに失敗しました: ${error.message}`);
        setStatus("xlsx の読み込みに失敗しました。");
      }
    });

    elements.configInput.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        setStatus("設定ファイルは選ばれていません。");
        return;
      }

      try {
        state.config = await readJsonFile(file);
        state.configLabel = file.name;
        applyUiDefaults();
        setError("");
        setStatus("設定ファイルを読み込みました。");
        renderAll();
      } catch (error) {
        setError(`設定ファイルの読み込みに失敗しました: ${error.message}`);
        setStatus("設定ファイルを読み込めませんでした。");
      }
    });

    elements.resetConfigButton.addEventListener("click", () => {
      state.config = cloneJson(state.defaultConfig);
      state.configLabel = "既定設定";
      applyUiDefaults();
      setError("");
      setStatus("設定を既定に戻しました。");
      renderAll();
    });

    elements.sheetSelect.addEventListener("change", (event) => {
      state.selectedSheetName = event.target.value;
      setStatus(`シート「${state.selectedSheetName || "未選択"}」を選びました。`);
      updateControls();
    });

    elements.analyzeButton.addEventListener("click", async () => {
      try {
        await handleAnalyze();
      } catch (error) {
        setError(error.message);
        setStatus("チェック中にエラーが発生しました。");
        updateControls();
      }
    });

    elements.demoFileButton.addEventListener("click", async () => {
      try {
        await handleDemoFile();
      } catch (error) {
        setError(error.message);
        setStatus("内蔵ダミーxlsxの読み込みに失敗しました。");
        updateControls();
      }
    });

    elements.downloadCsvButton.addEventListener("click", () => {
      downloadFindingsCsv(getDisplayFindings());
    });

    elements.childFilter.addEventListener("change", (event) => {
      state.childFilter = event.target.value;
      state.selectedReviewCell = null;
      setStatus(state.childFilter ? `園児「${state.childFilter}」で絞り込みました。` : "全員表示に戻しました。");
      renderReviewBoard();
      renderResults();
      updateControls();
    });

    elements.reviewBoard?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-review-slot]");
      if (!(button instanceof HTMLElement)) {
        return;
      }

      state.selectedReviewCell = {
        blockIndex: Number(button.dataset.blockIndex),
        stateRow: Number(button.dataset.stateRow),
        reviewerRow: Number(button.dataset.reviewerRow),
        intervalIndex: Number(button.dataset.intervalIndex),
        part: button.dataset.part === "reviewer" ? "reviewer" : "status",
      };

      renderReviewBoard();
    });

    for (const checkbox of elements.severityInputs ?? []) {
      checkbox.addEventListener("change", handleSeverityToggle);
    }

    for (const input of elements.viewModeInputs ?? []) {
      input.addEventListener("change", handleViewModeToggle);
    }
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未読込";
    applyUiDefaults();
    renderDiagnostics();
    setStatus("準備完了です。初回はSafariで開き、共有からホーム画面に追加してください。");
    renderAll();
    bindEvents();
  }

  function getCellLevelRawFindings() {
    return (state.analysis?.findings ?? []).filter(
      (finding) => Number.isInteger(finding.stateRow) && Number.isInteger(finding.reviewerRow),
    );
  }

  function getSheetLevelFindings() {
    return (state.analysis?.findings ?? []).filter(
      (finding) => !Number.isInteger(finding.stateRow) || !Number.isInteger(finding.reviewerRow),
    );
  }

  function getFilteredRawFindings() {
    return getCellLevelRawFindings().filter((finding) => {
      if (!state.activeSeverities.has(finding.severity)) {
        return false;
      }

      if (state.childFilter && finding.childName !== state.childFilter) {
        return false;
      }

      return true;
    });
  }

  function getVisibleRecords() {
    return (state.analysis?.records ?? []).filter((record) => !state.childFilter || record.childName === state.childFilter);
  }

  function abbreviateReviewerName(value) {
    const text = String(value ?? "").trim();
    return text ? Array.from(text)[0] : "";
  }

  function findRecordForFinding(finding) {
    return (state.analysis?.records ?? []).find((record) => {
      if (record.childName !== finding.childName) {
        return false;
      }

      if (finding.blockIndex !== undefined && record.blockIndex !== finding.blockIndex) {
        return false;
      }

      if (finding.stateRow !== undefined && record.stateRow !== finding.stateRow) {
        return false;
      }

      if (finding.reviewerRow !== undefined && record.reviewerRow !== finding.reviewerRow) {
        return false;
      }

      return true;
    });
  }

  function findIntervalIndexForFinding(record, finding) {
    if (!record) {
      return -1;
    }

    if (
      Number.isInteger(finding.context?.startIndex) &&
      Number.isInteger(finding.context?.endIndex) &&
      finding.context.startIndex === finding.context.endIndex
    ) {
      return finding.context.startIndex;
    }

    if (Number.isFinite(finding.timeSort)) {
      return record.intervals.findIndex((interval) => interval.timeMinutes === finding.timeSort);
    }

    return -1;
  }

  function buildDisplayFindingFromRaw(finding) {
    const record = findRecordForFinding(finding);
    const intervalIndex = findIntervalIndexForFinding(record, finding);
    const fallbackContext = Number.isInteger(intervalIndex) && intervalIndex >= 0
      ? { startIndex: intervalIndex, endIndex: intervalIndex }
      : null;
    const reviewerText =
      finding.reviewerText ||
      formatReviewerDisplay(
        finding.reviewerNames ?? [],
        finding.ruleKey === "missingReviewerCell" ? "未入力" : "未入力または対象なし",
      );

    return {
      ...finding,
      count: 1,
      details: [finding.message],
      shortText: getRuleShortText(finding),
      action: getRuleActionText(finding),
      reason: getRuleReasonText(finding),
      reviewerText,
      contextRows: buildFindingContextRows(record, finding.context ?? fallbackContext),
      intervalIndex,
    };
  }

  function buildDisplayFindingFromReviewItem(finding) {
    const record = findRecordForFinding(finding);
    const reviewerText =
      finding.reviewerText ||
      formatReviewerDisplay(
        finding.reviewerNames ?? [],
        finding.ruleKey === "missingReviewerCell" ? "未入力" : "未入力または対象なし",
      );

    return {
      ...finding,
      count: finding.rawFindingCount ?? finding.count ?? 1,
      rawFindingCount: finding.rawFindingCount ?? finding.count ?? 1,
      details: Array.isArray(finding.details) && finding.details.length > 0 ? finding.details : [finding.message].filter(Boolean),
      shortText: finding.shortText ?? getRuleShortText(finding),
      action: finding.action ?? getRuleActionText(finding),
      reason: finding.reason ?? getRuleReasonText(finding),
      reviewerText,
      contextRows:
        Array.isArray(finding.contextRows) && finding.contextRows.length > 0
          ? finding.contextRows
          : buildFindingContextRows(record, finding.context ?? null),
    };
  }

  function getCellLevelGroupedFindings() {
    return (state.analysis?.reviewItems ?? []).filter(
      (finding) => Number.isInteger(finding.stateRow) && Number.isInteger(finding.reviewerRow),
    );
  }

  function getFilteredGroupedFindings() {
    return getCellLevelGroupedFindings().filter((finding) => {
      if (!state.activeSeverities.has(finding.severity)) {
        return false;
      }

      if (state.childFilter && finding.childName !== state.childFilter) {
        return false;
      }

      return true;
    });
  }

  function getDisplayFindings() {
    return sortDisplayFindings(getFilteredGroupedFindings().map(buildDisplayFindingFromReviewItem), state.viewMode);
  }

  function getAllDisplayFindings() {
    return sortDisplayFindings(getCellLevelGroupedFindings().map(buildDisplayFindingFromReviewItem), "grouped");
  }

  function createReviewSlotKey(blockIndex, stateRow, reviewerRow, intervalIndex) {
    return [blockIndex ?? "", stateRow ?? "", reviewerRow ?? "", intervalIndex ?? ""].join("|");
  }

  function getHighestSeverity(findings) {
    if (!findings?.length) {
      return null;
    }

    return [...findings]
      .sort((left, right) => (SEVERITY_ORDER[left.severity] ?? 99) - (SEVERITY_ORDER[right.severity] ?? 99))[0]
      .severity;
  }

  function buildReviewMaps() {
    const slotFindingMap = new Map();
    const reviewerAlertMap = new Map();

    for (const finding of getFilteredRawFindings()) {
      const record = findRecordForFinding(finding);
      const intervalIndex = findIntervalIndexForFinding(record, finding);
      if (!record || intervalIndex < 0) {
        continue;
      }

      const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
      if (!slotFindingMap.has(slotKey)) {
        slotFindingMap.set(slotKey, []);
      }
      slotFindingMap.get(slotKey).push(finding);

      if (finding.ruleKey === "missingReviewerCell") {
        if (!reviewerAlertMap.has(slotKey)) {
          reviewerAlertMap.set(slotKey, []);
        }
        reviewerAlertMap.get(slotKey).push(finding);
      }
    }

    return {
      slotFindingMap,
      reviewerAlertMap,
      flaggedSlotCount: slotFindingMap.size,
    };
  }

  function ensureSelectedReviewCell(reviewMaps) {
    const visibleRecords = getVisibleRecords();
    const current = state.selectedReviewCell;
    if (current) {
      const existingSlot = createReviewSlotKey(current.blockIndex, current.stateRow, current.reviewerRow, current.intervalIndex);
      const stillVisible = visibleRecords.some(
        (record) =>
          record.blockIndex === current.blockIndex &&
          record.stateRow === current.stateRow &&
          record.reviewerRow === current.reviewerRow &&
          current.intervalIndex >= 0 &&
          current.intervalIndex < record.intervals.length,
      );
      if (stillVisible && (reviewMaps.slotFindingMap.has(existingSlot) || current.part === "reviewer" || current.part === "status")) {
        return current;
      }
    }

    const firstAlertSlot = [...reviewMaps.slotFindingMap.keys()][0] ?? null;
    if (firstAlertSlot) {
      const [blockIndex, stateRow, reviewerRow, intervalIndex] = firstAlertSlot.split("|").map((value) => Number(value));
      state.selectedReviewCell = {
        blockIndex,
        stateRow,
        reviewerRow,
        intervalIndex,
        part: "status",
      };
      return state.selectedReviewCell;
    }

    const firstRecord = visibleRecords[0];
    if (firstRecord) {
      state.selectedReviewCell = {
        blockIndex: firstRecord.blockIndex,
        stateRow: firstRecord.stateRow,
        reviewerRow: firstRecord.reviewerRow,
        intervalIndex: 0,
        part: "status",
      };
      return state.selectedReviewCell;
    }

    state.selectedReviewCell = null;
    return null;
  }

  function renderSheetAlertBanner() {
    if (!elements.sheetAlertBanner) {
      return;
    }

    const findings = getSheetLevelFindings().filter((finding) => state.activeSeverities.has(finding.severity));
    if (findings.length === 0) {
      elements.sheetAlertBanner.hidden = true;
      elements.sheetAlertBanner.innerHTML = "";
      return;
    }

    elements.sheetAlertBanner.hidden = false;
    elements.sheetAlertBanner.innerHTML = findings
      .map((finding) => {
        const severity = finding.severity ?? "red";
        const label = getSeverityMeta(severity).label;
        const reviewerText = finding.reviewerText || formatReviewerDisplay(finding.reviewerNames ?? [], "未入力または対象なし");
        return `
          <article class="sheet-alert-banner__item sheet-alert-banner__item--${severity}">
            <span class="badge badge--${severity}">${escapeHtml(label)}</span>
            <div class="sheet-alert-banner__body">
              <div class="sheet-alert-banner__title">${escapeHtml(finding.ruleName)}</div>
              <div class="sheet-alert-banner__message">${escapeHtml(finding.message)}</div>
              ${reviewerText ? `<div class="sheet-alert-banner__meta">記録者: ${escapeHtml(reviewerText)}</div>` : ""}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderReviewCellButton({ record, intervalIndex, part, findings = [], reviewerFindings = [] }) {
    const interval = record.intervals[intervalIndex];
    const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
    const isSelected =
      state.selectedReviewCell &&
      state.selectedReviewCell.blockIndex === record.blockIndex &&
      state.selectedReviewCell.stateRow === record.stateRow &&
      state.selectedReviewCell.reviewerRow === record.reviewerRow &&
      state.selectedReviewCell.intervalIndex === intervalIndex &&
      state.selectedReviewCell.part === part;

    const displayFindings = part === "reviewer" ? reviewerFindings : findings;
    const severity = getHighestSeverity(displayFindings);
    const text =
      part === "status"
        ? interval.statusText || ""
        : abbreviateReviewerName(interval.reviewerText) || "";
    const title =
      part === "status"
        ? `${record.childName} ${interval.timeLabel} 状態 ${interval.statusText || "(空欄)"}`
        : `${record.childName} ${interval.timeLabel} 記録者 ${interval.reviewerText || "(空欄)"}`;
    const countBadge = displayFindings.length > 1 ? `<span class="review-cell__badge">${displayFindings.length}</span>` : "";

    return `
      <button
        type="button"
        class="review-cell review-cell--${part} ${severity ? `review-cell--${severity}` : "review-cell--plain"} ${isSelected ? "review-cell--selected" : ""} ${text ? "" : "review-cell--empty"}"
        data-review-slot="${escapeHtml(slotKey)}"
        data-block-index="${record.blockIndex}"
        data-state-row="${record.stateRow}"
        data-reviewer-row="${record.reviewerRow}"
        data-interval-index="${intervalIndex}"
        data-part="${part}"
        title="${escapeHtml(title)}"
      >
        <span class="review-cell__text">${escapeHtml(text || " ")}</span>
        ${countBadge}
      </button>
    `;
  }

  function renderReviewBoard() {
    if (!elements.reviewBoard) {
      return;
    }

    if (!state.analysis) {
      if (elements.reviewCount) {
        elements.reviewCount.textContent = "要確認 0コマ";
      }
      if (elements.reviewGuide) {
        elements.reviewGuide.textContent = "元の表に近い並びで、赤と黄のコマを確認できます。";
      }
      renderSheetAlertBanner();
      elements.reviewBoard.innerHTML = `
        <article class="result-card result-card--empty">
          xlsx を読み込んで「チェックする」を押すと、ここに表レビューが表示されます。
        </article>
      `;
      if (elements.cellDetailPanel) {
        elements.cellDetailPanel.innerHTML =
          `<div class="cell-detail-panel__empty">セルを押すと、このコマの状態・記録者・前後の状態をここで確認できます。</div>`;
      }
      return;
    }

    const reviewMaps = buildReviewMaps();
    const selected = ensureSelectedReviewCell(reviewMaps);
    const visibleRecords = getVisibleRecords();
    const layouts = (state.analysis.layouts ?? []).filter((layout) =>
      visibleRecords.some((record) => record.blockIndex === layout.blockIndex),
    );

    if (elements.reviewCount) {
      elements.reviewCount.textContent = `要確認 ${reviewMaps.flaggedSlotCount}コマ`;
    }

    if (elements.reviewGuide) {
      elements.reviewGuide.textContent =
        reviewMaps.flaggedSlotCount > 0
          ? "赤と黄のコマが色付きます。記録者は1文字表示です。セルを押すと、そのコマの前後状態と記録者を詳しく確認できます。"
          : "要確認のコマはありません。必要に応じて表を見て、状態と記録者を確認してください。";
    }

    renderSheetAlertBanner();

    if (layouts.length === 0) {
      elements.reviewBoard.innerHTML = `
        <article class="result-card result-card--empty">
          現在の絞り込み条件では表示する園児がいません。
        </article>
      `;
      renderSelectedCellDetail(selected, reviewMaps);
      return;
    }

    elements.reviewBoard.innerHTML = layouts
      .map((layout) => {
        const records = visibleRecords.filter((record) => record.blockIndex === layout.blockIndex);
        const timeHeaders = layout.timeAxis.columns
          .map((column) => `<th class="review-grid__time">${escapeHtml(column.label)}</th>`)
          .join("");
        const body = records
          .map((record) => {
            const statusCells = record.intervals
              .map((interval, intervalIndex) => {
                const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
                return `
                  <td class="review-grid__cell">
                    ${renderReviewCellButton({
                      record,
                      intervalIndex,
                      part: "status",
                      findings: reviewMaps.slotFindingMap.get(slotKey) ?? [],
                    })}
                  </td>
                `;
              })
              .join("");

            const reviewerCells = record.intervals
              .map((interval, intervalIndex) => {
                const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
                return `
                  <td class="review-grid__cell">
                    ${renderReviewCellButton({
                      record,
                      intervalIndex,
                      part: "reviewer",
                      findings: reviewMaps.slotFindingMap.get(slotKey) ?? [],
                      reviewerFindings: reviewMaps.reviewerAlertMap.get(slotKey) ?? [],
                    })}
                  </td>
                `;
              })
              .join("");

            return `
              <tbody class="review-grid__body">
                <tr class="review-grid__row review-grid__row--state">
                  <th class="review-grid__name" rowspan="2">${escapeHtml(record.childName)}</th>
                  <th class="review-grid__label">状態</th>
                  ${statusCells}
                </tr>
                <tr class="review-grid__row review-grid__row--reviewer">
                  <th class="review-grid__label">記録者</th>
                  ${reviewerCells}
                </tr>
              </tbody>
            `;
          })
          .join("");

        return `
          <section class="review-block">
            <div class="review-block__header">
              <div class="review-block__title">ブロック${layout.blockIndex}</div>
              <div class="review-block__meta">${escapeHtml(
                `${layout.timeAxis.columns[0]?.label ?? "-"} - ${layout.timeAxis.columns[layout.timeAxis.columns.length - 1]?.label ?? "-"}`,
              )} / ${records.length}人</div>
            </div>
            <div class="review-block__scroll">
              <table class="review-grid">
                <thead>
                  <tr>
                    <th class="review-grid__name review-grid__name--head">園児名</th>
                    <th class="review-grid__label review-grid__label--head">行</th>
                    ${timeHeaders}
                  </tr>
                </thead>
                ${body}
              </table>
            </div>
          </section>
        `;
      })
      .join("");

    renderSelectedCellDetail(selected, reviewMaps);
  }

  function renderSelectedCellDetail(selected, reviewMaps) {
    if (!elements.cellDetailPanel) {
      return;
    }

    if (!selected) {
      elements.cellDetailPanel.innerHTML =
        `<div class="cell-detail-panel__empty">セルを押すと、このコマの状態・記録者・前後の状態をここで確認できます。</div>`;
      return;
    }

    const record = getVisibleRecords().find(
      (item) =>
        item.blockIndex === selected.blockIndex &&
        item.stateRow === selected.stateRow &&
        item.reviewerRow === selected.reviewerRow,
    );

    if (!record || selected.intervalIndex < 0 || selected.intervalIndex >= record.intervals.length) {
      elements.cellDetailPanel.innerHTML =
        `<div class="cell-detail-panel__empty">このセルの詳細を読み取れませんでした。</div>`;
      return;
    }

    const interval = record.intervals[selected.intervalIndex];
    const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, selected.intervalIndex);
    const findings = (reviewMaps.slotFindingMap.get(slotKey) ?? []).map(buildDisplayFindingFromRaw);
    const nearbyStart = Math.max(0, selected.intervalIndex - 1);
    const nearbyEnd = Math.min(record.intervals.length - 1, selected.intervalIndex + 1);
    const nearbyRows = [];
    for (let index = nearbyStart; index <= nearbyEnd; index += 1) {
      const row = record.intervals[index];
      nearbyRows.push({
        marker: index < selected.intervalIndex ? "前" : index > selected.intervalIndex ? "後" : "対象",
        time: row.timeLabel,
        status: row.statusText || "(空欄)",
        reviewer: row.reviewerText || "未入力",
      });
    }

    const findingHtml =
      findings.length === 0
        ? `<div class="cell-detail-panel__empty-note">このコマは要確認に当たっていません。</div>`
        : findings
            .map(
              (finding) => `
                <article class="cell-detail-panel__finding cell-detail-panel__finding--${finding.severity}">
                  <div class="cell-detail-panel__finding-top">
                    <span class="badge badge--${finding.severity}">${escapeHtml(getSeverityMeta(finding.severity).label)}</span>
                    <strong>${escapeHtml(finding.ruleName)}</strong>
                  </div>
                  <div class="cell-detail-panel__finding-reason">判定理由: ${escapeHtml(finding.reason)}</div>
                  <div class="cell-detail-panel__finding-action">確認したいこと: ${escapeHtml(finding.action)}</div>
                  <div class="cell-detail-panel__finding-message">${escapeHtml(finding.message)}</div>
                </article>
              `,
            )
            .join("");

    elements.cellDetailPanel.innerHTML = `
      <div class="cell-detail-panel__header">
        <div>
          <div class="cell-detail-panel__title">${escapeHtml(record.childName)} / ${escapeHtml(interval.timeLabel)}</div>
          <div class="cell-detail-panel__meta">ブロック${record.blockIndex} / ${selected.part === "reviewer" ? "記録者セル" : "状態セル"}</div>
        </div>
      </div>
      <div class="cell-detail-panel__summary">
        <div class="cell-detail-panel__summary-item"><span>状態</span><strong>${escapeHtml(interval.statusText || "(空欄)")}</strong></div>
        <div class="cell-detail-panel__summary-item"><span>記録者</span><strong>${escapeHtml(interval.reviewerText || "未入力")}</strong></div>
      </div>
      <div class="cell-detail-panel__section-title">このコマの判定</div>
      <div class="cell-detail-panel__findings">${findingHtml}</div>
      <div class="cell-detail-panel__section-title">前後の状態</div>
      <div class="cell-detail-panel__nearby">
        ${nearbyRows
          .map(
            (row) => `
              <div class="cell-detail-panel__nearby-row ${row.marker === "対象" ? "cell-detail-panel__nearby-row--target" : ""}">
                <span class="cell-detail-panel__nearby-marker">${escapeHtml(row.marker)}</span>
                <span class="cell-detail-panel__nearby-time">${escapeHtml(row.time)}</span>
                <span>状態: ${escapeHtml(row.status)}</span>
                <span>記録者: ${escapeHtml(row.reviewer)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function renderSummary() {
    const ui = getUiSettings();
    const totals = state.analysis?.summary?.totals ?? { red: "-", yellow: "-", info: "-" };
    const childCount = state.analysis?.summary?.childCount ?? "-";
    const reviewerCount = state.analysis?.summary?.reviewerStats?.uniqueCount ?? "-";
    const cards = [
      {
        label: ui.severityLabels.red,
        value: totals.red,
        description: "赤のコマ数です",
        className: "summary-card--red",
      },
      {
        label: ui.severityLabels.yellow,
        value: totals.yellow,
        description: "黄のコマ数です",
        className: "summary-card--yellow",
      },
      {
        label: ui.severityLabels.info,
        value: totals.info,
        description: ui.severityDescriptions.info,
        className: "summary-card--info",
      },
      {
        label: "解析できた園児",
        value: childCount,
        description: "確認対象として読み取れた人数です",
        className: "summary-card--neutral",
      },
      {
        label: "記録者",
        value: reviewerCount === "-" ? "-" : `${reviewerCount}人`,
        description: "シート全体で見つかった記録者数です",
        className: "summary-card--neutral",
      },
    ];

    elements.summaryCards.innerHTML = cards.map(renderSummaryCard).join("");

    if (!state.analysis) {
      elements.structureSummary.innerHTML = `
        <div class="structure-summary__lead"><strong>ファイルを選んでチェックすると、ここに読み取れた表の情報が表示されます。</strong></div>
        <div class="structure-summary__meta">主表示は「表レビュー」です。元の並びに近い形で、どのコマを見るか確認できます。</div>
      `;
      return;
    }

    const { summary } = state.analysis;
    const reviewerNames = summary.reviewerStats?.names ?? [];
    const reviewerText = reviewerNames.length > 0 ? reviewerNames.join("、") : "記録者名を検出できませんでした";
    const blockChips = (summary.blockSummaries ?? [])
      .map((block) => `<span class="structure-summary__chip">ブロック${block.blockIndex}: ${block.pairCount}人</span>`)
      .join("");

    elements.structureSummary.innerHTML = `
      <div class="structure-summary__lead"><strong>${summary.childCount}人分の記録を確認できました。</strong></div>
      <div class="structure-summary__meta">対象時間: ${summary.timeRange} / ブロック数: ${summary.blockCount} / シート全体の記録者: ${escapeHtml(reviewerText)}</div>
      <div class="structure-summary__meta">赤 ${summary.totals?.red ?? 0}コマ / 黄 ${summary.totals?.yellow ?? 0}コマ を表レビューに色付けします。</div>
      <div class="structure-summary__chips">${blockChips}</div>
    `;
  }

  function renderResults() {
    const findings = getDisplayFindings();
    const ui = getUiSettings();
    elements.resultsCount.textContent = `表示中 ${findings.length}件`;
    elements.downloadCsvButton.disabled = findings.length === 0;

    if (elements.resultsGuide) {
      elements.resultsGuide.textContent =
        state.viewMode === "timeline"
          ? "補助一覧です。時刻順に1コマずつ確認できます。"
          : `補助一覧です。園児ごとに1コマずつ確認できます。${ui.severityLabels.red}は赤、${ui.severityLabels.yellow}は黄として表示します。`;
    }

    elements.resultsList.innerHTML =
      state.viewMode === "timeline" ? renderTimelineResults(findings) : renderGroupedResults(findings);
  }

  function updateControls() {
    const hasWorkbook = Boolean(state.workbook?.sheets?.length);
    const hasFindings = getDisplayFindings().length > 0;

    elements.sheetSelect.disabled = !hasWorkbook;
    elements.analyzeButton.disabled = false;
    elements.downloadCsvButton.disabled = false;
    elements.analyzeButton.dataset.state = !hasWorkbook || !state.selectedSheetName || !state.config ? "not-ready" : "ready";
    elements.downloadCsvButton.dataset.state = hasFindings ? "ready" : "not-ready";
    elements.childFilter.disabled = !(state.analysis?.records?.length > 0);
    elements.configStatus.textContent = state.config ? `${state.configLabel} を使用中` : "設定ファイルの読み込みに失敗しています";
    elements.fileMeta.textContent = state.sourceLabel;
    renderDiagnostics();
  }

  function renderAll() {
    renderSummary();
    renderChildFilter();
    renderFilterControls();
    renderReviewBoard();
    renderResults();
    renderDebug();
    updateControls();
  }

  function getFindingSlotCount(finding) {
    if (Number.isInteger(finding?.rawFindingCount)) {
      return finding.rawFindingCount;
    }

    if (Number.isInteger(finding?.count)) {
      return finding.count;
    }

    return 1;
  }

  function sumFindingSlotCounts(findings) {
    return findings.reduce((total, finding) => total + getFindingSlotCount(finding), 0);
  }

  function formatIncidentSlotSummary(incidentCount, slotCount, options = {}) {
    const prefix = options.prefix ?? "";
    return `${prefix}${incidentCount}件 / 該当${slotCount}コマ`;
  }

  function formatIncidentCount(incidentCount, options = {}) {
    const prefix = options.prefix ?? "";
    return `${prefix}${incidentCount}件`;
  }

  function formatSlotCount(slotCount, options = {}) {
    const prefix = options.prefix ?? "該当";
    return `${prefix}${slotCount}コマ`;
  }

  function getGroupedFindingsForSelectedCell(selected) {
    if (!selected) {
      return [];
    }

    return getDisplayFindings().filter((finding) => {
      if (finding.blockIndex !== selected.blockIndex) {
        return false;
      }

      if (finding.stateRow !== selected.stateRow || finding.reviewerRow !== selected.reviewerRow) {
        return false;
      }

      if (!Number.isInteger(finding.context?.startIndex) || !Number.isInteger(finding.context?.endIndex)) {
        return false;
      }

      return selected.intervalIndex >= finding.context.startIndex && selected.intervalIndex <= finding.context.endIndex;
    });
  }

  function renderResultCard(finding, options = {}) {
    const severity = getSeverityMeta(finding.severity);
    const detailMessages = (finding.details ?? []).filter((detail) => detail && detail !== finding.message);
    const detailText = finding.message && finding.message !== finding.shortText ? finding.message : "";
    const slotCount = getFindingSlotCount(finding);
    const reviewerLabel =
      finding.ruleKey === "singleReviewerSheet"
        ? "記録者（シート全体）"
        : slotCount > 1 || String(finding.time ?? "").includes(" - ")
          ? "記録者（この区間）"
          : "記録者（この時刻）";
    const contextRows = Array.isArray(finding.contextRows) ? finding.contextRows : [];
    const contextHtml = contextRows.length
      ? `
        <div class="result-card__context">
          <div class="result-card__action-label">前後の状態</div>
          <div class="context-list">
            ${contextRows
              .map(
                (row) => `
                  <div class="context-list__row context-list__row--${row.marker === "対象" ? "target" : "side"}">
                    <span class="context-list__marker">${escapeHtml(row.marker)}</span>
                    <span class="context-list__time">${escapeHtml(row.time)}</span>
                    <span>状態: ${escapeHtml(row.status)}</span>
                    <span>記録者: ${escapeHtml(row.reviewer)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      `
      : "";

    return `
      <article class="result-card result-card--${finding.severity}">
        <div class="result-card__top">
          <div class="result-card__time">${escapeHtml(finding.time)}</div>
          <div class="result-card__meta">
            <span class="badge badge--${finding.severity}">${escapeHtml(severity.label)}</span>
            <span class="result-card__count">該当${slotCount}コマ</span>
          </div>
        </div>
        ${options.showChildName ? `<div class="result-card__name">${escapeHtml(finding.childName)}</div>` : ""}
        <div class="result-card__reviewer">${escapeHtml(reviewerLabel)}: ${escapeHtml(finding.reviewerText ?? formatReviewerDisplay(finding.reviewerNames ?? []))}</div>
        <div class="result-card__rule">${escapeHtml(finding.shortText)}</div>
        <div class="result-card__reason">理由: ${escapeHtml(finding.reason ?? "設定ルールに当てはまりました。")}</div>
        <div class="result-card__action-label">確認したいこと</div>
        <div class="result-card__action">${escapeHtml(finding.action)}</div>
        ${contextHtml}
        ${detailText ? `<div class="result-card__message">${escapeHtml(detailText)}</div>` : ""}
        ${
          detailMessages.length > 0
            ? `<details class="result-card__details"><summary>記録の詳細を見る</summary>${detailMessages
                .map((detail) => `<div>${escapeHtml(detail)}</div>`)
                .join("")}</details>`
            : ""
        }
      </article>
    `;
  }

  function renderGroupedResults(findings) {
    const groups = buildChildGroups(findings);
    if (groups.length === 0) {
      return renderEmptyResults();
    }

    return `
      <div class="grouped-results">
        ${groups
          .map((group) => {
            const groupSlotCount = sumFindingSlotCounts(group.findings);
            const chips = Object.entries(group.totals)
              .filter(([, count]) => count > 0)
              .map(([severity, count]) => {
                const meta = getSeverityMeta(severity);
                return `<span class="badge badge--${severity}">${escapeHtml(meta.label)} ${count}件</span>`;
              })
              .join("");

            return `
              <section class="child-group">
                <div class="child-group__header">
                  <div>
                    <div class="child-group__name">${escapeHtml(group.childName)}</div>
                    <div class="child-group__subtitle">${formatIncidentCount(group.findings.length)}（${formatSlotCount(groupSlotCount)}）</div>
                    <div class="child-group__reviewers">記録者（この園児の要確認内）: ${escapeHtml(formatReviewerDisplay(group.reviewerNames, "未入力または対象なし"))}</div>
                  </div>
                  <div class="child-group__chips">${chips}</div>
                </div>
                <div class="child-group__findings">
                  ${group.findings.map((finding) => renderResultCard(finding)).join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderTimelineResults(findings) {
    if (findings.length === 0) {
      return renderEmptyResults();
    }

    return `
      <div class="timeline-results">
        ${sortDisplayFindings(findings, "timeline")
          .map((finding) => renderResultCard(finding, { showChildName: true }))
          .join("")}
      </div>
    `;
  }

  function renderReviewBoard() {
    if (!elements.reviewBoard) {
      return;
    }

    if (!state.analysis) {
      if (elements.reviewCount) {
        elements.reviewCount.textContent = formatIncidentCount(0, { prefix: "要確認 " });
      }
      if (elements.reviewGuide) {
        elements.reviewGuide.textContent = "元の表に近い並びで、赤と黄のコマを確認できます。";
      }
      renderSheetAlertBanner();
      elements.reviewBoard.innerHTML = `
        <article class="result-card result-card--empty">
          xlsx を読み込んで「チェックする」を押すと、ここに表レビューを表示します。
        </article>
      `;
      if (elements.cellDetailPanel) {
        elements.cellDetailPanel.innerHTML =
          `<div class="cell-detail-panel__empty">セルを押すと、このコマの状態・記録者・前後の状態をここで確認できます。</div>`;
      }
      return;
    }

    const reviewMaps = buildReviewMaps();
    const groupedFindings = getDisplayFindings();
    const selected = ensureSelectedReviewCell(reviewMaps);
    const visibleRecords = getVisibleRecords();
    const layouts = (state.analysis.layouts ?? []).filter((layout) =>
      visibleRecords.some((record) => record.blockIndex === layout.blockIndex),
    );

    if (elements.reviewCount) {
      elements.reviewCount.textContent = formatIncidentCount(groupedFindings.length, {
        prefix: "要確認 ",
      });
    }

    if (elements.reviewGuide) {
      elements.reviewGuide.textContent =
        reviewMaps.flaggedSlotCount > 0
          ? `表では${formatSlotCount(reviewMaps.flaggedSlotCount, { prefix: "" })}をそのまま色付けし、件数は連続した同種の異常を1件として数えています。セルを押すと区間の詳細を確認できます。`
          : "要確認のコマはありません。必要に応じて表を見て、前後の状態や記録者を確認してください。";
    }

    renderSheetAlertBanner();

    if (layouts.length === 0) {
      elements.reviewBoard.innerHTML = `
        <article class="result-card result-card--empty">
          現在の絞り込み条件では表示する園児がいません。
        </article>
      `;
      renderSelectedCellDetail(selected, reviewMaps);
      return;
    }

    elements.reviewBoard.innerHTML = layouts
      .map((layout) => {
        const records = visibleRecords.filter((record) => record.blockIndex === layout.blockIndex);
        const timeHeaders = layout.timeAxis.columns
          .map((column) => `<th class="review-grid__time">${escapeHtml(column.label)}</th>`)
          .join("");
        const body = records
          .map((record) => {
            const statusCells = record.intervals
              .map((interval, intervalIndex) => {
                const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
                return `
                  <td class="review-grid__cell">
                    ${renderReviewCellButton({
                      record,
                      intervalIndex,
                      part: "status",
                      findings: reviewMaps.slotFindingMap.get(slotKey) ?? [],
                    })}
                  </td>
                `;
              })
              .join("");

            const reviewerCells = record.intervals
              .map((interval, intervalIndex) => {
                const slotKey = createReviewSlotKey(record.blockIndex, record.stateRow, record.reviewerRow, intervalIndex);
                return `
                  <td class="review-grid__cell">
                    ${renderReviewCellButton({
                      record,
                      intervalIndex,
                      part: "reviewer",
                      findings: reviewMaps.slotFindingMap.get(slotKey) ?? [],
                      reviewerFindings: reviewMaps.reviewerAlertMap.get(slotKey) ?? [],
                    })}
                  </td>
                `;
              })
              .join("");

            return `
              <tbody class="review-grid__body">
                <tr class="review-grid__row review-grid__row--state">
                  <th class="review-grid__name" rowspan="2">${escapeHtml(record.childName)}</th>
                  <th class="review-grid__label">状態</th>
                  ${statusCells}
                </tr>
                <tr class="review-grid__row review-grid__row--reviewer">
                  <th class="review-grid__label">記録者</th>
                  ${reviewerCells}
                </tr>
              </tbody>
            `;
          })
          .join("");

        return `
          <section class="review-block">
            <div class="review-block__header">
              <div class="review-block__title">ブロック${layout.blockIndex}</div>
              <div class="review-block__meta">${escapeHtml(
                `${layout.timeAxis.columns[0]?.label ?? "-"} - ${layout.timeAxis.columns[layout.timeAxis.columns.length - 1]?.label ?? "-"}`,
              )} / ${records.length}人</div>
            </div>
            <div class="review-block__scroll">
              <table class="review-grid">
                <thead>
                  <tr>
                    <th class="review-grid__name review-grid__name--head">園児名</th>
                    <th class="review-grid__label review-grid__label--head">欄</th>
                    ${timeHeaders}
                  </tr>
                </thead>
                ${body}
              </table>
            </div>
          </section>
        `;
      })
      .join("");

    renderSelectedCellDetail(selected, reviewMaps);
  }

  function renderSelectedCellDetail(selected, reviewMaps) {
    if (!elements.cellDetailPanel) {
      return;
    }

    if (!selected) {
      elements.cellDetailPanel.innerHTML =
        `<div class="cell-detail-panel__empty">セルを押すと、このコマの状態・記録者・前後の状態をここで確認できます。</div>`;
      return;
    }

    const record = getVisibleRecords().find(
      (item) =>
        item.blockIndex === selected.blockIndex &&
        item.stateRow === selected.stateRow &&
        item.reviewerRow === selected.reviewerRow,
    );

    if (!record || selected.intervalIndex < 0 || selected.intervalIndex >= record.intervals.length) {
      elements.cellDetailPanel.innerHTML =
        `<div class="cell-detail-panel__empty">このセルの詳細を読み取れませんでした。</div>`;
      return;
    }

    const interval = record.intervals[selected.intervalIndex];
    const groupedFindings = getGroupedFindingsForSelectedCell(selected);
    const nearbyStart = Math.max(0, selected.intervalIndex - 1);
    const nearbyEnd = Math.min(record.intervals.length - 1, selected.intervalIndex + 1);
    const nearbyRows = [];
    for (let index = nearbyStart; index <= nearbyEnd; index += 1) {
      const row = record.intervals[index];
      nearbyRows.push({
        marker: index < selected.intervalIndex ? "前" : index > selected.intervalIndex ? "後" : "対象",
        time: row.timeLabel,
        status: row.statusText || "(空欄)",
        reviewer: row.reviewerText || "未入力",
      });
    }

    const findingHtml =
      groupedFindings.length === 0
        ? `<div class="cell-detail-panel__empty-note">このコマにかかる要確認はありません。</div>`
        : groupedFindings
            .map((finding) => {
              const slotCount = getFindingSlotCount(finding);
              const severity = getSeverityMeta(finding.severity);
              return `
                <article class="cell-detail-panel__finding cell-detail-panel__finding--${finding.severity}">
                  <div class="cell-detail-panel__finding-top">
                    <span class="badge badge--${finding.severity}">${escapeHtml(severity.label)}</span>
                    <strong>${escapeHtml(finding.ruleName)}</strong>
                  </div>
                  <div class="cell-detail-panel__finding-reason">時刻範囲: ${escapeHtml(finding.time)}</div>
                  <div class="cell-detail-panel__finding-reason">記録者: ${escapeHtml(finding.reviewerText || "未入力")}</div>
                  <div class="cell-detail-panel__finding-reason">該当コマ数: ${slotCount}コマ</div>
                  <div class="cell-detail-panel__finding-reason">理由: ${escapeHtml(finding.reason)}</div>
                  <div class="cell-detail-panel__finding-action">確認したいこと: ${escapeHtml(finding.action)}</div>
                  <div class="cell-detail-panel__finding-message">${escapeHtml(finding.message)}</div>
                </article>
              `;
            })
            .join("");

    elements.cellDetailPanel.innerHTML = `
      <div class="cell-detail-panel__header">
        <div>
          <div class="cell-detail-panel__title">${escapeHtml(record.childName)} / ${escapeHtml(interval.timeLabel)}</div>
          <div class="cell-detail-panel__meta">ブロック${record.blockIndex} / ${selected.part === "reviewer" ? "記録者セル" : "状態セル"}</div>
        </div>
      </div>
      <div class="cell-detail-panel__summary">
        <div class="cell-detail-panel__summary-item"><span>状態</span><strong>${escapeHtml(interval.statusText || "(空欄)")}</strong></div>
        <div class="cell-detail-panel__summary-item"><span>記録者</span><strong>${escapeHtml(interval.reviewerText || "未入力")}</strong></div>
      </div>
      <div class="cell-detail-panel__section-title">このコマにかかる要確認</div>
      <div class="cell-detail-panel__findings">${findingHtml}</div>
      <div class="cell-detail-panel__section-title">前後の状態</div>
      <div class="cell-detail-panel__nearby">
        ${nearbyRows
          .map(
            (row) => `
              <div class="cell-detail-panel__nearby-row ${row.marker === "対象" ? "cell-detail-panel__nearby-row--target" : ""}">
                <span class="cell-detail-panel__nearby-marker">${escapeHtml(row.marker)}</span>
                <span class="cell-detail-panel__nearby-time">${escapeHtml(row.time)}</span>
                <span>状態: ${escapeHtml(row.status)}</span>
                <span>記録者: ${escapeHtml(row.reviewer)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function renderSummary() {
    const ui = getUiSettings();
    const summary = state.analysis?.summary ?? null;
    const totals = summary?.totals ?? { red: 0, yellow: 0, info: 0 };
    const reviewTotals = summary?.reviewTotals ?? { red: 0, yellow: 0, info: 0 };
    const childCount = summary?.childCount ?? "-";
    const reviewerCount = summary?.reviewerStats?.uniqueCount ?? "-";
    const cards = [
      {
        label: ui.severityLabels.red,
        value: summary ? formatIncidentCount(reviewTotals.red ?? 0) : "-",
        description: summary ? `表では${totals.red ?? 0}コマを赤表示` : "件数はまとまりで数えます",
        className: "summary-card--red",
      },
      {
        label: ui.severityLabels.yellow,
        value: summary ? formatIncidentCount(reviewTotals.yellow ?? 0) : "-",
        description: summary ? `表では${totals.yellow ?? 0}コマを黄表示` : "件数はまとまりで数えます",
        className: "summary-card--yellow",
      },
      {
        label: ui.severityLabels.info,
        value: summary ? formatIncidentCount(reviewTotals.info ?? 0) : "-",
        description: summary ? `表では${totals.info ?? 0}コマに情報表示` : ui.severityDescriptions.info,
        className: "summary-card--info",
      },
      {
        label: "解析できた園児",
        value: childCount,
        description: "確認対象として読み取れた人数です",
        className: "summary-card--neutral",
      },
      {
        label: "記録者",
        value: reviewerCount === "-" ? "-" : `${reviewerCount}人`,
        description: "シート全体で見つかった記録者数です",
        className: "summary-card--neutral",
      },
    ];

    elements.summaryCards.innerHTML = cards.map(renderSummaryCard).join("");

    if (!summary) {
      elements.structureSummary.innerHTML = `
        <div class="structure-summary__lead"><strong>ファイルを選んでチェックすると、ここに読み取れた表の情報を表示します。</strong></div>
        <div class="structure-summary__meta">主表示は「表レビュー」です。元の並びに近い形で、どのコマを見るか確認できます。</div>
      `;
      return;
    }

    const reviewerNames = summary.reviewerStats?.names ?? [];
    const reviewerText = reviewerNames.length > 0 ? reviewerNames.join("、") : "記録者欄を空欄として読み取りました";
    const blockChips = (summary.blockSummaries ?? [])
      .map((block) => `<span class="structure-summary__chip">ブロック${block.blockIndex}: ${block.pairCount}人</span>`)
      .join("");

    elements.structureSummary.innerHTML = `
      <div class="structure-summary__lead"><strong>${summary.childCount}人分を確認できました。</strong></div>
      <div class="structure-summary__meta">対象時間: ${summary.timeRange} / ブロック数: ${summary.blockCount} / シート全体の記録者: ${escapeHtml(reviewerText)}</div>
      <div class="structure-summary__meta">赤 ${formatIncidentCount(reviewTotals.red ?? 0)}（表では${totals.red ?? 0}コマを赤表示） / 黄 ${formatIncidentCount(reviewTotals.yellow ?? 0)}（表では${totals.yellow ?? 0}コマを黄表示）</div>
      <div class="structure-summary__chips">${blockChips}</div>
    `;
  }

  function renderResults() {
    const findings = getDisplayFindings();
    const ui = getUiSettings();
    const slotCount = sumFindingSlotCounts(findings);
    elements.resultsCount.textContent = `表示中 ${formatIncidentCount(findings.length)}`;
    elements.downloadCsvButton.disabled = findings.length === 0;

    if (elements.resultsGuide) {
      elements.resultsGuide.textContent =
        state.viewMode === "timeline"
          ? `一覧は連続した同種の異常を1件として表示しています。表レビューでは${formatSlotCount(slotCount, { prefix: "" })}をそのまま確認できます。`
          : `園児ごとに要確認のまとまりを表示しています。表レビューでは${formatSlotCount(slotCount, { prefix: "" })}を色付けしています。${ui.severityLabels.red}はすぐ確認、${ui.severityLabels.yellow}は念のため確認してください。`;
    }

    elements.resultsList.innerHTML =
      state.viewMode === "timeline" ? renderTimelineResults(findings) : renderGroupedResults(findings);
  }

  function isSafariBrowser() {
    const userAgent = navigator.userAgent ?? "";
    return /Safari/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS|OPiOS|Chrome|Chromium|Android/i.test(userAgent);
  }

  function setDiagnosticState(element, status, message) {
    if (!element) {
      return;
    }

    element.classList.remove("diagnostic-item--ok", "diagnostic-item--warn", "diagnostic-item--pending");
    element.classList.add(`diagnostic-item--${status}`);
    element.textContent = message;
  }

  function setDiagnostic(element, ok, message) {
    setDiagnosticState(element, ok ? "ok" : "warn", message);
  }

  function setDiagnosticCopyStatus(message, tone = "ok") {
    if (!elements?.diagnosticCopyStatus) {
      return;
    }

    if (!message) {
      elements.diagnosticCopyStatus.hidden = true;
      elements.diagnosticCopyStatus.textContent = "";
      elements.diagnosticCopyStatus.classList.remove("diagnostic-copy-status--warn");
      return;
    }

    elements.diagnosticCopyStatus.hidden = false;
    elements.diagnosticCopyStatus.textContent = message;
    elements.diagnosticCopyStatus.classList.toggle("diagnostic-copy-status--warn", tone === "warn");
  }

  function buildDiagnosticCopyText() {
    const summary = state.analysis?.summary ?? null;
    const reviewTotals = summary?.reviewTotals ?? { red: 0, yellow: 0, info: 0 };
    const totals = summary?.totals ?? { red: 0, yellow: 0, info: 0 };
    const buildInfo = state.buildInfo ?? APP_BUILD_INFO;
    const lines = [
      `アプリ版: ${buildInfo.versionLabel ?? "-"}`,
      `build: ${buildInfo.buildLabel ?? "-"}`,
      `URL: ${location.href}`,
      `表示: ${state.debugMode ? "debug" : "通常"}`,
      `Safari: ${isSafariBrowser() ? "yes" : "no"}`,
      `ホーム画面アプリ: ${state.pwaStatus?.standalone ? "yes" : "no"}`,
      `Service Worker: ${state.pwaStatus?.registrationState ?? "unknown"}`,
      `選択ファイル: ${state.sourceLabel || "-"}`,
      `選択シート: ${state.selectedSheetName || "-"}`,
      `ブロック数: ${summary?.blockCount ?? "-"}`,
      `園児数: ${summary?.childCount ?? "-"}`,
      `赤件数: ${reviewTotals.red ?? 0}`,
      `赤コマ数: ${totals.red ?? 0}`,
      `黄件数: ${reviewTotals.yellow ?? 0}`,
      `黄コマ数: ${totals.yellow ?? 0}`,
    ];

    return lines.join("\n");
  }

  function renderRuntimeChrome() {
    const buildInfo = state.buildInfo ?? APP_BUILD_INFO;
    const isLanDebug = state.debugMode && location.protocol === "http:" && !["localhost", "127.0.0.1"].includes(location.hostname);

    if (elements.buildVersion) {
      elements.buildVersion.textContent = buildInfo.versionLabel ?? "確認版 -";
      elements.buildVersion.title = buildInfo.buildLabel ? `build: ${buildInfo.buildLabel}` : "";
      elements.buildVersion.classList.toggle("meta-pill--debug", state.debugMode);
    }

    if (elements.debugBanner) {
      elements.debugBanner.hidden = !state.debugMode;
      if (state.debugMode) {
        elements.debugBanner.innerHTML = isLanDebug
          ? `<strong>LANデバッグ中</strong> ${escapeHtml(buildInfo.versionLabel ?? "-")} / PWA・ホーム画面追加・オフライン確認は HTTPS の確認版で行ってください。`
          : `<strong>開発者向け debug=1</strong> ${escapeHtml(buildInfo.versionLabel ?? "-")} / この画面では詳細ログと診断情報を表示しています。`;
      } else {
        elements.debugBanner.textContent = "";
      }
    }

    if (elements.diagnosticsPanel) {
      elements.diagnosticsPanel.hidden = !state.debugMode;
    }

    if (elements.diagnosticModePill) {
      elements.diagnosticModePill.textContent = state.debugMode ? "debug=1" : "通常表示";
      elements.diagnosticModePill.classList.toggle("meta-pill--debug", state.debugMode);
    }

    if (!state.debugMode) {
      setDiagnosticCopyStatus("");
      if (elements.diagnosticCopyFallback) {
        elements.diagnosticCopyFallback.hidden = true;
        elements.diagnosticCopyFallback.value = "";
      }
    }
  }

  async function copyDiagnosticInfo() {
    const report = buildDiagnosticCopyText();
    state.lastCopiedDiagnosticsText = report;

    if (!elements?.diagnosticCopyFallback) {
      return;
    }

    elements.diagnosticCopyFallback.value = report;

    try {
      if (!navigator.clipboard?.writeText || !globalThis.isSecureContext) {
        throw new Error("clipboard-unavailable");
      }

      await navigator.clipboard.writeText(report);
      elements.diagnosticCopyFallback.hidden = true;
      setDiagnosticCopyStatus("診断情報をコピーしました。", "ok");
      setStatus("診断情報をコピーしました。");
    } catch (error) {
      elements.diagnosticCopyFallback.hidden = false;
      elements.diagnosticCopyFallback.focus();
      elements.diagnosticCopyFallback.select();
      setDiagnosticCopyStatus("自動コピーできないため、下のテキストを手動でコピーしてください。", "warn");
      setStatus("診断情報を手動コピーできる状態にしました。");
    }
  }

  function renderDebug() {
    if (!elements?.debugOutput) {
      return;
    }

    const ui = getUiSettings();
    if (elements.debugPanelLabel) {
      elements.debugPanelLabel.textContent = state.debugMode ? "詳細ログ（開発者向け）" : ui.debugPanelLabel;
    }
    if (elements.debugPanelHint) {
      elements.debugPanelHint.textContent = state.debugMode
        ? `${state.buildInfo?.versionLabel ?? "確認版"} / debug=1`
        : ui.debugPanelHint;
    }
    if (elements.debugPanel) {
      elements.debugPanel.open = Boolean(state.debugMode || ui.showDebugPanelDefault);
    }

    elements.debugOutput.textContent = formatDebugReport(state.debug);
  }

  function renderAll() {
    renderRuntimeChrome();
    renderSummary();
    renderChildFilter();
    renderFilterControls();
    renderReviewBoard();
    renderResults();
    renderDebug();
    updateControls();
  }

  function updateControls() {
    const hasWorkbook = Boolean(state.workbook?.sheets?.length);
    const hasFindings = getDisplayFindings().length > 0;

    elements.sheetSelect.disabled = !hasWorkbook;
    elements.analyzeButton.disabled = false;
    elements.downloadCsvButton.disabled = false;
    elements.analyzeButton.dataset.state = !hasWorkbook || !state.selectedSheetName || !state.config ? "not-ready" : "ready";
    elements.downloadCsvButton.dataset.state = hasFindings ? "ready" : "not-ready";
    elements.childFilter.disabled = !(state.analysis?.records?.length > 0);
    elements.configStatus.textContent = state.config ? `${state.configLabel} を使用中` : "設定ファイルの読み込みに失敗しています";
    elements.fileMeta.textContent = state.sourceLabel;
    renderRuntimeChrome();
    renderDiagnostics();
  }

  function renderDiagnostics() {
    const supportsFileApi = Boolean(globalThis.File && globalThis.FileReader && globalThis.Blob);
    const supportsDownload = Boolean(globalThis.Blob && globalThis.URL?.createObjectURL);
    const isAppleTouch =
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isFileOpen = location.protocol === "file:";
    const hostname = location.hostname;
    const protocol = location.protocol;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isStandalone = Boolean(state.pwaStatus?.standalone);
    const isLanDebug = state.debugMode && protocol === "http:" && !isLocalhost && !isFileOpen;
    const canPrepareOffline = !isFileOpen && (Boolean(state.pwaStatus?.secure) || isLocalhost);
    const registrationState = state.pwaStatus?.registrationState ?? "unknown";
    const offlineReady =
      canPrepareOffline &&
      (Boolean(state.pwaStatus?.hasController) || registrationState === "active" || registrationState === "waiting");

    renderRuntimeChrome();

    setDiagnosticState(elements.diagnosticJs, "ok", "JavaScript: 動作しています");

    if (isLanDebug) {
      setDiagnosticState(
        elements.diagnosticUrl,
        "ok",
        `LANデバッグ中: ${protocol}//${hostname} で開いています`,
      );
      setDiagnosticState(
        elements.diagnosticHome,
        "pending",
        "ホーム画面追加: LANデバッグでは確認しません",
      );
      setDiagnosticState(
        elements.diagnosticOffline,
        "pending",
        "PWA / オフライン確認は HTTPS の確認版で行ってください",
      );
    } else {
      setDiagnosticState(
        elements.diagnosticUrl,
        canPrepareOffline ? "ok" : "warn",
        canPrepareOffline
          ? `開き方: ${protocol}//${hostname || "(local file)"} で開いています`
          : isFileOpen
            ? "開き方: file:// です。PWA化できないため Safari の URL から開いてください"
            : `開き方: ${protocol} です。PWA / オフライン確認には HTTPS が必要です`,
      );
      setDiagnosticState(
        elements.diagnosticHome,
        isStandalone ? "ok" : "pending",
        isStandalone
          ? "ホーム画面追加: ホーム画面アプリとして起動中です"
          : isAppleTouch
            ? "ホーム画面追加: Safari の共有から「ホーム画面に追加」を実行できます"
            : "ホーム画面追加: iPad Safari での確認時に使います",
      );
      setDiagnosticState(
        elements.diagnosticOffline,
        offlineReady ? "ok" : canPrepareOffline ? "pending" : "warn",
        offlineReady
          ? `オフライン準備: 利用可能です（${registrationState}）`
          : canPrepareOffline
            ? `オフライン準備: まだ完了していません（${registrationState}）`
            : "オフライン準備: この開き方では対象外です",
      );
    }

    setDiagnosticState(
      elements.diagnosticFile,
      supportsFileApi ? "ok" : "warn",
      supportsFileApi
        ? `ファイル読込: 利用できます（読込 ${state.diagnostics.fileReads}回）`
        : "ファイル読込: この開き方では利用できない可能性があります",
    );
    setDiagnosticState(
      elements.diagnosticAnalyze,
      state.diagnostics.analyzeClicks > 0 ? "ok" : "pending",
      `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements.diagnosticDemo,
      state.diagnostics.demoClicks > 0 ? "ok" : "pending",
      `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements.diagnosticDownload,
      supportsDownload ? "ok" : "warn",
      supportsDownload
        ? `CSV保存: 利用できます（押下 ${state.diagnostics.downloadClicks}回）`
        : "CSV保存: この開き方では保存できない可能性があります",
    );

    if (elements.environmentHint) {
      if (isLanDebug) {
        elements.environmentHint.innerHTML =
          `<strong>LANデバッグ中です:</strong> これは開発者の一時確認用です。PWA・ホーム画面追加・オフライン確認は、別途 HTTPS の確認版で行ってください。`;
      } else if (isAppleTouch && isFileOpen) {
        elements.environmentHint.innerHTML =
          `<strong>非推奨の開き方です:</strong> iPadではFilesからHTMLを直接開くと、JavaScriptやオフライン準備が安定しません。初回はSafariで配布URLを開き、<strong>共有 → ホーム画面に追加</strong>してください。`;
      } else if (isAppleTouch && !canPrepareOffline) {
        elements.environmentHint.innerHTML =
          `<strong>URLの開き方を確認してください:</strong> iPadのPWAとオフライン準備にはHTTPSのURLが必要です。Safariで確認版URLを開き、そこからホーム画面に追加してください。`;
      } else if (isAppleTouch && isStandalone) {
        elements.environmentHint.innerHTML =
          `<strong>ホーム画面アプリとして利用中です:</strong> この端末内でxlsxを読み取り、外部へ送信せずに解析します。ネット接続がない状態でも利用できます。`;
      } else if (isAppleTouch) {
        elements.environmentHint.innerHTML =
          `<strong>iPad Safariで開いています:</strong> 初回はこの画面から<strong>共有 → ホーム画面に追加</strong>を行うと、次回からオフラインで使えます。xlsxはiPad内で処理し、外部へ送信しません。`;
      } else {
        elements.environmentHint.innerHTML =
          `<strong>確認用のブラウザ表示です:</strong> 本番のiPadではSafariで確認版URLを開き、ホーム画面に追加して使います。`;
      }
    }
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未読込";
    state.buildInfo = APP_BUILD_INFO;
    state.debugMode = new URLSearchParams(location.search).get("debug") === "1";
    applyUiDefaults();
    renderAll();
    bindEvents();
    setStatus(
      state.debugMode
        ? "LANデバッグ用の表示です。必要なら iPad から ?debug=1 を付けて開いて確認してください。"
        : "オフラインで準備完了です。初回はSafariで開き、ホーム画面に追加してから使ってください。",
    );

    if (!state.pwaListenersBound) {
      state.pwaListenersBound = true;

      window.addEventListener("online", () => {
        refreshPwaStatus();
      });
      window.addEventListener("offline", () => {
        refreshPwaStatus();
      });
      window.addEventListener("load", () => {
        refreshPwaStatus();
      });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          refreshPwaStatus();
        }
      });

      const displayModeQuery = globalThis.matchMedia?.("(display-mode: standalone)");
      displayModeQuery?.addEventListener?.("change", () => {
        refreshPwaStatus();
      });

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          refreshPwaStatus();
        }).catch(() => {});
        navigator.serviceWorker.addEventListener?.("controllerchange", () => {
          refreshPwaStatus();
        });
      }
    }

    refreshPwaStatus();
  }

  async function refreshPwaStatus() {
    const isFileOpen = location.protocol === "file:";
    const isStandalone =
      globalThis.matchMedia?.("(display-mode: standalone)")?.matches ||
      Boolean(navigator.standalone);

    const nextStatus = {
      secure: Boolean(globalThis.isSecureContext),
      standalone: isStandalone,
      online: navigator.onLine !== false,
      serviceWorkerSupported: "serviceWorker" in navigator,
      registrationState: isFileOpen ? "file-open" : "none",
      hasController: Boolean(navigator.serviceWorker?.controller),
    };

    if (nextStatus.serviceWorkerSupported && !isFileOpen) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (!nextStatus.secure) {
          nextStatus.registrationState = "insecure";
        } else if (!registration) {
          nextStatus.registrationState = "none";
        } else if (registration.active) {
          nextStatus.registrationState = "active";
        } else if (registration.waiting) {
          nextStatus.registrationState = "waiting";
        } else if (registration.installing) {
          nextStatus.registrationState = "installing";
        } else {
          nextStatus.registrationState = "registered";
        }
      } catch (error) {
        nextStatus.registrationState = "error";
      }
    }

    state.pwaStatus = nextStatus;
    renderDiagnostics();
  }

  function renderDiagnostics() {
    const supportsFileApi = Boolean(globalThis.File && globalThis.FileReader && globalThis.Blob);
    const supportsDownload = Boolean(globalThis.Blob && globalThis.URL?.createObjectURL);
    const isAppleTouch =
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isFileOpen = location.protocol === "file:";
    const hostname = location.hostname;
    const protocol = location.protocol;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isStandalone = Boolean(state.pwaStatus?.standalone);
    const canPrepareOffline = !isFileOpen && (Boolean(state.pwaStatus?.secure) || isLocalhost);
    const registrationState = state.pwaStatus?.registrationState ?? "unknown";
    const offlineReady =
      canPrepareOffline &&
      (Boolean(state.pwaStatus?.hasController) || registrationState === "active" || registrationState === "waiting");

    setDiagnostic(elements.diagnosticJs, true, "JavaScript: 動作しています");
    setDiagnostic(
      elements.diagnosticUrl,
      canPrepareOffline,
      canPrepareOffline
        ? `開き方: ${protocol}//${hostname || "(local file)"} で開いています`
        : isFileOpen
          ? "開き方: file:// です。PWA化できないためSafariのURLから開いてください"
          : `開き方: ${protocol} です。オフライン化には HTTPS が必要です`,
    );
    setDiagnostic(
      elements.diagnosticHome,
      isStandalone,
      isStandalone
        ? "ホーム画面追加: ホーム画面アプリとして起動中です"
        : isAppleTouch
          ? "ホーム画面追加: Safariの共有から「ホーム画面に追加」を実行できます"
          : "ホーム画面追加: iPad Safariでの確認待ちです",
    );
    setDiagnostic(
      elements.diagnosticOffline,
      offlineReady,
      offlineReady
        ? `オフライン準備: 利用可能です（${registrationState}）`
        : canPrepareOffline
          ? `オフライン準備: まだ完了していません（${registrationState}）`
          : "オフライン準備: この開き方では有効になりません",
    );
    setDiagnostic(
      elements.diagnosticFile,
      supportsFileApi,
      supportsFileApi
        ? `ファイル読込: 利用できます（読込 ${state.diagnostics.fileReads}回）`
        : "ファイル読込: この開き方では利用できない可能性があります",
    );
    setDiagnostic(
      elements.diagnosticAnalyze,
      state.diagnostics.analyzeClicks > 0,
      `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`,
    );
    setDiagnostic(
      elements.diagnosticDemo,
      state.diagnostics.demoClicks > 0,
      `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`,
    );
    setDiagnostic(
      elements.diagnosticDownload,
      supportsDownload,
      supportsDownload
        ? `CSV保存: 利用できます（押下 ${state.diagnostics.downloadClicks}回）`
        : "CSV保存: この開き方では保存できない可能性があります",
    );

    if (elements.environmentHint) {
      if (isAppleTouch && isFileOpen) {
        elements.environmentHint.innerHTML =
          `<strong>非推奨の開き方です:</strong> iPadではFilesからHTMLを直接開くと、JavaScriptやオフライン準備が安定しません。初回はSafariで配布URLを開き、<strong>共有 → ホーム画面に追加</strong>してください。`;
      } else if (isAppleTouch && !canPrepareOffline) {
        elements.environmentHint.innerHTML =
          `<strong>URLの開き方を確認してください:</strong> iPadのPWAとオフライン準備にはHTTPSのURLが必要です。Safariで配布URLを開き、そこからホーム画面に追加してください。`;
      } else if (isAppleTouch && isStandalone) {
        elements.environmentHint.innerHTML =
          `<strong>ホーム画面アプリとして利用中です:</strong> この端末内でxlsxを読み取り、外部へ送信せずに解析します。ネット接続がない状態でも利用できます。`;
      } else if (isAppleTouch) {
        elements.environmentHint.innerHTML =
          `<strong>iPad Safariで開いています:</strong> 初回はこの画面から<strong>共有 → ホーム画面に追加</strong>を行うと、次回からオフラインで使えます。xlsxはiPad内で処理し、外部へ送信しません。`;
      } else {
        elements.environmentHint.innerHTML =
          `<strong>確認用のブラウザ表示です:</strong> 本番のiPadではSafariで配布URLを開き、ホーム画面に追加して使います。`;
      }
    }
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未読込";
    applyUiDefaults();
    renderDiagnostics();
    setStatus("オフラインで準備完了です。初回はSafariで開き、ホーム画面に追加してから使ってください。");
    renderAll();
    bindEvents();

    if (!state.pwaListenersBound) {
      state.pwaListenersBound = true;

      window.addEventListener("online", () => {
        refreshPwaStatus();
      });
      window.addEventListener("offline", () => {
        refreshPwaStatus();
      });
      window.addEventListener("load", () => {
        refreshPwaStatus();
      });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          refreshPwaStatus();
        }
      });

      const displayModeQuery = globalThis.matchMedia?.("(display-mode: standalone)");
      displayModeQuery?.addEventListener?.("change", () => {
        refreshPwaStatus();
      });

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          refreshPwaStatus();
        }).catch(() => {});
        navigator.serviceWorker.addEventListener?.("controllerchange", () => {
          refreshPwaStatus();
        });
      }
    }

    refreshPwaStatus();
  }

  function renderDiagnostics() {
    const supportsFileApi = Boolean(globalThis.File && globalThis.FileReader && globalThis.Blob);
    const supportsDownload = Boolean(globalThis.Blob && globalThis.URL?.createObjectURL);
    const isAppleTouch =
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isFileOpen = location.protocol === "file:";
    const hostname = location.hostname;
    const protocol = location.protocol;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isStandalone = Boolean(state.pwaStatus?.standalone);
    const isLanDebug = state.debugMode && protocol === "http:" && !isLocalhost && !isFileOpen;
    const canPrepareOffline = !isFileOpen && (Boolean(state.pwaStatus?.secure) || isLocalhost);
    const registrationState = state.pwaStatus?.registrationState ?? "unknown";
    const offlineReady =
      canPrepareOffline &&
      (Boolean(state.pwaStatus?.hasController) || registrationState === "active" || registrationState === "waiting");

    renderRuntimeChrome();

    setDiagnosticState(elements.diagnosticJs, "ok", "JavaScript: 動作しています");

    if (isLanDebug) {
      setDiagnosticState(
        elements.diagnosticUrl,
        "ok",
        `LANデバッグ中です: ${protocol}//${hostname} で開いています`,
      );
      setDiagnosticState(
        elements.diagnosticHome,
        "pending",
        "ホーム画面追加: LANデバッグでは確認しません",
      );
      setDiagnosticState(
        elements.diagnosticOffline,
        "pending",
        "PWA / オフライン確認は HTTPS の確認版で行ってください",
      );
    } else {
      setDiagnosticState(
        elements.diagnosticUrl,
        canPrepareOffline ? "ok" : "warn",
        canPrepareOffline
          ? `開き方: ${protocol}//${hostname || "(local file)"} で開いています`
          : isFileOpen
            ? "開き方: file:// では不安定です。Safari の URL から開いてください"
            : `開き方: ${protocol} です。PWA / オフライン確認には HTTPS が必要です`,
      );
      setDiagnosticState(
        elements.diagnosticHome,
        isStandalone ? "ok" : "pending",
        isStandalone
          ? "ホーム画面追加: ホーム画面アプリとして起動中です"
          : isAppleTouch
            ? "ホーム画面追加: Safari の共有から「ホーム画面に追加」で確認できます"
            : "ホーム画面追加: iPad Safari での確認時に使用します",
      );
      setDiagnosticState(
        elements.diagnosticOffline,
        offlineReady ? "ok" : canPrepareOffline ? "pending" : "warn",
        offlineReady
          ? `オフライン準備: 利用可能です（${registrationState}）`
          : canPrepareOffline
            ? `オフライン準備: まだ準備中です（${registrationState}）`
            : "オフライン準備: この開き方では対象外です",
      );
    }

    setDiagnosticState(
      elements.diagnosticFile,
      supportsFileApi ? "ok" : "warn",
      supportsFileApi
        ? `ファイル読込: 利用できます（読込 ${state.diagnostics.fileReads}回）`
        : "ファイル読込: この環境では利用できません",
    );
    setDiagnosticState(
      elements.diagnosticAnalyze,
      state.diagnostics.analyzeClicks > 0 ? "ok" : "pending",
      `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements.diagnosticDemo,
      state.diagnostics.demoClicks > 0 ? "ok" : "pending",
      `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements.diagnosticDownload,
      supportsDownload ? "ok" : "warn",
      supportsDownload
        ? `CSV保存: 利用できます（押下 ${state.diagnostics.downloadClicks}回）`
        : "CSV保存: この環境では利用できません",
    );

    if (elements.environmentHint) {
      if (isLanDebug) {
        elements.environmentHint.innerHTML =
          "<strong>LANデバッグ中です</strong> " +
          "これは開発者向けの一時確認です。PWA・ホーム画面追加・オフライン確認は HTTPS の確認版で行ってください。";
      } else if (isAppleTouch && isFileOpen) {
        elements.environmentHint.innerHTML =
          "<strong>Files からの直開きは非推奨です</strong> " +
          "iPad では Files から HTML を直接開くと JavaScript やオフライン準備が不安定です。Safari の URL から開き、必要なら <strong>ホーム画面に追加</strong> してください。";
      } else if (isAppleTouch && !canPrepareOffline) {
        elements.environmentHint.innerHTML =
          "<strong>URL の開き方を確認してください</strong> " +
          "iPad の PWA とオフライン確認には HTTPS の URL が必要です。Safari で URL を開き、必要ならホーム画面に追加してください。";
      } else if (isAppleTouch && isStandalone) {
        elements.environmentHint.innerHTML =
          "<strong>ホーム画面アプリとして利用中です</strong> " +
          "このまま iPad 内で xlsx を読み込み、結果を確認できます。ネット接続がなくても使えるかは別途オフライン確認を行ってください。";
      } else if (isAppleTouch) {
        elements.environmentHint.innerHTML =
          "<strong>iPad Safari で開いています</strong> " +
          "確認が終わったら、この画面から <strong>ホーム画面に追加</strong> しておくと次回から迷わず使えます。xlsx は iPad 内で読み込み、結果も端末内だけで表示します。";
      } else {
        elements.environmentHint.innerHTML =
          "<strong>開発者向けのブラウザ表示です</strong> " +
          "本番の iPad では Safari で URL を開き、必要ならホーム画面に追加して使います。";
      }
    }
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未選択";
    state.buildInfo = APP_BUILD_INFO;
    state.debugMode = new URLSearchParams(location.search).get("debug") === "1";
    applyUiDefaults();
    renderAll();
    bindEvents();
    setStatus(
      state.debugMode
        ? "LANデバッグ用の表示です。iPad では ?debug=1 を付けた URL で詳細確認してください。"
        : "オフライン前提の確認ツールです。通常は Safari で開き、必要に応じてホーム画面に追加してください。",
    );

    if (!state.pwaListenersBound) {
      state.pwaListenersBound = true;

      window.addEventListener("online", () => {
        refreshPwaStatus();
      });
      window.addEventListener("offline", () => {
        refreshPwaStatus();
      });
      window.addEventListener("load", () => {
        refreshPwaStatus();
      });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          refreshPwaStatus();
        }
      });

      const displayModeQuery = globalThis.matchMedia?.("(display-mode: standalone)");
      displayModeQuery?.addEventListener?.("change", () => {
        refreshPwaStatus();
      });

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          refreshPwaStatus();
        }).catch(() => {});
        navigator.serviceWorker.addEventListener?.("controllerchange", () => {
          refreshPwaStatus();
        });
      }
    }

    refreshPwaStatus();
  }

  function formatSupportDateTime(value) {
    if (!value) {
      return "未記録";
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  function maskFileLabel(value, includeSensitive = false) {
    const text = String(value ?? "").trim();
    if (!text) {
      return "未選択";
    }

    if (includeSensitive || text.includes("ダミー") || text === "未選択") {
      return text;
    }

    const extensionMatch = /\.[a-z0-9]+$/i.exec(text);
    const extension = extensionMatch ? extensionMatch[0] : "";
    return extension ? `ファイル名を伏せています (${extension})` : "ファイル名を伏せています";
  }

  function maskPersonLabel(value, includeSensitive = false) {
    const text = String(value ?? "").trim();
    if (!text) {
      return "未選択";
    }

    if (includeSensitive) {
      return text;
    }

    return "園児名を伏せています";
  }

  function getSelectedCellSupportSummary(includeSensitive = false) {
    const selected = state.selectedReviewCell;
    if (!selected || !state.analysis?.records?.length) {
      return "まだありません";
    }

    const record = (state.analysis.records ?? []).find(
      (item) =>
        item.blockIndex === selected.blockIndex &&
        item.stateRow === selected.stateRow &&
        item.reviewerRow === selected.reviewerRow,
    );
    if (!record) {
      return "まだありません";
    }

    const interval = record.intervals?.[selected.intervalIndex];
    if (!interval) {
      return "まだありません";
    }

    const relatedFindings = getGroupedFindingsForSelectedCell(selected);
    const ruleText = relatedFindings.length > 0
      ? relatedFindings.map((finding) => finding.shortText ?? finding.ruleName).join(" / ")
      : "要確認なし";
    const childName = maskPersonLabel(record.childName, includeSensitive);
    const statusText = interval.statusText || "(空欄)";

    return `${childName} / ${interval.timeLabel} / 状態 ${statusText} / ${ruleText}`;
  }

  function getSupportDiagnosticPayload(includeSensitive = false) {
    const summary = state.analysis?.summary ?? null;
    const reviewTotals = summary?.reviewTotals ?? { red: 0, yellow: 0, info: 0 };
    const totals = summary?.totals ?? { red: 0, yellow: 0, info: 0 };
    const buildInfo = state.buildInfo ?? APP_BUILD_INFO;
    const isStandalone =
      globalThis.matchMedia?.("(display-mode: standalone)")?.matches ||
      Boolean(navigator.standalone);

    const runtimeLabel = state.debugMode
      ? "debug表示"
      : isStandalone
        ? "ホーム画面アプリ"
        : isSafariBrowser()
          ? "Safari"
          : "ブラウザ";

    return {
      versionLabel: buildInfo.versionLabel ?? "-",
      buildLabel: buildInfo.buildLabel ?? "-",
      runtimeLabel,
      url: location.href,
      modeLabel: state.debugMode ? "debug表示" : "通常表示",
      isSafari: isSafariBrowser() ? "yes" : "no",
      isStandalone: isStandalone ? "yes" : "no",
      offlineLabel: navigator.onLine === false ? "offline" : "online",
      serviceWorkerLabel: state.pwaStatus?.registrationState ?? "unknown",
      updateLabel: state.updateInfo?.message ?? "まだ確認していません",
      fileLabel: maskFileLabel(state.sourceLabel, includeSensitive),
      sheetLabel: state.selectedSheetName || "未選択",
      blockCount: summary?.blockCount ?? 0,
      childCount: summary?.childCount ?? 0,
      redIncidentCount: reviewTotals.red ?? 0,
      redCellCount: totals.red ?? 0,
      yellowIncidentCount: reviewTotals.yellow ?? 0,
      selectedCellLabel: getSelectedCellSupportSummary(includeSensitive),
      lastErrorLabel: state.lastErrorMessage || "ありません",
      lastAnalysisLabel: state.lastAnalysisAt ? formatSupportDateTime(state.lastAnalysisAt) : "未実行",
    };
  }

  function buildDiagnosticCopyText(includeSensitive = state.supportIncludeSensitive) {
    const payload = getSupportDiagnosticPayload(includeSensitive);
    const lines = [
      `アプリ版: ${payload.versionLabel}`,
      `build: ${payload.buildLabel}`,
      `実行環境: ${payload.runtimeLabel}`,
      `URL: ${payload.url}`,
      `表示モード: ${payload.modeLabel}`,
      `Safari: ${payload.isSafari}`,
      `PWA起動: ${payload.isStandalone}`,
      `オフライン状態: ${payload.offlineLabel}`,
      `Service Worker: ${payload.serviceWorkerLabel}`,
      `更新状況: ${payload.updateLabel}`,
      `選択ファイル: ${payload.fileLabel}`,
      `選択シート: ${payload.sheetLabel}`,
      `ブロック数: ${payload.blockCount}`,
      `園児数: ${payload.childCount}`,
      `赤件数: ${payload.redIncidentCount}`,
      `赤コマ数: ${payload.redCellCount}`,
      `黄件数: ${payload.yellowIncidentCount}`,
      `最後に選択したセル: ${payload.selectedCellLabel}`,
      `最後のエラー: ${payload.lastErrorLabel}`,
      `最終解析時刻: ${payload.lastAnalysisLabel}`,
    ];

    if (includeSensitive) {
      lines.push("詳細診断: 個人情報を含む可能性があるため取り扱いに注意してください");
    } else {
      lines.push("詳細診断: 個人名は初期設定で伏せています");
    }

    return lines.join("\n");
  }

  function setDiagnosticCopyStatus(message, tone = "ok") {
    const targets = [
      { box: elements?.diagnosticCopyStatus, area: elements?.diagnosticCopyFallback },
      { box: elements?.supportCopyStatus, area: elements?.supportCopyFallback },
    ];

    for (const target of targets) {
      if (!target.box) {
        continue;
      }

      if (!message) {
        target.box.hidden = true;
        target.box.textContent = "";
        target.box.classList.remove("diagnostic-copy-status--warn");
        continue;
      }

      target.box.hidden = false;
      target.box.textContent = message;
      target.box.classList.toggle("diagnostic-copy-status--warn", tone === "warn");
    }
  }

  async function copyDiagnosticInfo() {
    const report = buildDiagnosticCopyText();
    state.lastCopiedDiagnosticsText = report;

    if (elements?.diagnosticCopyFallback) {
      elements.diagnosticCopyFallback.value = report;
    }
    if (elements?.supportCopyFallback) {
      elements.supportCopyFallback.value = report;
    }

    try {
      if (!navigator.clipboard?.writeText || !globalThis.isSecureContext) {
        throw new Error("clipboard-unavailable");
      }

      await navigator.clipboard.writeText(report);
      if (elements?.diagnosticCopyFallback) {
        elements.diagnosticCopyFallback.hidden = true;
      }
      if (elements?.supportCopyFallback) {
        elements.supportCopyFallback.hidden = true;
      }
      setDiagnosticCopyStatus("診断情報をコピーしました。", "ok");
      setStatus("診断情報をコピーしました。");
    } catch (error) {
      if (elements?.diagnosticCopyFallback) {
        elements.diagnosticCopyFallback.hidden = false;
      }
      if (elements?.supportCopyFallback) {
        elements.supportCopyFallback.hidden = false;
        elements.supportCopyFallback.focus();
        elements.supportCopyFallback.select();
      }
      setDiagnosticCopyStatus("自動コピーに失敗しました。表示されたテキストを手動でコピーしてください。", "warn");
      setStatus("診断情報を手動コピーできる状態にしました。");
    }
  }

  function setStatus(message) {
    state.currentStatusMessage = message;
    if (elements?.statusBanner) {
      elements.statusBanner.textContent = message;
    }
    if (elements) {
      renderDiagnostics();
    }
  }

  function setError(message) {
    state.currentErrorMessage = message || "";
    if (message) {
      state.lastErrorMessage = message;
    }

    if (elements?.errorBox) {
      if (!message) {
        elements.errorBox.hidden = true;
        elements.errorBox.textContent = "";
      } else {
        elements.errorBox.hidden = false;
        elements.errorBox.textContent = message;
      }
    }

    if (elements) {
      renderDiagnostics();
    }
  }

  function updateSupportUpdateActionState() {
    if (elements?.supportApplyUpdateButton) {
      elements.supportApplyUpdateButton.hidden = !state.updateInfo?.waiting;
    }
  }

  function setUpdateInfo(status, message, waiting = false) {
    state.updateInfo = {
      status,
      message,
      checkedAt: new Date().toISOString(),
      waiting,
    };
    updateSupportUpdateActionState();
  }

  async function applyWaitingUpdate() {
    if (!("serviceWorker" in navigator)) {
      setUpdateInfo("unsupported", "この環境では更新ボタンを使えません", false);
      renderDiagnostics();
      return;
    }

    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration?.waiting) {
      setUpdateInfo("idle", "適用できる新しい更新はありません", false);
      renderDiagnostics();
      return;
    }

    setUpdateInfo("applying", "新しい版に切り替えています。再読み込みを待っています", true);
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
    renderDiagnostics();
  }

  async function checkForUpdates() {
    if (!("serviceWorker" in navigator)) {
      setUpdateInfo("unsupported", "この環境では更新確認を使えません", false);
      renderDiagnostics();
      return;
    }

    if (!globalThis.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      setUpdateInfo("unsupported", "更新確認は HTTPS の公開版で利用してください", false);
      renderDiagnostics();
      return;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        setUpdateInfo("idle", "まだPWAとして準備されていません", false);
        renderDiagnostics();
        return;
      }

      await registration.update();
      if (registration.waiting) {
        setUpdateInfo("update-available", "新しい版があります。「更新して再読み込み」を押してください", true);
      } else {
        setUpdateInfo("up-to-date", "このiPadでは最新の版を利用中です", false);
      }
      renderDiagnostics();
    } catch (error) {
      setUpdateInfo("error", `更新確認に失敗しました: ${error.message}`, false);
      renderDiagnostics();
    }
  }

  function renderRuntimeChrome() {
    const buildInfo = state.buildInfo ?? APP_BUILD_INFO;
    const isStandalone =
      globalThis.matchMedia?.("(display-mode: standalone)")?.matches ||
      Boolean(navigator.standalone);

    if (elements?.buildVersion) {
      elements.buildVersion.textContent = buildInfo.versionLabel ?? "確認版 -";
      elements.buildVersion.classList.toggle("meta-pill--debug", state.debugMode);
      elements.buildVersion.title = buildInfo.buildLabel ? `build: ${buildInfo.buildLabel}` : "";
    }

    if (elements?.buildDetail) {
      elements.buildDetail.textContent = `build: ${buildInfo.buildLabel ?? "-"}`;
    }

    if (elements?.debugBanner) {
      elements.debugBanner.hidden = !state.debugMode;
      elements.debugBanner.innerHTML = state.debugMode
        ? `<strong>開発者向け debug=1</strong> ${escapeHtml(buildInfo.versionLabel ?? "-")} / 詳細ログと追加診断を表示しています。`
        : "";
    }

    if (elements?.diagnosticsPanel) {
      elements.diagnosticsPanel.hidden = !state.debugMode;
    }

    if (elements?.diagnosticModePill) {
      elements.diagnosticModePill.textContent = state.debugMode ? "debug=1" : "通常表示";
      elements.diagnosticModePill.classList.toggle("meta-pill--debug", state.debugMode);
    }

    if (elements?.supportModePill) {
      elements.supportModePill.textContent = state.debugMode
        ? "debug=1"
        : isStandalone
          ? "ホーム画面アプリ"
          : "通常表示";
      elements.supportModePill.classList.toggle("meta-pill--debug", state.debugMode);
    }

    if (elements?.supportPanel) {
      elements.supportPanel.open = Boolean(state.debugMode || elements.supportPanel.open);
    }
  }

  function renderSupportPanel() {
    const payload = getSupportDiagnosticPayload(state.supportIncludeSensitive);
    const offlineStatus = navigator.onLine === false ? "オフラインです" : "オンラインです";
    const pwaStatusLabel = payload.isStandalone === "yes" ? "ホーム画面アプリで起動中です" : "ブラウザ表示です";

    setDiagnosticState(elements?.supportVersion, "ok", `アプリ版: ${payload.versionLabel}`);
    setDiagnosticState(elements?.supportBuild, "ok", `ビルド日時: ${payload.buildLabel}`);
    setDiagnosticState(elements?.supportRuntime, "ok", `実行環境: ${payload.runtimeLabel}`);
    setDiagnosticState(elements?.supportUrl, "ok", `現在のURL: ${payload.url}`);
    setDiagnosticState(elements?.supportPwa, payload.isStandalone === "yes" ? "ok" : "pending", `PWA起動: ${pwaStatusLabel}`);
    setDiagnosticState(elements?.supportOffline, navigator.onLine === false ? "pending" : "ok", `オフライン状態: ${offlineStatus}`);
    setDiagnosticState(
      elements?.supportServiceWorker,
      state.pwaStatus?.registrationState === "active" || state.pwaStatus?.registrationState === "waiting" ? "ok" : "pending",
      `Service Worker: ${payload.serviceWorkerLabel}`,
    );
    setDiagnosticState(
      elements?.supportUpdate,
      state.updateInfo?.status === "update-available" ? "warn" : "ok",
      `更新状況: ${payload.updateLabel}`,
    );
    setDiagnosticState(elements?.supportFile, state.sourceLabel ? "ok" : "pending", `選択ファイル: ${payload.fileLabel}`);
    setDiagnosticState(elements?.supportSheet, state.selectedSheetName ? "ok" : "pending", `選択シート: ${payload.sheetLabel}`);
    setDiagnosticState(elements?.supportBlocks, state.analysis ? "ok" : "pending", `ブロック数: ${payload.blockCount}`);
    setDiagnosticState(elements?.supportChildren, state.analysis ? "ok" : "pending", `園児数: ${payload.childCount}`);
    setDiagnosticState(elements?.supportRedIncidents, state.analysis ? "ok" : "pending", `赤件数: ${payload.redIncidentCount}`);
    setDiagnosticState(elements?.supportRedCells, state.analysis ? "ok" : "pending", `赤コマ数: ${payload.redCellCount}`);
    setDiagnosticState(elements?.supportYellowIncidents, state.analysis ? "ok" : "pending", `黄件数: ${payload.yellowIncidentCount}`);
    setDiagnosticState(
      elements?.supportSelectedCell,
      state.selectedReviewCell ? "ok" : "pending",
      `最後に選択したセル: ${payload.selectedCellLabel}`,
    );
    setDiagnosticState(
      elements?.supportLastError,
      state.lastErrorMessage ? "warn" : "ok",
      `最後のエラー: ${payload.lastErrorLabel}`,
    );
    setDiagnosticState(
      elements?.supportLastAnalysis,
      state.lastAnalysisAt ? "ok" : "pending",
      `最終解析時刻: ${payload.lastAnalysisLabel}`,
    );

    if (elements?.supportSensitiveToggle) {
      elements.supportSensitiveToggle.checked = state.supportIncludeSensitive;
    }

    updateSupportUpdateActionState();
  }

  async function refreshPwaStatus() {
    const isFileOpen = location.protocol === "file:";
    const isStandalone =
      globalThis.matchMedia?.("(display-mode: standalone)")?.matches ||
      Boolean(navigator.standalone);

    const nextStatus = {
      secure: Boolean(globalThis.isSecureContext),
      standalone: isStandalone,
      online: navigator.onLine !== false,
      serviceWorkerSupported: "serviceWorker" in navigator,
      registrationState: isFileOpen ? "file-open" : "none",
      hasController: Boolean(navigator.serviceWorker?.controller),
    };

    if (nextStatus.serviceWorkerSupported && !isFileOpen) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (!nextStatus.secure) {
          nextStatus.registrationState = "insecure";
        } else if (!registration) {
          nextStatus.registrationState = "none";
        } else if (registration.waiting) {
          nextStatus.registrationState = "waiting";
          setUpdateInfo("update-available", "新しい版があります。「更新して再読み込み」を押してください", true);
        } else if (registration.active) {
          nextStatus.registrationState = "active";
        } else if (registration.installing) {
          nextStatus.registrationState = "installing";
        } else {
          nextStatus.registrationState = "registered";
        }
      } catch (error) {
        nextStatus.registrationState = "error";
      }
    }

    state.pwaStatus = nextStatus;
    renderDiagnostics();
  }

  function renderDiagnostics() {
    renderRuntimeChrome();
    renderSupportPanel();

    const supportsFileApi = Boolean(globalThis.File && globalThis.FileReader && globalThis.Blob);
    const supportsDownload = Boolean(globalThis.Blob && globalThis.URL?.createObjectURL);
    const isAppleTouch =
      /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isFileOpen = location.protocol === "file:";
    const hostname = location.hostname;
    const protocol = location.protocol;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isStandalone = Boolean(state.pwaStatus?.standalone);
    const canPrepareOffline = !isFileOpen && (Boolean(state.pwaStatus?.secure) || isLocalhost);
    const registrationState = state.pwaStatus?.registrationState ?? "unknown";
    const offlineReady =
      canPrepareOffline &&
      (Boolean(state.pwaStatus?.hasController) || registrationState === "active" || registrationState === "waiting");

    setDiagnosticState(elements?.diagnosticJs, "ok", "JavaScript: 動作しています");
    setDiagnosticState(
      elements?.diagnosticUrl,
      canPrepareOffline ? "ok" : "warn",
      canPrepareOffline
        ? `開き方: ${protocol}//${hostname || "(local file)"}`
        : isFileOpen
          ? "開き方: file:// では不安定です。SafariのURLから開いてください"
          : `開き方: ${protocol} / PWA確認には HTTPS が必要です`,
    );
    setDiagnosticState(
      elements?.diagnosticHome,
      isStandalone ? "ok" : "pending",
      isStandalone ? "ホーム画面追加: ホーム画面アプリとして起動中です" : "ホーム画面追加: 必要に応じてSafariから追加してください",
    );
    setDiagnosticState(
      elements?.diagnosticOffline,
      offlineReady ? "ok" : canPrepareOffline ? "pending" : "warn",
      offlineReady ? `オフライン準備: 利用可能です（${registrationState}）` : `オフライン準備: ${registrationState}`,
    );
    setDiagnosticState(
      elements?.diagnosticFile,
      supportsFileApi ? "ok" : "warn",
      supportsFileApi ? `ファイル読込: 利用できます（読込 ${state.diagnostics.fileReads}回）` : "ファイル読込: この環境では利用できません",
    );
    setDiagnosticState(
      elements?.diagnosticAnalyze,
      state.diagnostics.analyzeClicks > 0 ? "ok" : "pending",
      `チェックボタン: ${state.diagnostics.analyzeClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements?.diagnosticDemo,
      state.diagnostics.demoClicks > 0 ? "ok" : "pending",
      `内蔵ダミーxlsx: ${state.diagnostics.demoClicks}回押下を検知`,
    );
    setDiagnosticState(
      elements?.diagnosticDownload,
      supportsDownload ? "ok" : "warn",
      supportsDownload ? `CSV保存: 利用できます（押下 ${state.diagnostics.downloadClicks}回）` : "CSV保存: この環境では利用できません",
    );

    if (elements?.environmentHint) {
      if (isAppleTouch && isFileOpen) {
        elements.environmentHint.innerHTML =
          "<strong>Files からの直開きは非推奨です</strong> " +
          "iPadでは Safari のURLから開き、必要ならホーム画面に追加して使ってください。";
      } else if (isAppleTouch && !canPrepareOffline) {
        elements.environmentHint.innerHTML =
          "<strong>PWA確認には HTTPS が必要です</strong> " +
          "公開版を Safari で開き、必要ならホーム画面に追加して確認してください。";
      } else if (isAppleTouch && isStandalone) {
        elements.environmentHint.innerHTML =
          "<strong>ホーム画面アプリとして利用中です</strong> " +
          "xlsx は iPad 内で読み込み、結果も端末内だけで表示します。";
      } else if (isAppleTouch) {
        elements.environmentHint.innerHTML =
          "<strong>iPad Safari で開いています</strong> " +
          "この画面からホーム画面に追加しておくと、次回から迷わず使えます。";
      } else {
        elements.environmentHint.innerHTML =
          "<strong>開発者向けの補助表示です</strong> " +
          "本番は妻のiPadでホーム画面追加したPWAを使う前提です。";
      }
    }
  }

  function init() {
    elements = getElements();
    state.configLabel = "既定設定";
    state.sourceLabel = "未選択";
    state.buildInfo = APP_BUILD_INFO;
    state.debugMode = new URLSearchParams(location.search).get("debug") === "1";
    state.supportIncludeSensitive = false;
    applyUiDefaults();
    renderAll();
    bindEvents();

    if (!state.supportListenersBound) {
      state.supportListenersBound = true;

      elements?.supportCopyButton?.addEventListener("click", async () => {
        await copyDiagnosticInfo();
      });
      elements?.supportSensitiveToggle?.addEventListener("change", (event) => {
        state.supportIncludeSensitive = Boolean(event.target.checked);
        renderDiagnostics();
      });
      elements?.supportCheckUpdateButton?.addEventListener("click", async () => {
        await checkForUpdates();
      });
      elements?.supportApplyUpdateButton?.addEventListener("click", async () => {
        await applyWaitingUpdate();
      });
      elements?.reviewBoard?.addEventListener("click", () => {
        requestAnimationFrame(() => {
          renderDiagnostics();
        });
      });
    }

    setStatus(
      state.debugMode
        ? "開発者向け debug 表示です。通常運用は妻のiPadでホーム画面追加したPWAを使います。"
        : "準備完了です。通常は妻のiPadでホーム画面追加したPWAを使い、困ったときは診断・サポートを開いてください。",
    );

    if (!state.pwaListenersBound) {
      state.pwaListenersBound = true;

      window.addEventListener("online", () => {
        refreshPwaStatus();
      });
      window.addEventListener("offline", () => {
        refreshPwaStatus();
      });
      window.addEventListener("load", () => {
        refreshPwaStatus();
      });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          refreshPwaStatus();
        }
      });

      const displayModeQuery = globalThis.matchMedia?.("(display-mode: standalone)");
      displayModeQuery?.addEventListener?.("change", () => {
        refreshPwaStatus();
      });

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          refreshPwaStatus();
        }).catch(() => {});
        navigator.serviceWorker.addEventListener?.("controllerchange", () => {
          if (state.updateInfo?.status === "applying") {
            location.reload();
            return;
          }
          refreshPwaStatus();
        });
      }
    }

    refreshPwaStatus();
  }

  async function checkForUpdates() {
    if (!("serviceWorker" in navigator)) {
      setUpdateInfo("unsupported", "この環境では更新確認を使えません", false);
      renderDiagnostics();
      return;
    }

    if (navigator.onLine === false) {
      setUpdateInfo("offline", "オフライン中は更新確認できません。配布URLに接続できるときにもう一度お試しください", false);
      renderDiagnostics();
      return;
    }

    if (!globalThis.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      setUpdateInfo("unsupported", "更新確認は HTTPS の公開版で利用してください", false);
      renderDiagnostics();
      return;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        setUpdateInfo("idle", "まだPWAとして準備されていません", false);
        renderDiagnostics();
        return;
      }

      await registration.update();
      if (registration.waiting) {
        setUpdateInfo("update-available", "新しい版があります。「更新して再読み込み」を押してください", true);
      } else {
        setUpdateInfo("up-to-date", "このiPadでは最新の版を利用中です", false);
      }
      renderDiagnostics();
    } catch (error) {
      setUpdateInfo("error", `配布URLへ接続できない、または更新確認に失敗しました: ${error.message}`, false);
      renderDiagnostics();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

    </script>
    <script>
      const codexQuery = new URLSearchParams(location.search);
      const codexDebugMode = codexQuery.get("debug") === "1";
      if ("serviceWorker" in navigator && location.protocol !== "file:" && !codexDebugMode) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("./service-worker.js", { scope: "./" }).catch((error) => {
            console.warn("Service worker registration failed:", error);
          });
        });
      } else if ("serviceWorker" in navigator && codexDebugMode) {
        navigator.serviceWorker.getRegistration().then((registration) => registration?.unregister()).catch(() => {});
      }
    </script>
  </body>
</html>
