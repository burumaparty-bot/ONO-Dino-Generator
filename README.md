# ONO Dino Generator Ver 10.0.0

## 変更点

- cardsフォルダを保持
- PNG画像読込を正式採用
- soundsフォルダ追加
- 音ON/OFFボタン追加
- BGM/効果音フレームワーク追加
- 音源が無い場合は簡易電子音で動作
- DNA復元演出を維持
- 計測エンジンは変更なし

## cards

あなたが作成したPNGを以下に入れてください。

```text
cards/D001.png
...
cards/D010.png
```

JPEGは削除してもOKです。ゲームはPNGを読みます。

## sounds

mp3を以下の名前で入れてください。

```text
sounds/bgm.mp3
sounds/button.mp3
sounds/send.mp3
sounds/charging.mp3
sounds/dna.mp3
sounds/success.mp3
sounds/legend.mp3
sounds/complete.mp3
```

## Measurement Engine

- FpsDiagnostic
- カメラ、canvas、reticle、計測ロジックは変更なし
