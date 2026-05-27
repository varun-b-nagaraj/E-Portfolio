"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

const stackGroups = [
  ["Interface", "interface"],
  ["Backend", "backend"],
  ["System", "systems"]
] as const;

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-white/12 bg-panel/90 shadow-glass backdrop-blur-xl transition duration-300 hover:border-teal-200/35 ${
        featured ? "min-h-[clamp(520px,58vh,600px)] p-6 md:p-8" : "p-6"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/80 via-amber-200/70 to-transparent" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-teal-400/12 blur-3xl" />
        <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-100/70">{project.eyebrow}</p>
            <h3 className={`mt-3 font-semibold text-bone ${featured ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl"}`}>
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/15 p-3 text-bone transition hover:bg-white/10"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className={`max-w-2xl leading-relaxed text-silver ${featured ? "mt-4 text-base" : "mt-5 text-lg"}`}>{project.summary}</p>
        {featured && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{project.narrative}</p>}
        <div className={`grid md:grid-cols-3 ${featured ? "mt-6 gap-4" : "mt-8 gap-5"}`}>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Solution</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.solution}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Impact</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.impact}</p>
          </div>
        </div>
        <div className={`grid gap-3 md:grid-cols-3 ${featured ? "mt-6" : "mt-8"}`}>
          {stackGroups.map(([label, key]) => (
            <div key={key} className="rounded-md border border-white/10 bg-black/20 p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-teal-100/65">{label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack[key].slice(0, featured ? 4 : 3).map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`grid gap-3 sm:grid-cols-3 ${featured ? "mt-5" : "mt-6"}`}>
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-md border border-amber-100/15 bg-amber-200/[0.045] p-4 text-sm text-bone">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
