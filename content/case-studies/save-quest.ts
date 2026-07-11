import { CaseStudy } from "@/types/content";
import { saveQuest } from "@/content/projects/save-quest";

export const saveQuestCaseStudy: CaseStudy = {
  project: saveQuest,
  sections: [
    {
      heading: "Problem",
      body: "Saving money is a habit problem before it's a finance problem — most people who set a savings goal abandon it within weeks because the feedback loop is slow and invisible. SaveQuest reframes saving as a game: every deposit earns XP, builds a streak, and moves the user toward a level or achievement, giving the habit the kind of immediate, visible feedback that willpower alone can't provide.",
    },
    {
      heading: "Challenge",
      body: "Because SaveQuest moves real money, the usual SaaS tolerance for 'eventually consistent' data doesn't apply — a duplicated deposit or a double-counted XP award isn't a cosmetic bug, it's a financial-correctness bug. The engineering challenge was to get banking-grade correctness (idempotent writes, race-condition-safe concurrent updates, database-enforced tenant isolation) out of a lean Supabase/Vercel stack, without the cost or operational overhead of a heavier financial-services architecture.",
    },
    {
      heading: "Research",
      body: "Before writing application code, the risk areas were mapped explicitly: network retries creating duplicate deposits, two concurrent requests both trying to update the same streak or award the same XP, and the possibility of one user's queries ever touching another user's data. Each of those pointed toward solving the problem at the database layer — via constraints, row locks, and Row-Level Security — rather than trying to enforce correctness in application code, which is easier to get wrong and easier to bypass.",
    },
    {
      heading: "Architecture",
      body: "The frontend is Next.js 14 with the App Router; the backend is Next.js API Route Handlers running as edge-safe serverless functions, with no separate backend service to operate. Data lives in PostgreSQL via Supabase, with business logic pushed down into PostgreSQL RPC functions and triggers rather than kept purely in application code — including 8 composite indexes tuned for the app's actual query patterns. Supabase Auth handles email/password authentication with confirmed-email enforcement and SSR cookie handling, and the app ships as a PWA hosted on Vercel, with PostHog for product analytics and Sentry for error monitoring.",
    },
    {
      heading: "Technology Stack",
      body: "Next.js 14, React, and TypeScript on the frontend with Tailwind CSS for styling; Next.js API Route Handlers as the backend; PostgreSQL via Supabase (RPC functions, triggers, composite indexes) as the database; Supabase Auth for authentication; and Vercel, PostHog, and Sentry for infrastructure, analytics, and error monitoring respectively. The stack is deliberately narrow — one platform (Supabase) covers database, auth, and RLS together, which is what keeps a financial-grade data layer achievable without a dedicated backend team.",
    },
    {
      heading: "Engineering Decisions",
      body: "Three decisions carried the most weight. First, dashboard reads were consolidated from 14 separate database round-trips into a single get_dashboard_data() PostgreSQL RPC, cutting dashboard load latency by roughly 87%. Second, financial-grade concurrency was enforced at the database level: deposits carry UUID idempotency keys under a unique constraint so retried requests can't create duplicate transactions, XP awards use ON CONFLICT DO NOTHING against a unique (user_id, source_type, source_id) constraint, and concurrent streak updates take a SELECT FOR UPDATE row lock. Third, every table enforces auth.uid() = user_id via Row-Level Security, with the small set of privileged operations that must bypass RLS — XP deduction, shield purchase — implemented as SECURITY DEFINER functions with explicit ownership guards rather than broadening the RLS policy itself.",
    },
    {
      heading: "Problems Encountered",
      body: "An independent production-readiness audit scored the system 6.6/10 and flagged three blocking issues. All three were resolved by Sprint 13, the project's final sprint — closing out the concurrency and idempotency hardening work right before it mattered most, rather than leaving it as a known gap.",
    },
    {
      heading: "Trade-offs",
      body: "Using SECURITY DEFINER functions for privileged writes is a scoped trade-off: it deliberately bypasses RLS for a small, explicit set of operations in exchange for keeping the general-purpose RLS policy strict everywhere else, rather than loosening it to accommodate edge cases. Similarly, consolidating the dashboard into one RPC trades some query-level flexibility — individual dashboard widgets can no longer be fetched or cached independently — for a large, measurable latency win, which was the right trade for a page every user hits on every visit.",
    },
    {
      heading: "Lessons Learned",
      body: "This section is being finalized — check back soon for the retrospective on what SaveQuest's 13 sprints actually taught.",
    },
    {
      heading: "Future Roadmap",
      body: "This section is being finalized — the next set of planned improvements will be published here shortly.",
    },
  ],
};
