"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function ParallaxLayer({ className = "", speed = 80 }: { className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const motionEnabled = useMotionEnabled();

  return <motion.div ref={ref} aria-hidden className={className} style={motionEnabled ? { y } : undefined} />;
}
