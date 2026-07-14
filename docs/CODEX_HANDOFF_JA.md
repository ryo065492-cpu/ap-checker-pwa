# Codex向け実装引継ぎ

## 0. 最初に読むもの

1. `docs/PROJECT_HANDOFF_JA.md`
2. `deme-ui-foundation-v6/index.html`
3. `deme-roster-master-v9/index.html`

既存プロトタイプは検討履歴として残すこと。削除・上書きしない。

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

## 4. 本番実装前に確認すること

コードを書き始める前に、ユーザーへ以下を確認する。

1. 本番用の専用GitHubリポジトリを新設するか。
2. 推奨スタックでよいか。
3. 作業員名簿の正式様式と全項目を受領できるか。
4. 元請別テンプレートは初期何種類に対応するか。
5. ログイン利用者と権限区分。

確認前に現リポジトリのルートを大規模改変しない。

## 5. 推奨技術構成

最終決定ではなく、確認用の推奨案。

- Next.js
- React
- TypeScript
- PWA
- Tailwind CSS
- Radix UIなどのアクセシブルなプリミティブ
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Zod
- React Hook Form
- Vitest
- Playwright

PDFは、正式様式確認後に以下から選定する。

- HTML/CSS + サーバー側PDF生成
- pdf-libで既存PDFテンプレートへ差し込み
- React PDF

固定帳票への厳密な配置が必要な場合は、pdf-libまたはHTML/CSS印刷レイアウトを優先検討する。

## 6. 推奨データモデル

### workers

- id
- name
- kana
- company_id
- trade_id
- phone
- emergency_contact
- birth_date
- address
- health_exam_date
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
- certificate_file_path
- note

資格・教育は文字列1項目へ詰め込まず、将来の期限管理を考慮して別テーブルを推奨。

### sites

- id
- name
- client_id
- address
- start_date
- end_date
- manager_name
- roster_template_id
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

### roster_templates

- id
- client_id
- name
- version
- template_file_path
- field_mapping
- active

### roster_exports

- id
- site_id
- template_id
- exported_by
- exported_at
- file_path
- source_snapshot

出力時点のデータをスナップショット保存すると、後のマスター更新で過去PDFの内容が変わらない。

## 7. 拡張性の方針

- 安定した主要項目は明示的なDBカラムにする。
- すべてをJSONへ押し込まない。
- 将来項目のうち、業務ルールが未確定な補助情報だけ `extra_fields` を検討する。
- 日報項目はUI定義を設定化できるようにしつつ、計算対象の主要項目は型安全に実装する。
- 元請様式はテンプレートとフィールドマッピングを分離する。

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

- 専用リポジトリまたは専用アプリディレクトリを用意
- Next.js + TypeScript
- lint / format / test
- PWA対応の土台
- CSS変数によるデザイントークン

### Task 2: UIコンポーネント

- v6とv9を参考に共通コンポーネントを作成
- Storybookまたは独立プレビューを検討
- 360 / 390 / 430pxで確認

### Task 3: 作業員マスター

- 一覧
- 検索
- 絞り込み
- 新規登録
- 編集
- 不足状態表示
- バリデーション

### Task 4: 現場マスター

- 一覧
- 新規登録
- 編集
- 元請・様式・工期
- 不足状態表示

### Task 5: 名簿PDFビルダー

- 現場選択
- 作業員複数選択
- 現場別作業員情報
- 不足チェック
- PDFプレビュー

### Task 6: 永続化

- Supabase schema
- Row Level Security
- 認証
- 権限
- 監査用日時

### Task 7: PDF

- 正式様式に合わせた出力
- 日本語フォント確認
- 1ページの人数超過時の改ページ
- 出力スナップショット
- 共有導線

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
- 元請と提出テンプレートを紐づけられる。

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
- 個人情報をlocalStorageで本番運用しない。

## 12. Codexへの初回依頼文

以下を初回タスクとして使用できる。

> `docs/PROJECT_HANDOFF_JA.md` と `docs/CODEX_HANDOFF_JA.md`、`deme-ui-foundation-v6/index.html`、`deme-roster-master-v9/index.html` を読み、現状を監査してください。まだ本番コードは実装せず、(1) 推奨リポジトリ構成、(2) データモデル、(3) 画面・コンポーネント一覧、(4) PDF実装方式の比較、(5) 未確定事項、(6) 段階別実装計画を Markdown で提出してください。既存プロトタイプは変更しないでください。
