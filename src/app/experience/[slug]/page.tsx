import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MagneticButton } from "@/components/MagneticButton";
import { experiences } from "@/data/experience";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  return (
    <article className="container-page py-32">
      <Breadcrumbs className="mb-8" />
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Experience detail</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{experience.company}</h1>
          <p className="mt-5 text-2xl text-silver">{experience.role}</p>
          <p className="mt-3 text-muted">
            {experience.period} · {experience.location}
          </p>
        </div>
        {experience.metric && (
          <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Signal</p>
            <p className="mt-3 text-3xl font-semibold text-bone">{experience.metric}</p>
          </div>
        )}
      </div>

      <section className="mt-12 rounded-lg border border-white/12 bg-panel/85 p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Role snapshot</p>
            <p className="mt-4 text-xl leading-relaxed text-silver">{experience.summary}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Operating lens</p>
            <p className="mt-4 text-xl leading-relaxed text-bone">{experience.lens ?? experience.summary}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {experience.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {experience.progression && (
        <section className="mt-10">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Progression</p>
          <div className="mt-6 space-y-5">
            {experience.progression.map((role, index) => (
              <div key={`${role.title}-${role.period}`} className="grid gap-5 rounded-lg border border-white/12 bg-panel/80 p-6 md:grid-cols-[0.36fr_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">0{index + 1}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-bone">{role.title}</h2>
                  <p className="mt-2 text-sm text-muted">{role.period}</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-silver">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Core responsibilities</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        {experience.expanded?.map((group) => (
          <div key={group.label} className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{group.label}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="mt-12">
        <MagneticButton href="/experience">Back to experience</MagneticButton>
      </div>
    </article>
  );
}
