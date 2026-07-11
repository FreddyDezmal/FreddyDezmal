import { TimelineMilestone } from "@/types/content";

/**
 * Only two milestones carry a date: "Started Studying IT" (given directly)
 * and REP (its repo's actual created/updated dates, already used on its
 * project card). The rest are real, ordered correctly, but left undated —
 * inventing exact months for them would be a fabricated claim, not a
 * design choice.
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
    date: "March 2026",
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
    title: "Today",
    description: "Building the next thing — and still learning in public.",
  },
];


