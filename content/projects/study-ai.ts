import { Project } from "@/types/content";

export const studyAI: Project = {
  slug: "study-ai",
  name: "StudyAI",
  category: "SaaS / EdTech — AI-Assisted Study & Knowledge Workflows",
  description:
    "An AI-powered, multi-tenant SaaS for learning workflows — collaborative notes, semantic search, and AI-generated flashcards and quizzes, built as a web frontend, API, and realtime gateway.",
  technologies: [
    "Next.js",
    "React",
    "Yjs (y-websocket)",
    "Zustand",
    "Node.js",
    "TypeScript",
    "Express",
    "WebSocket (ws)",
    "BullMQ",
    "PostgreSQL",
    "pgvector",
    "Redis",
    "ClickHouse",
    "S3-compatible storage",
    "next-auth",
  ],
  achievements: [
    "Strong tenant isolation: Postgres Row-Level Security with app context variables enforces multi-tenant boundaries at the database level rather than relying on application-layer filtering.",
    "Integrated semantic search at scale: pgvector with HNSW indexing inside Postgres handles embeddings and semantic search directly — no separate vector database — designed for 10M+ vectors.",
    "AI cost and performance optimization: prompt caching (Claude extended cache) for roughly a 70% cost reduction, plus model routing between Haiku and Sonnet to route structured tasks to the far cheaper model.",
  ],
  metrics: [
    { label: "AI Cost Reduction", value: "~70% (prompt caching)" },
    { label: "Model Routing Savings", value: "~12x cheaper on Haiku (~$0.80 / 1k flashcards)" },
    { label: "Vector Search Scale", value: "10M+ vectors (pgvector + HNSW)" },
    { label: "Services", value: "Web · API · Realtime Gateway (3 processes)" },
  ],
  quote: {
    text: "Prompt caching cut AI costs by roughly 70%; routing structured tasks to a cheaper model cut them further.",
    attribution: "StudyAI architecture notes",
  },
  links: {
    caseStudy: "/work/study-ai",
    github: "https://github.com/FreddyDezmal/studyai",
  },
  featured: true,
};
