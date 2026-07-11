import { Project } from "@/types/content";

export const advancedEvents: Project = {
  slug: "advanced-events",
  name: "Advanced Events",
  category: "Web App / SaaS Platform",
  description:
    "A full-stack event management and ticketing platform where users browse events, book tickets, and receive QR codes, while admins manage events, view analytics, and handle customer inquiries.",
  technologies: [
    "EJS",
    "Chart.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "express-session",
    "bcrypt",
    "Multer",
    "PDFKit",
    "Nodemailer",
  ],
  achievements: [
    "Overbooking prevention via MongoDB transactions: atomic transactions (session.startTransaction()) prevent race conditions so concurrent booking requests for the last ticket cannot both succeed — event state is re-fetched inside the transaction and rolled back if tickets are unavailable.",
    "Bespoke, framework-free CSS design system: custom CSS (29.7% of the repo) with no utility framework, cleanly separating responsive layouts, theming, and component styling.",
    "Role-based access control with session middleware: layered middleware (requireAuth → requireAdmin) enforces authentication and privilege checks on all protected routes, with the password field marked select: false to prevent accidental exposure.",
  ],
  metrics: [
    { label: "Sprint Timeline", value: "4 phases (Foundation → Polish)" },
    { label: "Code Organization", value: "4 models · 6 controllers · 7 routes · 15+ views" },
    { label: "Security", value: "8 threat vectors mitigated" },
  ],
  quote: {
    text: "Atomic MongoDB transactions ensure two concurrent bookings can never claim the same last ticket.",
    attribution: "Advanced Events engineering notes",
  },
  links: {
    caseStudy: "/work/advanced-events",
    github: "https://github.com/FreddyDezmal/Event-Booking",
  },
  featured: true,
};
