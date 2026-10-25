import { useState } from 'react';
import type { DotfileProject } from '../../types/dotfiles';
import { Tag } from './Tag';

interface DotfileDetailProps {
  project: DotfileProject;
}

export function DotfileDetail({ project }: DotfileDetailProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-5 lg:p-8">
      <div className="lg:col-span-3">
        <div className="overflow-hidden rounded-xl border border-base-300 bg-base-200">
          <img
            src={project.screenshots[active]}
            alt={`${project.name} screenshot ${active + 1}`}
            className="aspect-video w-full object-cover"
          />
        </div>
        {project.screenshots.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === active ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" className="h-16 w-28 object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 lg:col-span-2">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="badge badge-primary badge-outline">{project.distro}</span>
            <span className="badge badge-success badge-outline">{project.wm}</span>
          </div>
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="mt-1 text-sm text-base-content/50">by @{project.author}</p>
        </div>

        <p className="text-sm leading-relaxed text-base-content/80">
          {project.longDescription ?? project.description}
        </p>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-base-content/50">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t} label={`#${t}`} />
            ))}
          </div>
        </div>

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-2 gap-2"
          >
            View on GitHub
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}