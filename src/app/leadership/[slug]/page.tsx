import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MagneticButton } from "@/components/MagneticButton";
import { leadership } from "@/data/leadership";

export function generateStaticParams() {
  return leadership.map((item) => ({ slug: item.slug }));
}

export default async function CommunityImpactDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = leadership.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const planningAndCoordination = [
    "Built event or service execution checklists with clear owner mapping and fallback assignments.",
    "Used short pre-briefs and post-briefs to improve reliability across volunteers with different experience levels.",
    "Kept communication templates for schedule shifts, urgent updates, and cross-team dependencies.",
    "Documented recurring operational risks and improved process steps between events."
  ];
  const deeperImpact = [
    "Improved participant experience through predictable logistics, clearer communication, and faster issue recovery.",
    "Reduced volunteer uncertainty by making responsibilities explicit before peak workload windows.",
    "Converted one-time fixes into reusable playbooks that helped new volunteers onboard quickly.",
    "Linked technical support work with people outcomes, not just task completion."
  ];
  const leadershipSignals = [
    "Consistency under high-volume event pressure.",
    "Faster handoffs between planning and live execution.",
    "Improved coordination between technical, operations, and attendee-facing roles.",
    "Higher confidence for younger volunteers stepping into responsibility."
  ];
  const deeperCommunityContext = [
    {
      label: "Behind the scenes",
      items: [
        "Prepared materials and logistics before events so the visible work could run calmly.",
        "Tracked who needed help, who owned each task, and which dependencies had to be resolved before the main event or service window.",
        "Handled small urgent fixes without letting them disrupt the broader plan.",
        "Kept communication short and concrete when time pressure was high."
      ]
    },
    {
      label: "People coordination",
      items: [
        "Adjusted explanations based on whether the audience was a younger student, parent, organizer, mentor, or volunteer.",
        "Made handoffs explicit so no one had to guess who was responsible for the next step.",
        "Looked for quieter failure points, like unclear signage, missing instructions, or volunteers waiting for direction.",
        "Helped newer volunteers take ownership without leaving them unsupported."
      ]
    },
    {
      label: "Operational lessons",
      items: [
        "Most community work succeeds because the boring details are handled early.",
        "Technical support matters most when it reduces stress for organizers and attendees.",
        "A simple checklist can be more useful than a complicated system if volunteers can actually follow it.",
        "Good service work leaves behind a process that is easier for the next person to repeat."
      ]
    },
    {
      label: "Specific examples",
      items: [
        "Created backup plans for equipment, scheduling, or staffing gaps before live execution.",
        "Helped translate large goals into small tasks that could be assigned quickly.",
        "Documented recurring problems after events so future planning could improve.",
        "Connected technical execution with attendee experience instead of treating them as separate concerns."
      ]
    }
  ];

  return (
    <article className="container-page py-32">
      <Breadcrumbs className="mb-8" />
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Community impact</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{item.title}</h1>
          <p className="mt-5 text-2xl text-silver">{item.role}</p>
          <p className="mt-3 text-muted">{item.period}</p>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Signal</p>
          <p className="mt-3 text-3xl font-semibold text-bone">{item.metric}</p>
        </div>
      </div>

      <section className="mt-12 rounded-lg border border-white/12 bg-panel/85 p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Overview</p>
            <p className="mt-4 text-xl leading-relaxed text-silver">{item.impact}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">What this involved</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-bone">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        {item.expanded.map((group) => (
          <div key={group.label} className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{group.label}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {group.items.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Planning and coordination</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {planningAndCoordination.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Deeper impact</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {deeperImpact.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Leadership signals</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {leadershipSignals.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-teal-100/15 bg-teal-300/[0.035] p-7 md:p-9">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-100/75">More context beyond the community tile</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {deeperCommunityContext.map((group) => (
            <div key={group.label} className="rounded-lg border border-white/10 bg-black/20 p-5">
              <h2 className="text-lg font-semibold text-bone">{group.label}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-silver">
                {group.items.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-white/12 bg-panel/80 p-6">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Why it mattered</p>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-silver">
          This work strengthened the same habits that show up in my technical projects: clear handoffs, calm coordination, practical documentation,
          and building around the people who actually use the system.
        </p>
      </section>

      <div className="mt-12">
        <MagneticButton href="/leadership">Back to community impact</MagneticButton>
      </div>
    </article>
  );
}
