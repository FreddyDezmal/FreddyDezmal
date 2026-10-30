import { Project } from "@/types/content";

export const cartGuardian: Project = {
  slug: "cartguardian",
  name: "CartGuardian",
  category: "Team Hackathon Project / AI + Payments Web App",
  description:
    "A two-person team entry for the PayPal AI Hackathon 2026, with Charity Hlungwani. CartGuardian puts a purchase on trial before you pay: an AI argues the strongest honest case for and against buying, labels what each point rests on (your input, general knowledge, or an assumption), and then offers a PayPal Sandbox checkout locked to the exact price that was evaluated. It's a TypeScript monorepo with a React 19 + Vite frontend, an Express 5 API and a shared Zod contract. Everything in the repo so far is my work: I'm building it with an AI coding agent that I direct, and the implementation plan it works from is committed in docs/PLAN.md. Charity's part is still to come. Still being built: real AI and PayPal Sandbox work end to end locally, and persistence and hosting come next, ahead of the 12 November submission deadline.",
  technologies: [
    "TypeScript",
    "React 19",
    "Vite",
    "Express 5",
    "Zod",
    "Google Gemini",
    "PayPal Orders v2",
    "PayPal v6 Web SDK",
    "Vitest",
    "Supertest",
  ],
  achievements: [
    "The AI can't touch the money: the browser sends only an evaluation ID when creating an order, the server reads the amount it stored, and the AI's output schema has no money field. Cost per use is computed by the server, not guessed by the model.",
    "Verified, idempotent capture: a capture only succeeds if PayPal reports the order and capture COMPLETED and the amount, currency and reference match. Repeat or concurrent captures hit PayPal once, guarded by a deterministic PayPal-Request-Id.",
    "Structured output that isn't trusted: Gemini returns JSON-schema-constrained output, which the server re-validates with Zod (with one repair attempt). Post-generation guardrails rewrite and flag absolute claims like \"guaranteed\" or \"risk-free\" that slip past the prompt.",
    "Pluggable AI adapter: Gemini with per-model timeouts and fallbacks, a Claude adapter, and a labelled rule-based mock that runs without any key, so the app can be demoed even if a provider fails.",
  ],
  highlights: [
    "AI argues for and against before you pay",
    "Server owns the amount; the model never sees a price field",
    "Verified, idempotent PayPal capture",
  ],
  // From docs/PLAN.md §0 (30 Oct 2026): the first live end-to-end run.
  metrics: [
    { label: "End to End", value: "Gemini + PayPal Sandbox working (30 Oct 2026)" },
    { label: "First Real Trial", value: "4.7 s (Gemini, single run)" },
    { label: "Team", value: "2 members" },
    { label: "Submission Deadline", value: "12 Nov 2026" },
  ],
  links: {
    github: "https://github.com/FreddyDezmal/CartGuardian",
  },
  featured: false,
  status: "ongoing",
};
