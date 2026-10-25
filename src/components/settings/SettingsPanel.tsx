import { useState } from 'react';
import { useSettings, FONTS } from '../../context/SettingsContext';
import { SITE_THEMES } from '../../data/themes';

export function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { theme, font, setTheme, setFont } = useSettings();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-ghost btn-sm btn-square"
        aria-label="Settings"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/30" onClick={() => setOpen(false)}>
          <div
            className="h-full w-full max-w-sm overflow-y-auto border-l border-base-300 bg-base-100 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Settings</h2>
              <button onClick={() => setOpen(false)} className="btn btn-ghost btn-sm btn-square">✕</button>
            </div>

            <section className="mb-8">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-base-content/50">Theme</h3>
              <div className="grid grid-cols-2 gap-2">
                {SITE_THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`rounded-lg border p-3 text-left text-sm transition ${
                      theme === t.id ? 'border-primary bg-primary/10' : 'border-base-300 hover:border-base-content/30'
                    }`}
                  >
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-base-content/60">{t.description}</div>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-base-content/50">Font</h3>
              <div className="flex flex-col gap-1">
                {FONTS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFont(f.id)}
                    className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                      font === f.id ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-base-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}