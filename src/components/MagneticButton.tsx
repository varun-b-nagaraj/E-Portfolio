"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMotionEnabled } from "./ReducedMotionProvider";

type Props = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  className?: string;
};

export function MagneticButton({ href, children, download, className = "" }: Props) {
  const motionEnabled = useMotionEnabled();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });

  return (
    <motion.div
      style={motionEnabled ? { x, y } : undefined}
      onMouseMove={(event) => {
        if (!motionEnabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link
        href={href}
        download={download}
        className={`group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-bone shadow-silver transition hover:border-white/30 hover:bg-white/[0.1] ${className}`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
