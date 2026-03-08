const products = [
  {
    id: 1,
    emoji: '👜',
    name: 'エコキャンバスバッグ',
    desc: 'オーガニックコットン100%。毎日のお買い物に最適な丈夫さと上品なデザイン。',
    price: '¥3,800',
    donate: '¥380 が寄附に',
    tag: '人気No.1',
  },
  {
    id: 2,
    emoji: '👕',
    name: 'オリジナルTシャツ',
    desc: 'フェアトレード認証コットン使用。ユニセックスデザインで着まわし力抜群。',
    price: '¥5,500',
    donate: '¥550 が寄附に',
    tag: '新作',
  },
  {
    id: 3,
    emoji: '🍵',
    name: 'サステナブル茶器セット',
    desc: '伝統工芸と現代デザインが融合。贈り物にも最適な美しい仕上がり。',
    price: '¥12,000',
    donate: '¥1,200 が寄附に',
    tag: 'ギフト人気',
  },
  {
    id: 4,
    emoji: '📓',
    name: 'リサイクルノート（3冊セット）',
    desc: '再生紙を使用した滑らかな書き心地のノート。環境に優しい毎日へ。',
    price: '¥1,980',
    donate: '¥198 が寄附に',
    tag: '',
  },
  {
    id: 5,
    emoji: '🌱',
    name: '植樹支援キット',
    desc: '購入ごとに10本の木が植えられます。マングローブ再生プロジェクトに参加。',
    price: '¥4,500',
    donate: '全額が活動費に',
    tag: '環境直結',
  },
  {
    id: 6,
    emoji: '🎁',
    name: 'サポーターギフトボックス',
    desc: '年間サポーター向け限定セット。特別報告書・限定グッズ・お礼状付き。',
    price: '¥18,000',
    donate: '¥3,600 が寄附に',
    tag: '限定',
  },
];

export default function Products({ go }) {
  return (
    <section className="shell">
      <div className="page-header">
        <span className="badge">🛍️ 商品一覧</span>
        <h1 className="page-title">
          商品を選んで、
          <br />
          <span className="grad">社会を変えよう</span>
        </h1>
        <p>すべての商品の売上の10%が、環境・教育・貧困支援のNPOに寄附されます。</p>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="glass product-card">
            {p.tag && <span className="product-tag">{p.tag}</span>}
            <div className="product-emoji">{p.emoji}</div>
            <h3>{p.name}</h3>
            <p className="product-desc">{p.desc}</p>
            <div className="product-donate-badge">{p.donate}</div>
            <div className="product-footer">
              <span className="product-price">{p.price}</span>
              <button className="btn primary btn-sm">カートに追加</button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass cta-banner" style={{ marginTop: 32 }}>
        <div>
          <h2>直接寄附もできます</h2>
          <p>商品購入ではなく、直接寄附したい方はこちらから。</p>
        </div>
        <button className="btn primary" onClick={() => go('donate')}>寄附サイトへ →</button>
      </div>
    </section>
  );
}
