import { useState, useRef, useEffect } from 'react';
import type { Distro, Tag as TagType, WM } from '../../types/dotfiles';
import { Tag } from './Tag';

interface FilterBarProps {
  distros: Distro[];
  wms: WM[];
  tags: TagType[];
  selectedDistro: Distro | 'All';
  selectedWM: WM | 'All';
  selectedTags: TagType[];
  onDistroChange: (d: Distro | 'All') => void;
  onWMChange: (w: WM | 'All') => void;
  onTagToggle: (t: TagType) => void;
  onClear: () => void;
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      <span className="pl-1 text-xs font-medium uppercase tracking-wide text-base-content/60">
        {label}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="input input-bordered flex w-full items-center justify-between text-left"
        >
          <span>{value}</span>
          <svg
            className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ul className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-box border border-base-300 bg-base-100 p-1 shadow-lg">
            {['All', ...options].map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-btn px-3 py-2 text-sm transition-colors hover:bg-base-200 ${
                    value === opt ? 'font-medium' : ''
                  }`}
                >
                  <span>{opt}</span>
                  {value === opt && <CheckIcon />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function FilterBar({
  distros,
  wms,
  tags,
  selectedDistro,
  selectedWM,
  selectedTags,
  onDistroChange,
  onWMChange,
  onTagToggle,
  onClear,
}: FilterBarProps) {
  const hasFilters =
    selectedDistro !== 'All' || selectedWM !== 'All' || selectedTags.length > 0;

  return (
    <div className="space-y-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <FilterSelect
          label="Distro"
          value={selectedDistro}
          options={distros}
          onChange={(v) => onDistroChange(v as Distro | 'All')}
        />
        <FilterSelect
          label="Window Manager"
          value={selectedWM}
          options={wms}
          onChange={(v) => onWMChange(v as WM | 'All')}
        />
        <div className="flex items-end justify-end">
          {hasFilters && (
            <button onClick={onClear} className="btn btn-ghost btn-sm">
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag
            key={t}
            label={`#${t}`}
            variant="pill"
            active={selectedTags.includes(t)}
            onClick={() => onTagToggle(t)}
          />
        ))}
      </div>
    </div>
  );
}