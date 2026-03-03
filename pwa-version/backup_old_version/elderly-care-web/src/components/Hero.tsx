import { ShieldCheck, Stethoscope, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] md:items-center"
      aria-labelledby="hero-title"
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
          Designed with seniors in mind
        </p>
        <h1
          id="hero-title"
          className="mb-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2.4rem] sm:leading-tight"
        >
          Trusted nurses who come to you for{" "}
          <span className="text-blue-700">
            safe, calmer aging at home.
          </span>
        </h1>
        <p className="mb-4 max-w-xl text-[1.02rem] text-brand-textMuted">
          Elderly Care sends licensed nurses and caregivers to your home for
          medications, wound care, mobility support, and daily living help — so
          older adults stay independent and families feel at ease.
        </p>

        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-xs text-amber-900 sm:text-sm"
          aria-label="Availability notice"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Now accepting new clients for home visits in your area.
        </div>

        <div className="mb-3 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition hover:bg-blue-700"
          >
            Book a free home assessment
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            Talk to a care coordinator
          </a>
        </div>

        <p className="text-xs text-brand-textMuted sm:text-sm">
          <strong className="font-semibold text-slate-900">
            No obligation.
          </strong>{" "}
          A nurse assesses needs, explains options, and helps you decide what
          level of support feels right.
        </p>

        <div
          className="mt-5 flex flex-wrap items-center gap-3 text-[0.72rem] text-brand-textMuted sm:text-xs"
          aria-label="Trust and reassurance"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            HIPAA‑ready data practices
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
            <Stethoscope className="h-4 w-4 text-blue-700" />
            Licensed &amp; background‑checked nurses
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
            <Users className="h-4 w-4 text-indigo-600" />
            Accessible by design (WCAG AA)
          </div>
        </div>
      </div>

      <aside
        className="relative rounded-xl2 bg-gradient-to-br from-white/95 to-indigo-50/95 p-4 shadow-card sm:p-5"
        aria-label="Example Elderly Care visit summary: Mary’s day"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Mary Thompson, 78
              </div>
              <div className="text-[0.7rem] text-brand-textMuted">
                Today’s in‑home visit
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[0.7rem] font-medium text-blue-900">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Nurse visit completed
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div
              className="rounded-2xl border border-slate-100 bg-white/95 p-3"
              aria-label="Care completed today"
            >
              <div className="mb-1 text-[0.75rem] font-semibold text-brand-textMuted">
                Care provided today
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900">
                      Medication management
                    </div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Morning doses prepared &amp; given
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-700">
                    Double‑checked
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900">
                      Mobility &amp; safety
                    </div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Supervised walk, fall‑risk review
                    </div>
                  </div>
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[0.65rem] font-semibold text-sky-700">
                    Safe at home
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900">
                      Personal care
                    </div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Bathing &amp; dressing support
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-700">
                    Comfort focused
                  </span>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-slate-100 bg-white/95 p-3"
              aria-label="Vitals and nurse notes"
            >
              <div className="mb-1 text-[0.75rem] font-semibold text-brand-textMuted">
                Vitals &amp; nurse notes
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Blood pressure
                    </div>
                    <div className="text-sm font-semibold text-emerald-700">
                      124 / 78
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Mood
                    </div>
                    <div className="text-sm font-semibold text-emerald-700">
                      Feeling good
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Activity
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Short walk tolerated well
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-brand-textMuted">
                      Plan
                    </div>
                    <div className="text-sm font-semibold text-emerald-700">
                      Next visit on Thursday
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-between text-[0.7rem] text-brand-textMuted">
            <div
              className="flex items-center"
              aria-label="Family insights updated"
            >
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-indigo-300 to-indigo-500" />
                <div className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-amber-300 to-orange-500" />
              </div>
              <span className="ml-2">2 family contacts notified</span>
            </div>
            <div aria-label="Visit time">
              Visit today:{" "}
              <strong className="font-semibold text-slate-900">
                9:00–9:45 AM
              </strong>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

