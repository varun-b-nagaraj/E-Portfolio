import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxLayer } from "@/components/ParallaxLayer";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <>
      <SectionIntro eyebrow="About" title="A technical builder shaped by real systems, not demos." body={profile.bio} />
      <section className="container-page relative grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <ParallaxLayer className="absolute right-0 top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" speed={50} />
        <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04]">
          <Image src="/assets/hero-portrait.png" alt="Abstract grayscale portrait visual" width={1024} height={1280} className="aspect-[4/5] w-full object-cover grayscale" />
        </div>
        <div className="space-y-8">
          <div className="glass rounded-lg p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Philosophy</p>
            <p className="mt-4 text-3xl font-semibold leading-tight text-bone">{profile.philosophy}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div key={area} className="rounded-lg border border-white/12 bg-panel/80 p-5 text-silver transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page grid gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {profile.metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-4xl font-semibold text-bone">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{metric.label}</p>
          </div>
        ))}
      </section>
      <section className="container-page pb-28">
        <MagneticButton href="/contact">Contact Varun</MagneticButton>
      </section>
    </>
  );
}
