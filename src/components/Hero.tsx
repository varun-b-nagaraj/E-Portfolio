"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { AnimatedCounter } from "./AnimatedCounter";
import { BackgroundGrid } from "./BackgroundGrid";
import { MagneticButton } from "./MagneticButton";
import { useMotionEnabled } from "./ReducedMotionProvider";

const nameLines = ["Varun", "Bhadurgatte", "Nagaraj"];
const heroNameDelay = 260;
const heroNameCharacterStep = 78;
const heroBodyDelayAfterName = 250;
const heroNameCharacterCount = nameLines.join("").length;
const heroNameTypingEnd = heroNameDelay + heroNameCharacterCount * heroNameCharacterStep;

function TypedHeroName() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const totalCharacters = nameLines.join("").length;

  useEffect(() => {
    const timers: number[] = [];

    for (let index = 1; index <= totalCharacters; index += 1) {
      timers.push(window.setTimeout(() => setVisibleCharacters(index), heroNameDelay + index * heroNameCharacterStep));
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [totalCharacters]);

  let consumed = 0;

  return (
    <h1
      data-no-type
      className="accent-text max-w-full pb-2 text-[clamp(3.05rem,15vw,4.7rem)] font-semibold leading-[1.04] md:text-8xl lg:text-[clamp(4.9rem,5.35vw,6.15rem)] xl:text-[clamp(5.4rem,5.55vw,6.5rem)]"
    >
      {nameLines.map((line) => {
        const lineVisibleCharacters = Math.max(0, Math.min(line.length, visibleCharacters - consumed));
        const text = line.slice(0, lineVisibleCharacters);
        const showCaret = visibleCharacters < totalCharacters && visibleCharacters >= consumed && visibleCharacters <= consumed + line.length;
        consumed += line.length;

        return (
          <span key={line} className="block min-h-[1.04em]">
            {text}
            {showCaret && <span className="typing-name-caret" aria-hidden />}
          </span>
        );
      })}
    </h1>
  );
}

function TypedRoleCarousel() {
  const motionEnabled = useMotionEnabled();
  const [typedRole, setTypedRole] = useState("");
  const [hasTypedInitialRole, setHasTypedInitialRole] = useState(false);
  const role = profile.roles[0] ?? "";

  useEffect(() => {
    let cancelled = false;
    setTypedRole("");

    const typeTimers = Array.from(role).map((_, index) =>
      window.setTimeout(() => {
        if (!cancelled) setTypedRole(role.slice(0, index + 1));
      }, heroNameTypingEnd + heroBodyDelayAfterName + index * 28)
    );

    const doneTimer = window.setTimeout(() => {
      if (!cancelled) setHasTypedInitialRole(true);
    }, heroNameTypingEnd + heroBodyDelayAfterName + role.length * 28 + 900);

    return () => {
      cancelled = true;
      typeTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(doneTimer);
    };
  }, [role]);

  if (hasTypedInitialRole) {
    return (
      <div data-no-type className="mt-5 h-8 overflow-hidden text-xl text-silver md:mt-6 md:h-10 md:text-2xl">
        <motion.div
          animate={motionEnabled ? { y: ["0%", "-25%", "-50%", "-75%", "0%"] } : undefined}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          {profile.roles.map((item) => (
            <p key={item} className="h-8 md:h-10">
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div data-no-type className="mt-5 h-8 overflow-hidden text-xl text-silver md:mt-6 md:h-10 md:text-2xl">
      <p className="h-8 md:h-10">{typedRole}</p>
    </div>
  );
}

export function Hero() {
  const motionEnabled = useMotionEnabled();
  const x = useSpring(useMotionValue(0), { stiffness: 70, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 70, damping: 22 });
  const scrollToNextSection = () => {
    document.getElementById("builder-profile")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-20"
      onMouseMove={(event) => {
        if (!motionEnabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.width / 2) * 0.025);
        y.set((event.clientY - rect.height / 2) * 0.025);
      }}
    >
      <BackgroundGrid />
      <div className="container-page relative z-10 grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)]">
        <div className="min-w-0">
          <motion.p
            className="section-kicker text-xs uppercase tracking-[0.24em] md:text-sm md:tracking-[0.32em]"
            initial={motionEnabled ? { opacity: 0, y: 22 } : false}
            animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
          >
            AI / robotics / simulation / research
          </motion.p>
          <div className="mt-7 overflow-visible pb-2">
            <motion.div
              data-no-type
              className="block"
              initial={motionEnabled ? { y: 110 } : false}
              animate={motionEnabled ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <TypedHeroName />
            </motion.div>
          </div>
          <TypedRoleCarousel />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:mt-7 md:text-xl">{profile.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
            <MagneticButton href="/projects">View systems</MagneticButton>
            <MagneticButton href="/resume">
              View resume
            </MagneticButton>
          </div>
        </div>
        <motion.div className="relative mx-auto mb-10 w-full max-w-[360px] md:max-w-[460px] lg:mb-0" style={motionEnabled ? { x, y } : undefined}>
          <div className="absolute -inset-6 rounded-[2rem] border border-teal-100/15 bg-[linear-gradient(135deg,rgba(141,223,213,0.08),rgba(240,195,106,0.04),rgba(134,168,255,0.07))] blur-xl" />
          <div className="surface-glow relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] shadow-glass">
            <div className="accent-rule absolute inset-x-0 top-0 z-10 h-px" />
            <Image
              src="/assets/less-light.png"
              alt="Portrait of Varun Bhadurgatte Nagaraj"
              width={1024}
              height={1280}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 left-1/2 grid w-[94%] -translate-x-1/2 grid-cols-3 overflow-hidden rounded-lg md:-bottom-7 md:w-[92%]">
            {profile.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="border-r border-white/10 p-3 last:border-r-0 md:p-4">
                <p className="text-lg font-semibold text-bone md:text-2xl">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-1 text-[11px] leading-tight text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <button
        data-no-type
        type="button"
        onClick={scrollToNextSection}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-teal-100/35 bg-black/25 p-3 text-muted shadow-[0_0_24px_rgba(141,223,213,0.12)] transition hover:-translate-y-0.5 hover:border-teal-100/55 hover:text-bone focus:outline-none focus:ring-2 focus:ring-teal-100/45 md:block"
        aria-label="Scroll to builder profile"
      >
        <ArrowDown className="h-5 w-5 animate-pulse" />
      </button>
    </section>
  );
}
