import { Download, ExternalLink, FileText, Mail, MapPin, Phone } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { leadership } from "@/data/leadership";
import { profile } from "@/data/profile";

const skillGroups = [
  ["Languages", ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "HTML/CSS", "R", "SQL"]],
  ["Web Development", ["React", "React Native", "Flask", "Supabase", "PostgreSQL", "Redis", "Vercel", "Qiskit"]],
  ["AI Development", ["ML/NLP", "LLM integration", "MCP agents", "Vector databases", "RAG", "Ollama", "Inference optimization"]],
  ["Robotics", ["PROS", "LemLib", "AprilTag vision", "Arduino", "Autodesk Inventor", "PID control", "VEXcode"]]
];

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-white/10 bg-black/20 p-5">
      <h2 className="section-kicker text-sm uppercase tracking-[0.22em]">{title}</h2>
      <div className="accent-rule mt-3 h-px w-full" />
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ResumeRole({ item }: { item: (typeof experiences)[number] }) {
  return (
    <article className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-bone">{item.company}</h3>
        <p className="text-sm text-muted">{item.period}</p>
      </div>
      <p className="mt-1 text-sm italic text-silver">{item.role}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumePage() {
  const primaryExperience = experiences.filter((item) =>
    ["round-rock-co-op", "hallhop", "virtual-robot-simulator", "transforze"].includes(item.slug)
  );
  const additionalExperience = experiences.filter((item) => ["lpl-financial", "best-brains", "lone-star-ridgebacks"].includes(item.slug));

  return (
    <>
      <SectionIntro
        eyebrow="Resume"
        title="Resume"
        body="A text version of the formal resume, styled to match the portfolio. Use the actions below for the original PDF."
      />

      <section className="container-page py-10 md:py-16">
        <div className="surface-glow overflow-hidden rounded-lg border border-white/12 bg-panel/80 shadow-glass">
          <div className="accent-rule h-px" />
          <div className="flex flex-col gap-5 border-b border-white/10 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-teal-100/20 bg-white/[0.05] text-teal-100/85">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="section-kicker text-xs uppercase tracking-[0.24em]">Formal resume</p>
                <h2 className="mt-2 text-2xl font-semibold text-bone">{profile.name}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  Cedar Park, Texas · AI systems, robotics simulation, full-stack engineering, and applied research.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-teal-100/25 bg-white/[0.06] px-4 py-2 text-sm text-bone transition hover:border-teal-100/45 hover:bg-white/[0.1]"
              >
                Download PDF
                <Download className="h-4 w-4 text-teal-100/85" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-bone transition hover:border-amber-100/35 hover:bg-white/[0.09]"
              >
                Open PDF
                <ExternalLink className="h-4 w-4 text-amber-100/80" />
              </a>
            </div>
          </div>

          <div className="grid gap-6 p-5 md:p-8 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="space-y-5">
              <SectionBlock title="Contact">
                <div className="space-y-3 text-sm text-silver">
                  {[
                    [Mail, profile.email],
                    [Phone, profile.phone],
                    [MapPin, profile.location]
                  ].map(([Icon, value]) => {
                    const LucideIcon = Icon as typeof Mail;
                    return (
                      <div key={value as string} className="flex items-center gap-3">
                        <LucideIcon className="h-4 w-4 text-teal-100/80" />
                        <span>{value as string}</span>
                      </div>
                    );
                  })}
                </div>
              </SectionBlock>

              <SectionBlock title="Academia">
                <div className="text-sm leading-relaxed text-muted">
                  <h3 className="font-semibold text-bone">{education.school}</h3>
                  <p>{education.academy}</p>
                  <p>{education.period}</p>
                  <p className="mt-2">{education.gpa}</p>
                </div>
              </SectionBlock>

              <SectionBlock title="Technical Skills">
                <div className="space-y-4">
                  {skillGroups.map(([label, items]) => (
                    <div key={label as string}>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100/70">{label as string}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {(items as string[]).map((item) => (
                          <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Certifications">
                <ul className="space-y-2 text-sm leading-relaxed text-muted">
                  {education.certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </SectionBlock>
            </aside>

            <main className="space-y-5">
              <SectionBlock title="Work Experience">
                <div className="space-y-5">
                  {primaryExperience.map((item) => (
                    <ResumeRole key={item.slug} item={item} />
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Research">
                <div className="space-y-5">
                  {education.research.map((item) => (
                    <article key={item.title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="text-xl font-semibold text-bone">{item.title}</h3>
                      <p className="mt-1 text-sm italic text-silver">{item.institution}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[...item.methods.slice(0, 4), ...item.metrics].map((metric) => (
                          <span key={metric} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Additional Experience">
                <div className="space-y-5">
                  {additionalExperience.map((item) => (
                    <ResumeRole key={item.slug} item={item} />
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Leadership and Activities">
                <div className="space-y-4">
                  {leadership.map((item) => (
                    <article key={item.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold text-bone">{item.title}</h3>
                        <p className="text-sm text-muted">{item.period}</p>
                      </div>
                      <p className="mt-1 text-sm italic text-silver">{item.role}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.impact}</p>
                    </article>
                  ))}
                </div>
              </SectionBlock>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
