import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Projects"
        title="Eight builds, one through-line: turn messy workflows into usable systems."
        body="Each project is organized by the same story: what was hard, what I built, what tradeoffs shaped it, and what I would improve next."
      />
      <HorizontalScrollGallery projects={featuredProjects} />
      <section className="container-page grid gap-5 py-24 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  );
}
