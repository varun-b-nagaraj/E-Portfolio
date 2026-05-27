import { notFound } from "next/navigation";
import { MagneticButton } from "@/components/MagneticButton";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="container-page py-32">
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Project case study</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{project.title}</h1>
      <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {["Problem", "Solution", "Impact"].map((label) => (
          <section key={label} className="rounded-lg border border-white/12 bg-panel/85 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">{label}</p>
            <p className="mt-4 leading-relaxed text-silver">{project[label.toLowerCase() as "problem" | "solution" | "impact"]}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-white/12 bg-panel/85 p-8">
        <h2 className="text-2xl font-semibold text-bone">Technical notes</h2>
        <ul className="mt-6 space-y-4 text-silver">
          {project.detail.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-12">
        <MagneticButton href="/projects">Back to projects</MagneticButton>
      </div>
    </article>
  );
}
