import { Project } from "@/types/content";

export const rep: Project = {
  slug: "rep",
  name: "REP",
  category: "Fitness / Habit Tracking Web App",
  description:
    "A fitness tracking platform that lets users create custom workouts, log sessions in real time with progress tracking, and build training streaks through a visual calendar system — turning consistency into a gamified habit.",
  technologies: ["Vanilla JavaScript", "HTML", "CSS", "Supabase", "PostgreSQL"],
  achievements: [
    "Row-Level Security data isolation: Supabase RLS policies enforce user-scoped data access at the database level, eliminating the need for server-side authorization logic.",
    "Soft-delete pattern with triggers: exercises and workouts use database triggers to cascade soft-deletes, preventing orphaned references while preserving audit history.",
    "Real-time session timer: elapsed-time tracking with interval-based updates and set-level completion states, plus progress-bar visual feedback during active workouts.",
  ],
  metrics: [
    { label: "Dependencies", value: "Zero external JS (Supabase SDK only)" },
    { label: "Validation", value: "Frontend + DB (RLS + CHECK constraints)" },
    { label: "Built", value: "Apr 12 – Apr 29, 2026" },
  ],
  quote: {
    text: "User-scoped data access is enforced entirely at the database layer via RLS — no server-side authorization logic required.",
    attribution: "REP architecture notes",
  },
  links: {
    caseStudy: "/work/rep",
    github: "https://github.com/FreddyDezmal/workout-tracker",
  },
  featured: true,
};
