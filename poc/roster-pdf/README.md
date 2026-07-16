# 国交省 作業員名簿 匿名PDF PoC

国土交通省「作業員名簿（作成例）」について、公式プレビュー画像をA3横の背景レイヤーにし、匿名データの可変文字をHTML/CSSの絶対座標で重ね、Playwright（Chromium）でPDF化する独立PoCです。

本番アプリではありません。本番DB、認証、Supabase、PWA、実データ保存、`localStorage`は実装していません。収録データはすべて架空です。

## 公式資料

取得日: 2026-07-14

| 資料 | URL | 検証済みSHA-256 |
| --- | --- | --- |
| 掲載ページ | https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/tochi_fudousan_kensetsugyo_const_fr1_000001_00006.html | — |
| 公式Excel | https://www.mlit.go.jp/common/001389323.xlsx | `49192e8c2725bef14bd9e00fae54cd12a32ae0d8fd5dec84dafceaf27347526c` |
| 公式プレビュー画像 | https://www.mlit.go.jp/common/001389315.jpg | `0361f6e8fe60e71f821ebae9b05228b8bb9870ab91200e17b1f99d74eb7a91eb` |

日本語描画の環境差を避けるため、PoC実行環境の `NotoSansJP-VF.ttf` を `assets/fonts/` に固定同梱しています（SHA-256: `5113756f8a3b5d01b2211025e267c50121e3b36f465b7bbaf3cdaf4c3430bfd0`）。ライセンスは同ディレクトリの `OFL.txt`（SIL Open Font License 1.1）です。

公式Excelは項目・印刷設定の照合にだけ使用し、再保存しません。プレビュー画像も再圧縮・加工せず、そのまま背景に使用します。

公式Excelには配布元の作成者メタデータが含まれるため、Gitには収録しません。検証時は公式URLから原本を取得し、再保存せずに次の場所へ配置してください。

```text
assets/source/mlit-worker-roster-example.xlsx
```

PowerShellでは次のように取得し、上表のSHA-256と一致することを確認できます。

```powershell
Invoke-WebRequest 'https://www.mlit.go.jp/common/001389323.xlsx' -OutFile 'assets/source/mlit-worker-roster-example.xlsx'
(Get-FileHash -Algorithm SHA256 'assets/source/mlit-worker-roster-example.xlsx').Hash.ToLowerInvariant()
```

## データ境界

`data/anonymous-roster.json` は次の6区分を分けています。

1. `workerInformation`: 作業員情報
2. `siteInformation`: 現場情報
3. `siteWorkerInformation`: 現場別作業員情報
4. `companyConstructionInformation`: 会社・施工次数情報
5. `rosterOutputInformation`: 名簿出力情報
6. `qualificationEducationInformation`: 資格・教育情報

年齢はPoCの仮定として、`rosterOutputInformation.rosterDate`（名簿作成日）時点の満年齢を毎回計算します。正式運用の基準日は未確定です。2月29日生まれの非うるう年における扱いも正式確認が必要です。

`sendOffEducationDate`（送り出し教育日）は内部項目として保持しますが、この国交省様式には出力しません。

`companyConstructionInformation.siteCompanies` は、一次会社 `firstTierCompanyId`、名簿作成会社 `rosterCompanyId`、施工次数 `constructionTier` を別項目として保持します。元請会社は `rosterOutputInformation.primeCompanyId` で分離し、国交省様式の「一次会社名」欄には出力しません。事業者IDは各 `companies` レコードに保持します。

正式確認用サンプルは、元請会社・一次会社・名簿を作成する自社を別レコードで保持し、自社1社の匿名作業員9名を施工次数2次として出力します。1ページ目は8名、2ページ目は1名で、両ページの一次会社・自社名・施工次数は同一です。

健康保険・年金・雇用保険は種別を構造化し、表示文字列を連結して保持しません。雇用保険の通常加入者は下4桁を先頭ゼロ付き文字列で保持します。建設業退職金共済と中小企業退職金共済は個別のbooleanで保持し、帳票では `有`／`無` に変換します。

## 生成規則

- A3横（420mm × 297mm）、余白0
- 1ページ最大8名
- 名簿作成会社ID単位でページを分け、各社を8名ずつに分割
- 「一次会社名」と「（　次）会社名」へ、一次会社・施工次数・名簿作成会社を別々に出力
- 健康保険と年金は左欄だけに出力し、右側の斜線欄は背景のまま空欄
- 雇用保険は通常加入者の左欄を空欄、右欄を被保険者番号の下4桁とし、適用除外・日雇保険は左欄だけに出力
- ※欄は制御済みの丸囲み記号で出力し、外国人技能実習生と1号特定技能外国人の同時指定を拒否
- 0名は `EMPTY_ROSTER` で拒否し、既存出力を上書きしない
- CCUS未登録者の現場ID・事業者ID・技能者IDは空欄可
- 会社名は最大2行に収め、事業者ID欄への侵入と「名／称」のような保護語の分断を自動検査
- 資格・教育欄は設定下限を超えて縮小せず、収まらない場合は `別紙参照`
- 利用者由来の文字列はHTMLエスケープし、HTMLとして解釈しない
- 座標・文字サイズ・縮小下限は `src/layout.config.cjs` に集約

「別紙参照」になった項目の別紙そのものは、このPoCでは生成しません。

## 実行

Node.js 20以上、Chromiumを取得できるPlaywright、Popplerの `pdftoppm` が必要です。日本語フォントはPoC内に同梱済みです。WindowsではPowerShellから次を実行します。

`pdftoppm.exe` がPATHにない場合は、実行前に `PDFTOPPM_PATH` へ実体の絶対パスを設定します。

```powershell
npm.cmd ci
# 公式Excelを未取得の場合は、上記手順で配置してから検証する
npm.cmd run verify:assets
npm.cmd test
npm.cmd run generate
npm.cmd run verify:output
```

正式確認用の出力は1つだけです。

```text
output/roster-poc.pdf
```

テストは1名・8名・9名、自社1社9名の8＋1分割、両ページで同じ自社・施工次数、元請会社と一次会社の分離、健康保険・年金の斜線欄非出力、雇用保険4桁、共済の有／無、役割排他、長い氏名・会社名・資格名、会社名と事業者IDの非重複、教育・講習の1文字残り防止、CCUS IDなし、0名拒否、A3横、背景の全面一致、日本語抽出、HTMLエスケープ、送り出し教育日が非出力であることを確認します。長い会社名はテスト用の複製データだけで差し替え、正式確認用サンプルには含めません。テスト用PDFは `tmp/test-pdfs/` に一時作成し、終了時に削除します。

## 注意

公式プレビューは300dpiのJPEGです。位置合わせの成立性は確認できますが、ラスター画像由来の細線・文字品質には限界があります。PoCの成功は、そのまま本番方式の確定を意味しません。
