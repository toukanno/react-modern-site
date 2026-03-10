# react-modern-site

モダンなランディングページ用の React + Vite スターターです。

## セットアップ

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## 広告とアフィリエイト

AdSense は `react-modern-site/.env` に以下を設定すると有効になります。

```bash
VITE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
VITE_ADSENSE_SLOT_DEFAULT=1234567890
VITE_ADSENSE_SLOT_HOME=1234567890
VITE_ADSENSE_SLOT_FEATURES=1234567890
VITE_ADSENSE_SLOT_PLANS=1234567890
VITE_ADSENSE_SLOT_LINKS=1234567890
VITE_ADSENSE_SLOT_SUPPORT=1234567890
```

補足:
- 未設定の場合、広告枠は表示されません。
- アフィリエイトリンクは [`src/App.jsx`](/C:/Users/masayosiyuuto/Documents/Project/react-modern-site/react-modern-site/src/App.jsx) の `affiliateLinks` を自分の URL に差し替えて運用します。
- 公開時は「広告」「アフィリエイト」表記と各 ASP の規約対応を確認してください。

## Vercel で公開

このリポジトリは実アプリが `react-modern-site/` 配下にあるため、Vercel では `Root Directory` に `react-modern-site` を指定します。

リポジトリ内の `vercel.json` で以下を固定しています。

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

補足:
- ルーティングは `HashRouter` のため、Vercel では追加の rewrite 設定なしで公開できます。
- GitHub Pages のようにサブパス配下へ出す場合だけ、`VITE_BASE_PATH=/react-modern-site/` を指定してビルドします。

## 公開先候補
- Vercel
- Cloudflare Pages
- Netlify
