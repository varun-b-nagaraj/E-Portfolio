export function PageSkeleton() {
  return (
    <section className="container-page py-32">
      <div className="h-3 w-40 animate-pulse rounded-full bg-white/10" />
      <div className="mt-8 h-16 max-w-4xl animate-pulse rounded-md bg-white/10" />
      <div className="mt-4 h-16 max-w-3xl animate-pulse rounded-md bg-white/[0.075]" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-panel/70 p-6">
            <div className="h-3 w-24 animate-pulse rounded-full bg-teal-100/15" />
            <div className="mt-5 h-24 animate-pulse rounded-md bg-white/[0.07]" />
            <div className="mt-5 h-3 w-2/3 animate-pulse rounded-full bg-white/[0.07]" />
          </div>
        ))}
      </div>
      <div className="mt-8 h-56 animate-pulse rounded-lg border border-white/10 bg-white/[0.045]" />
    </section>
  );
}
