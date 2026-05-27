import { ArrowUpRight, Download, ExternalLink, FileText, GraduationCap, Layers, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionIntro } from "@/components/SectionIntro";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { leadership } from "@/data/leadership";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const resumeStats = [
  ["50,000+", "Monthly VRS users"],
  ["4,000+", "HallHop student reach"],
  ["7x", "API performance gain"],
  ["1490", "SAT composite"],
  ["400+", "Product listings rebuilt"],
  ["600+", "Research survey sample"]
];

const skillGroups = [
  {
    label: "Engineering",
    items: ["TypeScript", "React", "React Native", "Flask", "Supabase", "PostgreSQL", "Chrome Extensions"]
  },
  {
    label: "AI and Data",
    items: ["LLM workflows", "RAG", "Agent systems", "Python", "R", "SEM", "Multiple imputation"]
  },
  {
    label: "Robotics and Research",
    items: ["FTC SDK", "PROS", "LemLib", "PID control", "Qiskit", "IBM Quantum", "AprilTag vision"]
  }
];

function ResumeCard({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-6 shadow-glass">
      <div className="accent-rule -mx-6 -mt-6 mb-6 h-px" />
      <p className="section-kicker text-xs uppercase tracking-[0.24em]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-bone">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <>
      <SectionIntro
        eyebrow="Resume"
        title="A themed resume view with the PDF one click away."
        body="A web-native version of the resume: experience stays separate from projects, with download and full PDF preview controls available here."
      />

      <section className="container-page grid gap-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <section className="glass rounded-lg p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="section-kicker text-xs uppercase tracking-[0.28em]">Resume file</p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight text-bone md:text-5xl">{profile.name}</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{profile.intro}</p>
              </div>
              <div className="rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] px-4 py-3 text-sm text-bone">
                Updated PDF
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Mail, "Email", profile.email],
                [Phone, "Phone", profile.phone],
                [MapPin, "Location", profile.location],
                [FileText, "Focus", "AI, robotics, simulation, research"]
              ].map(([Icon, label, value]) => {
                const LucideIcon = Icon as typeof Mail;
                return (
                  <div key={label as string} className="rounded-md border border-white/10 bg-black/25 p-4">
                    <LucideIcon className="h-4 w-4 text-teal-100/80" />
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted">{label as string}</p>
                    <p className="mt-1 text-sm text-silver">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={profile.resume} download>
                Download PDF
              </MagneticButton>
              <MagneticButton href={profile.resume}>
                Open PDF
              </MagneticButton>
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            {resumeStats.map(([value, label]) => (
              <div key={label} className="surface-glow rounded-lg border border-white/12 bg-panel/80 p-5">
                <p className="text-3xl font-semibold text-bone">{value}</p>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="surface-glow overflow-hidden rounded-lg border border-white/12 bg-panel/80 shadow-glass">
          <div className="accent-rule h-px" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
            <div>
              <p className="section-kicker text-xs uppercase tracking-[0.24em]">PDF preview</p>
              <p className="mt-1 text-sm text-muted">Embedded from the same file used by the download button.</p>
            </div>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-bone transition hover:border-teal-100/35 hover:bg-white/[0.09]"
            >
              Fullscreen
              <ExternalLink className="h-4 w-4 text-teal-100/80" />
            </a>
          </div>
          <object data={profile.resume} type="application/pdf" className="h-[720px] w-full bg-black/40">
            <div className="p-8">
              <p className="text-sm leading-relaxed text-muted">PDF preview is unavailable in this browser.</p>
              <a href={profile.resume} download className="mt-4 inline-flex items-center gap-2 text-bone">
                Download the resume
                <Download className="h-4 w-4" />
              </a>
            </div>
          </object>
        </section>
      </section>

      <section className="container-page grid gap-6 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <ResumeCard eyebrow="Experience" title="Long-term roles and operating scope">
            <div className="space-y-4">
              {experiences.slice(0, 5).map((item) => (
                <a key={item.slug} href={`/experience/${item.slug}`} className="group block rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-teal-100/30 hover:bg-white/[0.055]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-bone">{item.company}</h3>
                      <p className="mt-1 text-sm text-silver">{item.role}</p>
                    </div>
                    {item.metric && <span className="rounded-full border border-amber-100/20 px-3 py-1 text-xs text-bone">{item.metric}</span>}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                </a>
              ))}
            </div>
          </ResumeCard>

          <ResumeCard eyebrow="Projects and research" title="Scoped builds kept separate from experience">
            <div className="grid gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <a key={project.slug} href={`/projects/${project.slug}`} className="surface-glow rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-teal-100/30">
                  <p className="text-xs uppercase tracking-[0.22em] text-teal-100/70">{project.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-semibold text-bone">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                </a>
              ))}
            </div>
          </ResumeCard>
        </div>

        <div className="space-y-6">
          <ResumeCard eyebrow="Skills" title="Technical surface area">
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-100/70">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeCard>

          <ResumeCard eyebrow="Education" title={`${education.school} · ${education.academy}`}>
            <div className="space-y-5">
              <div className="rounded-md border border-white/10 bg-black/20 p-4">
                <GraduationCap className="h-5 w-5 text-teal-100/80" />
                <p className="mt-3 text-sm text-silver">{education.period}</p>
                <p className="mt-1 text-sm text-muted">{education.gpa}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.slice(0, 7).map((course) => (
                    <span key={course} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Certifications</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-silver">
                  {education.certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ResumeCard>

          <ResumeCard eyebrow="Leadership" title="Service and community roles">
            <div className="space-y-3">
              {leadership.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-md border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-bone">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.impact}</p>
                </div>
              ))}
            </div>
          </ResumeCard>

          <section className="glass rounded-lg p-6">
            <Sparkles className="h-5 w-5 text-amber-100/80" />
            <h2 className="mt-4 text-2xl font-semibold text-bone">Need the formal file?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Use the PDF for applications, sharing, or printing. The web version is for browsing the same story in the site theme.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-bone transition hover:border-teal-100/35 hover:bg-white/[0.09]">
                Download
                <Download className="h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-bone transition hover:border-amber-100/35 hover:bg-white/[0.09]">
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
