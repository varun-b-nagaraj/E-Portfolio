"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  className?: string;
};

export function MagneticButton({ href, children, download, className = "" }: Props) {
  return (
    <span className="inline-flex">
      <Link
        href={href}
        download={download}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-medium text-bone shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_48px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-teal-100/35 hover:shadow-[0_18px_58px_rgba(141,223,213,0.16),0_10px_34px_rgba(240,195,106,0.08)] ${className}`}
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),rgba(141,223,213,0.10)_42%,rgba(240,195,106,0.06)_70%,transparent_100%)] opacity-80 transition duration-500 group-hover:opacity-100" />
        <span className="relative">{children}</span>
        <ArrowUpRight className="relative h-4 w-4 text-teal-100/85 transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-100" />
      </Link>
    </span>
  );
}
