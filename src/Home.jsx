const features = [
  {
    icon: '🌿',
    title: 'サステナブル',
    desc: '環境に配慮した素材と製造プロセスで、地球と未来世代のために選んだ製品だけを扱います。',
  },
  {
    icon: '🤝',
    title: 'コミュニティ支援',
    desc: '購入の一部が、国内外のNPO・NGOの社会活動に直接還元される仕組みです。',
  },
  {
    icon: '✨',
    title: 'ハイクオリティ',
    desc: '職人の技術と現代デザインが融合した、長く使い続けられる本物のアイテムです。',
  },
];

const stats = [
  { value: '12,000+', label: '累計購入者数' },
  { value: '¥8,500万', label: '寄附総額' },
  { value: '98%', label: '顧客満足度' },
  { value: '30+', label: '連携NPO数' },
];

export default function Home({ go }) {
  return (
    <>
      {/* Hero */}
      <section className="shell">
        <div className="hero">
          <div className="glass hero-copy">
            <span className="badge">🌏 社会を変えるショッピング</span>
            <h1>
              買うことが
              <br />
              <span className="grad">寄附になる</span>
            </h1>
            <p>
              PulseGrid の商品を購入するたびに、売上の一部が国内外のNPO・NGOへ寄附されます。
              あなたの選択が、世界を少しずつ良くしていきます。
            </p>
            <div className="cta-row">
              <button className="btn primary" onClick={() => go('products')}>商品を見る →</button>
              <button className="btn secondary" onClick={() => go('donate')}>寄附について</button>
            </div>
          </div>

          <div className="glass dashboard">
            <div className="dashboard-head">
              <span>寄附インパクト</span>
              <span>2025年</span>
            </div>
            <div className="bars">
              {[60, 80, 55, 90, 70, 95, 85].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mini-stats">
              <div><strong>¥8,500万</strong><small>累計寄附額</small></div>
              <div><strong>30+</strong><small>支援団体数</small></div>
              <div><strong>98%</strong><small>透明性スコア</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="shell stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="shell">
        <h2 className="section-title">PulseGrid の想い</h2>
        <div className="cards">
          {features.map((f) => (
            <div key={f.title} className="glass card">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="shell">
        <div className="glass cta-banner">
          <div>
            <h2>まずは商品ラインナップをチェック</h2>
            <p>あなたにぴったりの一品が見つかるはずです。</p>
          </div>
          <div className="cta-row">
            <button className="btn primary" onClick={() => go('products')}>商品一覧へ</button>
            <button className="btn secondary" onClick={() => go('donate')}>寄附だけもOK</button>
          </div>
        </div>
      </section>
    </>
  );
}
