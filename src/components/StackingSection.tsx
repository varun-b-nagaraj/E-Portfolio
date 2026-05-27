"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export type StackCard = {
  title: string;
  kicker: string;
  body: string;
};

function StackedCard({ card, index }: { card: StackCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 18%"] });
  const motionEnabled = useMotionEnabled();
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.72, 1], [0.96, 1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.76, 1], [0.62, 1, 1, 0.45]);
  const y = useTransform(scrollYProgress, [0, 0.24, 0.72, 1], [56, 0, 0, -28]);

  return (
    <motion.article
      ref={ref}
      className="sticky top-24 mb-[42vh] min-h-[64vh] overflow-hidden rounded-lg border border-white/12 bg-carbon/90 p-8 shadow-glass md:p-12"
      style={motionEnabled ? { scale, opacity, y, zIndex: index + 1 } : { zIndex: index + 1 }}
    >
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-8 top-8 text-[11rem] font-semibold leading-none text-white/[0.025] md:text-[16rem]">
        0{index + 1}
      </div>
      <div className="relative grid h-full gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">{card.kicker}</p>
          <h3 className="mt-4 text-5xl font-semibold text-bone md:text-7xl">{card.title}</h3>
        </div>
        <div>
          <div className="mb-7 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
          <p className="max-w-xl text-xl leading-relaxed text-silver">{card.body}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function StackingSection({ cards }: { cards: StackCard[] }) {
  return (
    <section className="container-page py-24">
      <div className="sticky top-24 z-0 mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Builder profile</p>
        <h2 className="mt-4 text-4xl font-semibold text-bone md:text-6xl">A technical exhibit, built from shipped systems.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Each stop holds long enough to read, then gives way to the next layer of work.
        </p>
      </div>
      {cards.map((card, index) => (
        <StackedCard key={card.title} card={card} index={index} />
      ))}
    </section>
  );
}
