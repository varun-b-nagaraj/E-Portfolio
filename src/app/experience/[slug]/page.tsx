import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MagneticButton } from "@/components/MagneticButton";
import { experiences } from "@/data/experience";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) notFound();
  const executionHighlights = [
    `Defined a weekly operating cadence for ${experience.company} with explicit ownership, measurable checkpoints, and short feedback loops.`,
    "Translated ambiguous requests into scoped work items with handoff notes, expected outcomes, and acceptance criteria.",
    "Built implementation plans that balanced immediate delivery pressure with maintainability and onboarding clarity.",
    "Tracked operational friction points and converted repeated blockers into reusable process or tooling fixes."
  ];
  const technicalDepth = [
    "Architecture choices were made around reliability first, then speed, then polish.",
    "Validation combined practical QA runs, edge-case checks, and direct feedback from active users.",
    "Changes were staged in smaller batches so regressions were easier to isolate and roll back.",
    "Documentation was written for handoff quality, not just personal reference."
  ];
  const whatChanged = [
    "Moved from task execution to system ownership across people, process, and technical delivery.",
    "Strengthened stakeholder communication by sharing status, risks, and decision rationale early.",
    "Increased focus on long-term operability: observability, permission boundaries, and recovery paths.",
    "Built repeatable workflows that reduced onboarding time for new contributors."
  ];
  const beyondTheTile = [
    {
      label: "Day-to-day mechanics",
      items: [
        "Maintained a working backlog that separated urgent fixes, infrastructure work, documentation, and exploratory ideas.",
        "Used recurring check-ins to surface blockers before they became schedule problems.",
        "Kept decisions traceable by writing down why an approach was chosen, what was rejected, and what still needed validation.",
        "Converted repeated questions into docs, examples, or onboarding notes so the next contributor did not have to rediscover the same context."
      ]
    },
    {
      label: "Edge cases handled",
      items: [
        "Planned for inconsistent user behavior, incomplete data, unavailable services, and handoffs between technical and nontechnical users.",
        "Added fallback expectations so progress could continue even when dependencies were delayed.",
        "Treated ambiguous requirements as a product risk, then narrowed them through examples and small testable milestones.",
        "Reviewed changes against real operating conditions instead of only checking whether the feature worked in isolation."
      ]
    },
    {
      label: "Collaboration detail",
      items: [
        "Translated technical status into plain-language updates for teammates, mentors, administrators, or users.",
        "Split work so specialists could move independently without losing shared context.",
        "Used demos and screenshots to align on behavior faster than long written explanations.",
        "Escalated decisions when scope, privacy, timeline, or reliability tradeoffs needed broader agreement."
      ]
    },
    {
      label: "What I learned",
      items: [
        "A role is stronger when the work can survive team changes, not just when the first implementation ships.",
        "Clear constraints make execution faster because they reduce debates about what the system is supposed to do.",
        "Operational tools need boring reliability as much as clever engineering.",
        "The best technical contribution is often the one that makes everyone else's work easier to reason about."
      ]
    }
  ];

  return (
    <article className="container-page py-32">
      <Breadcrumbs className="mb-8" />
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Experience detail</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{experience.company}</h1>
          <p className="mt-5 text-2xl text-silver">{experience.role}</p>
          <p className="mt-3 text-muted">
            {experience.period} · {experience.location}
          </p>
          {experience.website && (
            <a
              href={experience.website}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-white/[0.05] px-4 py-2 text-sm text-bone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
              aria-label={`Visit ${experience.company} website`}
            >
              Visit website
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
        {experience.metric && (
          <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Signal</p>
            <p className="mt-3 text-3xl font-semibold text-bone">{experience.metric}</p>
          </div>
        )}
      </div>

      <section className="mt-12 rounded-lg border border-white/12 bg-panel/85 p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Role snapshot</p>
            <p className="mt-4 text-xl leading-relaxed text-silver">{experience.summary}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Operating lens</p>
            <p className="mt-4 text-xl leading-relaxed text-bone">{experience.lens ?? experience.summary}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {experience.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {experience.progression && (
        <section className="mt-10">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Progression</p>
          <div className="mt-6 space-y-5">
            {experience.progression.map((role, index) => (
              <div key={`${role.title}-${role.period}`} className="grid gap-5 rounded-lg border border-white/12 bg-panel/80 p-6 md:grid-cols-[0.36fr_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">0{index + 1}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-bone">{role.title}</h2>
                  <p className="mt-2 text-sm text-muted">{role.period}</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-silver">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Core responsibilities</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        {experience.expanded?.map((group) => (
          <div key={group.label} className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{group.label}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Execution depth</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {executionHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Technical depth</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {technicalDepth.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">What changed</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {whatChanged.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-teal-100/15 bg-teal-300/[0.035] p-7 md:p-9">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-100/75">More context beyond the timeline tile</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {beyondTheTile.map((group) => (
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
        <MagneticButton href="/experience">Back to experience</MagneticButton>
      </div>
    </article>
  );
}
