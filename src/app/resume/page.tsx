import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/15 pt-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-100/80">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-silver">{children}</div>
    </section>
  );
}

function Entry({
  title,
  subtitle,
  period,
  bullets
}: {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="space-y-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-bone">{title}</h3>
        <p className="text-xs text-muted">{period}</p>
      </div>
      <p className="text-sm italic text-muted">{subtitle}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-silver">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

const technicalSkills = [
  "Languages: Python, Java, C/C++, JavaScript, TypeScript, HTML/CSS, R, SQL",
  "Web Development: React, React Native, Flask, Supabase (Postgres), Redis, Vercel, Qiskit",
  "AI Development: ML/NLP, LLM Integration, MCP Agents, Vector Databases, RAG, Ollama, Inference Optimization",
  "Robotics: PROS, LemLib, AprilTag Vision, Arduino, Autodesk Inventor, Java, PID Control, VEXcode, AutoCAD, Auto-Pathing"
];

const certifications = [
  "Business Management and Administration (NOCTI) - Apr 2025",
  "Autodesk Certified: Inventor (Certiport) - Apr 2024",
  "MOS: Word, Excel, PowerPoint (Certiport, Office 2019) - May 2023"
];

export default function ResumePage() {
  return (
    <section className="container-page pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl border border-white/12 bg-black/20 px-6 py-8 md:px-10">
        <header className="border-b border-white/15 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="accent-text text-3xl font-semibold md:text-4xl">{profile.name}</h1>
              <p className="mt-2 text-sm text-silver">Cedar Park, TX · (512) 212-6269 · varunnagaraj2009@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 text-xs text-bone transition hover:bg-white/[0.06]"
            >
              Download PDF
              <Download className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 text-xs text-bone transition hover:bg-white/[0.06]"
            >
              Open PDF
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            </div>
          </div>
        </header>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            <ResumeSection title="Education">
              <p className="text-bone">Round Rock High School</p>
              <p>Cedar Park, TX · Graduation: May 2027</p>
              <p>STEM and Business Industry Academy</p>
              <p>4.0 GPA · SAT: 1490 (Math: 780, English: 710)</p>
              <p>
                Coursework: AP Calculus BC, AP CS A, AP Physics I, AP Research, Digital Electronics, AP Seminar
              </p>
            </ResumeSection>

            <ResumeSection title="Technical Skills">
              <ul className="space-y-1">
                {technicalSkills.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <ul className="space-y-1">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection title="Leadership and Activities">
              <Entry
                title="Boy Scouts of America"
                subtitle="Life Scout"
                period="2020 - Present"
                bullets={[
                  "Built and deployed a QR-accessed species-identification web app for trail signage (Eagle Scout project).",
                  "Engineered an embedded flood detection and alert prototype using Arduino and ultrasonic sensing.",
                  "Led and mentored scouts in advancement, first aid, and emergency preparedness."
                ]}
              />
              <Entry
                title="Austin Kannada Sangha (AKS)"
                subtitle="Tech Volunteer"
                period="2020 - Present"
                bullets={["Supported ticketing, payments, website updates, and backstage logistics for 2,000+ attendee festivals."]}
              />
              <Entry
                title="National Honor Society"
                subtitle="Member"
                period="Oct 2025 - Present"
                bullets={["Active member and tutor."]}
              />
            </ResumeSection>
          </aside>

          <main className="space-y-6 lg:col-span-8">
            <ResumeSection title="Work Experience">
              <Entry
                title="Round Rock High School Co-Op"
                subtitle="Chief Executive Officer"
                period="Mar 2025 - Present"
                bullets={[
                  "Directed a 250+ member, multi-department enterprise; set OKRs and led cross-functional execution.",
                  "Scaled e-commerce operations to 15,000+ monthly views and implemented inclusive fulfillment workflows.",
                  "Modernized operations through automation and applied ML for scheduling, forecasting, analytics, and inventory tracking."
                ]}
              />
              <Entry
                title="HallHop - Digital Pass System"
                subtitle="Founder and Lead Developer"
                period="Nov 2024 - Present"
                bullets={[
                  "Built and deployed a full-stack digital hall pass platform replacing paper workflows.",
                  "Developed custom data integration and REST API sync with district systems; platform usage reached 4,000+ external requests/month.",
                  "Engineered FERPA-conscious infrastructure with multi-tenant isolation and asynchronous pipelines, improving performance by 7x."
                ]}
              />
              <Entry
                title="Virtual Robot Simulator (VRS)"
                subtitle="Project Team Lead"
                period="May 2025 - Present"
                bullets={[
                  "Led VEX integration for a cross-platform robotics simulation system.",
                  "Contributed to in-house FTC control SDK abstractions and simulation integration.",
                  "Improved Java-to-JavaScript transpilation for FTC SDK code in Unity-based simulation."
                ]}
              />
              <Entry
                title="Transforze"
                subtitle="Software Engineer"
                period="Aug 2025 - Present"
                bullets={[
                  "Developed multi-tenant CRM infrastructure with secure workspace isolation.",
                  "Built agent-driven automation workflows integrated with productivity tools.",
                  "Implemented ML workflow components for conversational AI, including training and evaluation."
                ]}
              />
            </ResumeSection>

            <ResumeSection title="Research">
              <Entry
                title="AP Research - Round Rock HS"
                subtitle="Evaluating Quantum Contextuality as an Error Mitigation Resource"
                period="Aug 2025 - May 2026"
                bullets={[
                  "Designed IBM Quantum experiments (8,192 shots across 9 configurations).",
                  "Implemented zero-noise extrapolation with gate folding and Richardson extrapolation.",
                  "Improved measured fidelity from 0.753 to 0.805."
                ]}
              />
              <Entry
                title="Texas State University"
                subtitle="Research Contributor"
                period="May 2025 - Jan 2026"
                bullets={[
                  "Co-authored and built an R-based analysis workflow for a 600+ student composting behavior study.",
                  "Applied structural equation modeling and multiple imputation in support of manuscript development."
                ]}
              />
            </ResumeSection>

            <ResumeSection title="Robotics">
              <Entry
                title="VEX Robotics Competition (VRC)"
                subtitle="Lead Programmer - Virus VRC"
                period="Oct 2024 - Present"
                bullets={[
                  "Designed and tuned PID control and odometry using IMU, tracking wheel, and encoder fusion.",
                  "Achieved 90%+ autonomous reliability and qualified for VEX State Championship."
                ]}
              />
              <Entry
                title="First Tech Challenge (FTC) Robotics"
                subtitle="Hardware Team Lead"
                period="Jan 2023 - Dec 2024"
                bullets={[
                  "Designed and integrated drivetrain and full robot subsystems.",
                  "Built Java autonomous/teleop control with AprilTag vision for reliable match performance."
                ]}
              />
            </ResumeSection>
          </main>
        </div>
      </div>
    </section>
  );
}
