export default function Nav({ page, go }) {
  return (
    <header className="nav">
      <button className="brand nav-btn" onClick={() => go('home')}>PulseGrid</button>
      <nav className="nav-links">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => go('home')}>ホーム</button>
        <button className={page === 'products' ? 'nav-link active' : 'nav-link'} onClick={() => go('products')}>商品</button>
        <button className={page === 'donate' ? 'nav-link active' : 'nav-link'} onClick={() => go('donate')}>寄附</button>
      </nav>
      <button className="btn primary btn-sm" onClick={() => go('donate')}>今すぐ寄附</button>
    </header>
  );
}
