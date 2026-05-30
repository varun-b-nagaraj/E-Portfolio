"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/data/projects";

const stackGroups = [
  ["Interface", "interface"],
  ["Backend", "backend"],
  ["System", "systems"]
] as const;

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton-shimmer rounded-md ${className}`} />;
}

function TypedText({
  text,
  resetKey,
  delay = 0,
  step = 10
}: {
  text: string;
  resetKey: string;
  delay?: number;
  step?: number;
}) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const characters = Array.from(text);

    if (reducedMotion) {
      setVisibleCharacters(characters.length);
      return;
    }

    setVisibleCharacters(0);
    const timers = characters.map((_, index) => window.setTimeout(() => setVisibleCharacters(index + 1), delay + index * step));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [delay, resetKey, step, text]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{Array.from(text).slice(0, visibleCharacters).join("")}</span>
    </span>
  );
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

function ProjectCardSkeleton({ project, featured }: { project: Project; featured: boolean }) {
  if (featured) return <FeaturedProjectSkeleton project={project} />;

  return (
    <div className="relative flex min-h-[420px] flex-col" data-no-type>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <SkeletonBlock className="h-3 w-40 rounded-full" />
          <SkeletonBlock className="mt-5 h-12 w-[min(520px,86%)] rounded-lg" />
        </div>
        <div className="h-11 w-11 rounded-full border border-teal-100/20 bg-white/[0.035]" aria-label={`Project details loading for ${project.title}`} />
      </div>
      <div className="mt-7 space-y-3">
        <SkeletonBlock className="h-4 w-[82%]" />
        <SkeletonBlock className="h-4 w-[68%]" />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
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
          <div key={item} className="rounded-md border border-white/10 bg-black/20 p-4">
            <SkeletonBlock className="h-3 w-24 rounded-full" />
            <SkeletonBlock className="mt-5 h-6 w-28 rounded-full" />
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

function ProjectDetailsModal({ project, open, onClose }: { project: Project; open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        data-no-type
        className="fixed inset-0 z-[90] grid place-items-center bg-black/70 px-4 py-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={onClose}
      >
        <motion.article
          className="surface-glow relative max-h-[min(760px,calc(100vh-48px))] w-[min(980px,100%)] overflow-y-auto rounded-lg border border-white/14 bg-[#080b0b]/95 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.62)] md:p-8"
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.985 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="accent-rule absolute inset-x-0 top-0 h-px" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-muted transition hover:bg-white/[0.09] hover:text-bone"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="section-kicker pr-12 text-xs uppercase tracking-[0.28em]">{project.eyebrow}</p>
          <h2 className="mt-4 pr-12 text-3xl font-semibold leading-tight text-bone md:text-5xl">{project.title}</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-silver md:text-lg">{project.summary}</p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted">{project.narrative}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Problem", project.problem, "text-teal-100/70"],
              ["Solution", project.solution, "text-blue-100/70"],
              ["Impact", project.impact, "text-amber-100/75"]
            ].map(([label, body, color]) => (
              <section key={label} className="rounded-md border border-white/10 bg-black/24 p-4">
                <p className={`text-xs uppercase tracking-[0.22em] ${color}`}>{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-silver">{body}</p>
              </section>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {stackGroups.map(([label, key]) => (
              <section key={key} className="rounded-md border border-white/10 bg-black/24 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-teal-100/65">{label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack[key].map((item) => (
                    <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric} className="rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] p-4 text-sm text-bone">
                {metric}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-teal-100/25 bg-white/[0.055] px-4 py-2 text-sm text-bone transition hover:bg-white/[0.1]"
            >
              Open full case study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button type="button" onClick={onClose} className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-sm text-muted transition hover:bg-white/[0.08] hover:text-bone">
              Close
            </button>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export function ProjectCard({ project, featured = false, revealContent }: { project: Project; featured?: boolean; revealContent?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-18% 0px -18% 0px" });
  const shouldRevealContent = revealContent ?? isInView;
  const renderText = (text: string, delay = 0, step = 10) =>
    featured ? <TypedText text={text} resetKey={project.slug} delay={delay} step={step} /> : text;

  return (
    <article
      ref={ref}
      data-typing-scope={`project-${project.slug}`}
      className={`surface-glow group relative overflow-hidden rounded-lg border border-white/12 bg-panel/90 shadow-glass backdrop-blur-xl transition-all duration-700 ease-out hover:border-teal-200/24 hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)] ${
        featured ? "flex flex-col p-5 lg:p-6 xl:p-7" : "p-6"
      }`}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px opacity-70" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/45 via-amber-200/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-teal-400/[0.045] blur-3xl" />
        <div className="absolute left-0 top-12 h-36 w-36 rounded-full bg-amber-300/[0.035] blur-3xl" />
      </div>
      {!shouldRevealContent ? <ProjectCardSkeleton project={project} featured={featured} /> : (
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker min-h-4 text-xs uppercase tracking-[0.28em]">{renderText(project.eyebrow, 40, 18)}</p>
            <h3 className={`mt-3 font-semibold text-bone ${featured ? "text-2xl md:text-3xl xl:text-4xl" : "text-3xl md:text-5xl"}`}>
              {renderText(project.title, 140, 18)}
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
        <p className={`max-w-2xl leading-relaxed text-silver ${featured ? "mt-4 text-sm md:text-base" : "mt-5 text-lg"}`}>{renderText(project.summary, 300, 7)}</p>
        {featured && (
          <div className="hidden [@media(max-height:900px)]:block">
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.slice(0, 3).map((metric, index) => (
                <span key={metric} className="rounded-full border border-amber-100/20 bg-white/[0.045] px-3 py-1.5 text-xs text-bone">
                  {renderText(metric, 620 + index * 90, 8)}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-100/25 bg-white/[0.055] px-4 py-2 text-sm font-medium text-bone transition hover:bg-white/[0.1]"
            >
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        )}
        {featured && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted [@media(max-height:900px)]:hidden">{renderText(project.narrative, 620, 6)}</p>}
        <div className={`grid md:grid-cols-3 ${featured ? "mt-6 gap-4 [@media(max-height:900px)]:hidden" : "mt-8 gap-5"}`}>
          <div>
            <p className="min-h-4 text-xs uppercase tracking-[0.2em] text-teal-100/65">{renderText("Problem", 980, 12)}</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{renderText(project.problem, 1080, 6)}</p>
          </div>
          <div>
            <p className="min-h-4 text-xs uppercase tracking-[0.2em] text-blue-100/65">{renderText("Solution", 1220, 12)}</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{renderText(project.solution, 1320, 6)}</p>
          </div>
          <div>
            <p className="min-h-4 text-xs uppercase tracking-[0.2em] text-amber-100/70">{renderText("Impact", 1460, 12)}</p>
            <p className="mt-2 text-sm leading-relaxed text-silver">{renderText(project.impact, 1560, 6)}</p>
          </div>
        </div>
        <div className={`grid gap-3 md:grid-cols-3 ${featured ? "mt-6 [@media(max-height:900px)]:hidden" : "mt-8"}`}>
          {stackGroups.map(([label, key], groupIndex) => (
            <div key={key} className="rounded-md border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="min-h-3 text-[10px] uppercase tracking-[0.22em] text-teal-100/65">{renderText(label, 1840 + groupIndex * 90, 12)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack[key].slice(0, 3).map((item, itemIndex) => (
                  <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                    {renderText(item, 1960 + groupIndex * 120 + itemIndex * 70, 8)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`grid gap-3 sm:grid-cols-3 ${featured ? "mt-6 [@media(max-height:900px)]:hidden" : "mt-6"}`}>
          {project.metrics.slice(0, 3).map((metric, index) => (
            <div key={metric} className="rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] p-4 text-sm text-bone shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {renderText(metric, 2360 + index * 90, 8)}
            </div>
          ))}
        </div>
      </div>
      )}
      {featured && <ProjectDetailsModal project={project} open={detailsOpen} onClose={() => setDetailsOpen(false)} />}
    </article>
  );
}
