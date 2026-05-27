import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MagneticButton } from "@/components/MagneticButton";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const architectureWalkthrough = [
    "Started with workflow mapping before UI work so every view had a direct operational purpose.",
    "Separated input validation, business logic, and output formatting to keep core behavior testable.",
    "Used a data-contract approach between interface and backend layers to reduce accidental coupling.",
    "Added fallback paths for partial data and failure recovery instead of assuming happy-path inputs."
  ];
  const deliveryTimeline = [
    "Discovery and constraints mapping with user-facing friction logged as explicit requirements.",
    "First implementation pass focused on end-to-end functionality rather than cosmetic polish.",
    "Second pass improved latency, clarity, and error handling based on real usage patterns.",
    "Final pass documented handoff steps, maintenance notes, and next-iteration opportunities."
  ];
  const validationAndTradeoffs = [
    "Validated behavior through scenario walkthroughs representing real user paths and edge conditions.",
    "Accepted some non-critical complexity where it preserved reliability under production constraints.",
    "Prioritized debuggability and operational transparency over purely visual improvements.",
    "Documented known limitations so future iterations can target high-impact upgrades first."
  ];
  const deeperCaseStudy = [
    {
      label: "Initial questions",
      items: [
        "What does the user need to finish in one sitting, and what information do they need before taking action?",
        "Where can the workflow fail because of bad input, slow network behavior, permission issues, or unclear status?",
        "Which parts need to be fast because they happen repeatedly, and which parts can be slower because they happen rarely?",
        "What should be logged, displayed, or documented so future debugging is possible without guessing?"
      ]
    },
    {
      label: "Implementation texture",
      items: [
        "Built the interface around concrete task states instead of abstract screens.",
        "Kept state transitions explicit so loading, success, empty, and error paths could be handled deliberately.",
        "Designed data shapes that could support future reporting without forcing an immediate rebuild.",
        "Separated user-facing copy from internal assumptions so the system stayed easier to revise."
      ]
    },
    {
      label: "Testing notes",
      items: [
        "Walked through first-time user behavior, repeated-user behavior, and interrupted-session behavior.",
        "Checked how the project responded when records were missing, duplicated, delayed, or partially updated.",
        "Used small manual test scripts for high-risk paths before treating the feature as stable.",
        "Reviewed the finished flow from the perspective of whoever would maintain it after the first launch."
      ]
    },
    {
      label: "Future expansion",
      items: [
        "Add clearer admin-facing analytics and review history for accountability.",
        "Build stronger import/export paths so data can move between systems with less manual cleanup.",
        "Add role-specific views so different users see only the controls they actually need.",
        "Create a public-facing technical writeup with diagrams, decisions, and known limitations."
      ]
    }
  ];

  return (
    <article className="container-page py-32">
      <Breadcrumbs className="mb-8" />
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Project case study</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{project.title}</h1>
      <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted">{project.summary}</p>
      {project.paper && (
        <a
          href={project.paper.href}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
        >
          {project.paper.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      <section className="mt-10 rounded-lg border border-teal-100/15 bg-teal-300/[0.045] p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">{project.eyebrow}</p>
        <p className="mt-4 max-w-5xl text-2xl font-medium leading-relaxed text-bone">{project.narrative}</p>
      </section>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {["Problem", "Solution", "Impact"].map((label) => (
          <section key={label} className="rounded-lg border border-white/12 bg-panel/85 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">{label}</p>
            <p className="mt-4 leading-relaxed text-silver">{project[label.toLowerCase() as "problem" | "solution" | "impact"]}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-white/12 bg-panel/85 p-8">
        <h2 className="text-2xl font-semibold text-bone">Technical notes</h2>
        <ul className="mt-6 space-y-4 text-silver">
          {project.detail.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        {[
          ["Interface", project.stack.interface],
          ["Backend", project.stack.backend],
          ["System design", project.stack.systems]
        ].map(([label, items]) => (
          <div key={label as string} className="rounded-lg border border-white/12 bg-panel/85 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">{label as string}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(items as string[]).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        {[
          ["Build decisions", project.decisions],
          ["Constraints", project.constraints],
          ["Next pass", project.nextSteps]
        ].map(([label, items]) => (
          <div key={label as string} className="rounded-lg border border-white/12 bg-panel/85 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">{label as string}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {(items as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-lg border border-white/12 bg-panel/85 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">Architecture walkthrough</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {architectureWalkthrough.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/85 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">Delivery timeline</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {deliveryTimeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/85 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">Validation and tradeoffs</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {validationAndTradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-teal-100/15 bg-teal-300/[0.035] p-7 md:p-9">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-100/75">More context beyond the project tile</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {deeperCaseStudy.map((group) => (
            <div key={group.label} className="rounded-lg border border-white/10 bg-black/20 p-5">
              <h2 className="text-lg font-semibold text-bone">{group.label}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-silver">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-12">
        <MagneticButton href="/projects">Back to projects</MagneticButton>
      </div>
    </article>
  );
}
