import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface Settings {
  theme: string;
  font: string;
  setTheme: (t: string) => void;
  setFont: (f: string) => void;
}

const FONTS = [
  { id: 'inter', label: 'Inter', stack: 'Inter, system-ui, sans-serif' },
  { id: 'system', label: 'System UI', stack: 'system-ui, sans-serif' },
  { id: 'jetbrains', label: 'JetBrains Mono', stack: '"JetBrains Mono", monospace' },
  { id: 'fira', label: 'Fira Code', stack: '"Fira Code", monospace' },
  { id: 'space', label: 'Space Grotesk', stack: '"Space Grotesk", sans-serif' },
];

const Ctx = createContext<Settings | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState(() => localStorage.getItem('theme') || 'light');
  const [font, setFontState] = useState(() => localStorage.getItem('font') || 'inter');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const stack = FONTS.find(f => f.id === font)?.stack || 'system-ui, sans-serif';
    // Apply to body only, NOT to the brand logo (logo uses its own class)
    document.body.style.fontFamily = stack;
    localStorage.setItem('font', font);
  }, [font]);

  return (
    <Ctx.Provider value={{ theme, font, setTheme: setThemeState, setFont: setFontState }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}

export { FONTS };