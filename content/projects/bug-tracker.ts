import { Project } from "@/types/content";

export const bugTracker: Project = {
  slug: "bug-tracker",
  name: "BugTracker",
  category: "Web App / Issue Management Tool",
  description:
    "A lightweight, client-side bug and issue tracker for teams to create, assign, and track issues across projects — with status (open/overdue/resolved), priority, assignee, and target resolution dates surfaced on a dashboard overview.",
  technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  achievements: [
    "Client-side persistence with smart state management: full CRUD backed by localStorage, with all data stored as JSON objects and proper error handling for serialization failures.",
    "Real-time filtering and computed status: issue status (open → overdue → resolved) is computed dynamically from dates and resolution state; full-text search scans summary, description, and ID.",
    "Multi-view architecture: modular separation of concerns with a dedicated Storage.js data layer, Utils.js UI helpers, and page-specific logic, with reusable form patterns for creation and edit modes.",
  ],
  metrics: [
    { label: "Bundle Size", value: "~50KB total (8.3KB Storage.js, 6.1KB Utils.js, 15KB CSS)" },
    { label: "Response Time", value: "Instant (client-side only)" },
    { label: "Test Coverage", value: "Not yet implemented" },
  ],
  links: {
    caseStudy: "/work/bug-tracker",
    github: "https://github.com/FreddyDezmal/Bug-Tracker-App",
  },
  featured: false,
};
