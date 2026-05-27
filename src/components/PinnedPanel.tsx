"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function PinnedPanel({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -20]);

  return (
    <motion.section ref={ref} className="rounded-lg border border-white/12 bg-panel/85 p-7 shadow-glass backdrop-blur md:p-9" style={motionEnabled ? { y } : undefined}>
      <p className="text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold text-bone md:text-4xl">{title}</h3>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
