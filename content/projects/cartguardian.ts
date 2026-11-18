import { Project } from "@/types/content";

export const cartGuardian: Project = {
  slug: "cartguardian",
  name: "CartGuardian",
  category: "Team Hackathon Project / AI + Payments Web App",
  description:
    "Our two-person entry for the PayPal AI Hackathon 2026, built with Charity Hlungwani and submitted in November. CartGuardian puts a purchase on trial before you pay: paste a product link or enter the details, and an AI argues the strongest honest case for and against buying, labels what each point rests on (your input, general knowledge, or an assumption), and sums it up in a Purchase Confidence Card. It then offers a PayPal Sandbox checkout locked to the exact price that was evaluated. It's a TypeScript monorepo with a React 19 + Vite frontend, an Express 5 API and a shared Zod contract, hosted as one Vercel project with Supabase Postgres behind it. Charity's commits added the Supabase store and the Vercel deployment; mine cover the architecture, the Gemini and PayPal integration, product link import, the Confidence Card and the final redesign, which I built with an AI coding agent I direct, from a plan committed in docs/PLAN.md.",
  technologies: [
    "TypeScript",
    "React 19",
    "Vite",
    "Express 5",
    "Zod",
    "Google Gemini",
    "PayPal Orders v2",
    "PayPal v6 Web SDK",
    "Supabase",
    "Vercel",
    "Vitest",
    "Supertest",
  ],
  achievements: [
    "The AI can't touch the money: the browser sends only an evaluation ID when creating an order, the server reads the amount it stored, and the AI's output schema has no money field. Cost per use is computed by the server, not guessed by the model.",
    "Verified, idempotent capture: a capture only succeeds if PayPal reports the order and capture COMPLETED and the amount, currency and reference match. Repeat or concurrent captures hit PayPal once, guarded by a deterministic PayPal-Request-Id, and Supabase claims each order atomically so two server instances can never capture it twice.",
    "Product link import behind an SSRF guard: store pages are fetched server-side from public addresses only, re-checked on every redirect, with size and time limits. Rewriting the parser to run in linear time took a hostile 2 MB page from 14.6 s to 20 ms. Takealot pages sit behind a Cloudflare robot check, so the importer refuses them with a clear message rather than trying to bypass it.",
    "A Confidence Card with no fake precision: the verdict maps one-to-one from the AI's answer, there's no percentage score because the model only reports low, medium or high confidence, and missing information shows as unknown, never as a point against buying.",
    "Structured output that isn't trusted: Gemini returns JSON-schema-constrained output, which the server re-validates with Zod (with one repair attempt), behind a pluggable adapter with model fallbacks and a labelled mock that runs without any key.",
  ],
  highlights: [
    "AI argues for and against before you pay",
    "Server owns the amount; the model never sees a price field",
    "Verified, idempotent PayPal capture",
  ],
  // From docs/PLAN.md: §0 (30 Oct 2026) and "Status on Tue 10 Nov".
  metrics: [
    { label: "First Real Trial", value: "4.7 s (Gemini, single run)" },
    { label: "Automated Tests", value: "176 (10 Nov 2026)" },
    { label: "Hostile Page Parse", value: "14.6 s → 20 ms" },
    { label: "Team", value: "2 members" },
  ],
  links: {
    github: "https://github.com/FreddyDezmal/CartGuardian",
    liveDemo: "https://cartguardian.vercel.app/",
  },
  featured: false,
};
