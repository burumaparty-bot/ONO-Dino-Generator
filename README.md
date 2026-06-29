# ONO Dino Generator

小野測器 恐竜発電研究所

ハンドスピナーを発電機に見立て、3秒間だけ研究所へ送電し、恐竜をランダム復元するWebアプリです。

## 仕様

- FpsDiagnostic版の計測エンジンをベースにしています
- カメラ表示サイズ、縦横比、canvas、reticle、計測JSは変更していません
- 「送電開始」ボタンで3秒間だけ送電
- 3秒後に自動終了
- 送電量 Energy を表示
- 恐竜は完全ランダムで復元
- 図鑑登録
- 累計Energy保存
- 研究所Lv表示
- PWA対応

## GitHub Pages 公開手順

### 1. GitHubでリポジトリを作成

リポジトリ名の例：

```text
ONO-Dino-Generator
```

### 2. このZIPを解凍

解凍した中身を、作成したリポジトリへアップロードします。

必要なファイル：

```text
index.html
manifest.webmanifest
sw.js
icon.svg
README.md
```

### 3. GitHub Pagesを有効化

GitHubのリポジトリ画面で、

```text
Settings
↓
Pages
↓
Build and deployment
↓
Deploy from a branch
↓
Branch: main
↓
Folder: /root
↓
Save
```

### 4. 公開URL

数分後、以下のようなURLで公開されます。

```text
https://burumaparty.github.io/ONO-Dino-Generator/
```

## スマホでの使い方

1. Android ChromeでURLを開く
2. カメラ許可をON
3. カメラ起動
4. ハンドスピナーを回す
5. 送電開始
6. 3秒後に恐竜が復元されます

## 注意

カメラを使用するため、GitHub PagesのようなHTTPS環境で開いてください。
ローカルファイルを直接開くと、ブラウザの制限でカメラが使えない場合があります。
