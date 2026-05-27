"use client";

import { createContext, useContext } from "react";
import { useReducedMotion } from "framer-motion";

const ReducedMotionContext = createContext(false);

export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  return <ReducedMotionContext.Provider value={Boolean(prefersReducedMotion)}>{children}</ReducedMotionContext.Provider>;
}

export function useMotionEnabled() {
  const reduced = useContext(ReducedMotionContext);
  return !reduced;
}
