import { TimelineMilestone } from "@/types/content";

/**
 * Dates here must agree with the project cards — REP's comes from the
 * "Built" metric on its card (Apr 12 – Apr 29, 2026). Where a date isn't
 * known, leave it off rather than inventing one.
 */
export const timelineMilestones: TimelineMilestone[] = [
  {
    title: "Started Studying IT",
    date: "Early 2024",
    description: "Began a degree in IT at BelgiumCampus ITVersity.",
  },
  {
    title: "BugTracker",
    date: "April 2025",
    description:
      "First shipped project: a client-side bug and issue tracker built with vanilla JavaScript and localStorage — no backend, no framework, just working software.",
    projectSlug: "bug-tracker",
  },
  {
    title: "Advanced Events",
    date: "March 2026",
    description:
      "A full-stack event ticketing platform with Express, MongoDB, and atomic transactions to prevent overbooking — the first project with a real backend and a real concurrency problem to solve.",
    projectSlug: "advanced-events",
  },
  {
    title: "REP",
    date: "April 2026",
    description:
      "A fitness habit-tracking app built on Supabase, with Row-Level Security handling data isolation entirely at the database layer.",
    projectSlug: "rep",
  },
  {
    title: "StudyAI",
    date: "April 2026",
    description:
      "A multi-tenant AI SaaS for learning workflows — collaborative editing, semantic search over pgvector, and AI cost optimization through prompt caching and model routing.",
    projectSlug: "study-ai",
  },
  {
    title: "Architect Wealth Suite",
    date: "April 2026",
    description:
      "A team-built personal finance platform with an AI advisor. I built the automation and reporting layer: scheduled alert, goal, and exchange-rate jobs, an audit-trail middleware, and PDF/CSV reports.",
    projectSlug: "architect-wealth-suite",
  },
  {
    title: "Pocket Circle",
    date: "May 2026",
    description:
      "A rotating savings group coordinator with multi-channel notifications and state-machine-driven contribution tracking, built on Next.js 14 and Prisma.",
    projectSlug: "pocket-circle",
  },
  {
    title: "SaveQuest",
    date: "May 2026",
    description:
      "A gamified savings platform with financial-grade concurrency handling, database-enforced tenant isolation, and an 87% dashboard latency reduction — the most architecturally demanding project so far.",
    projectSlug: "save-quest",
  },
  {
    title: "SEN371 E-Commerce",
    date: "August 2026",
    description:
      "A four-person team build of an online store on ASP.NET Core, EF Core, PostgreSQL, and React — my first project integrating other people's pull requests, including a mid-project backend migration from Node.js to C#.",
    projectSlug: "e-commerce",
  },
  {
    title: "Greenhaus Storefront",
    date: "October 2026",
    description:
      "Task 4 of my Datheon internship assessment, built solo on ASP.NET Core 10 and React from nine engineering prompts I wrote: server re-priced, idempotent checkout, server-side sessions, and a self-run security audit with its remediation, deployed on Render behind CI that gates every deploy.",
    projectSlug: "greenhaus",
    status: "ongoing",
  },
  {
    title: "CartGuardian",
    date: "October 2026",
    description:
      "A two-person PayPal AI Hackathon 2026 entry with Charity Hlungwani, which I'm building with an AI coding agent I direct: an AI that argues for and against a purchase before checkout, with a PayPal Sandbox checkout locked to the evaluated price. Real AI and Sandbox payments work end to end; persistence and hosting come next.",
    projectSlug: "cartguardian",
    status: "ongoing",
  },
  {
    title: "Today",
    description: "Building the next thing — and still learning in public.",
  },
];


