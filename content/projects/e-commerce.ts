import { Project } from "@/types/content";

export const eCommerce: Project = {
  slug: "e-commerce",
  name: "SEN371 E-Commerce",
  category: "Team Project / Full-Stack Web App — Online Store",
  description:
    "A four-person university team project: an online store with product catalogue, cart, checkout, and admin order management, built as an ASP.NET Core Web API over PostgreSQL with a React + TypeScript frontend. I owned the repository and integrated the team's work. The backend was migrated mid-project from Node.js/Express/Prisma to C#/EF Core, and the app is deployed on Render.",
  technologies: [
    "C#",
    "ASP.NET Core 8",
    "Entity Framework Core",
    "PostgreSQL",
    "React 19",
    "TypeScript",
    "Vite",
    "xUnit",
    "Vitest",
    "Docker",
    "GitHub Actions",
  ],
  achievements: [
    "Fixed optimistic locking on stock decrements: the original [Timestamp] byte[] RowVersion is a SQL Server pattern that PostgreSQL never populates, so the check compared empty values and protected nothing. Replaced it with PostgreSQL's xmin system column via UseXminAsConcurrencyToken.",
    "Added a CI job that applies every EF Core migration to a real PostgreSQL 16 container, because the InMemory test provider never runs migrations and missed an \"xmin conflicts with a system column name\" failure.",
    "Moved auth rate limiting from one global bucket (20 requests per 15 minutes for the whole deployment) to per-IP partitions returning 429, and restored a backend test project that a duplicate class had made uncompilable.",
  ],
  highlights: [
    "PostgreSQL xmin optimistic concurrency on stock",
    "CI applies migrations to a real PostgreSQL 16",
    "Four-person team, PR-based integration",
  ],
  // Test counts come from the Milestone 5 exit-gate commit (Sep 2026).
  // Deployed on Render (static frontend + Dockerised API), Supabase PostgreSQL.
  metrics: [
    { label: "Backend Tests", value: "90 passing (xUnit)" },
    { label: "Frontend Tests", value: "290 passing (Vitest)" },
    { label: "Team", value: "4 members, 40 merged PRs" },
  ],
  links: {
    github: "https://github.com/FreddyDezmal/E-Commerce-Application",
    liveDemo: "https://sen371-ecommerce-web.onrender.com/",
  },
  featured: false,
};
