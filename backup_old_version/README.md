# Elderly Care — In-Home Nursing & Senior Care

A responsive, accessible experience for **Elderly Care**, an in-home nursing and senior care service. The repo contains both a static HTML landing page and a modern Next.js prototype, highlighting licensed nurses, home visits, and family-focused care with a clear, senior-friendly design.

![Elderly Care](https://img.shields.io/badge/Elderly%20Care-Landing%20Page-2b6cb0?style=flat-square)

## Features

- **In-home nursing focus** — Messaging and layout tailored to nurse visits, care summaries, and family updates
- **Accessible** — High contrast, readable typography, and WCAG-oriented structure
- **Responsive** — Works on desktop, tablet, and mobile
- **Static HTML/CSS** — No build step; easy to host anywhere

## Tech Stack

- **Static landing page**
  - HTML5
  - CSS3 (custom properties, Grid, Flexbox)
  - Vanilla JavaScript (minimal, for footer year)

- **Next.js prototype (App Router)**
  - Next.js 14 (App Router, TypeScript)
  - React 18
  - Tailwind CSS 3
  - Lucide React icons

## Quick Start – static HTML

### Option 1: Local server (recommended)

```bash
# From project root
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

### Option 2: Open directly

Open `index.html` in a browser (double-click or drag into the window).

## Quick Start – Next.js prototype

From the project root:

```bash
cd "elderly-care-web"
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Project Structure

```
.
├── index.html              # Static single-page landing (structure, styles, content)
├── elderly-care-web/       # Next.js + Tailwind functional prototype
│   ├── src/app/page.tsx    # Main App Router page
│   ├── src/components/     # Header, Hero, HowItWorks, Services, ContactSection
│   └── ...                 # Next.js config, Tailwind config, etc.
├── README.md               # This file
└── .gitignore
```

## Pushing to GitHub

This repository is already configured with a remote. To push updates:

```bash
git push origin main
```

## License

Proprietary — Elderly Care Health, Inc.

---

**Elderly Care** — *Trusted nurses who come to you for safe, calmer aging at home.*
