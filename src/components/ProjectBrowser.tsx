"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Project, projectCategories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

function getSearchText(project: Project) {
  return [
    project.title,
    project.eyebrow,
    project.summary,
    project.problem,
    project.solution,
    project.impact,
    project.narrative,
    ...project.categories,
    ...project.metrics,
    ...project.stack.interface,
    ...project.stack.backend,
    ...project.stack.systems,
    ...project.detail
  ]
    .join(" ")
    .toLowerCase();
}

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory);
      const matchesSearch = normalizedQuery.length === 0 || getSearchText(project).includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, normalizedQuery, projects]);

  const showReset = activeCategory !== "All" || query.length > 0;

  return (
    <section className="container-page py-24" data-no-type>
      <div className="flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker text-sm uppercase tracking-[0.28em]">All projects</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-bone md:text-6xl">Search the full project archive.</h2>
        </div>
        <div className="relative w-full max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by stack, impact, domain, or project name"
            className="h-12 w-full rounded-md border border-white/12 bg-black/30 pl-11 pr-11 text-sm text-bone outline-none transition focus:border-teal-100/45 focus:bg-black/45"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:bg-white/[0.08] hover:text-bone"
              aria-label="Clear project search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...projectCategories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
              activeCategory === category
                ? "border-teal-100/45 bg-teal-100/12 text-bone"
                : "border-white/12 bg-white/[0.035] text-muted hover:border-white/24 hover:text-bone"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 text-sm text-muted">
        <p>
          Showing {filteredProjects.length} of {projects.length}
        </p>
        {showReset && (
          <button type="button" onClick={() => { setQuery(""); setActiveCategory("All"); }} className="text-teal-100/80 transition hover:text-bone">
            Reset filters
          </button>
        )}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-white/12 bg-panel/80 p-8 text-silver">
          No projects match the current search and filter.
        </div>
      )}
    </section>
  );
}
