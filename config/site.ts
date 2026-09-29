import { NavItem } from "@/types/content";

/**
 * The canonical origin used for canonical tags, the sitemap, Open Graph
 * URLs, and JSON-LD. Read from an env var so switching to a custom domain
 * later is a Vercel setting, not a code change. The fallback is the URL
 * the site is actually served from today — pointing canonicals at a
 * domain that doesn't resolve tells search engines to index nothing.
 */
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohaumokoena.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Mohau Frederick Mokoena",
  shortName: "Mohau Mokoena",
  role: "Software Engineer",
  title: "Mohau Frederick Mokoena — Software Engineer",
  tagline: "Turning ideas into secure, scalable software.",
  description:
    "I design and build production-quality software focused on security, scalability, and thoughtful product engineering.",
  /**
   * The hero's positioning line — built from the About page's own words,
   * so it says what kind of engineering Mohau cares about rather than a
   * generic "I build things".
   */
  positioning:
    "I build full-stack products where correctness matters — real money, real user data, real concurrency — and I enforce security at the database, not just in the UI.",
  education: {
    degree: "BIT (Data Science)",
    school: "Belgium Campus ITversity",
  },
  /** The stack that shows up across the featured projects. */
  primaryStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  /**
   * Optional one-line availability note shown in the hero, e.g.
   * "Open to graduate & internship roles in 2027". Left empty until it's
   * confirmed — an unstated status is better than an invented one.
   */
  availability: "Open to graduate roles from 2027",
  url: siteUrl,
  socials: {
    github: "https://github.com/FreddyDezmal",
    linkedin: "https://www.linkedin.com/in/mohau-frederick-mokoena",
    email: "mohaufrederick@gmail.com",
  },
} as const;

export const navConfig: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Timeline", href: "/timeline" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
