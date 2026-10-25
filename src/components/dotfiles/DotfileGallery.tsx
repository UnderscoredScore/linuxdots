import type { DotfileProject } from '../../types/dotfiles';
import { DotfileCard } from './DotfileCard';

interface DotfileGalleryProps {
  projects: DotfileProject[];
  onOpen: (id: string) => void;
}

export function DotfileGallery({ projects, onOpen }: DotfileGalleryProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 py-20 text-center">
        <div className="mb-3 text-4xl">🔍</div>
        <h3 className="text-lg font-semibold">No dotfiles found</h3>
        <p className="mt-1 max-w-sm text-sm text-base-content/60">
          Try adjusting your search or clearing some filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((p) => (
        <DotfileCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </div>
  );
}