import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AdBanner from './AdBanner';
import {
  comparisonRows,
  planCatalog,
  planFaqs,
  planScenarios,
  purchaseReassurance
} from './planContent';

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

const affiliateLinks = [
  {
    label: '制作メモを残すなら Notion',
    href: 'https://www.notion.so/ja-jp',
    category: 'Productivity',
    badge: 'Affiliate',
    text: '仕様整理やアイデアの下書きに向く定番ツール。実運用時はここを自分のアフィリエイト URL に差し替えられます。'
  },
  {
    label: '集中して書くなら Kindle',
    href: 'https://www.amazon.co.jp/kindle-dbs/hz/signup',
    category: 'Reading',
    badge: 'Amazon',
    text: '調査と読書の導線をまとめたい人向け。紹介リンクを載せやすい定番カテゴリとして枠を用意しています。'
  },
  {
    label: '周辺機材の紹介枠',
    href: 'https://www.amazon.co.jp/',
    category: 'Gear',
    badge: 'Recommended',
    text: 'キーボードやモニターなど、執筆環境に紐づく商材を紹介するためのアフィリエイト枠です。'
  }
];

const monetizationPoints = [
  'Links ページではプロダクト導線と分離して、アフィリエイトリンクだけをまとまった一覧にしています。',
  '広告・アフィリエイト表記をページ内に入れ、後から実リンクへ差し替えやすい形にしています。'
];

const microsoftStore = {
  deepLink: 'ms-windows-store://pdp/?productid=XP8BVG4DLVCQ3C',
  webUrl: 'https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C'
};

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
            <a href="https://memo-color.booth.pm/items/8061324">製品版</a>
            <a href={microsoftStore.webUrl}>Microsoft Store</a>
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
            <NavLink className="button button-primary" to="/plans">自分に合うプランを選ぶ</NavLink>
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

      <section className="shell section">
        <AdBanner className="content-ad" slot={import.meta.env.VITE_ADSENSE_SLOT_HOME} />
      </section>

      <section className="shell section monetization-section">
        <div className="section-heading route-intro">
          <p className="eyebrow">Monetize</p>
          <h2>広告とアフィリエイトを、導線を崩さずに置く。</h2>
          <p>プロダクト販売ページの温度感を保ちながら、広告掲載と関連サービス紹介を分離して収益化できる構成です。</p>
        </div>

        <div className="review-grid monetization-grid">
          {monetizationPoints.map((item) => (
            <article className="review-card metric-card monetization-card" key={item}>
              <span className="panel-label">Revenue</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section quick-grid">
        <NavLink className="jump-card" to="/features">
          <span className="panel-label">Explore</span>
          <strong>機能一覧へ</strong>
          <p>リアルタイムプレビューやテーマ切替の魅力を一覧で確認できます。</p>
        </NavLink>
        <NavLink className="jump-card" to="/plans">
          <span className="panel-label">Choose</span>
          <strong>プラン診断へ</strong>
          <p>無料版、ベータ版、製品版の違いを見比べて、そのまま Booth へ進めます。</p>
        </NavLink>
        <NavLink className="jump-card" to="/support">
          <span className="panel-label">Support</span>
          <strong>支援ページへ</strong>
          <p>購入と支援の違いを分けて確認し、Ko-fi に進めます。</p>
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

      <AdBanner className="content-ad" slot={import.meta.env.VITE_ADSENSE_SLOT_FEATURES} />

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
  const featuredPlan = planCatalog.find((plan) => plan.slug === 'pro');

  return (
    <section className="shell section route-page">
      <div className="section-heading route-intro">
        <p className="eyebrow">Plans</p>
        <h1 className="route-title">どのプランから入るかを、ページ内で決めやすくする。</h1>
        <p>RainbowMD は、最初に無料版で相性を見てから次へ進める導線を基本にしています。ここでは 3 つのプランを同じ目線で並べるのではなく、どんな人にどれが合うかを先に判断できる形に整理しています。</p>
      </div>

      <div className="plan-decision-shell">
        <div className="proof-panel plan-decision-copy">
          <p className="eyebrow">Choose by fit</p>
          <h2>まずは「何を確かめたいか」で選ぶ。</h2>
          <p>最初の確認なら無料版、改善を早く追うならベータ版、日常利用の本命なら製品版という考え方で十分です。先に用途を決めてから Booth へ進めると迷いが減ります。</p>
        </div>

        <article className={`plan-focus-card ${featuredPlan.accent}`}>
          <span className="panel-label">{featuredPlan.badge}</span>
          <h3>{featuredPlan.name}</h3>
          <p>{featuredPlan.value}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={featuredPlan.href}>継続利用の本命を見る</a>
            <a className="button button-secondary" href={microsoftStore.webUrl}>Microsoft Store 版</a>
            <a className="button button-secondary" href={microsoftStore.deepLink}>Windows ストアアプリで開く</a>
          </div>
        </article>
      </div>

      <div className="plan-comparison" aria-label="RainbowMD plan comparison">
        <div className="plan-comparison-head">
          <span />
          {planCatalog.map((plan) => (
            <article className={`plan-column-card ${plan.accent}`} key={plan.slug}>
              <span className="panel-label">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <p>{plan.note}</p>
              <a className="button button-secondary" href={plan.href}>{plan.ctaLabel}</a>
              <small>{plan.ctaNote}</small>
            </article>
          ))}
        </div>

        {comparisonRows.map((row) => (
          <div className="plan-comparison-row" key={row.key}>
            <div className="plan-row-label">
              <span className="panel-label">Compare</span>
              <strong>{row.label}</strong>
            </div>
            {planCatalog.map((plan) => (
              <article className="plan-row-card" key={`${plan.slug}-${row.key}`}>
                <p>{plan[row.key]}</p>
              </article>
            ))}
          </div>
        ))}
      </div>

      <div className="plan-grid plan-grid-detailed">
        {planCatalog.map((plan) => (
          <article className={`plan-card ${plan.accent}`} key={plan.name}>
            <span className="panel-label">{plan.badge}</span>
            <h3>{plan.name}</h3>
            <p>{plan.value}</p>
            <div className="plan-card-copy">
              <p><strong>向いている人:</strong> {plan.audience}</p>
              <p><strong>選びどき:</strong> {plan.bestFor}</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={plan.href}>{plan.ctaLabel}</a>
            </div>
          </article>
        ))}
      </div>

      <AdBanner className="content-ad" slot={import.meta.env.VITE_ADSENSE_SLOT_PLANS} />

      <div className="detail-section">
        <div className="section-heading route-intro">
          <p className="eyebrow">Recommended path</p>
          <h2>よくある選び方を、そのまま導線にする。</h2>
          <p>訪問者が頭の中でやっている比較を、ページ上にそのまま置いています。どの目的に一番近いかで選べば十分です。</p>
        </div>

        <div className="scenario-grid">
          {planScenarios.map((scenario) => {
            const matchedPlan = planCatalog.find((plan) => plan.slug === scenario.planSlug);

            return (
              <article className="scenario-card" key={scenario.title}>
                <span className="panel-label">Scenario</span>
                <h3>{scenario.title}</h3>
                <p>{scenario.description}</p>
                <div className="scenario-footer">
                  <strong>{matchedPlan.name}</strong>
                  <a href={matchedPlan.href}>{matchedPlan.ctaLabel}</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="proof-section detail-section">
        <div className="proof-panel">
          <p className="eyebrow">Before you click out</p>
          <h2>Booth に出る前の迷いを、このページで減らす。</h2>
          <p>購入先はそのまま Booth ですが、判断材料はこのページにまとめています。押し売りではなく、無料版から段階的に選べることを前提にした案内です。</p>
        </div>
        <div className="review-grid plan-review-grid reassurance-grid">
          {purchaseReassurance.map((item) => (
            <article className="review-card metric-card" key={item}>
              <span className="panel-label">Reassurance</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <div className="section-heading route-intro">
          <p className="eyebrow">FAQ</p>
          <h2>選ぶ前によく出る質問</h2>
        </div>

        <div className="faq-stack">
          {planFaqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
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
        <p className="affiliate-note">
          一部の外部リンクには広告またはアフィリエイトリンクを含められる構成にしています。実際の掲載時は各リンク先の利用規約と表記ルールに合わせて運用してください。
        </p>
      </div>

      <AdBanner className="content-ad" slot={import.meta.env.VITE_ADSENSE_SLOT_LINKS} />

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
        <a className="review-card link-card" href={microsoftStore.webUrl}>
          <div>
            <span className="panel-label">Store</span>
            <blockquote>Microsoft Store</blockquote>
          </div>
          <p>Windows 向けの配布導線です。通常は Web Store URL から開けます。</p>
        </a>
      </div>

      <div className="section-heading route-intro affiliate-intro">
        <p className="eyebrow">Affiliate</p>
        <h2>制作環境や関連サービスも紹介できる。</h2>
        <p>プロダクト本体の販売導線とは分けて置くことで、広告感を強くしすぎずに収益導線を追加できます。</p>
      </div>

      <div className="affiliate-disclosure">
        <strong>広告・アフィリエイト表記</strong>
        <p>
          このセクションのリンクは、ASP や Amazon アソシエイトなどの成果連動型リンクへ差し替えて運用できます。
          公開時は各サービスの規約に沿って、リンク先ごとに必要な表記を追加してください。
        </p>
      </div>

      <div className="review-grid link-grid route-links affiliate-grid">
        {affiliateLinks.map((item) => (
          <a
            className="review-card link-card affiliate-card"
            href={item.href}
            key={item.label}
            rel="noopener noreferrer sponsored"
            target="_blank"
          >
            <div>
              <span className="panel-label">{item.category}</span>
              <blockquote>{item.label}</blockquote>
            </div>
            <span className="affiliate-badge">{item.badge}</span>
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
          <p>RainbowMD は個人開発のプロダクトです。このページは Ko-fi 支援のための場所で、購入するプランを選ぶ場所は別に分けています。購入を考えている場合は、先にプラン比較ページから入るほうが迷いません。</p>
        </div>

        <div className="contact-card support-card">
          <p>
            製品を選びたいなら、まず無料版・ベータ版・製品版の違いを見てから Booth に進む流れが適しています。
            継続開発を応援したい場合だけ、Ko-fi から支援できるように分けています。
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://ko-fi.com/rainbowmd">Ko-fi で支援</a>
            <NavLink className="button button-secondary" to="/plans">購入プランを比べる</NavLink>
          </div>
        </div>
      </div>

      <AdBanner className="content-ad" slot={import.meta.env.VITE_ADSENSE_SLOT_SUPPORT} />
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
