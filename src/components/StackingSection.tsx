"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export type StackCard = {
  title: string;
  kicker: string;
  body: string;
};

function StackedCard({ card, index }: { card: StackCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const topOffset = 96 + index * 74;

  return (
    <motion.article
      ref={ref}
      className="surface-glow sticky mb-[18vh] overflow-hidden rounded-lg border border-white/12 bg-carbon/90 p-5 shadow-glass md:p-6"
      initial={motionEnabled ? { opacity: 0.72, y: 28 } : false}
      whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: false, margin: "-18% 0px -45% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ top: topOffset, zIndex: index + 1 }}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-5 top-3 text-7xl font-semibold leading-none text-white/[0.035] md:text-8xl">
        0{index + 1}
      </div>
      <div className="relative grid gap-5 md:grid-cols-[0.36fr_0.64fr] md:items-center">
        <div className="min-w-0">
          <p className="section-kicker text-xs uppercase tracking-[0.28em]">{card.kicker}</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-bone md:text-4xl">{card.title}</h3>
        </div>
        <div className="min-w-0">
          <div className="accent-rule mb-4 h-px w-full" />
          <p className="max-w-2xl text-base leading-relaxed text-silver md:text-lg">{card.body}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function StackingSection({ cards }: { cards: StackCard[] }) {
  return (
    <section className="container-page py-24">
      <div className="mb-12 max-w-3xl">
        <p className="section-kicker text-sm uppercase tracking-[0.28em]">Builder profile</p>
        <h2 className="mt-4 text-4xl font-semibold text-bone md:text-6xl">A technical exhibit, built from shipped systems.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Each layer locks into place as the next one arrives, forming a readable stack of the systems behind the work.
        </p>
      </div>
      <div className="pb-[58vh]">
        {cards.map((card, index) => (
          <StackedCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
