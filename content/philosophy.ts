import { PhilosophyPrinciple } from "@/types/content";

/**
 * DRAFT NOTICE: every "example" below is a real, verifiable fact from
 * the actual projects — nothing invented. The "belief" framing around
 * each one is a first pass written to fit the evidence, not Mohau's own
 * words. Read this in your own voice before it goes live; tighten or
 * replace any belief statement that doesn't actually sound like you.
 */
export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    title: "Security",
    belief:
      "Authorization is a database concern first, an application concern second. If the only thing standing between one user's data and another's is a line of application code, that's one missed check away from a breach.",
    example:
      "SaveQuest, StudyAI, and REP all enforce access control with PostgreSQL Row-Level Security rather than relying solely on route-level checks — auth.uid() = user_id is evaluated by the database itself, so a bug in a handler can't leak another user's data.",
  },
  {
    title: "Reliability",
    belief:
      "Correctness has to hold under concurrency, not just under normal load — especially anywhere money or shared state is involved. A system that's correct 99% of the time is a system that's wrong on exactly the requests that matter most.",
    example:
      "SaveQuest's deposits carry UUID idempotency keys and use SELECT FOR UPDATE row locks so retried or concurrent requests can't double-write. Advanced Events wraps ticket booking in atomic MongoDB transactions so two concurrent requests for the last ticket can't both succeed.",
  },
  {
    title: "Maintainability",
    belief:
      "Explicit, separated layers beat clever shortcuts — even in a small project. The code that's easiest to write is rarely the code that's easiest to change six months later.",
    example:
      "BugTracker keeps a dedicated Storage.js data layer and Utils.js UI-helper layer despite being a small client-only app. Pocket Circle models contribution status as an explicit state machine (PENDING → PAID/MISSED/LATE) instead of ad hoc status strings.",
  },
  {
    title: "Scalability",
    belief:
      "Scale the parts that actually need it, and defer the rest with a documented reason why. Premature infrastructure is its own kind of technical debt.",
    example:
      "StudyAI pushes semantic search into pgvector with HNSW indexing inside Postgres rather than standing up a separate vector database on day one — with an explicit roadmap for when a dedicated vector store or read replicas would actually be justified, around 10M+ vectors.",
  },
  {
    title: "Accessibility",
    belief:
      "Accessibility is a ship criterion, not a follow-up audit. Keyboard navigation and focus handling are cheapest to get right the first time they're built, not after the fact.",
    example:
      "This site's own navigation closes on Escape, marks the active route with aria-current, and includes a skip-to-content link — the kind of detail that either exists from the start or quietly never gets added.",
  },
  {
    title: "Simplicity",
    belief:
      "Fewer moving parts is a feature, not a limitation. Every dependency, service, and abstraction has to earn its place by solving a real problem the simpler option couldn't.",
    example:
      "REP ships as a single-page app with zero external JS dependencies beyond the Supabase SDK. Advanced Events uses framework-free custom CSS rather than pulling in a utility framework for a project that didn't need one.",
  },
];
