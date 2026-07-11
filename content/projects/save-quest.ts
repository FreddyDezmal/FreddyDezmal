import { Project } from "@/types/content";

export const saveQuest: Project = {
  slug: "save-quest",
  name: "SaveQuest",
  category: "Fintech PWA / Full-Stack Web App",
  description:
    "A web-based gamified savings platform where users set financial goals, make deposits, and earn XP, levels, achievements, and streaks — turning saving money into a habit through game mechanics rather than willpower.",
  technologies: [
    "Next.js 14",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Vercel",
    "PostHog",
    "Sentry",
  ],
  achievements: [
    "Dashboard query consolidation: reduced dashboard load from 14 separate database round-trips to 2 by consolidating all data fetching into a single get_dashboard_data() PostgreSQL RPC — an 87% reduction in network latency on page load.",
    "Financial-grade concurrency and idempotency: deposits use UUID idempotency keys with a unique database constraint to prevent duplicate transactions on retries; XP awards use ON CONFLICT DO NOTHING against a unique (user_id, source_type, source_id) constraint; concurrent streak updates use SELECT FOR UPDATE row locking. Verified in an independent production readiness audit.",
    "Row Level Security with SECURITY DEFINER privilege separation: every table enforces auth.uid() = user_id at the PostgreSQL level. Privileged operations (XP deduction, shield purchase) use SECURITY DEFINER functions with explicit ownership guards, bypassing RLS safely while keeping the hardened update policy intact for direct client access.",
  ],
  metrics: [
    { label: "Engineering Sprints", value: "13" },
    { label: "SQL Migrations", value: "37" },
    { label: "Dashboard Latency", value: "-87% (14 → 2 queries)" },
    { label: "Signup → Goal", value: "41.7%" },
    { label: "Goal → First Deposit", value: "20%" },
    { label: "Analytics Footprint", value: "~2,340 events/mo (0.2% of free tier)" },
  ],
  quote: {
    text: "14 database round-trips on the dashboard, consolidated to 2 — an 87% cut in load latency.",
    attribution: "SaveQuest engineering log, Sprint 13",
  },
  links: {
    caseStudy: "/work/save-quest",
    liveDemo: "https://save-quest-rose.vercel.app",
    // No public GitHub repo linked yet — omitted rather than guessed.
  },
  featured: true,
};
