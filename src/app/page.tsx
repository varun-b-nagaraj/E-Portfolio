import { Hero } from "@/components/Hero";
import { StackingSection } from "@/components/StackingSection";
import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { MagneticButton } from "@/components/MagneticButton";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackingSection cards={profile.highlights} />
      <HorizontalScrollGallery projects={featuredProjects} />
      <section className="container-page py-28">
        <div className="glass rounded-lg p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Next</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-bone md:text-6xl">Explore the operating system behind the work.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="/experience">Experience timeline</MagneticButton>
            <MagneticButton href="/education">Research and academics</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
