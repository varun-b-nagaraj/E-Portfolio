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
        <ParallaxLayer className="absolute right-0 top-12 h-72 w-72 rounded-full bg-teal-300/12 blur-3xl" speed={50} />
        <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04]">
          <Image
            src="/assets/about-systems-portrait.png"
            alt="Cinematic technical portrait visual with robotics and interface layers"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">Working pattern</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-silver">
              Build close to the user, keep the internals visible, and make the handoff clean enough for someone else to run it.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="glass rounded-lg p-8 ring-1 ring-teal-200/10">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Philosophy</p>
            <p className="mt-4 text-3xl font-semibold leading-tight text-bone">{profile.philosophy}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div key={area.label} className="rounded-lg border border-white/12 bg-panel/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-100/30 hover:bg-white/[0.07]">
                <p className="text-xs uppercase tracking-[0.22em] text-teal-100/70">{area.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-silver">{area.body}</p>
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
