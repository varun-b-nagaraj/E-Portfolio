"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const motionEnabled = useMotionEnabled();

  if (!motionEnabled) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
