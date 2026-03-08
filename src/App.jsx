export default function App() {
  const cards = [
    { title: 'React + Vite', text: '起動が速く、個人開発のLPやアプリ紹介ページに向いた定番構成。' },
    { title: 'Reusable UI', text: 'セクション分割しやすく、あとから機能追加やCMS連携もしやすい。' },
    { title: 'Deploy Ready', text: 'Vercel / Netlify / Cloudflare Pages へすぐ持っていける。' }
  ];

  return (
    <div className="page">
      <header className="shell nav">
        <div className="brand">PULSEGRID</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <main className="shell hero" id="launch">
        <section className="hero-copy glass">
          <div className="badge">🚀 React starter / modern promo site</div>
          <h1>プロダクトの魅力を
            <br />スマートに伝える
            <br />Reactサイト。</h1>
          <p>
            アプリ紹介、SaaSのLP、配布ページ向けに作ったモダンなスターターです。
            グラデーション背景とカードUIで、少ないコードでも見栄え良く仕上がります。
          </p>
          <div className="cta-row">
            <a className="btn primary" href="https://vercel.com/">Vercelで公開</a>
            <a className="btn secondary" href="#features">コンポーネントを見る</a>
          </div>
        </section>

        <aside className="glass dashboard">
          <div className="dashboard-head">
            <span>Growth panel</span>
            <span>live</span>
          </div>
          <div className="bars">
            <span style={{ height: '34%' }}></span>
            <span style={{ height: '48%' }}></span>
            <span style={{ height: '56%' }}></span>
            <span style={{ height: '72%' }}></span>
            <span style={{ height: '65%' }}></span>
            <span style={{ height: '84%' }}></span>
          </div>
          <div className="mini-stats">
            <div><strong>18.2k</strong><small>Visitors</small></div>
            <div><strong>4.9%</strong><small>CTR</small></div>
            <div><strong>24h</strong><small>Deploy cycle</small></div>
          </div>
        </aside>
      </main>

      <section className="shell cards" id="features">
        {cards.map((card) => (
          <article className="glass card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="shell pricing glass" id="pricing">
        <div>
          <span className="badge">Simple launch plan</span>
          <h2>無料公開から始めて、
            <br />必要になったら拡張。</h2>
        </div>
        <div className="price-box">
          <strong>Free</strong>
          <p>個人開発 / ポートフォリオ / アプリ紹介ページに最適。</p>
          <a className="btn primary" href="https://pages.cloudflare.com/">Cloudflare Pagesで試す</a>
        </div>
      </section>
    </div>
  );
}
