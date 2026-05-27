"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

const stackGroups = [
  ["Interface", "interface"],
  ["Backend", "backend"],
  ["System", "systems"]
] as const;

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton-shimmer rounded-md ${className}`} />;
}

function FeaturedProjectSkeleton({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full flex-col" data-no-type>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <SkeletonBlock className="h-3 w-44 rounded-full" />
          <SkeletonBlock className="mt-5 h-10 w-[min(520px,82%)] rounded-lg" />
        </div>
        <div className="h-12 w-12 rounded-full border border-teal-100/20 bg-white/[0.035]" aria-label={`Project details loading for ${project.title}`} />
      </div>
      <div className="mt-6 space-y-3">
        <SkeletonBlock className="h-4 w-[72%]" />
        <SkeletonBlock className="h-4 w-[62%]" />
      </div>
      <div className="mt-5 space-y-3">
        <SkeletonBlock className="h-3 w-[84%]" />
        <SkeletonBlock className="h-3 w-[76%]" />
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item}>
            <SkeletonBlock className="h-3 w-24 rounded-full" />
            <SkeletonBlock className="mt-4 h-4 w-full" />
            <SkeletonBlock className="mt-3 h-4 w-4/5" />
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <SkeletonBlock className="h-3 w-24 rounded-full" />
            <div className="mt-5 flex flex-wrap gap-2">
              <SkeletonBlock className="h-6 w-20 rounded-full" />
              <SkeletonBlock className="h-6 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <SkeletonBlock key={item} className="h-[54px] rounded-md border border-amber-100/10" />
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured = false, revealContent = true }: { project: Project; featured?: boolean; revealContent?: boolean }) {
  return (
    <article
      className={`surface-glow group relative overflow-hidden rounded-lg border border-white/12 bg-panel/90 shadow-glass backdrop-blur-xl transition-all duration-700 ease-out hover:border-teal-200/24 hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)] ${
        featured ? "flex min-h-[clamp(430px,50vh,560px)] flex-col p-5 md:p-7" : "p-6"
      }`}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px opacity-70" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/45 via-amber-200/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-teal-400/[0.045] blur-3xl" />
        <div className="absolute left-0 top-12 h-36 w-36 rounded-full bg-amber-300/[0.035] blur-3xl" />
      </div>
      {featured && !revealContent ? <FeaturedProjectSkeleton project={project} /> : (
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker text-xs uppercase tracking-[0.28em]">{project.eyebrow}</p>
            <h3 className={`mt-3 font-semibold text-bone ${featured ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"}`}>
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-teal-100/20 bg-white/[0.035] p-3 text-teal-100 transition-all duration-500 ease-out hover:border-teal-200/24 hover:bg-white/[0.08] hover:text-bone hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className={`max-w-2xl leading-relaxed text-silver ${featured ? "mt-4 text-sm md:text-base" : "mt-5 text-lg"}`}>{project.summary}</p>
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
                {project.stack[key].slice(0, 3).map((item) => (
                  <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric} className="rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] p-4 text-sm text-bone shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {metric}
            </div>
          ))}
        </div>
      </div>
      )}
    </article>
  );
}
