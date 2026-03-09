import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

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
    href: 'https://rainbowmd.booth.pm/items/7887271',
    note: 'まず雰囲気と使い心地を試したい人向け。',
    accent: 'plan-free'
  },
  {
    name: 'ベータ版',
    href: 'https://rainbowmd.booth.pm/items/7887376',
    note: '新しい改善を早めに触りたい人向け。',
    accent: 'plan-beta'
  },
  {
    name: '製品版',
    href: 'https://rainbowmd.booth.pm/items/7887435',
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

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/plans', label: 'Plans' },
  { to: '/links', label: 'Links' },
  { to: '/support', label: 'Support' }
];

function AppShell({ children }) {
  return (
    <div className="page rainbow-page">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="shell site-header">
        <NavLink className="brand" to="/" aria-label="RainbowMD home">
          <span className="brand-mark" />
          <span>RAINBOWMD</span>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {children}

      <footer className="shell site-footer">
        <div className="footer-card">
          <div>
            <p className="eyebrow">RainbowMD</p>
            <h2>Markdown を、もっと軽く、鮮やかに。</h2>
          </div>
          <div className="footer-links">
            <a href="https://rainbowmd.booth.pm/items/7887435">製品版</a>
            <a href="https://github.com/toukanno/rainbowmd-pages">GitHub</a>
            <a href="privacy-policy.html">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="shell hero route-panel">
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
            <NavLink className="button button-primary" to="/plans">入手プランを見る</NavLink>
            <NavLink className="button button-secondary" to="/features">機能を見る</NavLink>
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

      <section className="shell section quick-grid">
        <NavLink className="jump-card" to="/features">
          <span className="panel-label">Explore</span>
          <strong>機能一覧へ</strong>
          <p>リアルタイムプレビューやテーマ切替の魅力を一覧で確認できます。</p>
        </NavLink>
        <NavLink className="jump-card" to="/plans">
          <span className="panel-label">Download</span>
          <strong>配布プランへ</strong>
          <p>無料版、ベータ版、製品版の違いを見て、そのまま Booth へ進めます。</p>
        </NavLink>
        <NavLink className="jump-card" to="/support">
          <span className="panel-label">Support</span>
          <strong>支援ページへ</strong>
          <p>Ko-fi や関連リンクをまとめて辿れます。</p>
        </NavLink>
      </section>
    </>
  );
}

function FeaturesPage() {
  return (
    <section className="shell section route-page">
      <div className="section-heading route-intro">
        <p className="eyebrow">Features</p>
        <h1 className="route-title">無理に多機能へ振らず、毎日触りやすい体験に寄せる。</h1>
        <p>書きやすさ、見やすさ、配布しやすさを中心にした構成です。多機能競争ではなく、触り続けやすい温度感を優先しています。</p>
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

      <div className="split-section detail-section">
        <div className="proof-panel">
          <p className="eyebrow">Why it works</p>
          <h2>書くことと確認することの距離が近い。</h2>
          <p>Markdown を編集中にプレビューへ視線を移すだけで結果が見えるので、細かな修正をテンポよく繰り返せます。</p>
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
      </div>
    </section>
  );
}

function PlansPage() {
  return (
    <section className="shell section route-page">
      <div className="section-heading route-intro">
        <p className="eyebrow">Plans</p>
        <h1 className="route-title">試してから選べる 3 つの配布プラン。</h1>
        <p>まず無料版で雰囲気を掴み、その後にベータ版や製品版へ進める構成です。いきなり購入を迫らない設計にしています。</p>
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

      <div className="proof-section detail-section">
        <div className="proof-panel">
          <p className="eyebrow">Download flow</p>
          <h2>今の使い方に合わせて、必要な温度感で選べる。</h2>
          <p>個人開発、日常メモ、配布文書の用途が混ざっていても、まず無料版から段階的に試せるのが強みです。</p>
        </div>
        <div className="review-grid plan-review-grid">
          {highlights.map((item) => (
            <article className="review-card metric-card" key={item.label}>
              <span className="panel-label">Highlight</span>
              <blockquote>{item.value}</blockquote>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinksPage() {
  return (
    <section className="shell section route-page">
      <div className="section-heading route-intro">
        <p className="eyebrow">Links</p>
        <h1 className="route-title">知る、試す、支援するまで一か所でたどれる。</h1>
        <p>公式ページ、GitHub、Ko-fi を分けて置くことで、紹介とコミュニティ導線を混線させずに整理しています。</p>
      </div>

      <div className="review-grid link-grid route-links">
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
  );
}

function SupportPage() {
  return (
    <section className="shell section route-page">
      <div className="contact-section support-layout">
        <div className="route-intro">
          <p className="eyebrow">Support RainbowMD</p>
          <h1 className="route-title">気に入ったら、使うか、広めるか、支援する。</h1>
          <p>RainbowMD は個人開発のプロダクトです。プロダクトの継続性を見せる意味でも、支援導線を独立ページとして持たせる価値があります。</p>
        </div>

        <div className="contact-card support-card">
          <p>
            まず無料版で試し、気に入ればベータ版や製品版へ進めます。
            継続開発を応援したい場合は Ko-fi から支援できます。
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://ko-fi.com/rainbowmd">Ko-fi で支援</a>
            <a className="button button-secondary" href="https://rainbowmd.booth.pm/items/7887435">製品版を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <main key={location.pathname} className="route-transition">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
}
