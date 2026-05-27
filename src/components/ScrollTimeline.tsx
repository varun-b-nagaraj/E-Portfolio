"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Experience } from "@/data/experience";
import { useMotionEnabled } from "./ReducedMotionProvider";
import { ArrowUpRight } from "lucide-react";

function TimelineItem({ item, index, detailBasePath }: { item: Experience; index: number; detailBasePath?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 30%"] });
  const y = useTransform(scrollYProgress, [0, 0.35, 1], [24, 0, -8]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.86, 1], [0.56, 1, 1, 0.72]);

  return (
    <div ref={ref} className="grid gap-5 md:grid-cols-[112px_minmax(0,1fr)]">
      <div className="relative hidden md:block">
        <div className="sticky top-28 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">{item.location}</p>
        </div>
      </div>
      <motion.article
        className="surface-glow relative min-w-0 overflow-hidden rounded-lg border border-white/12 bg-panel/80 p-6 shadow-glass backdrop-blur md:p-8"
        style={motionEnabled ? { y, opacity } : undefined}
      >
        <div className="accent-rule absolute inset-x-0 top-0 h-px" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-teal-100/55 via-amber-100/20 to-transparent" />
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
          {item.bullets.slice(0, 3).map((bullet) => (
            <div key={bullet} className="rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
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
        {detailBasePath && (
          <Link
            href={`${detailBasePath}/${item.slug}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-100/35 hover:bg-white/[0.09] hover:shadow-[0_14px_44px_rgba(141,223,213,0.12)]"
          >
            Open full role history
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </motion.article>
    </div>
  );
}

export function ScrollTimeline({ items, detailBasePath = "/experience" }: { items: Experience[]; detailBasePath?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 35%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="container-page relative py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="section-kicker text-xs uppercase tracking-[0.28em]">Role progression</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-bone">Responsibilities, teams, and operating scope.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Experience entries stay focused on positions held and work performed. Project case studies live separately in the projects section.
          </p>
          <div className="mt-8 h-px overflow-hidden bg-white/10">
            <motion.div className="accent-rule h-full origin-left" style={{ scaleX: scaleY }} />
          </div>
        </aside>
        <div className="relative min-w-0 space-y-8 md:space-y-10">
          <div className="absolute bottom-0 left-[9px] top-0 hidden w-px bg-white/10 md:block" />
          {items.map((item, index) => (
            <div key={`${item.company}-${item.role}`} className="relative md:pl-10">
              <div className="absolute left-0 top-8 hidden h-5 w-5 rounded-full border border-teal-100/55 bg-black shadow-[0_0_24px_rgba(141,223,213,0.22)] md:block" />
              <TimelineItem item={item} index={index} detailBasePath={detailBasePath} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
