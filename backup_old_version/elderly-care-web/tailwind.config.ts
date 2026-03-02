import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#edf3fb",
          surface: "#ffffff",
          primary: "#2563eb",
          primarySoft: "#e0edff",
          accent: "#10b981",
          textMain: "#0f172a",
          textMuted: "#64748b"
        }
      },
      boxShadow: {
        card: "0 18px 45px rgba(15,23,42,0.16)"
      },
      borderRadius: {
        xl2: "24px"
      }
    }
  },
  plugins: []
};

export default config;

