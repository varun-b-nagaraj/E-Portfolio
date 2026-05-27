import { PinnedPanel } from "@/components/PinnedPanel";
import { SectionIntro } from "@/components/SectionIntro";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Education"
        title="Academic foundation, certifications, and research in one technical track."
        body="Research is treated as part of the academic system: experimental design, data methods, reproducibility, and measurement."
      />
      <section className="container-page grid gap-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <PinnedPanel eyebrow="School" title={education.school}>
          <div className="space-y-3 text-silver">
            <p>{education.period}</p>
            <p>{education.academy}</p>
            <p>{education.gpa}</p>
          </div>
        </PinnedPanel>
        <PinnedPanel eyebrow="Coursework" title="Engineering, CS, physics, and research">
          <div className="grid gap-2 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <div key={course} className="rounded-md border border-white/10 bg-black/25 p-3 text-sm text-muted">
                {course}
              </div>
            ))}
          </div>
        </PinnedPanel>
        <PinnedPanel eyebrow="Certifications" title="Industry credentials">
          <div className="space-y-3">
            {education.certifications.map((certification) => (
              <div key={certification} className="rounded-md border border-white/10 bg-black/25 p-4 text-sm text-silver">
                {certification}
              </div>
            ))}
          </div>
        </PinnedPanel>
      </section>
      <section className="container-page pb-28">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Research modules</p>
        <div className="mt-8 grid gap-6">
          {education.research.map((item) => (
            <PinnedPanel key={item.title} eyebrow={item.institution} title={item.title}>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <p className="text-lg leading-relaxed text-silver">{item.summary}</p>
                <div>
                  <div className="mb-4 h-28 rounded-md border border-white/10 bg-black/30 p-4">
                    <div className="h-full w-full rounded border border-white/10 bg-[linear-gradient(135deg,transparent_0_20%,rgba(255,255,255,.18)_20%_21%,transparent_21%_46%,rgba(255,255,255,.12)_46%_47%,transparent_47%)]" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...item.methods, ...item.metrics].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </PinnedPanel>
          ))}
        </div>
      </section>
    </>
  );
}
