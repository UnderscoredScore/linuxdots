import { useMemo, useState } from 'react';
import { ALL_TAGS, DISTROS, WMS, dotfileProjects } from '../data/dotfiles';
import type { Distro, Tag as TagType, WM } from '../types/dotfiles';
import { SearchBar } from '../components/dotfiles/SearchBar';
import { FilterBar } from '../components/dotfiles/FilterBar';
import { DotfileGallery } from '../components/dotfiles/DotfileGallery';
import { DotfileDetail } from '../components/dotfiles/DotfileDetail';
import { Modal } from '../components/shared/Modal';

export function DotfileExplorer() {
  const [query, setQuery] = useState('');
  const [distro, setDistro] = useState<Distro | 'All'>('All');
  const [wm, setWM] = useState<WM | 'All'>('All');
  const [tags, setTags] = useState<TagType[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();
  return dotfileProjects
    .filter((p) => !p.hidden)  
    .filter((p) => {
      if (distro !== 'All' && p.distro !== distro) return false;
      if (wm !== 'All' && p.wm !== wm) return false;
      if (tags.length && !tags.every((t) => p.tags.includes(t))) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
      );
    });
}, [query, distro, wm, tags]);

  const toggleTag = (t: TagType) =>
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const clearFilters = () => {
    setDistro('All');
    setWM('All');
    setTags([]);
    setQuery('');
  };

  const active = openId ? dotfileProjects.find((p) => p.id === openId) : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
   <div className="mb-8">
  <div className="breadcrumbs mb-2 text-sm">
    <ul>
      <li className="text-base-content/50">root</li>
      <li className="text-base-content/50">LinuxDots</li>
      <li className="font-medium text-base-content">Dotfiles</li>
    </ul>
  </div>
  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
    Browse desktop setups
  </h1>
  <p className="mt-2 max-w-2xl text-base-content/60">
    Discover curated dotfiles from the community. Preview screenshots and find the setup
    that matches your workflow.
  </p>
</div>
      <div className="mb-6 space-y-3">
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar
          distros={DISTROS}
          wms={WMS}
          tags={ALL_TAGS}
          selectedDistro={distro}
          selectedWM={wm}
          selectedTags={tags}
          onDistroChange={setDistro}
          onWMChange={setWM}
          onTagToggle={toggleTag}
          onClear={clearFilters}
        />
      </div>

      <div className="mb-4 text-sm text-base-content/50">
        {filtered.length} {filtered.length === 1 ? 'setup' : 'setups'}
      </div>

      <DotfileGallery projects={filtered} onOpen={setOpenId} />

      <Modal open={!!active} onClose={() => setOpenId(null)}>
        {active && <DotfileDetail project={active} />}
      </Modal>
    </div>
  );
}