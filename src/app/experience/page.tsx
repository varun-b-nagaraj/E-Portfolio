import { ScrollTimeline } from "@/components/ScrollTimeline";
import { SectionIntro } from "@/components/SectionIntro";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <SectionIntro
        eyebrow="Experience"
        title="Roles, responsibilities, and progression across impactful organizations."
        body="This page is intentionally not a project gallery. It tracks positions held, scope owned, teams supported, and how each role changed the way I operate."
      />
      <section className="container-page grid gap-4 pt-14 md:grid-cols-3">
        {[
          ["Technical ownership", "Simulation platforms, school infrastructure, AI workflows, client systems, and applied ML work."],
          ["Community scope", "Student teams, administrator coordination, mentoring, operations, documentation, and cross-functional execution."],
          ["Progression", "Early tutoring and robotics roles grew into founder, lead developer, team lead, and organization-level responsibilities."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-white/12 bg-panel/75 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">{title}</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">{body}</p>
          </div>
        ))}
      </section>
      <ScrollTimeline items={experiences} />
    </>
  );
}
