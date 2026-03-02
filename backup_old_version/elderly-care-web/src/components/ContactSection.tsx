export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-16"
      aria-labelledby="contact-title"
    >
      <div className="rounded-xl2 bg-gradient-to-br from-blue-700 to-sky-500 p-5 text-sky-50 shadow-card md:p-7">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)] md:items-center">
          <div>
            <h2
              id="contact-title"
              className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl"
            >
              Start with a free in‑home or virtual assessment
            </h2>
            <p className="mt-2 text-sm text-sky-100 sm:text-base">
              A nurse or care coordinator will learn about medical needs,
              routines, the home environment, and what “a good day” looks like
              for you or your loved one.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <span className="mr-2 font-semibold text-emerald-200">✓</span>
                Personalized care plan and visit schedule
              </li>
              <li>
                <span className="mr-2 font-semibold text-emerald-200">✓</span>
                Transparent pricing before you decide
              </li>
              <li>
                <span className="mr-2 font-semibold text-emerald-200">✓</span>
                No long‑term contracts — adjust as needs change
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/98 p-4 text-slate-900 shadow-lg shadow-slate-900/20">
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "This is a prototype form. In a real app, this would send details to your care team."
                );
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-slate-900"
                >
                  City / Area
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Who is this for? (short note)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-offset-2 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/50 transition hover:bg-blue-700"
              >
                Request free assessment
              </button>
              <p className="text-[0.7rem] text-brand-textMuted">
                Prefer email? Reach our team at{" "}
                <strong>hello@elderlycare.app</strong> and we’ll follow up
                within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

