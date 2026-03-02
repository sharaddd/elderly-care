import { Activity, HeartPulse, HelpingHand } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "In‑home clinical support",
    body: "Nurses can help with medications, blood pressure checks, post‑hospital care, diabetes support, and monitoring chronic conditions right at home.",
    footnote:
      "We coordinate with your existing doctors and share clear visit notes."
  },
  {
    icon: HelpingHand,
    title: "Personal & daily living care",
    body: "Gentle help with bathing, dressing, mobility, meals, and toileting — always with dignity, respect, and unrushed time.",
    footnote:
      "We focus on what matters most to the person, not just a checklist."
  },
  {
    icon: Activity,
    title: "Family communication & planning",
    body: "After each visit, families receive a simple summary so they know how things went, what changed, and what to watch for.",
    footnote:
      "Clear escalation plans mean you know exactly who we call and when."
  }
];

export function Services() {
  return (
    <section
      id="services"
      className="mt-8"
      aria-label="Elderly Care key services"
    >
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, title, body, footnote }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm shadow-slate-200/70"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mb-1 text-base font-semibold text-slate-900 sm:text-lg">
              {title}
            </h3>
            <p className="mb-2 text-sm text-brand-textMuted">{body}</p>
            <p className="mt-auto text-[0.78rem] text-brand-textMuted">
              {footnote}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

