# Codex向け実装引継ぎ

## 0. 最初に読むもの

1. `docs/PROJECT_HANDOFF_JA.md`
2. `docs/SECURITY_REQUIREMENTS_JA.md`
3. `docs/PRODUCTION_ARCHITECTURE_JA.md`
4. `docs/IMPLEMENTATION_STATUS_JA.md`
5. `docs/ARCHITECTURE_AUDIT_JA.md`
6. `deme-ui-foundation-v6/index.html`
7. `deme-roster-master-v9/index.html`

既存プロトタイプは検討履歴として残すこと。削除・上書きしない。

2026-07-16以降の本番セキュリティ・所有権については、`docs/SECURITY_REQUIREMENTS_JA.md` と `docs/PRODUCTION_ARCHITECTURE_JA.md` を正とする。本書に残る過去の候補と矛盾する場合は、最新2文書を優先する。

## 1. プロジェクトの目的

建設・工事現場向けに、スマートフォン中心で以下を行えるアプリを構築する。

- 作業員マスター管理
- 現場マスター管理
- 現場別作業員情報管理
- 作業員名簿PDF作成
- 日報入力
- 月次日報
- 現場別・月別の出面表

初期優先は、作業員名簿領域とスマホUIの本番化。

## 2. 守るべき確定事項

### スマホUI

- スマートフォン運用が必須。
- ホームから機能へ遷移する。
- マスター管理と書類作成を分離する。
- 主要タップ領域は44px以上。
- 360px、390px、430px幅で破綻させない。
- PDFプレビュー以外で横スクロールを発生させない。
- UI上に仮想モニター件数、AI的な説明、開発者向けの文言を表示しない。

### 日報

- 初期項目: 日付、現場、作業内容、人工、残業、備考。
- 人工・残業は0.5単位を基本とし、1.0単位も選びやすくする。
- 勤務時間 = 人工 × 8時間。
- 当日入力と月次一覧を別画面にする。
- 日報入力画面へ月累計を表示しない。

### 作業員名簿

- 作業員マスター、現場マスター、現場別作業員情報を分離する。
- PDF作成は、現場選択 → 作業員選択 → 現場別情報確認 → 不足チェック → PDFプレビュー。
- 不足チェックは、何が足りないかだけでなく、どこを修正するかまで導く。
- 元請指定様式への対応を前提とする。
- 初期版は自社情報1件と自社作業員だけを扱い、所属会社選択、協力会社作業員、複数会社管理を実装しない。
- 一次会社名、一次会社事業者ID、自社施工次数は現場情報として扱う。
- 健康診断日は収集しない。

### 本番所有権・セキュリティ

- 本番環境は依頼者が所有し、諒さんは納品後の本番データ、秘密鍵、ログ、バックアップ、デプロイへアクセスしない。
- 開発、テスト、レビュー、サポートは匿名データだけで行う。
- 招待制、個人別アカウント、全利用者MFA、全業務テーブルのRLSを必須とする。
- 初期版はオンライン専用とし、PIIをブラウザの永続保存領域へ保存しない。
- `docs/SECURITY_REQUIREMENTS_JA.md` のP0完了前に実データを登録しない。

## 3. 既存プロトタイプの位置づけ

既存HTMLは本番コードではない。

- 単一HTML
- localStorage
- デモデータ
- 認証なし
- クラウドDBなし
- 正式PDFなし
- テストなし

見た目、文言、画面遷移、情報設計を参照するための資料として扱う。

## 4. 各本番機能の確定前に確認すること

匿名fixtureだけを使うプロジェクト基盤、UI primitive、Auth/RLSの拒否テストは先行できる。以下は、関係するschemaや業務機能を確定する前、かつ実データ運用を始める前に依頼者へ確認する。

1. 初期利用者数と管理者・編集者・閲覧者の割当て。
2. 作業員、退職者、現場、ドラフト、監査ログ、バックアップの保持期間。
3. 利用端末が会社管理端末かBYODか。
4. 国交省作成例を実提出でそのまま利用できるか。
5. PDFダウンロード後の提出、保管、削除方法。
6. 「別紙参照」の正式な別紙様式。

本番コードは匿名データで作り、最終的に依頼者所有の専用非公開リポジトリへ配置する。P0に影響する未決定事項を実装者が推測して実データ運用を開始しない。

## 5. 推奨技術構成

2026-07-16時点の基本構成。

- Viteによる静的SPA
- React
- TypeScript `strict`
- レスポンシブWeb。初期版はオンライン専用
- Tailwind CSS
- Radix UIなどのアクセシブルなプリミティブ
- 依頼者所有のSupabase Postgres / Tokyo
- Supabase Auth、招待制、TOTP MFA
- Postgres RLSと追加専用監査ログ
- Zod
- React Hook Form
- Vitest
- Playwright

PDFは、個人情報の複製を減らすため、ブラウザメモリ内の`pdf-lib`生成を第一候補とする。

- 公式背景、座標設定、日本語フォントを匿名データで再検証する。
- 正式品質を満たせない場合だけ、依頼者所有の一時生成環境を別途審査する。
- 生成PDF、PDF履歴、snapshotは初期版で保存しない。

ホスティング側のFunctionへ個人情報を送らず、app shellだけを静的配信する。

## 6. 推奨データモデル

### organizations / organization_memberships

- `organizations`は依頼者1社を表す固定所有境界とする。
- `organization_memberships`はAuth user、role、activeを保持し、全業務RLSで照合する。
- 複数organizationの作成・切替UIは実装しない。
- MFA未完了、inactive、別organization、role偽装をDBで拒否する。

### workers

- id
- organization_id
- name
- kana
- trade_id
- phone
- emergency_contact
- birth_date
- address
- health_insurance_type
- pension_type
- employment_insurance_status
- active
- created_at
- updated_at

### worker_qualifications

- id
- worker_id
- qualification_type_id
- acquired_date
- expires_at
- note

資格・教育は文字列1項目へ詰め込まず、将来の期限管理を考慮して別テーブルにする。資格証明書ファイルは初期版で保存しない。

### sites

- id
- organization_id
- name
- first_tier_company_name
- first_tier_company_business_operator_id
- own_construction_tier
- address
- start_date
- end_date
- manager_name
- status
- created_at
- updated_at

### site_worker_assignments

- id
- site_id
- worker_id
- entry_date
- role
- send_off_education_date
- acceptance_education_date
- note
- active

`site_id + worker_id` にユニーク制約を検討する。

### daily_reports

- id
- site_id
- report_date
- work_content
- labor
- overtime_hours
- note
- entered_by
- created_at
- updated_at

同一現場・同一日を1件とするか、複数件許可するかは要確認。

### roster template

MVPの正式様式1種類は、版・checksum・背景・座標定義を静的code assetとして固定する。DBテーブル、Storage、現場FKは作らない。複数様式が実要件になった場合だけ、別のセキュリティ・移行レビュー後にモデルを追加する。

### application_audit_logs

- id
- organization_id
- actor_user_id
- action
- entity_type
- entity_id
- result
- occurred_at

監査ログに氏名、住所、保険情報、入力本文、PDF内容を保存しない。生成PDFと出力snapshotは初期版で保存しない。

## 7. 拡張性の方針

- 安定した主要項目は明示的なDBカラムにする。
- すべてをJSONへ押し込まない。
- 将来項目のうち、業務ルールが未確定な補助情報だけ `extra_fields` を検討する。
- 日報項目はUI定義を設定化できるようにしつつ、計算対象の主要項目は型安全に実装する。
- MVPの正式様式1種類は静的code assetとして版とchecksumを管理する。複数様式が実要件になった場合だけ、テンプレートとフィールドマッピングの分離を再設計する。

## 8. デザインシステム方針

プロトタイプの雰囲気を踏襲しながら、共通コンポーネント化する。

候補コンポーネント:

- AppHeader
- BottomNavigation
- PageContainer
- SectionHeader
- ActionCard
- StatusPill
- SummaryMetric
- ProgressIndicator
- MasterListCard
- FormFieldCard
- BottomSheet
- NumberStepper
- EmptyState
- ConfirmationDialog
- DataHealthBadge
- PdfPreviewTable

デザイントークン:

- brand green
- neutral background
- white surfaces
- status colors: success / warning / error / info
- radius 14〜22px
- tap target 44〜56px
- high contrast text

## 9. 最初の実装タスク案

### Task 1: プロジェクト基盤

- 依頼者所有の専用非公開リポジトリへ移行できる匿名開発領域を用意
- Vite + React + TypeScript `strict`
- lint / format / test
- PWA、Service Worker、IndexedDBを導入しない
- CSS変数によるデザイントークン

### Task 2: UIコンポーネント

- v6とv9を参考に共通コンポーネントを作成
- Storybookまたは独立プレビューを検討
- 360 / 390 / 430pxで確認

### Task 3: 認証・DB・認可基盤

- Supabase migration
- 招待制AuthとTOTP MFA
- 単一organization membershipとrole
- 全業務テーブルのRLS
- PII値を持たない追加専用監査ログ
- 未認証、MFA未完了、inactive、別organization、role偽装の拒否テスト

### Task 4: 作業員・現場マスター

- 作業員の一覧、検索、絞り込み、新規登録、編集
- 現場の一覧、新規登録、編集
- 元請、工期、自社施工次数
- 不足状態とバリデーション
- RLS適用済みrepository経由のCRUD

### Task 5: 名簿PDFビルダー

- 現場選択
- 作業員複数選択
- 現場別作業員情報
- 不足チェック
- PDFプレビュー

### Task 6: ブラウザ内PDF

- 正式様式に合わせた出力
- 日本語フォント確認
- 1ページの人数超過時の改ページ
- PDFをクラウドへ送信・保存せず、利用者端末へダウンロード
- 匿名データによる1名・8名・9名・長文・背景差分テスト

### Task 7: 顧客受入・引渡し

- 空の顧客所有環境へ依頼者管理CIで適用
- 匿名データによる受入・セキュリティ試験
- 諒さんの全本番権限を削除
- 依頼者による秘密情報ローテーション
- P0全件合格後にだけ実データ登録を開始

## 10. 最初の受入基準

### UI

- 初見で、作業員マスター・現場マスター・PDF作成の違いが分かる。
- 5秒以内に主要導線を認識できる。
- 主要操作に説明文を読ませない。
- 片手操作しやすい。
- 360px幅でも崩れない。

### 作業員マスター

- 新規追加と編集ができる。
- 必須不足が具体的に分かる。
- 不足表示から修正画面へ直接移動できる。

### 現場マスター

- 新規追加と編集ができる。
- 一次会社名、一次会社事業者ID、自社施工次数を登録できる。

### PDFビルダー

- 現場を1件選べる。
- 作業員を複数選べる。
- 現場別作業員情報を編集できる。
- PDF作成前に不足を一覧化できる。
- 不足から修正先へ直接移動できる。

## 11. 禁止事項

- 既存プロトタイプを本番コードへコピーペーストして終了しない。
- 巨大な単一コンポーネントを作らない。
- マスター情報と現場別情報を同じテーブルへ混在させない。
- 画面内に意味不明な略称を使わない。
- 日報入力画面へ月累計を置かない。
- UIへ開発経緯や仮想モニター件数を表示しない。
- 正式様式確認前にPDFレイアウトを決め打ちしない。
- 個人情報を`localStorage`、`sessionStorage`、IndexedDB、Service Worker Cacheで本番運用しない。
- secret key、`service_role`、DBパスワードをブラウザ、Git、ログ、チャットへ置かない。
- 本番データ、実PDF、実画面キャプチャを開発、レビュー、サポートへ持ち込まない。
- 納品後の諒さんに本番DB、ログ、バックアップ、デプロイ権限を残さない。

## 12. Codexへの次回依頼文

Phase 0A監査と匿名PoCは完了した。次は次の指示を使用する。

> `AGENTS.md` と `docs/PROJECT_HANDOFF_JA.md`、`docs/SECURITY_REQUIREMENTS_JA.md`、`docs/PRODUCTION_ARCHITECTURE_JA.md`、`docs/IMPLEMENTATION_STATUS_JA.md`、`docs/ARCHITECTURE_AUDIT_JA.md` を順に読み、匿名データ限定のSecure vertical sliceを実装してください。Vite + React + TypeScript strictの静的SPA、招待制Supabase Auth、TOTP MFA、単一organization membership、RLS、監査ログ、メモリsessionを使用し、PWA・Service Worker・IndexedDB・Storage・実データ・PDF履歴は追加しないでください。最初は現場1件、自社作業員1/8/9名、不足確認、ブラウザ内`pdf-lib`生成までを端から端まで検証し、未認証、MFA未完了、inactive、別organization、role偽装をDBテストで拒否してください。既存プロトタイプとPoCは変更しないでください。
