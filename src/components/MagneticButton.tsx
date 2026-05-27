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
        className={`group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-bone shadow-silver transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] ${className}`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </span>
  );
}
