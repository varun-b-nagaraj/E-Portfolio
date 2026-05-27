"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-white/12 bg-panel/90 shadow-glass backdrop-blur-xl ${
        featured ? "min-h-[520px] p-8 md:p-10" : "p-6"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone to-transparent" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Case study</p>
            <h3 className="mt-3 text-3xl font-semibold text-bone md:text-5xl">{project.title}</h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/15 p-3 text-bone transition hover:bg-white/10"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver">{project.summary}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
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
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-md border border-white/10 bg-black/25 p-4 text-sm text-bone">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
