import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Projects"
        title="Contained builds and research, separate from long-term roles."
        body="Projects here are focused case studies: smaller tools, research modules, and scoped improvements. Larger company, founder, and long-running organizational work lives in Experience."
      />
      <div className="mt-16 md:mt-20">
        <HorizontalScrollGallery projects={featuredProjects} />
      </div>
      <section className="container-page grid gap-5 py-24 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  );
}
