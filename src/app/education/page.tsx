import { SectionIntro } from "@/components/SectionIntro";
import { education } from "@/data/education";
import { ArrowUpRight, Award, BookOpen, FileText, GraduationCap } from "lucide-react";

export default function EducationPage() {
  const credentialedCertifications = education.certifications.filter((certification) => certification.credentialUrl || certification.certificatePdf);
  const otherCertifications = education.certifications.filter((certification) => !certification.credentialUrl && !certification.certificatePdf);

  return (
    <>
      <SectionIntro
        eyebrow="Academia"
        title="Academic work, certifications, and research."
        body="A cleaner view of school, coursework, credentials, and research papers without mixing everything into one long column."
      />

      <section className="container-page grid gap-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="surface-glow rounded-lg border border-white/12 bg-panel/85 p-7 shadow-glass">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-white/[0.05] text-teal-100/80">
            <GraduationCap className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
          </span>
          <p className="mt-6 text-xs uppercase tracking-[0.26em] text-muted">School</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-bone">{education.school}</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            <p>{education.academy}</p>
            <p>{education.period}</p>
            <p>{education.gpa}</p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/[0.05] text-amber-100/80">
              <BookOpen className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-muted">Coursework</p>
              <h2 className="mt-1 text-2xl font-semibold text-bone">Engineering, CS, physics, and research</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {education.coursework.map((course) => (
              <div key={course} className="rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm text-muted">
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker text-sm uppercase tracking-[0.28em]">Credentials</p>
            <h2 className="mt-3 text-3xl font-semibold text-bone md:text-4xl">Certifications with validation links.</h2>
          </div>
          {otherCertifications.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {otherCertifications.map((certification) => (
                <span key={certification.title} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                  {certification.title} · {certification.issued}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {credentialedCertifications.map((certification) => (
            <article key={certification.title} className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-5">
              <div className="flex gap-4">
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/12 bg-white/[0.05] text-teal-100/80">
                  <Award className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-bone">{certification.title}</h3>
                  <p className="mt-1 text-sm text-silver">{certification.issuer}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Issued {certification.issued}
                    {certification.credentialId ? ` · Credential ID ${certification.credentialId}` : ""}
                    {certification.studentId ? ` · Student ID ${certification.studentId}` : ""}
                  </p>
                  {certification.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span key={skill} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certification.credentialUrl && (
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-3 py-2 text-xs text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
                      >
                        Validate credential
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
                        Certificate PDF
                        <FileText className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="mb-7">
          <p className="section-kicker text-sm uppercase tracking-[0.28em]">Research modules</p>
          <h2 className="mt-3 text-3xl font-semibold text-bone md:text-4xl">Papers and applied research notes.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {education.research.map((item) => (
            <article key={item.title} className="surface-glow flex min-h-full flex-col rounded-lg border border-white/12 bg-panel/85 p-6 shadow-glass">
              <p className="text-xs uppercase tracking-[0.26em] text-muted">{item.institution}</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-bone">{item.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-silver">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                {item.abstract.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-100/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 mt-6 flex flex-wrap gap-2">
                {item.keywords.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              {item.paper && (
                <div className="mt-auto border-t border-white/10 pt-5">
                  <a
                    href={item.paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
                  >
                    {item.paper.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
