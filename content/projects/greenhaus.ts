import { Project } from "@/types/content";

export const greenhaus: Project = {
  slug: "greenhaus",
  name: "Greenhaus Storefront",
  category: "Internship Assessment / Full-Stack Web App — E-Commerce Catalogue & Cart",
  description:
    "Task 4 of my Datheon internship assessment: a storefront over FakeStoreAPI with a React + TypeScript frontend and an ASP.NET Core 10 backend-for-frontend. The server re-prices every checkout from the catalogue and never trusts client prices; checkouts are idempotent, accounts use server-side sessions, and the API runs on PostgreSQL in a Docker container on Render. I built it phase by phase from nine engineering prompts I wrote to direct an AI coding agent, all committed in the repo. Still being built: after a security audit, its remediation and CI that gates every deploy, the latest work restricts and encrypts database access and adds verified manual backups, with a rehearsed plan for moving the free-tier database before it expires.",
  technologies: [
    "C#",
    "ASP.NET Core 10",
    "Entity Framework Core",
    "PostgreSQL",
    "SQLite",
    "ASP.NET Core Identity",
    "React 19",
    "TypeScript",
    "Vite",
    "xUnit",
    "Vitest",
    "Playwright",
    "Docker",
    "GitHub Actions",
  ],
  achievements: [
    "Server-authoritative checkout: the client sends the total the shopper saw (expectedTotal), the server re-prices from the catalogue with decimal arithmetic and answers 409 with a fresh quote if they differ, so a week-old cart is never charged at stale prices. The client mirrors the rules in integer cents so both sides agree to the cent.",
    "Idempotent checkout via an Idempotency-Key header backed by a unique partial index, so a retried or double-submitted request returns the original order instead of placing a second one.",
    "Ran a full security audit (20 findings) and remediated it in code: server-side sessions with single-use rotating refresh tokens, per-account sign-in throttling instead of lockout, IPv6 /64 rate-limit partitions, a capped connection pool, a least-privilege database role, TLS-required database connections and external database access limited to a single IP.",
    "Prompt-engineered delivery: nine phase prompts (about 13,800 words, in Documentation/Prompts) take the build from foundation through validation, database and auth, frontend, testing, availability, deployment, security audit and remediation. Each one sets audit-before-change steps, constraints and a definition of done, and each phase's results are recorded in the repo's docs.",
  ],
  highlights: [
    "Server re-prices every checkout; 409 on stale totals",
    "Idempotent checkout with Idempotency-Key",
    "Built phase by phase from 9 engineering prompts",
  ],
  // Test counts are from Documentation/Testing.md §2a (25 Oct 2026),
  // the pre-CI verification run of the full suites.
  metrics: [
    { label: "Backend Tests", value: "416 passing (xUnit, incl. PostgreSQL)" },
    { label: "Frontend Tests", value: "299 passing (Vitest)" },
    { label: "Browser Tests", value: "21 passing (Playwright, production bundle)" },
  ],
  links: {
    github: "https://github.com/FreddyDezmal/datheon-task-4",
    liveDemo: "https://datheon-task-4-1.onrender.com",
  },
  featured: true,
  status: "ongoing",
};
