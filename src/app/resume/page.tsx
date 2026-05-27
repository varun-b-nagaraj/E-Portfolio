import { Download, ExternalLink, FileText } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <>
      <SectionIntro
        eyebrow="Resume"
        title="Resume PDF"
        body="A clean embedded copy of the formal resume, framed in the same visual theme as the portfolio."
      />

      <section className="container-page py-10 md:py-16">
        <div className="surface-glow overflow-hidden rounded-lg border border-white/12 bg-panel/80 shadow-glass">
          <div className="accent-rule h-px" />
          <div className="flex flex-col gap-5 border-b border-white/10 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-teal-100/20 bg-white/[0.05] text-teal-100/85">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="section-kicker text-xs uppercase tracking-[0.24em]">Formal document</p>
                <h2 className="mt-2 text-2xl font-semibold text-bone">{profile.name}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  View the resume directly here, or download the PDF for applications, printing, and sharing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-teal-100/25 bg-white/[0.06] px-4 py-2 text-sm text-bone transition hover:border-teal-100/45 hover:bg-white/[0.1]"
              >
                Download PDF
                <Download className="h-4 w-4 text-teal-100/85" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-bone transition hover:border-amber-100/35 hover:bg-white/[0.09]"
              >
                Open in new tab
                <ExternalLink className="h-4 w-4 text-amber-100/80" />
              </a>
            </div>
          </div>

          <div className="bg-black/45 p-2 md:p-5">
            <object data={profile.resume} type="application/pdf" className="h-[72vh] min-h-[520px] w-full rounded-md border border-white/10 bg-white md:h-[82vh] md:min-h-[720px]">
              <div className="rounded-md border border-white/10 bg-black/40 p-8">
                <p className="text-sm leading-relaxed text-muted">PDF preview is unavailable in this browser.</p>
                <a href={profile.resume} download className="mt-4 inline-flex items-center gap-2 text-bone">
                  Download the resume
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </>
  );
}
