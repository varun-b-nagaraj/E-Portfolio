"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

const routeOrder = ["/", "/about", "/experience", "/projects", "/education", "/leadership", "/resume", "/contact"];
const sweepVariants = {
  initial: (direction: number) => ({ x: direction > 0 ? "110vw" : "-42vw", opacity: 0 }),
  animate: (direction: number) => ({ x: direction > 0 ? "-42vw" : "110vw", opacity: [0, 1, 0] }),
  exit: { opacity: 0 }
};

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "7vw" : "-7vw",
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.985
  }),
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-8vw" : "8vw",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.985
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
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={`${pathname}-wash`}
        aria-hidden
        className="pointer-events-none fixed inset-y-0 z-[72] w-[32vw] min-w-[260px] bg-[linear-gradient(90deg,transparent,rgba(141,223,213,0.16),rgba(240,195,106,0.10),transparent)] blur-sm"
        custom={direction}
        variants={sweepVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.main
        key={pathname}
        custom={direction}
        className="relative z-10 origin-center"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.045,
                delayChildren: 0.08
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: direction > 0 ? 34 : -34 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
