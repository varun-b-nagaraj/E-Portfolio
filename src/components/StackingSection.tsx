"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export type StackCard = {
  title: string;
  kicker: string;
  body: string;
};

const cardDetails: Record<string, { points: string[]; metrics: string[] }> = {
  "AI Systems": {
    points: ["Tenant-safe CRM architecture", "Streaming agent planning", "Deterministic task execution"],
    metrics: ["RLS", "Edge Functions", "Agent workflows"]
  },
  Robotics: {
    points: ["Autonomous routines", "Sensor fusion and odometry", "AprilTag localization"],
    metrics: ["FTC", "VEX", "90%+ autonomy"]
  },
  Simulation: {
    points: ["CAD libraries", "SDK abstractions", "Transpilation and telemetry"],
    metrics: ["50,000+ users", "VEX expansion", "Team tooling"]
  },
  "Full-Stack Engineering": {
    points: ["School-facing products", "Mobile and web workflows", "Reliable backend systems"],
    metrics: ["React", "Flask", "Supabase"]
  },
  Leadership: {
    points: ["Student-run operations", "Inclusive fulfillment", "Technical mentorship"],
    metrics: ["250+ members", "15,000+ views", "Co-Op"]
  },
  Research: {
    points: ["IBM Quantum experiments", "SEM analysis pipelines", "Reproducible notes"],
    metrics: ["8,192 shots", "600+ sample", "Qiskit + R"]
  }
};

function StackedCard({ card, index }: { card: StackCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 74%", "start 16%"] });
  const topOffset = 96 + index * 78;
  const height = useTransform(scrollYProgress, [0, 0.68, 1], [560, 560, 128]);
  const largeOpacity = useTransform(scrollYProgress, [0, 0.7, 0.94], [1, 1, 0]);
  const compactOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [0, 0, 1]);
  const largeY = useTransform(scrollYProgress, [0, 1], [24, -10]);
  const details = cardDetails[card.title] ?? { points: [card.body], metrics: [card.kicker] };

  return (
    <motion.article
      ref={ref}
      className="surface-glow sticky mb-[46vh] overflow-hidden rounded-lg border border-white/12 bg-carbon/90 shadow-glass"
      initial={motionEnabled ? { opacity: 0.72, y: 28 } : false}
      whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: false, margin: "-18% 0px -35% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={motionEnabled ? { top: topOffset, zIndex: index + 1, height } : { top: topOffset, zIndex: index + 1, minHeight: 560 }}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-8 top-8 text-[10rem] font-semibold leading-none text-white/[0.026] md:text-[15rem]">
        0{index + 1}
      </div>

      <motion.div
        className="absolute inset-0 grid gap-10 p-8 md:grid-cols-[0.72fr_1.28fr] md:items-end md:p-12"
        style={motionEnabled ? { opacity: largeOpacity, y: largeY } : undefined}
      >
        <div className="min-w-0 self-start md:self-end">
          <p className="section-kicker text-xs uppercase tracking-[0.28em] md:text-sm">{card.kicker}</p>
          <h3 className="mt-4 text-5xl font-semibold leading-tight text-bone md:text-7xl">{card.title}</h3>
        </div>
        <div className="min-w-0">
          <div className="accent-rule mb-7 h-px w-full" />
          <p className="max-w-2xl text-xl leading-relaxed text-silver">{card.body}</p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {details.points.map((point) => (
              <div key={point} className="rounded-md border border-white/10 bg-black/25 p-4 text-sm leading-relaxed text-muted">
                {point}
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {details.metrics.map((metric) => (
              <span key={metric} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 grid gap-5 p-5 md:grid-cols-[0.36fr_0.64fr] md:items-center md:p-6"
        style={motionEnabled ? { opacity: compactOpacity } : { opacity: 0 }}
      >
        <div className="min-w-0">
          <p className="section-kicker text-xs uppercase tracking-[0.28em]">{card.kicker}</p>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-bone md:text-4xl">{card.title}</h3>
        </div>
        <div className="min-w-0">
          <div className="accent-rule mb-4 h-px w-full" />
          <p className="line-clamp-2 max-w-2xl text-base leading-relaxed text-silver md:text-lg">{card.body}</p>
        </div>
      </motion.div>
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
      <div className="pb-[68vh]">
        {cards.map((card, index) => (
          <StackedCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
