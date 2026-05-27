"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedCounter } from "./AnimatedCounter";
import { BackgroundGrid } from "./BackgroundGrid";
import { MagneticButton } from "./MagneticButton";
import { useMotionEnabled } from "./ReducedMotionProvider";

export function Hero() {
  const motionEnabled = useMotionEnabled();
  const x = useSpring(useMotionValue(0), { stiffness: 70, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 70, damping: 22 });

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      onMouseMove={(event) => {
        if (!motionEnabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.width / 2) * 0.025);
        y.set((event.clientY - rect.height / 2) * 0.025);
      }}
    >
      <BackgroundGrid />
      <div className="container-page relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)]">
        <div className="min-w-0">
          <motion.p
            className="section-kicker text-sm uppercase tracking-[0.32em]"
            initial={motionEnabled ? { opacity: 0, y: 22 } : false}
            animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
          >
            AI / robotics / simulation / research
          </motion.p>
          <div className="mt-7 overflow-hidden">
            <motion.h1
              className="accent-text max-w-full text-6xl font-semibold leading-[0.95] md:text-8xl lg:text-[clamp(4.9rem,5.35vw,6.15rem)] xl:text-[clamp(5.4rem,5.55vw,6.5rem)]"
              initial={motionEnabled ? { y: 110 } : false}
              animate={motionEnabled ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Varun
              <br />
              Bhadurgatte
              <br />
              Nagaraj
            </motion.h1>
          </div>
          <div className="mt-6 h-10 overflow-hidden text-2xl text-silver">
            <motion.div
              animate={motionEnabled ? { y: ["0%", "-25%", "-50%", "-75%", "0%"] } : undefined}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {profile.roles.map((role) => (
                <p key={role} className="h-10">
                  {role}
                </p>
              ))}
            </motion.div>
          </div>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="/projects">View systems</MagneticButton>
            <MagneticButton href={profile.resume} download>
              Download resume
            </MagneticButton>
          </div>
        </div>
        <motion.div className="relative mx-auto w-full max-w-[460px]" style={motionEnabled ? { x, y } : undefined}>
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
          <div className="glass absolute -bottom-7 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-3 overflow-hidden rounded-lg">
            {profile.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="border-r border-white/10 p-4 last:border-r-0">
                <p className="text-xl font-semibold text-bone md:text-2xl">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-1 text-[11px] leading-tight text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted">
        <ArrowDown className="h-5 w-5 animate-pulse" />
      </div>
    </section>
  );
}
