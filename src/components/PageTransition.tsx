"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

const routeOrder = ["/", "/about", "/experience", "/projects", "/education", "/leadership", "/resume", "/contact"];
const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 42 : -42,
    opacity: 0,
    scale: 0.992
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
    scale: 0.992
  })
};

function getRouteIndex(pathname: string) {
  const exactIndex = routeOrder.indexOf(pathname);
  if (exactIndex >= 0) return exactIndex;

  const parentIndex = routeOrder.findIndex((route) => route !== "/" && pathname.startsWith(`${route}/`));
  return parentIndex >= 0 ? parentIndex : routeOrder.length;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const motionEnabled = useMotionEnabled();
  const previousIndex = useRef(getRouteIndex(pathname));
  const currentIndex = getRouteIndex(pathname);
  const direction = currentIndex >= previousIndex.current ? 1 : -1;

  useEffect(() => {
    previousIndex.current = currentIndex;
  }, [currentIndex]);

  if (!motionEnabled) return <>{children}</>;

  return (
    <AnimatePresence initial={false} custom={direction} mode="popLayout">
      <motion.div
        key={`${pathname}-veil`}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[72] bg-[linear-gradient(90deg,rgba(0,0,0,0.12),transparent_28%,transparent_72%,rgba(0,0,0,0.12))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      />
      <motion.main
        key={pathname}
        custom={direction}
        className="relative z-10 origin-center will-change-transform"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
