"use client";

import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Experience } from "@/data/experience";
import { useMotionEnabled } from "./ReducedMotionProvider";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton-shimmer rounded-md ${className}`} />;
}

function TimelineCardSkeleton({ item }: { item: Experience }) {
  return (
    <div className="relative" data-no-type>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <SkeletonBlock className="h-3 w-40 rounded-full" />
          <SkeletonBlock className="mt-5 h-10 w-[min(420px,82%)] rounded-lg" />
          <SkeletonBlock className="mt-4 h-5 w-56 rounded-md" />
        </div>
        {item.metric && <SkeletonBlock className="h-12 w-40 shrink-0 rounded-md" />}
      </div>
      <div className="mt-7 space-y-3">
        <SkeletonBlock className="h-5 w-[78%]" />
        <SkeletonBlock className="h-5 w-[62%]" />
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <SkeletonBlock key={index} className="h-28 rounded-md border border-white/10" />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {[0, 1, 2, 3].map((index) => (
          <SkeletonBlock key={index} className="h-6 w-24 rounded-full" />
        ))}
      </div>
      <div className="mt-7 flex gap-3">
        <SkeletonBlock className="h-10 w-40 rounded-full" />
        {item.website && <SkeletonBlock className="h-10 w-32 rounded-full" />}
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  index,
  detailBasePath,
  detailLabel,
  maxBullets,
  rowProgress
}: {
  item: Experience;
  index: number;
  detailBasePath?: string | null;
  detailLabel: string;
  maxBullets: number;
  rowProgress?: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 76%", "end 32%"] });
  const activeProgress = rowProgress ?? scrollYProgress;
  const [revealContent, setRevealContent] = useState(false);
  const y = useTransform(activeProgress, [0, 0.28, 1], [28, 0, 0]);
  const opacity = useTransform(activeProgress, [0, 0.2, 0.84, 1], [0.58, 1, 1, 0.74]);
  const scale = useTransform(activeProgress, [0, 0.24, 0.76, 1], [0.985, 1, 1, 0.992]);
  const glow = useTransform(activeProgress, [0, 0.24, 0.76, 1], [
    "0 0 0 rgba(141,223,213,0)",
    "0 26px 88px rgba(141,223,213,0.085)",
    "0 26px 88px rgba(141,223,213,0.085)",
    "0 0 0 rgba(141,223,213,0)"
  ]);
  const visibleBulletCount = Math.min(maxBullets, 3);

  useMotionValueEvent(activeProgress, "change", (progress) => {
    if (!revealContent && progress >= 0.18 && progress <= 0.92) setRevealContent(true);
  });

  return (
    <motion.article
      ref={ref}
      data-typing-scope={`timeline-${item.slug}`}
      className="surface-glow relative min-w-0 overflow-hidden rounded-lg border border-white/12 bg-panel/85 p-6 shadow-glass backdrop-blur md:p-8"
      style={motionEnabled ? { y, opacity, scale, boxShadow: glow } : undefined}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-teal-100/55 via-amber-100/20 to-transparent" />
      {!revealContent ? <TimelineCardSkeleton item={item} /> : (
      <>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="section-kicker text-xs uppercase tracking-[0.22em]">{item.period}</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-bone md:text-4xl">{item.company}</h3>
          <p className="mt-2 text-base text-silver">{item.role}</p>
        </div>
        {item.metric && (
          <div className="shrink-0 rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] px-4 py-3 text-sm text-bone">
            {item.metric}
          </div>
        )}
      </div>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-silver">{item.summary}</p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {item.bullets.slice(0, visibleBulletCount).map((bullet) => (
          <div
            key={bullet}
            className="rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]"
          >
            {bullet}
          </div>
        ))}
      </div>
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={motionEnabled ? { opacity: 0, y: 8 } : false}
        whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: 0.08 + index * 0.015 }}
      >
        {item.tags.map((tag) => (
          <span key={tag} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </motion.div>
      <div className="mt-7 flex flex-wrap gap-3">
        {detailBasePath && (
          <Link
            href={`${detailBasePath}/${item.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            {detailLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
        {item.website && (
          <a
            href={item.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm text-silver transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-100/30 hover:bg-white/[0.07] hover:text-bone"
            aria-label={`Visit ${item.company} website`}
          >
            Visit website
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
      </>
      )}
    </motion.article>
  );
}

function TimelineRow({
  item,
  index,
  detailBasePath,
  detailLabel,
  maxBullets
}: {
  item: Experience;
  index: number;
  detailBasePath?: string | null;
  detailLabel: string;
  maxBullets: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 84%", "end 18%"] });

  return (
    <section
      ref={ref}
      className="relative grid gap-5 md:min-h-[118vh] md:grid-cols-[132px_minmax(0,1fr)] md:pb-28 last:md:min-h-[88vh]"
    >
      <div className="relative hidden md:block">
        <div className="sticky top-28 h-fit pr-8 text-right">
          <div className="absolute right-[-10px] top-1 h-5 w-5 rounded-full border border-teal-100/55 bg-black shadow-[0_0_24px_rgba(141,223,213,0.22)]" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">{item.location}</p>
        </div>
      </div>
      <div className="md:sticky md:top-24 md:h-fit">
        <TimelineCard
          item={item}
          index={index}
          detailBasePath={detailBasePath}
          detailLabel={detailLabel}
          maxBullets={maxBullets}
          rowProgress={scrollYProgress}
        />
      </div>
    </section>
  );
}

export function ScrollTimeline({
  items,
  detailBasePath = "/experience",
  eyebrow = "Role progression",
  title = "Responsibilities, teams, and operating scope.",
  body = "Experience entries stay focused on positions held and work performed. Project case studies live separately in the projects section.",
  detailLabel = "Open full role history",
  maxBullets = 3
}: {
  items: Experience[];
  detailBasePath?: string | null;
  eyebrow?: string;
  title?: string;
  body?: string;
  detailLabel?: string;
  maxBullets?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 36%"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="w-full py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-8 lg:grid-cols-[320px_minmax(0,1fr)] xl:px-12 2xl:px-16">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="section-kicker text-xs uppercase tracking-[0.28em]">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-bone">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{body}</p>
          <div className="mt-8 h-px overflow-hidden bg-white/10">
            <motion.div className="accent-rule h-full origin-left" style={{ width: progress }} />
          </div>
        </aside>

        <div className="relative min-w-0">
          <div className="absolute bottom-10 left-[132px] top-10 hidden w-px bg-white/10 md:block" />
          <div className="space-y-8">
            {items.map((item, index) => (
              <TimelineRow
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
                detailBasePath={detailBasePath}
                detailLabel={detailLabel}
                maxBullets={maxBullets}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
