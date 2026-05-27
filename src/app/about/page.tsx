import { AboutSystemsMap } from "@/components/AboutSystemsMap";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxLayer } from "@/components/ParallaxLayer";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/data/profile";
import { FlaskConical, Handshake, Route, Wrench } from "lucide-react";

const workingNoteIcons = {
  handoff: Handshake,
  route: Route,
  test: FlaskConical,
  tools: Wrench
};

export default function AboutPage() {
  return (
    <>
      <SectionIntro eyebrow="About" title="A technical builder shaped by real systems, not demos." body={profile.bio} />
      <section className="container-page relative grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <ParallaxLayer className="absolute right-0 top-12 h-72 w-72 rounded-full bg-teal-300/[0.045] blur-3xl" speed={50} />
        <AboutSystemsMap />
        <div className="space-y-8">
          <div className="glass rounded-lg p-8 ring-1 ring-teal-200/10">
            <p className="section-kicker text-sm uppercase tracking-[0.25em]">Philosophy</p>
            <p className="mt-4 text-3xl font-semibold leading-tight text-bone">{profile.philosophy}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div key={area.label} className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-5 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.055] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]">
                <p className="text-xs uppercase tracking-[0.22em] text-teal-100/70">{area.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-silver">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page grid gap-5 pb-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-kicker text-sm uppercase tracking-[0.28em]">How I work</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-bone">A few habits that make the projects less random.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.workingNotes.map((note) => {
            const Icon = workingNoteIcons[note.icon as keyof typeof workingNoteIcons];

            return (
              <div key={note.title} className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/[0.05] text-teal-100/80">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 text-xl font-semibold text-bone">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{note.body}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container-page grid gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {profile.aboutTraits.map((trait) => (
          <div key={trait.label} className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">{trait.label}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{trait.body}</p>
          </div>
        ))}
      </section>
      <section className="container-page pb-28">
        <MagneticButton href="/contact">Contact Varun</MagneticButton>
      </section>
    </>
  );
}
