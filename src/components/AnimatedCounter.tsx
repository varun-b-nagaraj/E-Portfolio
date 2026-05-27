"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    if (!inView) return;
    if (!motionEnabled) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, motionEnabled, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
