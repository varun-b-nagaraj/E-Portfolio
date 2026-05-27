"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return <motion.div className="fixed left-0 top-0 z-[100] h-px origin-left bg-bone" style={{ scaleX, width: "100%" }} />;
}
