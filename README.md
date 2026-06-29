# ONO Dino Generator Ver 8.2.0

## 変更点

- `cards/D001.png`〜`D010.png` を正式画像として使用
- `cards/D001.json`〜`D010.json` を追加
- ゲーム側でカード枠・名前・レア度・属性を重ねる方式に変更
- 画像内に文字を入れなくても、ゲーム内でカード表示可能
- JPG fallbackも維持
- 送電開始ボタンは上部配置
- 計測エンジンは変更なし

## 画像差し替え方法

`cards` フォルダ内のPNGを同名で上書きします。

例：

```text
cards/D001.png
```

推奨条件：

- 1024 x 1024 px
- PNG
- 画像内に名前・No・レア度・ロゴを入れない
- 恐竜アートのみ

## メタデータ

各恐竜の情報は以下にあります。

```text
cards/D001.json
```

内容例：

```json
{
  "id": "D001",
  "name": "ギガレックス",
  "rarity": "LEGEND",
  "attribute": "電気",
  "description": "雷をまとった最強の復元恐竜。"
}
```

## Measurement Engine

- FpsDiagnostic
- カメラ、canvas、reticle、計測ロジックは変更なし
