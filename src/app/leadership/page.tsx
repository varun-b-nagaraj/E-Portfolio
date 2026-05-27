import { ScrollTimeline } from "@/components/ScrollTimeline";
import { SectionIntro } from "@/components/SectionIntro";
import { leadership } from "@/data/leadership";

export default function LeadershipPage() {
  const timelineItems = leadership.map((item) => ({
    slug: item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    company: item.title,
    role: item.role,
    period: item.period,
    location: "Community",
    summary: item.impact,
    bullets: item.details,
    tags: item.tags,
    metric: item.metric
  }));

  return (
    <>
      <SectionIntro
        eyebrow="Leadership / Community"
        title="Service, mentorship, and operations with technical discipline."
        body="This section is intentionally separate from Experience: it covers community leadership, service, competition activities, tutoring, scouting, and robotics mentorship rather than company or founder roles."
      />
      <section className="container-page grid gap-5 py-16 md:grid-cols-2">
        {leadership.map((item) => (
          <article key={item.title} className="surface-glow group rounded-lg border border-white/12 bg-panel/80 p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_22px_70px_rgba(141,223,213,0.10),0_0_0_1px_rgba(255,255,255,0.08)]">
            <div className="accent-rule -mx-6 -mt-6 mb-6 h-px" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{item.period}</p>
                <h2 className="mt-3 text-2xl font-semibold text-bone">{item.title}</h2>
                <p className="mt-1 text-sm text-silver">{item.role}</p>
              </div>
              <p className="w-fit rounded-md border border-amber-100/20 bg-[linear-gradient(135deg,rgba(240,195,106,0.10),rgba(141,223,213,0.055))] px-3 py-2 text-xs text-bone">{item.metric}</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">{item.impact}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="accent-chip rounded-full px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
      <ScrollTimeline items={timelineItems} detailBasePath={null} />
    </>
  );
}
