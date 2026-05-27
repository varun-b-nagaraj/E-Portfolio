"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
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

function StackedCard({
  card,
  index,
  total,
  progress
}: {
  card: StackCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const motionEnabled = useMotionEnabled();
  const last = Math.max(total - 1, 1);
  const enter = Math.max(0, (index - 0.74) / last);
  const focus = index / last;
  const collapseStart = index === last ? 1 : Math.min(1, (index + 0.42) / last);
  const collapseEnd = index === last ? 1 : Math.min(1, (index + 0.78) / last);
  const rowTop = index * 44;
  const expandedHeight = index >= total - 1 ? 390 : 430;
  const compactHeight = 84;
  const opacity = useTransform(progress, [enter, focus], [0, 1]);
  const y = useTransform(progress, [enter, focus], [92, 0]);
  const height =
    index === last
      ? useTransform(progress, [enter, focus], [expandedHeight, expandedHeight])
      : useTransform(progress, [enter, collapseStart, collapseEnd], [expandedHeight, expandedHeight, compactHeight]);
  const largeOpacity =
    index === last ? useTransform(progress, [enter, focus], [1, 1]) : useTransform(progress, [collapseStart, collapseEnd], [1, 0]);
  const compactOpacity = index === last ? useTransform(progress, [0, 1], [0, 0]) : useTransform(progress, [collapseStart, collapseEnd], [0, 1]);
  const details = cardDetails[card.title] ?? { points: [card.body], metrics: [card.kicker] };

  return (
    <motion.article
      className="surface-glow absolute inset-x-0 overflow-hidden rounded-lg border border-white/12 bg-carbon/95 shadow-glass"
      style={
        motionEnabled
          ? { top: rowTop, zIndex: index + 1, height, opacity, y }
          : { top: rowTop, zIndex: index + 1, height: expandedHeight }
      }
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-8 top-8 text-[10rem] font-semibold leading-none text-white/[0.026] md:text-[15rem]">
        0{index + 1}
      </div>

      <motion.div
        className="absolute inset-0 grid gap-8 p-7 md:grid-cols-[0.72fr_1.28fr] md:items-end md:p-9"
        style={motionEnabled ? { opacity: largeOpacity } : undefined}
      >
        <div className="min-w-0 self-start md:self-end">
          <p className="section-kicker text-xs uppercase tracking-[0.28em]">{card.kicker}</p>
          <h3 className="mt-4 text-4xl font-semibold leading-tight text-bone md:text-5xl xl:text-6xl">{card.title}</h3>
        </div>
        <div className="min-w-0">
          <div className="accent-rule mb-5 h-px w-full" />
          <p className="max-w-2xl text-base leading-relaxed text-silver xl:text-lg">{card.body}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {details.points.map((point) => (
              <div key={point} className="rounded-md border border-white/10 bg-black/25 p-3 text-sm leading-relaxed text-muted">
                {point}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {details.metrics.map((metric) => (
              <span key={metric} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 grid gap-4 p-4 md:grid-cols-[0.34fr_0.66fr] md:items-center md:p-5"
        style={motionEnabled ? { opacity: compactOpacity } : { opacity: 0 }}
      >
        <div className="min-w-0">
          <p className="section-kicker text-[10px] uppercase tracking-[0.24em]">{card.kicker}</p>
          <h3 className="mt-1 text-2xl font-semibold leading-tight text-bone md:text-3xl">{card.title}</h3>
        </div>
        <div className="min-w-0">
          <div className="accent-rule mb-3 h-px w-full" />
          <p className="line-clamp-2 max-w-2xl text-sm leading-relaxed text-silver md:text-base">{card.body}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}

function MobileStackCard({ card, index }: { card: StackCard; index: number }) {
  const details = cardDetails[card.title] ?? { points: [card.body], metrics: [card.kicker] };

  return (
    <article className="surface-glow relative overflow-hidden rounded-lg border border-white/12 bg-carbon/95 p-5 shadow-glass">
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-4 top-4 text-6xl font-semibold leading-none text-white/[0.03]">0{index + 1}</div>
      <div className="relative">
        <p className="section-kicker text-xs uppercase tracking-[0.24em]">{card.kicker}</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-bone">{card.title}</h3>
        <div className="accent-rule my-5 h-px w-full" />
        <p className="text-base leading-relaxed text-silver">{card.body}</p>
        <div className="mt-5 grid gap-3">
          {details.points.map((point) => (
            <div key={point} className="rounded-md border border-white/10 bg-black/25 p-3 text-sm leading-relaxed text-muted">
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
    </article>
  );
}

export function StackingSection({ cards }: { cards: StackCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="container-page py-20 md:py-0">
      <div className="mb-12 max-w-3xl md:hidden">
        <p className="section-kicker text-sm uppercase tracking-[0.28em]">Builder profile</p>
        <h2 className="mt-4 text-4xl font-semibold text-bone md:text-6xl">A technical exhibit, built from shipped systems.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Each layer locks into place as the next one arrives, forming a readable stack of the systems behind the work.
        </p>
      </div>
      <div className="grid gap-5 md:hidden">
        {cards.map((card, index) => (
          <MobileStackCard key={card.title} card={card} index={index} />
        ))}
      </div>
      <div ref={ref} className="relative hidden md:block" style={{ height: `${cards.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col overflow-visible pt-20">
          <div className="shrink-0 pb-6">
            <p className="section-kicker text-sm uppercase tracking-[0.28em]">Builder profile</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-bone md:text-5xl xl:text-6xl">
              A technical exhibit, built from shipped systems.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted xl:text-lg">
              Each layer pins into a compact row at the top while the current system expands below it.
            </p>
          </div>
          <div className="relative min-h-0 flex-1">
            {cards.map((card, index) => (
              <StackedCard key={card.title} card={card} index={index} total={cards.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
