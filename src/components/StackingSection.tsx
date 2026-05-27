"use client";

import { AnimatePresence, motion } from "framer-motion";
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
};

const sectionDetails: Record<string, { bullets: string[]; tags: string[] }> = {
  "AI Systems": {
    bullets: ["Tenant-safe CRM architecture", "Streaming agent planning", "Deterministic task execution"],
    tags: ["RLS", "Edge Functions", "Agent workflows"]
  },
  Robotics: {
    bullets: ["Autonomous routines", "Sensor fusion and odometry", "AprilTag localization"],
    tags: ["FTC", "VEX", "90%+ autonomy"]
  },
  Simulation: {
    bullets: ["CAD libraries", "SDK abstractions", "Transpilation and telemetry"],
    tags: ["50,000+ users", "VEX expansion", "Team tooling"]
  },
  "Full-Stack Engineering": {
    bullets: ["School-facing products", "Mobile and web workflows", "Reliable backend systems"],
    tags: ["React", "Flask", "Supabase"]
  },
  Leadership: {
    bullets: ["Student-run operations", "Inclusive fulfillment", "Technical mentorship"],
    tags: ["250+ members", "15,000+ views", "Co-Op"]
  },
  Research: {
    bullets: ["IBM Quantum experiments", "SEM analysis pipelines", "Reproducible notes"],
    tags: ["8,192 shots", "600+ sample", "Qiskit + R"]
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
  const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections: SectionData[] = cards.map((card, index) => {
    const details = sectionDetails[card.title] ?? { bullets: [card.body], tags: [card.kicker] };
    return {
      title: card.title,
      eyebrow: card.kicker,
      description: card.body,
      bullets: details.bullets,
      tags: details.tags,
      stat: `0${index + 1}`
    };
  });

  const indicatorHeight = 64;

  useEffect(() => {
    const nodes = headingRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;
        const closest = visible.reduce((best, entry) => {
          return entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best;
        }, visible[0]!);
        const index = Number(closest.target.getAttribute("data-index")) || 0;
        setActiveIndex(index);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.5
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [cards.length]);

  return (
    <section className="container-page py-20 md:py-0">
      <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-white/15" />
            <motion.div
              className="absolute left-[-3px] h-14 w-1 rounded-full bg-white"
              animate={{ y: activeIndex * indicatorHeight }}
              transition={{ type: "spring", stiffness: 210, damping: 26 }}
            />
            <div className="relative space-y-6 pl-6">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  ref={(el) => {
                    headingRefs.current[index] = el;
                  }}
                  data-index={index}
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

        <div className="relative hidden md:block" style={{ minHeight: `${sections.length * 80}vh` }}>
          <div className="sticky top-24 h-screen">
            <div className="relative mx-auto h-[680px] max-w-4xl overflow-hidden">
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
                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {sections[activeIndex].bullets.map((bullet) => (
                          <div key={bullet} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                            {bullet}
                          </div>
                        ))}
                      </div>
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
    </section>
  );
}
