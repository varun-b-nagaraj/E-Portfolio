import { PinnedPanel } from "@/components/PinnedPanel";
import { SectionIntro } from "@/components/SectionIntro";
import { education } from "@/data/education";
import { ArrowUpRight, FileText } from "lucide-react";

export default function EducationPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Academia"
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
          <div className="space-y-4">
            {education.certifications.map((certification) => (
              <div key={certification.title} className="rounded-md border border-white/10 bg-black/25 p-4 text-sm text-silver">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-semibold text-bone">{certification.title}</h3>
                    <p className="mt-1 text-muted">
                      {certification.issuer} · Issued {certification.issued}
                    </p>
                    {certification.credentialId && (
                      <p className="mt-2 text-xs text-muted">
                        Credential ID {certification.credentialId}
                        {certification.studentId ? ` · Student ID ${certification.studentId}` : ""}
                      </p>
                    )}
                    {certification.skills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {certification.skills.map((skill) => (
                          <span key={skill} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {(certification.credentialUrl || certification.certificatePdf) && (
                    <div className="flex shrink-0 flex-wrap gap-2">
                      {certification.credentialUrl && (
                        <a
                          href={certification.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-3 py-2 text-xs text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-100/35 hover:bg-white/[0.09]"
                        >
                          Validate
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {certification.certificatePdf && (
                        <a
                          href={certification.certificatePdf}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-xs text-silver transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-100/30 hover:bg-white/[0.07] hover:text-bone"
                        >
                          PDF
                          <FileText className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
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
                <div className="min-w-0">
                  <p className="text-lg leading-relaxed text-silver">{item.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                    {item.abstract.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-100/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4 h-28 rounded-md border border-white/10 bg-black/30 p-4">
                    <div className="h-full w-full rounded border border-white/10 bg-[linear-gradient(135deg,transparent_0_20%,rgba(255,255,255,.18)_20%_21%,transparent_21%_46%,rgba(255,255,255,.12)_46%_47%,transparent_47%)]" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {item.paper && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    href={item.paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-100/35 hover:bg-white/[0.09] hover:shadow-[0_14px_44px_rgba(141,223,213,0.12)]"
                  >
                    {item.paper.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </PinnedPanel>
          ))}
        </div>
      </section>
    </>
  );
}
