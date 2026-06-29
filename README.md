# ONO Dino Generator Ver 8.0.0

小野測器 恐竜発電研究所

## 変更点

- Base64画像埋め込みを廃止
- `cards/D001.jpg`〜`cards/D010.jpg` を直接読み込む方式に変更
- 今後は `cards` フォルダ内の画像を差し替えるだけで恐竜画像を変更可能
- 送電開始ボタンは上部配置
- バージョン表示は `Ver 8.0.0`
- 計測エンジンは変更していません

## Measurement Engine

- FpsDiagnostic
- カメラ、canvas、reticle、計測ロジックは変更なし

## フォルダ構成

```text
ONO-Dino-Generator/
├── index.html
├── manifest.webmanifest
├── sw.js
├── icon.svg
├── README.md
├── CHANGELOG.md
├── cards/
│   ├── D001.jpg
│   ├── D002.jpg
│   ├── D003.jpg
│   ├── D004.jpg
│   ├── D005.jpg
│   ├── D006.jpg
│   ├── D007.jpg
│   ├── D008.jpg
│   ├── D009.jpg
│   └── D010.jpg
├── css/
└── js/
```

## 画像差し替え方法

`cards` フォルダ内の画像を同じファイル名で上書きしてください。

例：

```text
cards/D001.jpg
```

を差し替えると、ギガレックスの画像が変わります。

## GitHub Pages更新方法

ZIPを解凍し、中身をGitHubリポジトリへ上書きアップロードしてください。

アップロード対象：

- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.md
- CHANGELOG.md
- cardsフォルダ
- cssフォルダ
- jsフォルダ
