import { ScrollTimeline } from "@/components/ScrollTimeline";
import { SectionIntro } from "@/components/SectionIntro";
import { leadership } from "@/data/leadership";

export default function LeadershipPage() {
  const timelineItems = leadership.map((item) => ({
    slug: item.slug,
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
        eyebrow="Community Impact"
        title="Service, mentorship, and community work."
        body="This section is separate from Experience: it covers service, competition activities, tutoring, scouting, and robotics mentorship rather than company or founder roles."
      />
      <ScrollTimeline
        items={timelineItems}
        detailBasePath="/leadership"
        eyebrow="Community timeline"
        title="Service, mentorship, and activities."
        body="Each entry keeps the main story visible here, with a deeper page for context, examples, and specific highlights."
        detailLabel="More info"
        maxBullets={3}
      />
    </>
  );
}
