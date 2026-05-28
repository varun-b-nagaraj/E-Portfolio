"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

const routeOrder = ["/", "/about", "/experience", "/projects", "/education", "/leadership", "/resume", "/contact"];
const transitionEase = [0.22, 1, 0.36, 1] as const;
const curtainDuration = 0.78;
const revealDelay = 180;

type CurtainPhase = "idle" | "covering" | "covered" | "revealing";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/experience": "Experience",
  "/projects": "Projects",
  "/education": "Academia",
  "/leadership": "Community Impact",
  "/resume": "Resume",
  "/contact": "Contact"
};

function getRouteLabel(pathname: string) {
  const exactLabel = routeLabels[pathname];
  if (exactLabel) return exactLabel;

  const parentPath = routeOrder.find((route) => route !== "/" && pathname.startsWith(`${route}/`));
  return parentPath ? routeLabels[parentPath] : "Next page";
}

function getTransitionMeta(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const label = getRouteLabel(pathname);

  if (segments[0] === "projects" && segments[1]) {
    const project = projects.find((item) => item.slug === segments[1]);
    return {
      label,
      subheading: project ? project.title : "Project detail"
    };
  }

  if (segments[0] === "experience" && segments[1]) {
    const experience = experiences.find((item) => item.slug === segments[1]);
    return {
      label,
      subheading: experience ? `${experience.company} · ${experience.role}` : "Experience detail"
    };
  }

  return {
    label,
    subheading: null as string | null
  };
}

function getInternalHref(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;

  return `${url.pathname}${url.search}${url.hash}`;
}

function scrollToRouteStart() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function Curtain({ phase, label, subheading }: { phase: CurtainPhase; label: string; subheading: string | null }) {
  const x =
    phase === "covering"
      ? "0%"
      : phase === "revealing"
        ? "100%"
        : phase === "covered"
          ? "0%"
          : "-100%";

  if (phase === "idle") return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[72] overflow-hidden bg-[#050808]"
      initial={{ x: phase === "revealing" ? "0%" : "-100%", opacity: 1 }}
      animate={{ x, opacity: 1 }}
      transition={{ duration: phase === "covered" ? 0 : curtainDuration, ease: transitionEase }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#050808,#081010_48%,#050808)]" />
      <motion.div
        className="absolute inset-y-0 right-0 w-px bg-teal-100/38 shadow-[0_0_18px_rgba(141,223,213,0.14)]"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: phase === "covered" ? 0.45 : 0.8 }}
        transition={{ duration: phase === "covered" ? 0 : curtainDuration, ease: transitionEase }}
      />
      <div className="absolute inset-0 grid place-items-center px-6">
        <motion.div
          className="w-[min(520px,100%)] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "revealing" ? 0 : 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-teal-100/65">Transitioning to</p>
          <p className="mt-3 font-display text-3xl font-semibold text-bone md:text-5xl">{label}</p>
          <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-teal-100/45 to-transparent shadow-[0_0_18px_rgba(141,223,213,0.16)]" />
          {subheading && <p className="mt-3 font-display text-sm text-silver md:text-base">{subheading}</p>}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const motionEnabled = useMotionEnabled();
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [label, setLabel] = useState("Next page");
  const [subheading, setSubheading] = useState<string | null>(null);
  const pendingHref = useRef<string | null>(null);
  const pendingPathname = useRef<string | null>(null);
  const coverTimer = useRef<number | null>(null);
  const revealTimer = useRef<number | null>(null);
  const revealEndTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (coverTimer.current) {
      window.clearTimeout(coverTimer.current);
      coverTimer.current = null;
    }
    if (revealTimer.current) {
      window.clearTimeout(revealTimer.current);
      revealTimer.current = null;
    }
    if (revealEndTimer.current) {
      window.clearTimeout(revealEndTimer.current);
      revealEndTimer.current = null;
    }
  };

  const startReveal = () => {
    clearTimers();
    revealTimer.current = window.setTimeout(() => {
      setPhase("revealing");
      revealEndTimer.current = window.setTimeout(() => {
        setPhase("idle");
      }, curtainDuration * 1000);
    }, revealDelay);
  };

  useEffect(() => {
    if (!motionEnabled) return;

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      if (phase !== "idle") {
        event.preventDefault();
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = getInternalHref(anchor as HTMLAnchorElement);
      if (!href) return;

      event.preventDefault();
      const nextPathname = new URL(href, window.location.origin).pathname;
      const transitionMeta = getTransitionMeta(nextPathname);

      pendingHref.current = href;
      pendingPathname.current = nextPathname;
      setLabel(transitionMeta.label);
      setSubheading(transitionMeta.subheading);
      setPhase("covering");
      clearTimers();

      coverTimer.current = window.setTimeout(() => {
        setPhase("covered");
        scrollToRouteStart();
        router.push(href, { scroll: true });
      }, curtainDuration * 1000);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [motionEnabled, pathname, phase, router]);

  useEffect(() => {
    if (!motionEnabled) return;

    const handleHistoryNavigation = () => {
      if (phase !== "idle") {
        pendingHref.current = null;
        pendingPathname.current = null;
        clearTimers();
        setPhase("idle");
      }
    };

    window.addEventListener("popstate", handleHistoryNavigation);
    return () => window.removeEventListener("popstate", handleHistoryNavigation);
  }, [motionEnabled, phase]);

  useEffect(() => {
    if (phase === "covered") {
      scrollToRouteStart();
      pendingHref.current = null;
      pendingPathname.current = null;
      startReveal();
    }
  }, [pathname, phase]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  if (!motionEnabled) return <>{children}</>;

  return (
    <>
      <main className="relative z-10">{children}</main>
      <Curtain phase={phase} label={label} subheading={subheading} />
    </>
  );
}
