const platforms = [
  {
    name: 'Yahoo!ネット募金',
    desc: 'Yahoo! JAPANが運営する国内最大級の募金プラットフォーム。Tポイントでも寄附できます。',
    emoji: '🟡',
    url: 'https://donation.yahoo.co.jp',
    label: '寄附ページへ',
    feature: 'Tポイント対応',
  },
  {
    name: 'GiveOne',
    desc: '月100円〜の少額で継続的に社会貢献。クレジットカード・コンビニ払い対応。',
    emoji: '🟢',
    url: 'https://giveone.net',
    label: '寄附ページへ',
    feature: '月額100円〜',
  },
  {
    name: 'Syncable',
    desc: 'NPO・社会的企業への支援特化型プラットフォーム。領収書の即時発行が可能。',
    emoji: '🔵',
    url: 'https://syncable.biz',
    label: '寄附ページへ',
    feature: '領収書即時発行',
  },
  {
    name: 'READYFOR',
    desc: '日本最大のクラウドファンディング。プロジェクトの詳細を確認してから支援できます。',
    emoji: '🟠',
    url: 'https://readyfor.jp',
    label: 'プロジェクトへ',
    feature: '目標額設定型',
  },
];

const whyItems = [
  { icon: '🌍', title: '環境保護', desc: '気候変動・森林破壊への対策に直接貢献します。' },
  { icon: '📚', title: '教育支援', desc: '途上国の子どもたちに教育の機会を届けます。' },
  { icon: '🏥', title: '医療アクセス', desc: '医療が届かない地域へのサポートを行います。' },
  { icon: '💼', title: '経済自立', desc: '技術・職業訓練で自立を支援します。' },
];

const faqs = [
  {
    q: '寄附金は税控除されますか？',
    a: '認定NPO法人への寄附は所得税の控除対象になります。各プラットフォームで領収書を取得してください。',
  },
  {
    q: '寄附の使途はどう確認できますか？',
    a: '各団体の活動報告書を当サイトでも公開しています。透明性を最重要視しています。',
  },
  {
    q: '少額からでも寄附できますか？',
    a: '100円〜受け付けているプラットフォームもあります。まずは気軽に始めてみてください。',
  },
];

export default function Donate({ go }) {
  return (
    <section className="shell">
      <div className="page-header">
        <span className="badge">❤️ 寄附について</span>
        <h1 className="page-title">
          あなたの支援が
          <br />
          <span className="grad">未来を変える</span>
        </h1>
        <p>
          PulseGridが連携する寄附プラットフォームをご紹介します。
          安心・安全に社会貢献を始められます。
        </p>
      </div>

      {/* Why Donate */}
      <div className="glass donate-why">
        <h2>なぜ寄附が大切なのか</h2>
        <div className="donate-why-grid">
          {whyItems.map((w) => (
            <div key={w.title} className="why-item">
              <span className="why-icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <h2 className="section-title">連携寄附プラットフォーム</h2>
      <div className="donate-grid">
        {platforms.map((p) => (
          <div key={p.name} className="glass donate-card">
            <div className="donate-card-head">
              <span className="donate-emoji">{p.emoji}</span>
              <span className="donate-feature-badge">{p.feature}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              {p.label} ↗
            </a>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="glass faq-section">
        <h2>よくある質問</h2>
        {faqs.map((f) => (
          <div key={f.q} className="faq-item">
            <h4>Q. {f.q}</h4>
            <p>A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* Products CTA */}
      <div className="glass cta-banner" style={{ marginBottom: 0 }}>
        <div>
          <h2>商品購入も社会貢献になります</h2>
          <p>購入のたびに売上の10%が寄附されます。</p>
        </div>
        <button className="btn primary" onClick={() => go('products')}>商品を見る →</button>
      </div>
    </section>
  );
}
