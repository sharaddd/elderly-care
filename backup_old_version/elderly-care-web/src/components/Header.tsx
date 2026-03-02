import Image from "next/image";
import { PhoneCall } from "lucide-react";

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center">
      <div
        className="flex items-center gap-3"
        aria-label="Elderly Care home"
      >
        {/* Mask the full logo image so only the mark feels like an icon */}
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-slate-900 shadow-md shadow-slate-900/40">
          <Image
            src="/elderly-care-logo.png"
            alt="Elderly Care logo"
            width={40}
            height={40}
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
          />
        </div>
        <div>
          <div className="text-base font-bold tracking-[0.18em] text-slate-900 sm:text-lg">
            ELDERLY CARE
          </div>
          <div className="text-xs text-brand-textMuted sm:text-sm">
            In‑home nursing &amp; care
          </div>
        </div>
      </div>

      <nav
        className="flex w-full flex-wrap items-center gap-3 text-sm text-brand-textMuted sm:w-auto sm:justify-end"
        aria-label="Primary navigation"
      >
        <a href="#how-it-works" className="hover:text-brand-textMain">
          How it works
        </a>
        <a href="#services" className="hover:text-brand-textMain">
          Services
        </a>
        <a href="#contact" className="hover:text-brand-textMain">
          For families
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          Call care team
        </a>
      </nav>
    </header>
  );
}

