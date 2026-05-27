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
      <p className="text-sm uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight text-bone md:text-7xl">{title}</h1>
      {body && <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{body}</p>}
    </div>
  );
}
