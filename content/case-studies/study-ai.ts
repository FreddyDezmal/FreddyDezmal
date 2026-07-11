import { CaseStudy } from "@/types/content";
import { studyAI } from "@/content/projects/study-ai";

export const studyAICaseStudy: CaseStudy = {
  project: studyAI,
  sections: [
    {
      heading: "Problem",
      body: "Learning workflows — notes, flashcards, quizzes, planning — benefit enormously from AI, but most tools bolt AI onto a single-user experience. StudyAI is built from the ground up as multi-tenant SaaS: collaborative notes, semantic search, and AI-generated study material, shared across teams or classes without one tenant ever seeing another's data.",
    },
    {
      heading: "Challenge",
      body: "Two constraints pull in opposite directions in a product like this: strict per-tenant data isolation has to hold even as AI features get more powerful, and AI inference itself has to stay cheap enough to run at SaaS margins rather than eating the business alive on API costs.",
    },
    {
      heading: "Research",
      body: "For vector storage, the choice was between a dedicated vector database and keeping embeddings inside Postgres — pgvector with HNSW indexing was evaluated as capable of handling 10M+ vectors before a dedicated store would even be necessary, which avoided adding a whole extra system for a scale the product hadn't reached yet. For AI cost, the research question was where inference spend actually goes: prompt caching and routing structured, low-complexity tasks to a cheaper model both came out of that analysis.",
    },
    {
      heading: "Architecture",
      body: "The frontend is Next.js and React, with Yjs (via y-websocket) powering CRDT-based real-time collaborative editing and Zustand for client state. The backend is split into three services: a Node/TypeScript Express API, a dedicated WebSocket gateway (ws) for realtime traffic, and BullMQ-backed workers for background AI jobs. PostgreSQL with pgvector holds relational data and embeddings together, Redis handles streams, pub/sub, and quota enforcement, ClickHouse serves analytics, and an S3-compatible store holds files. Auth uses JWT access and refresh token rotation with next-auth on the frontend, layered with RBAC and Postgres Row-Level Security for tenant boundaries.",
    },
    {
      heading: "Technology Stack",
      body: "Next.js, React, Yjs/y-websocket, and Zustand on the frontend; Node.js, TypeScript, Express, ws, and BullMQ on the backend; PostgreSQL with pgvector, Redis, ClickHouse, and S3-compatible storage for data; JWT with next-auth, RBAC, and Postgres RLS for auth. Three independently running services (web, API, realtime gateway) rather than one monolith, which is what lets the WebSocket layer scale separately from request/response API traffic.",
    },
    {
      heading: "Engineering Decisions",
      body: "Three decisions define the system. Tenant isolation is enforced with Postgres Row-Level Security using app-level context variables, so multi-tenant boundaries are guaranteed by the database rather than trusted to application code. Semantic search runs on pgvector with HNSW indexing inside the same Postgres instance rather than a separate vector database, built to handle 10M+ vectors. And AI spend is actively managed: prompt caching (Claude's extended cache) cuts costs by roughly 70%, and model routing sends structured, low-complexity tasks like flashcard generation to Haiku instead of Sonnet — around 12x cheaper, saving an estimated $0.80 per 1,000 flashcard generations.",
    },
    {
      heading: "Problems Encountered",
      body: "This section is being finalized — the specific issues hit during development haven't been documented yet.",
    },
    {
      heading: "Trade-offs",
      body: "Keeping embeddings in Postgres via pgvector trades some of the raw performance ceiling and specialized tooling of a dedicated vector database for a simpler operational footprint — one database to run and back up instead of two, with a clear, documented point (10M+ vectors) at which that trade would need revisiting. Routing structured tasks to a cheaper model is a similar trade: accepting a lower-capability model for tasks that don't need Sonnet's reasoning, in exchange for a meaningfully lower AI cost base.",
    },
    {
      heading: "Lessons Learned",
      body: "This section is being finalized — check back soon for the retrospective.",
    },
    {
      heading: "Future Roadmap",
      body: "The scaling plan is staged to actual load rather than built out upfront: at 0–1,000 users, the current single-instance setup is sufficient; from 1,000–10,000 users, the plan is read replicas and a Redis cluster; from 10,000–100,000 users, the roadmap moves to EKS with KEDA-based autoscaling. Each stage only gets built when the previous one's headroom runs out.",
    },
  ],
};
