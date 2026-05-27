"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticButton } from "./MagneticButton";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <nav className="container-page py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-bone">
            VBN
          </Link>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {nav.map(([label, href]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-3 py-2 text-xs transition ${
                    active ? "bg-white/12 text-bone" : "text-muted hover:text-bone"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <MagneticButton href="/contact" className="px-4 py-2 text-xs">
              Start a conversation
            </MagneticButton>
          </div>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {nav.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`shrink-0 rounded-full border border-white/10 px-3 py-2 text-xs ${
                  active ? "bg-white/12 text-bone" : "bg-white/[0.04] text-muted"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
