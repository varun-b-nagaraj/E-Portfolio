import { Breadcrumbs } from "./Breadcrumbs";

export function SectionIntro({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="container-page pt-32">
      <Breadcrumbs className="mb-8" />
      <p className="section-kicker text-sm uppercase tracking-[0.28em]">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{title}</h1>
      <div className="accent-rule mt-6 h-px max-w-md" />
      {body && <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{body}</p>}
    </div>
  );
}
