export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mt-14 space-y-6"
      aria-labelledby="how-it-works-title"
    >
      <div>
        <h2
          id="how-it-works-title"
          className="text-xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-2xl"
        >
          How Elderly Care works in your home
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-textMuted sm:text-base">
          We designed Elderly Care with older adults, families, and clinicians
          to make in‑home nursing feel calm, predictable, and easy to arrange —
          even if you’ve never booked care at home before.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-brand-textMuted sm:text-sm">
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Licensed, background‑checked nurses and caregivers
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-brand-textMuted sm:text-sm">
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Consistent faces — see the same trusted people regularly
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-brand-textMuted sm:text-sm">
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Flexible schedules, from weekly visits to daily support
        </div>
      </div>
    </section>
  );
}

