import { ScrollTimeline } from "@/components/ScrollTimeline";
import { SectionIntro } from "@/components/SectionIntro";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <SectionIntro
        eyebrow="Experience"
        title="A scroll-synced record of shipping, leading, and learning in public."
        body="The work spans robotics simulation, school infrastructure, AI-native CRM architecture, applied machine learning, client web systems, and student leadership."
      />
      <ScrollTimeline items={experiences} />
    </>
  );
}
