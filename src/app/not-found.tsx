import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function NotFound() {
  return (
    <main className="container-page py-32">
      <Breadcrumbs />
      <section className="mt-8 rounded-lg border border-white/12 bg-panel/85 p-8 shadow-glass md:p-12">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-100/70">404</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-bone md:text-7xl">This page is not in the portfolio map.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          The route might be old, mistyped, or from a deployment alias that is not connected to this project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-bone transition hover:bg-white/[0.1]" href="/">
            Go home
          </Link>
          <Link className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-bone transition hover:bg-white/[0.1]" href="/projects">
            View projects
          </Link>
          <Link className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-bone transition hover:bg-white/[0.1]" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
