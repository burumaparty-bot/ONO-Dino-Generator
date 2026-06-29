# ONO Dino Generator Ver 6.0.0

小野測器 恐竜発電研究所

## バージョン

- Version: 6.0.0
- Build: 2026-06-29 23:30
- Measurement Engine: FpsDiagnostic

画面右上にバージョンが表示されます。  
GitHub Pagesを更新したあと、この表示が `Ver 6.0.0` になっていれば更新成功です。

## 方針

- 計測エンジンは FpsDiagnostic を維持
- カメラ、canvas、reticle、計測ロジックは変更しない
- ゲームUIと演出のみ改善対象
- GitHub Pages対応
- Service Workerの古いキャッシュを削除する処理を追加

## 公開方法

GitHubの `ONO-Dino-Generator` リポジトリに以下のファイルを上書きアップロードしてください。

- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md
- CHANGELOG.md

アップロード後、数分待って以下を確認します。

```text
https://burumaparty-bot.github.io/ONO-Dino-Generator/
```

画面右上に `Ver 6.0.0` と表示されれば更新成功です。

## キャッシュが残る場合

スマホChromeで以下を実施してください。

1. Chrome設定
2. サイトの設定
3. burumaparty-bot.github.io
4. データを削除
5. 再読み込み
