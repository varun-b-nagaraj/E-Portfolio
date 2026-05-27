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
    tags: ["Leadership", "Service", "Community"],
    metric: item.title.includes("Kannada") ? "1,000+ attendee events" : undefined
  }));

  return (
    <>
      <SectionIntro
        eyebrow="Leadership / Community"
        title="Service, mentorship, and operations with technical discipline."
        body="The leadership work connects event execution, student service, business competitions, scouting, robotics mentorship, and food insecurity support."
      />
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {leadership.map((item) => (
          <article key={item.title} className="group rounded-lg border border-white/12 bg-panel/80 p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_22px_70px_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.08)]">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">{item.period}</p>
            <h2 className="mt-3 text-2xl font-semibold text-bone">{item.title}</h2>
            <p className="mt-1 text-sm text-silver">{item.role}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted">{item.impact}</p>
            <div className="mt-5 max-h-0 overflow-hidden text-sm leading-relaxed text-silver transition-all duration-500 group-hover:max-h-40">
              {item.details.join(" ")}
            </div>
          </article>
        ))}
      </section>
      <ScrollTimeline items={timelineItems} detailBasePath={null} />
    </>
  );
}
