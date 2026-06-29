# ONO Dino Generator Measurement Restore

計測復旧版です。

## 方針

- index.html は ONO_SpinnerMonster_FpsDiagnostic をベースに戻しています
- 計測ロジックを変更していません
- GitHub Pages用に manifest と sw.js だけを調整しています
- 古いService Workerキャッシュを削除する処理を入れています

## アップロード方法

GitHubの ONO-Dino-Generator リポジトリで、以下を上書きアップロードしてください。

- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md

アップロード後、スマホChromeで以下を実施してください。

1. ページを開く
2. Chromeメニュー
3. 履歴
4. 閲覧履歴データを削除
5. または、サイト設定から burumaparty-bot.github.io のデータ削除
6. 再度アクセス

URL:
https://burumaparty-bot.github.io/ONO-Dino-Generator/
