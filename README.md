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

## Vercel で公開

このリポジトリは実アプリが `react-modern-site/` 配下にあるため、Vercel では `Root Directory` に `react-modern-site` を指定します。

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

補足:
- Vercel ではそのまま公開できます。
- GitHub Pages のようにサブパス配下へ出す場合だけ、`VITE_BASE_PATH=/react-modern-site/` を指定してビルドします。

## 公開先候補
- Vercel
- Cloudflare Pages
- Netlify
