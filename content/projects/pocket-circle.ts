import { Project } from "@/types/content";

export const pocketCircle: Project = {
  slug: "pocket-circle",
  name: "Pocket Circle",
  category: "Fintech / Web App — Rotating Savings Coordination Platform",
  description:
    "A rotating savings group manager that helps informal community groups organize pooled contributions, track member payments, and manage fair payout rotations — using invite codes, payment tracking, and multi-channel notifications.",
  technologies: [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Supabase Auth",
    "Resend",
  ],
  achievements: [
    "Multi-channel notification pipeline: in-app, email (Resend), and SMS notifications with built-in retry and status tracking (PENDING → SENT/FAILED).",
    "Flexible contribution scheduling: weekly, biweekly, and monthly contribution cycles via state machines (PENDING → PAID/MISSED/LATE) and payout slot management.",
    "Invite-based group isolation: unique invite codes (CUID) with Prisma relations and cascade deletes keep groups isolated while still supporting multi-group membership.",
  ],
  // No public metrics have been published for this project yet — listing
  // structural facts rather than inventing numbers.
  metrics: [
    { label: "Schema Evolution", value: "Versioned Prisma migrations" },
    { label: "Contribution Cycles", value: "Weekly / biweekly / monthly" },
    { label: "Offline Support", value: "PWA" },
  ],
  links: {
    caseStudy: "/work/pocket-circle",
    github: "https://github.com/FreddyDezmal/PocketCircle",
  },
  featured: false,
};
