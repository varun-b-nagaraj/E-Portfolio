"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useMotionEnabled } from "./ReducedMotionProvider";

function GallerySlide({
  project,
  index,
  total,
  scrollYProgress
}: {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const last = Math.max(total - 1, 1);
  const center = index / last;
  const focusWindow = Math.min(0.12, 0.46 / last);
  const focusInput =
    index === 0
      ? [0, focusWindow]
      : index === last
        ? [1 - focusWindow, 1]
        : [center - focusWindow, center, center + focusWindow];
  const scaleOutput = index === 0 ? [1.04, 0.93] : index === last ? [0.93, 1.04] : [0.93, 1.04, 0.93];
  const opacityOutput = index === 0 ? [1, 0.72] : index === last ? [0.72, 1] : [0.72, 1, 0.72];
  const scale = useTransform(scrollYProgress, focusInput, scaleOutput);
  const opacity = useTransform(scrollYProgress, focusInput, opacityOutput);

  return (
    <motion.div
      className="h-[clamp(540px,60vh,620px)] w-[82vw] max-w-[980px] shrink-0 origin-center"
      style={{ scale, opacity }}
    >
      <ProjectCard project={project} featured />
    </motion.div>
  );
}

export function HorizontalScrollGallery({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const points = useMemo(() => {
    const last = Math.max(projects.length - 1, 1);
    const input: number[] = [0];
    const output: number[] = [0];
    const slowWindow = Math.min(0.055, 0.22 / last);
    const drift = step * 0.08;

    const addPoint = (progress: number, position: number) => {
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const previous = input[input.length - 1];

      if (clampedProgress > previous) {
        input.push(clampedProgress);
        output.push(position);
      } else if (clampedProgress === previous) {
        output[output.length - 1] = position;
      }
    };

    for (let index = 0; index < projects.length; index += 1) {
      const center = index / last;
      const position = -index * step;

      if (index === 0) {
        addPoint(slowWindow, position - drift);
      } else if (index === last) {
        addPoint(center - slowWindow, position + drift);
        addPoint(1, position);
      } else {
        addPoint(center - slowWindow, position + drift);
        addPoint(center, position);
        addPoint(center + slowWindow, position - drift);
      }
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
        <motion.div className="flex items-center gap-6 pb-16 pl-[max(16px,calc((100vw-1180px)/2))] pt-[clamp(14rem,30vh,18rem)]" style={{ x }}>
          {projects.map((project, index) => (
            <GallerySlide key={project.slug} project={project} index={index} total={projects.length} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
