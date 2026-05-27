"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function HorizontalScrollGallery({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const points = useMemo(() => {
    const last = Math.max(projects.length - 1, 1);
    const input: number[] = [];
    const output: number[] = [];

    for (let index = 0; index < projects.length; index += 1) {
      const center = index / last;
      const hold = 0.045;
      input.push(Math.max(0, center - hold), Math.min(1, center + hold));
      output.push(-index * step, -index * step);
    }

    return { input, output };
  }, [projects.length, step]);
  const x = useTransform(scrollYProgress, points.input, points.output);
  const lineX = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const updateStep = () => setStep(Math.min(window.innerWidth * 0.82, 980) + 24);
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  if (!motionEnabled) {
    return (
      <section className="container-page grid gap-5 py-20 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[760vh]">
      <div className="sticky top-0 h-screen overflow-hidden border-y border-white/10 bg-black">
        <motion.div className="pointer-events-none absolute inset-0 grid-bg opacity-30" style={{ x: lineX }} />
        <div className="container-page absolute left-1/2 top-20 z-10 -translate-x-1/2">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Featured systems</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-bone md:text-6xl">
            Follow the build path: problem, system, tradeoff, next pass.
          </h2>
          <div className="mt-5 h-px max-w-xs overflow-hidden bg-white/[0.06]">
            <motion.div className="h-full origin-left bg-white/35" style={{ width: progressWidth }} />
          </div>
        </div>
        <motion.div className="flex gap-6 pb-16 pl-[max(16px,calc((100vw-1180px)/2))] pt-[clamp(14rem,30vh,18rem)]" style={{ x }}>
          {projects.map((project) => (
            <div key={project.slug} className="w-[82vw] max-w-[980px] shrink-0">
              <ProjectCard project={project} featured />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
