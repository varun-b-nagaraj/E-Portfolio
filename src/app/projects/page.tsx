import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { ProjectBrowser } from "@/components/ProjectBrowser";
import { SectionIntro } from "@/components/SectionIntro";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Projects"
        title="Operations platforms, AI systems, research, and infrastructure."
        body="The featured track highlights the five strongest portfolio projects. The full archive below includes those systems plus additional builds, research, and operational tools with searchable case-study pages."
      />
      <div className="mt-16 md:mt-20">
        <HorizontalScrollGallery projects={featuredProjects} />
      </div>
      <ProjectBrowser projects={projects} />
    </>
  );
}
