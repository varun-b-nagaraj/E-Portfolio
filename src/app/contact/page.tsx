import { FileText, Link as LinkIcon, Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Contact"
        title="For collaborations, technical projects, research, and product conversations."
        body="Reach out for AI systems, robotics simulation, school technology, research collaboration, or founder-oriented engineering work."
      />
      <section className="container-page grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {[
            [Mail, "Email", profile.email, `mailto:${profile.email}`],
            [Phone, "Phone", profile.phone, `tel:${profile.phone}`],
            [LinkIcon, "GitHub", "Profile", profile.github],
            [FileText, "LinkedIn", "Profile", profile.linkedin],
            [MapPin, "Location", profile.location, "#"]
          ].map(([Icon, label, value, href]) => {
            const LucideIcon = Icon as typeof Mail;
            return (
              <a key={label as string} href={href as string} className="flex items-center gap-4 rounded-lg border border-white/12 bg-panel/80 p-5 transition hover:border-white/25 hover:bg-white/[0.07]">
                <LucideIcon className="h-5 w-5 text-muted" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.24em] text-muted">{label as string}</span>
                  <span className="mt-1 block text-bone">{value as string}</span>
                </span>
              </a>
            );
          })}
          <MagneticButton href={profile.resume} download>
            Download resume
          </MagneticButton>
        </div>
        <form className="glass rounded-lg p-6 md:p-8">
          <div className="grid gap-5">
            <label className="text-sm text-muted">
              Name
              <input className="mt-2 w-full rounded-md border border-white/12 bg-black/35 px-4 py-3 text-bone outline-none transition focus:border-white/35 focus:shadow-[0_0_28px_rgba(255,255,255,0.08)]" />
            </label>
            <label className="text-sm text-muted">
              Email
              <input type="email" className="mt-2 w-full rounded-md border border-white/12 bg-black/35 px-4 py-3 text-bone outline-none transition focus:border-white/35 focus:shadow-[0_0_28px_rgba(255,255,255,0.08)]" />
            </label>
            <label className="text-sm text-muted">
              Message
              <textarea rows={6} className="mt-2 w-full resize-none rounded-md border border-white/12 bg-black/35 px-4 py-3 text-bone outline-none transition focus:border-white/35 focus:shadow-[0_0_28px_rgba(255,255,255,0.08)]" />
            </label>
            <button type="button" className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-medium text-bone transition hover:border-white/35 hover:bg-white/[0.12]">
              Prepare message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
