"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  education: "Academia",
  leadership: "Leadership",
  contact: "Contact"
};

function labelFor(segment: string) {
  return labels[segment] ?? segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function Breadcrumbs({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-xs text-muted ${className}`}>
      <Link href="/" className="transition hover:text-bone">
        Home
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        return (
          <span key={href} className="flex items-center gap-2">
            <span className="text-white/25">/</span>
            {isLast ? (
              <span className="text-bone">{labelFor(segment)}</span>
            ) : (
              <Link href={href} className="transition hover:text-bone">
                {labelFor(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
