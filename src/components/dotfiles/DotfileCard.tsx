import type { DotfileProject } from '../../types/dotfiles';
import { Tag } from './Tag';
import { PlatformIcon } from '../brand/PlatformIcon';

interface DotfileCardProps {
  project: DotfileProject;
  onOpen: (id: string) => void;
}

export function DotfileCard({ project, onOpen }: DotfileCardProps) {
  return (
    <button
      onClick={() => onOpen(project.id)}
      className="card group overflow-hidden rounded-lg border border-base-300 bg-base-100 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-base-content/30 hover:shadow-md"
    >
      {/* Thumbnail */}
      <figure className="relative aspect-video overflow-hidden bg-base-200">
        <img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Featured pill */}
        {project.featured && (
          <span className="badge badge-primary badge-sm absolute left-2 top-2 text-[10px] font-semibold uppercase tracking-wide">
            Featured
          </span>
        )}
        {/* Platform badges over image */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur">
            <PlatformIcon name={project.distro} className="h-3 w-3" />
            {project.distro}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur">
            <PlatformIcon name={project.wm} className="h-3 w-3" />
            {project.wm}
          </span>
        </div>
      </figure>

      {/* Body */}
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold leading-tight">
            {project.name}
          </h3>
          <span className="shrink-0 text-[11px] text-base-content/50">
            @{project.author}
          </span>
        </div>
        <p className="line-clamp-2 text-xs leading-snug text-base-content/60">
          {project.description}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((t) => (
            <Tag key={t} label={t} />
          ))}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-base-200 px-2 py-0.5 text-[10px] text-base-content/50">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}