import { useState } from 'react';
import { DotfileExplorer } from './pages/DotfileExplorer';
import { BrandLogo } from './components/brand/BrandLogo';

type Section = 'dotfiles' | 'components';

export default function App() {
  const [section, setSection] = useState<Section>('dotfiles');

  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <BrandLogo size="md" />
          </div>
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setSection('dotfiles')}
              className={`btn btn-sm ${section === 'dotfiles' ? 'btn-neutral' : 'btn-ghost'}`}
            >
              Dotfiles
            </button>
            <button
              disabled
              title="Components section coming in a future update"
              className="btn btn-sm btn-ghost cursor-not-allowed opacity-40"
            >
              Components
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {section === 'dotfiles' && <DotfileExplorer />}
      </main>

      <footer className="border-t border-base-300 bg-base-200/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-base-content/60 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <BrandLogo size="sm" />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/UnderscoredScore/linuxdots"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              GitHub
            </a>
            <a
              href="https://github.com/UnderscoredScore/linuxdots/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              Contribute
            </a>
            <a href="#" className="link link-hover">
              About
            </a>
          </div>
          <span className="text-xs">© {new Date().getFullYear()} LinuxDots</span>
        </div>
      </footer>
    </div>
  );
}