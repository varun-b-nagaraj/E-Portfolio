import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12">
      <div className="container-page flex flex-col justify-between gap-8 text-sm text-muted md:flex-row">
        <div>
          <p className="font-medium text-bone">{profile.name}</p>
          <p className="mt-2 max-w-md">AI systems, robotics simulation, full-stack products, research, and community technology.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={`mailto:${profile.email}`}>Email</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/education">Research</Link>
        </div>
      </div>
    </footer>
  );
}
