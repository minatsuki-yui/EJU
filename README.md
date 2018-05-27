# EJU-prepare
materials and notes for EJU

- 個人向け
- 中日英混合


---
### About the magic words

> not stable

| spell | type | explanation |
|----|---|---|---|---|
| desc| string | Description of this substance. Can be omitted if no related concepts |
| note| string | Techniques or helpful info |
| property| list | Chemical or physical property of this substance |
| production | string | Production method of this substance|
| inspection | string | Inspection method of this substance|
| alias | string | another name of this substance|
|formula|string|formula of this substance|
|usage|string|usage of this substance|
|equation|string|equation related to this substance|



---

### About the normal update summary's rule

> from May 27 2018

`update XX(subject)-XXX(details)`

| profix | meaning |
| --- |---|
| jp | 日本語 |  
| c | 化学 |
| p | 物理 |
| m | 数学 |
| w | スクリプト |
| o | その他 |

---

Directory Structure

```
.
├── LICENSE
├── README.md
├── build
├── scripts
│   ├── chemicals.py
│   ├── equation_reader.py
│   ├── generator.py
│   └── render.py
├── useful_websites.yml
├── 化学
│   ├── まとめ.json
│   ├── 基礎-1-物質の構成.yml
│   ├── 基礎-2-物質量と化学反応式.yml
│   ├── 基礎-3-物質の変化.yml
│   ├── 正式-1-物質の状態.yml
│   ├── 正式-2-熱·電·平衡.yml
│   ├── 正式-3-無機非金屬.yml
│   ├── 正式-4-無機金屬.yml
│   ├── 正式-5-有機.yml
│   └── 正式-6-高分子.yml
├── 數學
│   ├── その他.yml
│   ├── ベクトル.yml
│   ├── 図と方程式.yml
│   ├── 確率.yml
│   └── 题型.yml
├── 日語
│   ├── 「文章が変わる、接続語の使い方」
│   │   ├── 第１章-连接.yml
│   │   ├── 第２章-分类.yml
│   │   ├── 第３章-仮定.yml
│   │   └── 第４章-帰結.yml
│   └── 記述.yml
└── 物理

7 directories, 27 files
```
