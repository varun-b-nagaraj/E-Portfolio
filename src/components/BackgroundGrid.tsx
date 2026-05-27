"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function BackgroundGrid() {
  const motionEnabled = useMotionEnabled();
  const x = useSpring(useMotionValue(0), { stiffness: 40, damping: 24 });
  const y = useSpring(useMotionValue(0), { stiffness: 40, damping: 24 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      onMouseMove={(event) => {
        if (!motionEnabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.width / 2) * 0.015);
        y.set((event.clientY - rect.height / 2) * 0.015);
      }}
    >
      <motion.div className="grid-bg absolute -inset-32 opacity-70" style={motionEnabled ? { x, y } : undefined} />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </motion.div>
  );
}
