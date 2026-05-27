import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MagneticButton } from "@/components/MagneticButton";
import { leadership } from "@/data/leadership";

export function generateStaticParams() {
  return leadership.map((item) => ({ slug: item.slug }));
}

export default async function CommunityImpactDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = leadership.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <article className="container-page py-32">
      <Breadcrumbs className="mb-8" />
      <p className="text-sm uppercase tracking-[0.28em] text-muted">Community impact</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{item.title}</h1>
          <p className="mt-5 text-2xl text-silver">{item.role}</p>
          <p className="mt-3 text-muted">{item.period}</p>
        </div>
        <div className="rounded-lg border border-white/12 bg-panel/80 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Signal</p>
          <p className="mt-3 text-3xl font-semibold text-bone">{item.metric}</p>
        </div>
      </div>

      <section className="mt-12 rounded-lg border border-white/12 bg-panel/85 p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Overview</p>
            <p className="mt-4 text-xl leading-relaxed text-silver">{item.impact}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">What this involved</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-bone">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        {item.expanded.map((group) => (
          <div key={group.label} className="rounded-lg border border-white/12 bg-panel/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{group.label}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-silver">
              {group.items.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-lg border border-white/12 bg-panel/80 p-6">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Why it mattered</p>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-silver">
          This work strengthened the same habits that show up in my technical projects: clear handoffs, calm coordination, practical documentation,
          and building around the people who actually use the system.
        </p>
      </section>

      <div className="mt-12">
        <MagneticButton href="/leadership">Back to community impact</MagneticButton>
      </div>
    </article>
  );
}
