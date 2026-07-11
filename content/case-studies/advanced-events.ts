import { CaseStudy } from "@/types/content";
import { advancedEvents } from "@/content/projects/advanced-events";

export const advancedEventsCaseStudy: CaseStudy = {
  project: advancedEvents,
  sections: [
    {
      heading: "Problem",
      body: "Event ticketing is a scarce-inventory problem wearing a UI: a fixed number of tickets, an unpredictable number of simultaneous buyers, and an admin side that needs real visibility into bookings, analytics, and customer inquiries. Advanced Events covers both halves — browsing, booking, and QR-coded tickets for attendees, and event management, analytics, and inquiry handling for admins.",
    },
    {
      heading: "Challenge",
      body: "The core technical risk is the moment two people try to buy the last ticket at the same time — without careful handling, both requests can succeed and the event ends up oversold. The secondary challenge was building the entire admin and customer experience — including role-gated access — without leaning on a frontend framework or a prebuilt admin toolkit.",
    },
    {
      heading: "Research",
      body: "The overbooking question came down to where to check ticket availability: trusting a client-side count invites race conditions, so the research pointed toward doing the check and the decrement atomically inside the database itself, using MongoDB's transaction support to re-fetch and validate state within the transaction rather than before it.",
    },
    {
      heading: "Architecture",
      body: "The server renders EJS templates directly, with Chart.js for admin analytics visualizations and hand-written CSS for styling — no frontend framework. Express.js handles routing, MongoDB with Mongoose models the data, and express-session with bcrypt handles authentication, gated by layered middleware (requireAuth → requireAdmin) on protected routes. Supporting services include Multer for file uploads, a QR code generator for tickets, PDFKit for exports, and Nodemailer for email.",
    },
    {
      heading: "Technology Stack",
      body: "EJS, Chart.js, and custom CSS on the frontend; Node.js and Express.js on the backend; MongoDB with Mongoose for data; express-session and bcrypt for auth; Multer, QR code generation, PDFKit, and Nodemailer as supporting services.",
    },
    {
      heading: "Engineering Decisions",
      body: "Three decisions stand out. Overbooking is prevented at the database level using MongoDB's session.startTransaction(): the transaction re-fetches event state and rolls back if tickets are no longer available, so two concurrent requests for the last ticket genuinely cannot both succeed. The entire CSS design system was built by hand — no utility framework — cleanly separating layout, theming, and component styling, and accounting for roughly 29.7% of the repository. And access control runs through layered session middleware (requireAuth, then requireAdmin) on every protected route, with the password field marked select: false so it's never accidentally returned from a query.",
    },
    {
      heading: "Problems Encountered",
      body: "This section is being finalized — the specific issues hit during development haven't been documented yet.",
    },
    {
      heading: "Trade-offs",
      body: "Session-based authentication (express-session) was chosen over a token-based approach like JWT, trading the horizontal-scalability and statelessness a token gives up for simpler server-side session invalidation and revocation — a reasonable trade for a single-server admin-heavy app. Building the CSS design system from scratch trades the speed of a utility framework for tighter control over bundle size and visual consistency, at the cost of more upfront styling work.",
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
