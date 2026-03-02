"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <main className="shell">
        <Header />
        <Hero />
        <HowItWorks />
        <Services />
        <ContactSection />

        <footer className="mt-10 border-t border-slate-200 pt-4 text-xs text-brand-textMuted sm:text-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Elderly Care Health, Inc. All nurses are licensed and
              background‑checked.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="hover:text-brand-textMain"
                aria-label="Read Elderly Care privacy notice"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-brand-textMain"
                aria-label="Read Elderly Care terms of use"
              >
                Terms
              </a>
              <a
                href="#contact"
                className="hover:text-brand-textMain"
                aria-label="Contact Elderly Care support"
              >
                Support
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

