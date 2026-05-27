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
        className={`group inline-flex items-center gap-2 rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(141,223,213,0.12),rgba(255,255,255,0.06)_44%,rgba(240,195,106,0.10))] px-5 py-3 text-sm font-medium text-bone shadow-silver transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-teal-100/35 hover:bg-white/[0.1] hover:shadow-[0_20px_70px_rgba(141,223,213,0.14),0_10px_36px_rgba(240,195,106,0.08)] ${className}`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 text-teal-100/85 transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-100" />
      </Link>
    </span>
  );
}
