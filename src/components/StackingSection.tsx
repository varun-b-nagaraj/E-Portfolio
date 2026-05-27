"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type StackCard = {
  title: string;
  kicker: string;
  body: string;
};

type SectionData = {
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  tags: string[];
  stat: string;
  metrics?: string[];
};

const sectionDetails: Record<string, { bullets: string[]; tags: string[]; metrics?: string[] }> = {
  "AI Systems": {
    bullets: ["Tenant-safe CRM architecture", "Streaming agent planning", "Deterministic task execution"],
    tags: ["RLS", "Edge Functions", "Agent workflows"],
    metrics: ["Multi-tenant CRM", "Live agent planning", "Deterministic execution"]
  },
  Robotics: {
    bullets: ["Autonomous routines", "Sensor fusion and odometry", "AprilTag localization"],
    tags: ["FTC", "VEX", "90%+ autonomy"],
    metrics: ["Computer vision systems", "Real-time localization", "Autonomous navigation"]
  },
  Simulation: {
    bullets: ["CAD libraries", "SDK abstractions", "Transpilation and telemetry"],
    tags: ["50,000+ users", "VEX expansion", "Team tooling"],
    metrics: ["50,000+ monthly users", "Java-to-JavaScript transpilation", "Cross-platform testing"]
  },
  "Full-Stack Engineering": {
    bullets: ["School-facing products", "Mobile and web workflows", "Reliable backend systems"],
    tags: ["React", "Flask", "Supabase"],
    metrics: ["Real-time database sync", "JWT authentication", "Responsive design"]
  },
  "Community Impact": {
    bullets: ["Student-run operations", "Inclusive fulfillment", "Technical mentorship"],
    tags: ["250+ members", "15,000+ views", "Co-Op"],
    metrics: ["250+ active members", "15,000+ monthly views", "Inclusive fulfillment"]
  },
  Research: {
    bullets: ["IBM Quantum experiments", "SEM analysis pipelines", "Reproducible notes"],
    tags: ["8,192 shots", "600+ sample", "Qiskit + R"],
    metrics: ["8,192-shot configurations", "600+ sample size", "Zero-noise extrapolation"]
  }
};

function MobileTile({ section, index }: { section: SectionData; index: number }) {
  return (
    <article className="surface-glow overflow-hidden rounded-[1.75rem] border border-white/10 bg-carbon/95 p-6 shadow-glass">
      <div className="relative">
        <div className="absolute right-6 top-6 text-7xl font-semibold leading-none text-white/[0.04]">{section.stat}</div>
        <p className="text-xs uppercase tracking-[0.28em] text-teal-100/70">{section.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{section.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{section.description}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((bullet) => (
            <div key={bullet} className="rounded-3xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
              {bullet}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
          {section.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function StackingSection({ cards }: { cards: StackCard[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections: SectionData[] = cards.map((card, index) => {
    const details = sectionDetails[card.title] ?? { bullets: [card.body], tags: [card.kicker] };
    return {
      title: card.title,
      eyebrow: card.kicker,
      description: card.body,
      bullets: details.bullets,
      tags: details.tags,
      metrics: details.metrics,
      stat: `0${index + 1}`
    };
  });

  const indicatorHeight = 80; // h-14 (56px) + space-y-6 (24px)
  const last = Math.max(sections.length - 1, 1);
  
  // Map scroll progress to indicator position
  const indicatorY = useTransform(
    scrollYProgress,
    sections.map((_, index) => index / last),
    sections.map((_, index) => index * indicatorHeight)
  );

  // Update active index based on scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      const index = Math.round(progress * last);
      setActiveIndex(Math.min(index, last));
    });
  }, [scrollYProgress, last]);

  return (
    <section ref={containerRef} className="container-page py-20 md:py-0" style={{ minHeight: `${sections.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="grid h-full gap-10 lg:grid-cols-[0.3fr_0.7fr] w-full items-center">
          <div className="hidden md:flex md:items-center">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/15" />
              <motion.div
                className="absolute left-[-3px] h-14 w-1 rounded-full bg-white"
                style={{ y: indicatorY }}
              />
              <div className="relative space-y-6 pl-6">
                {sections.map((section, index) => (
                  <div
                    key={section.title}
                    data-index={index}
                    className="h-14 flex items-center"
                  >
                    <p
                      className={`text-base transition ${
                        activeIndex === index
                          ? "text-white font-semibold opacity-100"
                          : "text-slate-500 opacity-70"
                      }`}
                    >
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden md:block overflow-hidden">
            <div className="relative mx-auto h-[560px] max-w-4xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/80 p-9 shadow-[0_40px_120px_rgba(0,0,0,0.32)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_28%)]" />
                    <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-teal-200/80">{sections[activeIndex].eyebrow}</p>
                        <h3 className="mt-4 text-5xl font-semibold leading-tight text-white">{sections[activeIndex].title}</h3>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">
                          {sections[activeIndex].description}
                        </p>
                      </div>
                      <div>
                        <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">Core focus areas</p>
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {sections[activeIndex].bullets.map((bullet) => (
                            <div key={bullet} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                              {bullet}
                            </div>
                          ))}
                        </div>
                      </div>
                      {sections[activeIndex].metrics && sections[activeIndex].metrics!.length > 0 && (
                        <div>
                          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">Key dimensions</p>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {sections[activeIndex].metrics!.map((metric) => (
                              <div key={metric} className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-3 text-sm text-slate-200">
                                {metric}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                        {sections[activeIndex].tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="space-y-4">
          <p className="section-kicker text-sm uppercase tracking-[0.28em] text-teal-100/70">Builder profile</p>
          <h2 className="text-4xl font-semibold text-white">A technical exhibit, built from shipped systems.</h2>
        </div>
        <div className="mt-8 space-y-3 border-l border-white/10 pl-4">
          {sections.map((section) => (
            <p key={section.title} className="text-sm font-semibold text-white/90">
              {section.title}
            </p>
          ))}
        </div>
        <div className="mt-10 space-y-6">
          {sections.map((section, index) => (
            <MobileTile key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
