import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const THEME_PRESETS = {
  coral:   { accent: '#ff5f6d', strong: '#ff8a00', soft: '#ffd8b7', glow: 'rgba(255, 95, 109, 0.24)', glowAlt: 'rgba(255, 138, 0, 0.18)', shadow: 'rgba(255, 95, 109, 0.22)', brandGrad: 'linear-gradient(135deg, #ff5f6d, #ffc371)' },
  violet:  { accent: '#8b5cf6', strong: '#7c3aed', soft: '#ddd6fe', glow: 'rgba(139, 92, 246, 0.24)', glowAlt: 'rgba(124, 58, 237, 0.18)', shadow: 'rgba(139, 92, 246, 0.22)', brandGrad: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  blue:    { accent: '#3b82f6', strong: '#2563eb', soft: '#bfdbfe', glow: 'rgba(59, 130, 246, 0.24)',  glowAlt: 'rgba(37, 99, 235, 0.18)',  shadow: 'rgba(59, 130, 246, 0.22)',  brandGrad: 'linear-gradient(135deg, #3b82f6, #60a5fa)' },
  cyan:    { accent: '#06b6d4', strong: '#0891b2', soft: '#cffafe', glow: 'rgba(6, 182, 212, 0.24)',   glowAlt: 'rgba(8, 145, 178, 0.18)',  shadow: 'rgba(6, 182, 212, 0.22)',   brandGrad: 'linear-gradient(135deg, #06b6d4, #22d3ee)' },
  emerald: { accent: '#10b981', strong: '#059669', soft: '#d1fae5', glow: 'rgba(16, 185, 129, 0.24)',  glowAlt: 'rgba(5, 150, 105, 0.18)',  shadow: 'rgba(16, 185, 129, 0.22)',  brandGrad: 'linear-gradient(135deg, #10b981, #34d399)' },
  amber:   { accent: '#f59e0b', strong: '#d97706', soft: '#fef3c7', glow: 'rgba(245, 158, 11, 0.24)',  glowAlt: 'rgba(217, 119, 6, 0.18)',  shadow: 'rgba(245, 158, 11, 0.22)',  brandGrad: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
  rose:    { accent: '#f43f5e', strong: '#e11d48', soft: '#fce7f3', glow: 'rgba(244, 63, 94, 0.24)',   glowAlt: 'rgba(225, 29, 72, 0.18)',  shadow: 'rgba(244, 63, 94, 0.22)',   brandGrad: 'linear-gradient(135deg, #f43f5e, #fb7185)' },
  pink:    { accent: '#ec4899', strong: '#db2777', soft: '#fce7f3', glow: 'rgba(236, 72, 153, 0.24)',  glowAlt: 'rgba(219, 39, 119, 0.18)', shadow: 'rgba(236, 72, 153, 0.22)',  brandGrad: 'linear-gradient(135deg, #ec4899, #f472b6)' },
};

export const THEME_KEYS = Object.keys(THEME_PRESETS);

const ThemeContext = createContext();

function applyTheme(key) {
  const t = THEME_PRESETS[key];
  if (!t) return;
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent);
  root.style.setProperty('--accent-strong', t.strong);
  root.style.setProperty('--accent-soft', t.soft);
  root.style.setProperty('--accent-glow', t.glow);
  root.style.setProperty('--accent-glow-alt', t.glowAlt);
  root.style.setProperty('--accent-shadow', t.shadow);
  root.style.setProperty('--accent-brand-grad', t.brandGrad);
}

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('coral');

  const changeTheme = useCallback((key) => {
    if (!THEME_PRESETS[key]) return;
    setThemeKey(key);
    applyTheme(key);
  }, []);

  useEffect(() => {
    applyTheme(themeKey);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeKey, changeTheme, preset: THEME_PRESETS[themeKey] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
