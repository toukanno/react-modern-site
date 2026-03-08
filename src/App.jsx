const metrics = [
  { value: '3.8x', label: '広告流入からの問い合わせ改善' },
  { value: '12日', label: '企画から公開までの標準リードタイム' },
  { value: '92%', label: 'モバイル環境での閲覧比率に最適化' }
];

const services = [
  {
    title: 'Message Design',
    copy: '価値提案、見出し、CTAまでを一つの流れで設計し、ただ綺麗なだけのページで終わらせません。'
  },
  {
    title: 'Visual Direction',
    copy: '写真に頼らず、タイポグラフィと構図、背景演出で印象を作るモダンなビジュアルに整理します。'
  },
  {
    title: 'Launch System',
    copy: 'React + Vite の軽い構成で組み、あとから機能追加やフォーム連携をしても破綻しにくくします。'
  }
];

const workflow = [
  {
    step: '01',
    title: 'Positioning',
    text: '誰に何をどう伝えるかを整理し、ヒーローとセクション構成の骨格を決めます。'
  },
  {
    step: '02',
    title: 'Build',
    text: '訴求順に沿ってUIを実装し、スマホとPCの両方で視線誘導が崩れないように整えます。'
  },
  {
    step: '03',
    title: 'Launch',
    text: '公開導線、計測、今後の拡張ポイントまで含めて、すぐ運用に入れる状態にします。'
  }
];

const reviews = [
  {
    quote: '初見で何をしているサービスか伝わるようになって、商談の温度感がかなり上がりました。',
    name: 'Aki Sato',
    role: 'B2B SaaS Founder'
  },
  {
    quote: 'テンプレート感がなく、個人開発でもブランドの輪郭が出せるページに仕上がりました。',
    name: 'Nao Kimura',
    role: 'Indie Maker'
  }
];

export default function App() {
  return (
    <div className="page">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="shell site-header">
        <a className="brand" href="#top" aria-label="Northstar Studio home">
          <span className="brand-mark" />
          <span>NORTHSTAR STUDIO</span>
        </a>

        <nav className="site-nav">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="shell hero">
          <div className="hero-copy">
            <p className="eyebrow">Modern launch site for SaaS, studio, and indie products</p>
            <h1>
              伝わる設計と
              <br />
              研ぎ澄まされたUIで、
              <br />
              公開まで一気に進める。
            </h1>
            <p className="hero-text">
              NORTHSTAR STUDIO は、プロダクトの第一印象を作るためのモダンなサイトを設計する架空スタジオです。
              コピー、構成、ビジュアル、実装までを一つの流れにまとめ、公開後も伸ばしやすい土台を作ります。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">相談する</a>
              <a className="button button-secondary" href="#services">内容を見る</a>
            </div>

            <dl className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-card-top">
              <span className="panel-label">Launch overview</span>
              <strong>Spring Campaign 2026</strong>
              <p>構成、実装、計測導線まで一画面で管理できる想定のビジュアルモックです。</p>
            </div>

            <div className="panel-card panel-surface">
              <div className="signal-grid">
                <div className="signal-main">
                  <span className="panel-label">Conversion pulse</span>
                  <strong>48 qualified leads</strong>
                </div>
                <div className="signal-chart" aria-hidden="true">
                  <span style={{ height: '38%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '67%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '82%' }} />
                  <span style={{ height: '94%' }} />
                </div>
              </div>

              <div className="signal-footer">
                <div>
                  <span className="panel-label">Primary CTA</span>
                  <strong>Book a strategy call</strong>
                </div>
                <div>
                  <span className="panel-label">Traffic fit</span>
                  <strong>Paid / Organic / Social</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shell section section-services" id="services">
          <div className="section-heading">
            <p className="eyebrow">What gets built</p>
            <h2>見た目だけでなく、成果につながる導線まで作る。</h2>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section split-section" id="process">
          <div className="split-copy">
            <p className="eyebrow">Process</p>
            <h2>短納期でも、順序を外さない。</h2>
            <p>
              まず強いメッセージを決め、そのあとにレイアウトと視線誘導を載せる進め方です。
              順番を守ることで、デザインだけ先行して訴求が弱くなる失敗を避けます。
            </p>
          </div>

          <div className="workflow-list">
            {workflow.map((item) => (
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

        <section className="shell section proof-section" id="proof">
          <div className="proof-panel">
            <p className="eyebrow">Selected proof</p>
            <h2>小さなチームでも、ブランドの密度は上げられる。</h2>
            <p>
              プロダクトの信頼感は、情報量よりも整理の質で決まります。
              余白、強弱、コピーの精度を揃えることで、規模以上の印象を作れます。
            </p>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={review.name}>
                <blockquote>{review.quote}</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="shell section contact-section" id="contact">
          <div>
            <p className="eyebrow">Ready to launch</p>
            <h2>次の公開ページを、テンプレート感なく仕上げる。</h2>
          </div>

          <div className="contact-card">
            <p>
              ヒーローの作り直しだけでも、1ページ全体の再設計でも対応できる想定です。
              まずは現状の課題と、公開したい時期を整理するところから始めます。
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:hello@northstar-studio.example">hello@northstar-studio.example</a>
              <a className="button button-secondary" href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
