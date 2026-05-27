import Link from "next/link";
import { profile } from "@/data/profile";

function GmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M4.5 6.5h15v11h-15z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4.5 7 7.5 5.7L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.3 4.5-4.6 4.8.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.4Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.4 8.9H3.7v10h2.7v-10Zm.2-3.1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm13.7 7.4c0-3-1.6-4.5-3.8-4.5-1.7 0-2.5.9-2.9 1.6V8.9h-2.7v10h2.7V14c0-1.3.2-2.6 1.9-2.6 1.6 0 1.7 1.5 1.7 2.7v4.8h2.7v-5.7h.4Z" />
    </svg>
  );
}

export const socialLinks = [
  {
    label: "Gmail",
    href: `mailto:${profile.email}`,
    Icon: GmailIcon
  },
  {
    label: "GitHub",
    href: profile.github,
    Icon: GitHubIcon
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: LinkedInIcon
  }
];

export function SocialIconLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={label}
          title={label}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-silver transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-200/24 hover:bg-white/[0.08] hover:text-bone hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}

export function SocialDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-medium text-bone shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_48px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-teal-200/24 hover:shadow-[0_22px_70px_rgba(20,184,166,0.07),0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),rgba(141,223,213,0.055)_42%,transparent_78%)] opacity-70 transition duration-500 group-hover:opacity-85" />
        <span className="relative">View socials</span>
      </button>
      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
        <div className="flex translate-y-[-6px] items-center gap-1 rounded-full border border-white/12 bg-black/80 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.38),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          {socialLinks.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={label}
              title={label}
              className="grid h-9 w-9 place-items-center rounded-full text-silver transition-all duration-300 hover:bg-white/[0.08] hover:text-bone"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
