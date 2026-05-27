import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Projects"
        title="Product-shaped engineering across schools, robotics, AI, and research."
        body="The page starts with a pinned horizontal showcase, then opens into the full project index for deeper case studies."
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
