import { useEffect, useId, useRef } from 'react';

const ADSENSE_SCRIPT_ID = 'adsense-script';
const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID?.trim();

function loadAdSenseScript() {
  if (!clientId || typeof document === 'undefined') {
    return;
  }

  if (document.getElementById(ADSENSE_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = ADSENSE_SCRIPT_ID;
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

export default function AdBanner({ slot, label = 'Sponsored', className = '' }) {
  const adRef = useRef(null);
  const instanceId = useId();
  const fallbackSlot = import.meta.env.VITE_ADSENSE_SLOT_DEFAULT?.trim();
  const resolvedSlot = slot?.trim() || fallbackSlot;

  useEffect(() => {
    loadAdSenseScript();
  }, []);

  useEffect(() => {
    if (!clientId || !resolvedSlot || !adRef.current) {
      return;
    }

    if (adRef.current.dataset.adInitialized === 'true') {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      adRef.current.dataset.adInitialized = 'true';
    } catch (error) {
      console.error('AdSense failed to initialize', error);
    }
  }, [instanceId, resolvedSlot]);

  if (!clientId || !resolvedSlot) {
    return null;
  }

  return (
    <aside className={`ad-shell ${className}`.trim()} aria-label={label}>
      <div className="ad-meta">
        <span>{label}</span>
      </div>
      <div className="ad-card">
        <ins
          ref={adRef}
          className="adsbygoogle ad-unit"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={resolvedSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
