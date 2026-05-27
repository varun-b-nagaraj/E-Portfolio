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
  const enter = index / last;
  const exit = index === last ? 1 : (index + 0.9) / last;
  const opacity = useTransform(progress, [Math.max(0, enter - 0.1), enter, exit, Math.min(1, exit + 0.05)], [0, 1, 1, 0]);
  const y = useTransform(progress, [Math.max(0, enter - 0.1), enter, exit], [24, 0, -14]);
  const scale = useTransform(progress, [enter, exit], [1, 0.98]);
  const details = cardDetails[card.title] ?? { points: [card.body], metrics: [card.kicker] };

  return (
    <motion.article
      className="surface-glow absolute inset-0 overflow-hidden rounded-[2rem] border border-white/12 bg-carbon/95 shadow-glass"
      style={motionEnabled ? { zIndex: index + 1, opacity, y, scale } : { zIndex: index + 1 }}
    >
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-8 top-8 text-[10rem] font-semibold leading-none text-white/[0.026] md:text-[13rem]">
        0{index + 1}
      </div>
      <div className="relative h-full p-8 md:p-10">
        <div className="flex h-full flex-col justify-between gap-8">
          <div>
            <p className="section-kicker text-xs uppercase tracking-[0.28em] text-teal-100/80">{card.kicker}</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-bone md:text-5xl xl:text-6xl">{card.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver xl:text-lg">{card.body}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {details.points.map((point) => (
              <div key={point} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-muted">
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {details.metrics.map((metric) => (
              <span key={metric} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function MobileStackCard({ card, index }: { card: StackCard; index: number }) {
  const details = cardDetails[card.title] ?? { points: [card.body], metrics: [card.kicker] };

  return (
    <article className="surface-glow relative overflow-hidden rounded-3xl border border-white/12 bg-carbon/95 p-6 shadow-glass">
      <div className="accent-rule absolute inset-x-0 top-0 h-px" />
      <div className="absolute inset-0 grid-bg opacity-14" />
      <div className="absolute right-4 top-4 text-5xl font-semibold leading-none text-white/[0.03]">0{index + 1}</div>
      <div className="relative">
        <p className="section-kicker text-xs uppercase tracking-[0.24em] text-teal-100/80">{card.kicker}</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-bone">{card.title}</h3>
        <div className="accent-rule my-5 h-px w-full" />
        <p className="text-base leading-relaxed text-silver">{card.body}</p>
        <div className="mt-5 grid gap-3">
          {details.points.map((point) => (
            <div key={point} className="rounded-3xl border border-white/10 bg-black/25 p-3 text-sm leading-relaxed text-muted">
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
  const last = Math.max(cards.length - 1, 1);
  const itemSpacing = 80;
  const highlightTop = useTransform(
    scrollYProgress,
    cards.map((_, index) => index / last),
    cards.map((_, index) => index * itemSpacing)
  );

  return (
    <section className="container-page py-20 md:py-0">
      <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr]">
        <div className="relative hidden md:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <p className="section-kicker text-sm uppercase tracking-[0.28em]">Builder profile</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-bone xl:text-5xl">
                A technical exhibit, built from shipped systems.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted xl:text-lg">
                Scroll to change which card appears on the right.
              </p>
            </div>
            <div className="relative rounded-[2rem] border border-white/10 bg-black/30 p-5">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-white/10" />
              <motion.div
                className="absolute left-3 h-16 w-1 rounded-full bg-teal-300"
                style={{ top: highlightTop }}
              />
              <div className="relative space-y-4 pl-8">
                {cards.map((card) => (
                  <div key={card.title} className="group h-16 rounded-3xl border border-white/10 bg-transparent px-3 py-4 transition duration-300 hover:bg-white/5 hover:text-white">
                    <h3 className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-teal-100">
                      {card.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-12">
            <p className="section-kicker text-sm uppercase tracking-[0.28em]">Builder profile</p>
            <h2 className="mt-4 text-4xl font-semibold text-bone">A technical exhibit, built from shipped systems.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Each layer locks into place as the next one arrives, forming a readable stack of the systems behind the work.
            </p>
          </div>
          <div className="space-y-5">
            {cards.map((card, index) => (
              <MobileStackCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>

        <div ref={ref} className="relative hidden md:block" style={{ height: `${cards.length * 96}vh` }}>
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-visible pt-20">
            <div className="relative w-full max-w-4xl px-2">
              {cards.map((card, index) => (
                <StackedCard key={card.title} card={card} index={index} total={cards.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
