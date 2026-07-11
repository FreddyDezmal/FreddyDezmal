import { CaseStudy } from "@/types/content";
import { rep } from "@/content/projects/rep";

export const repCaseStudy: CaseStudy = {
  project: rep,
  sections: [
    {
      heading: "Problem",
      body: "Fitness consistency, like saving money, is a habit problem — people who track workouts on paper or in scattered notes lose the immediate feedback that keeps a streak going. REP addresses this directly: custom workouts, real-time session logging, and a visual calendar of streaks, turning a workout habit into something visibly built session by session.",
    },
    {
      heading: "Challenge",
      body: "The challenge was building a genuinely robust, multi-user data model — user-scoped workouts, sessions, and history that must never leak between accounts — without reaching for a frontend framework, and without writing a custom authorization layer by hand.",
    },
    {
      heading: "Research",
      body: "The key research question was where to put authorization logic: in custom server-side middleware, or pushed down into the database via Supabase's Row-Level Security. RLS won, which shaped the rest of the data model. A second question was how to handle deletion — hard deletes would break historical session references, so a soft-delete pattern backed by database triggers was chosen to preserve audit history instead.",
    },
    {
      heading: "Architecture",
      body: "REP is a single-page app built in vanilla JavaScript with a custom design system in HTML/CSS, talking directly to Supabase (PostgreSQL) through its client SDK — no separate backend service. Supabase Auth handles email/password authentication and password reset. Row-Level Security policies scope every query to the authenticated user, and database triggers cascade soft-deletes across related exercises and workouts so historical data stays intact even after an item is 'deleted.'",
    },
    {
      heading: "Technology Stack",
      body: "Vanilla JavaScript, HTML, and CSS on the frontend, with Supabase (PostgreSQL) as both backend and database, and Supabase Auth for authentication. The entire stack has exactly one external dependency: the Supabase SDK.",
    },
    {
      heading: "Engineering Decisions",
      body: "Three decisions carry the architecture. Row-Level Security policies enforce user-scoped data access at the database level, which eliminates the need for a hand-written server-side authorization layer entirely. Soft-delete with cascading triggers means exercises and workouts are never hard-deleted, preventing orphaned references while preserving audit history. And the real-time session timer uses interval-based elapsed-time tracking with set-level completion states, giving live progress-bar feedback during an active workout rather than only showing results after the fact.",
    },
    {
      heading: "Problems Encountered",
      body: "This section is being finalized — the specific issues hit during development haven't been documented yet.",
    },
    {
      heading: "Trade-offs",
      body: "Choosing vanilla JavaScript with zero external dependencies beyond the Supabase SDK trades away framework conveniences — reactive state, component ecosystems, established patterns — for a minimal footprint and no build-step overhead, which is a reasonable trade for an app of this scope. The soft-delete pattern also trades a small amount of query complexity (every read has to account for a deleted_at flag) for never losing historical workout data.",
    },
    {
      heading: "Lessons Learned",
      body: "This section is being finalized — check back soon for the retrospective.",
    },
    {
      heading: "Future Roadmap",
      body: "This section is being finalized — the next set of planned improvements will be published here shortly.",
    },
  ],
};
