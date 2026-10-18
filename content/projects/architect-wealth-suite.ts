import { Project } from "@/types/content";

export const architectWealthSuite: Project = {
  slug: "architect-wealth-suite",
  name: "Architect Wealth Suite",
  category: "Team Project / Fintech Web App — Personal Finance Platform",
  description:
    "A team-built personal finance platform: accounts, cashflow, portfolio tracking, wealth forecasting, and an AI advisor (Atlas) on the Claude API, built with Express 5, MongoDB, and EJS, and deployed on Render. My part was the automation and reporting layer — goals, alerts, budget variance, audit trail, multi-currency conversion, PDF/CSV reports, and the scheduled jobs that drive them — plus integrating a teammate's branch into main.",
  technologies: [
    "Node.js",
    "Express 5",
    "MongoDB",
    "Mongoose",
    "EJS",
    "node-schedule",
    "PDFKit",
    "Claude API",
  ],
  achievements: [
    "Scheduled automation: five background jobs — hourly budget-threshold and anomaly checks, a daily goals-at-risk scan, a daily exchange-rate sync, and monthly digest reports on the 1st — each isolated in its own try/catch so one failure doesn't stop the others.",
    "Audit trail as middleware: every authenticated POST/PUT/PATCH/DELETE is logged after the response finishes, with the action and resource inferred from the method and path, so controllers don't need audit code of their own.",
    "Multi-currency support: daily rates upserted per (base, target, date) with a bulk write, direct lookup with a cross-rate through USD as fallback, and stored fallback rates when no API key is configured.",
  ],
  highlights: [
    "Five scheduled jobs for alerts, goals, FX, and reports",
    "Audit trail captured in middleware, not controllers",
    "PDF and CSV report generation",
  ],
  // No usage or performance numbers in the repo — structural facts only.
  metrics: [
    { label: "Scheduled Jobs", value: "5 (hourly / daily / monthly)" },
    { label: "Report Formats", value: "PDF + CSV" },
    { label: "Team", value: "6 contributors" },
  ],
  links: {
    github: "https://github.com/RyanTPH/INL_Project",
    liveDemo: "https://lux-wealth-suite.onrender.com",
  },
  featured: false,
};
