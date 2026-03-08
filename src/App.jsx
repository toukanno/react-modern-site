const highlights = [
  { value: 'Live', label: 'リアルタイムプレビューで即確認' },
  { value: 'HTML / PDF', label: '書き出し対応で配布しやすい' },
  { value: '3 Plans', label: '無料版、ベータ版、製品版を用意' }
];

const features = [
  {
    title: 'Realtime Preview',
    copy: 'Markdown を書きながら、仕上がりを横で確認できます。思考を止めずに文章を整えたい人向けです。'
  },
  {
    title: 'Colorful Themes',
    copy: 'RainbowMD らしいカラフルなテーマで、無機質になりがちなエディタ体験に遊び心を加えます。'
  },
  {
    title: 'Simple Electron App',
    copy: '軽量でシンプルな操作感を優先した Electron 製。複雑な設定より、すぐ書き始められることを重視しています。'
  },
  {
    title: 'Export Ready',
    copy: 'HTML / PDF に書き出せるので、メモだけでなく配布用の文書作成にもつなげやすい構成です。'
  }
];

const audiences = [
  {
    step: '01',
    title: '個人開発者',
    text: 'README、リリースノート、ドキュメントを素早く整理したい人に向いています。'
  },
  {
    step: '02',
    title: '文章を書く人',
    text: '見た目の確認と執筆を同時に進めたい、ブログや資料作成の用途にフィットします。'
  },
  {
    step: '03',
    title: 'Markdown 初学者',
    text: '高機能すぎるエディタより、まず気軽に触れて書き始めたい人にちょうどいい設計です。'
  }
];

const plans = [
  {
    name: '無料版',
    href: 'https://memo-color.booth.pm/items/7887271',
    note: 'まず雰囲気と使い心地を試したい人向け。',
    accent: 'plan-free'
  },
  {
    name: 'ベータ版',
    href: 'https://memo-color.booth.pm/items/7887376',
    note: '新しい改善を早めに触りたい人向け。',
    accent: 'plan-beta'
  },
  {
    name: '製品版',
    href: 'https://memo-color.booth.pm/items/7887435',
    note: 'RainbowMD をしっかり使いたい人向けの本命プラン。',
    accent: 'plan-pro'
  }
];

const links = [
  {
    label: '公式ページ',
    href: 'https://toukanno.github.io/rainbowmd-pages/',
    text: '機能紹介やプロジェクトの全体像を確認できます。'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/toukanno/rainbowmd-pages',
    text: 'プロジェクトの公開リポジトリです。更新状況や構成の確認に使えます。'
  },
  {
    label: 'Ko-fi',
    href: 'https://ko-fi.com/rainbowmd',
    text: '継続開発を支援したい方向けのサポートリンクです。'
  }
];

export default function App() {
  return (
    <div className="page rainbow-page">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="shell site-header">
        <a className="brand" href="#top" aria-label="RainbowMD home">
          <span className="brand-mark" />
          <span>RAINBOWMD</span>
        </a>

        <nav className="site-nav">
          <a href="#features">Features</a>
          <a href="#plans">Plans</a>
          <a href="#links">Links</a>
          <a href="#support">Support</a>
        </nav>
      </header>

      <main id="top">
        <section className="shell hero">
          <div className="hero-copy">
            <p className="eyebrow">Electron Markdown Editor</p>
            <h1>
              書く、整える、
              <br />
              すぐプレビュー。
              <br />
              RainbowMD。
            </h1>
            <p className="hero-text">
              RainbowMD は、軽量でシンプルな Electron 製 Markdown エディタです。
              カラフルなテーマとリアルタイムプレビューを軸に、気持ちよく書ける体験を目指しています。
              HTML / PDF 書き出しにも対応し、個人開発の文書作成や配布にも扱いやすい構成です。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="https://memo-color.booth.pm/items/7887435">製品版を見る</a>
              <a className="button button-secondary" href="https://toukanno.github.io/rainbowmd-pages/">公式ページへ</a>
            </div>

            <dl className="hero-metrics">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-panel rainbow-panel">
            <div className="panel-card panel-card-top">
              <span className="panel-label">Now available</span>
              <strong>RainbowMD for creators</strong>
              <p>シンプルな編集画面、鮮やかなテーマ、すぐ確認できるプレビューを一つにまとめた Markdown エディタです。</p>
            </div>

            <div className="panel-card panel-surface">
              <div className="signal-grid">
                <div className="signal-main">
                  <span className="panel-label">Core experience</span>
                  <strong>Write. Preview. Export.</strong>
                </div>

                <div className="rainbow-stripes" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="signal-footer">
                <div>
                  <span className="panel-label">Platforms</span>
                  <strong>Electron App</strong>
                </div>
                <div>
                  <span className="panel-label">Share output</span>
                  <strong>HTML / PDF</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shell section section-services" id="features">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>無理に多機能へ振らず、毎日触りやすい体験に寄せる。</h2>
          </div>

          <div className="service-grid feature-grid">
            {features.map((feature, index) => (
              <article className="service-card feature-card" key={feature.title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section split-section">
          <div className="split-copy">
            <p className="eyebrow">Who is it for</p>
            <h2>Markdown を気持ちよく書きたい人に、ちょうどいい。</h2>
            <p>
              重厚な統合環境ではなく、書くことと確認することに集中したい人向けです。
              README、ブログ下書き、配布用ドキュメントまで、日常的な用途で扱いやすい温度感に揃えています。
            </p>
          </div>

          <div className="workflow-list">
            {audiences.map((item) => (
              <article className="workflow-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section plans-section" id="plans">
          <div className="section-heading">
            <p className="eyebrow">Plans</p>
            <h2>試してから選べる 3 つの配布プラン。</h2>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.accent}`} key={plan.name}>
                <span className="panel-label">Booth</span>
                <h3>{plan.name}</h3>
                <p>{plan.note}</p>
                <a className="button button-secondary" href={plan.href}>このプランを見る</a>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section proof-section" id="links">
          <div className="proof-panel">
            <p className="eyebrow">Project links</p>
            <h2>知る、試す、支援するまで一か所でたどれる。</h2>
            <p>
              公式ページで概要を確認し、GitHub でプロジェクトを追い、気に入ったら Booth や Ko-fi から支援できます。
              プロダクト紹介とコミュニティ導線を分断しない構成です。
            </p>
          </div>

          <div className="review-grid link-grid">
            {links.map((item) => (
              <a className="review-card link-card" href={item.href} key={item.label}>
                <div>
                  <span className="panel-label">Open link</span>
                  <blockquote>{item.label}</blockquote>
                </div>
                <p>{item.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="shell section contact-section" id="support">
          <div>
            <p className="eyebrow">Support RainbowMD</p>
            <h2>気に入ったら、使うか、広めるか、支援する。</h2>
          </div>

          <div className="contact-card support-card">
            <p>
              RainbowMD は個人開発のプロダクトです。まず無料版で試し、気に入ればベータ版や製品版へ進めます。
              継続開発を応援したい場合は Ko-fi から支援できます。
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="https://ko-fi.com/rainbowmd">Ko-fi で支援</a>
              <a className="button button-secondary" href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
