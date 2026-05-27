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
      className={`surface-glow group relative overflow-hidden rounded-lg border border-white/12 bg-panel/90 shadow-glass backdrop-blur-xl transition-all duration-700 ease-out hover:border-teal-200/40 hover:shadow-[0_30px_110px_rgba(20,184,166,0.16),0_18px_70px_rgba(251,191,36,0.08),0_0_0_1px_rgba(255,255,255,0.10)] ${
        featured ? "flex min-h-[clamp(500px,56vh,620px)] flex-col p-6 md:p-8" : "p-6"
      }`}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px opacity-70" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/80 via-amber-200/70 to-transparent" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-teal-400/12 blur-3xl" />
        <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker text-xs uppercase tracking-[0.28em]">{project.eyebrow}</p>
            <h3 className={`mt-3 font-semibold text-bone ${featured ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl"}`}>
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-teal-100/20 bg-white/[0.035] p-3 text-teal-100 transition-all duration-500 ease-out hover:border-amber-100/35 hover:bg-white/10 hover:text-amber-100 hover:shadow-[0_12px_36px_rgba(141,223,213,0.14)]"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className={`max-w-2xl leading-relaxed text-silver ${featured ? "mt-4 text-base" : "mt-5 text-lg"}`}>{project.summary}</p>
        {featured && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{project.narrative}</p>}
        <div className={`grid md:grid-cols-3 ${featured ? "mt-6 gap-4" : "mt-8 gap-5"}`}>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-100/65">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100/65">Solution</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.solution}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-100/70">Impact</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{project.impact}</p>
          </div>
        </div>
        <div className={`grid gap-3 md:grid-cols-3 ${featured ? "mt-6" : "mt-8"}`}>
          {stackGroups.map(([label, key]) => (
            <div key={key} className="rounded-md border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-teal-100/65">{label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack[key].slice(0, featured ? 4 : 3).map((item) => (
                  <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] p-4 text-sm text-bone shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
