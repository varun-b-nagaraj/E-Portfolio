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
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1.02, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.45, 1, 0.58]);

  return (
    <motion.article
      ref={ref}
      className="relative ml-8 rounded-lg border border-white/12 bg-panel/80 p-6 shadow-glass backdrop-blur md:ml-16 md:p-8"
      style={motionEnabled ? { scale, opacity } : undefined}
    >
      <div className="absolute -left-[43px] top-8 h-4 w-4 rounded-full border border-bone bg-black md:-left-[75px]" />
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.period}</p>
          <h3 className="mt-2 text-3xl font-semibold text-bone">{item.company}</h3>
          <p className="mt-1 text-silver">{item.role}</p>
        </div>
        {item.metric && <div className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-bone">{item.metric}</div>}
      </div>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-silver">{item.summary}</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={motionEnabled ? { opacity: 0, y: 8 } : false}
        whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: 0.12 + index * 0.02 }}
      >
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </motion.div>
      {detailBasePath && (
        <Link
          href={`${detailBasePath}/${item.slug}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-bone transition hover:border-white/30 hover:bg-white/[0.09]"
        >
          Open full role history
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </motion.article>
  );
}

export function ScrollTimeline({ items, detailBasePath = "/experience" }: { items: Experience[]; detailBasePath?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 35%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="container-page relative py-24">
      <div className="absolute bottom-24 left-4 top-24 w-px bg-white/10 md:left-8">
        <motion.div className="h-full origin-top bg-bone" style={{ scaleY }} />
      </div>
      <div className="space-y-10">
        {items.map((item, index) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} index={index} detailBasePath={detailBasePath} />
        ))}
      </div>
    </section>
  );
}
