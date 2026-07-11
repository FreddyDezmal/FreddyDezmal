import { NavItem } from "@/types/content";

export const siteConfig = {
  name: "Mohau Frederick Mokoena",
  title: "Mohau Frederick Mokoena — Software Engineer",
  tagline: "Turning ideas into secure, scalable software.",
  description:
    "I design and build production-quality software focused on security, scalability, and thoughtful product engineering.",
  url: "https://mohaumokoena.dev",
  socials: {
    github: "https://github.com/FreddyDezmal",
    linkedin: "https://www.linkedin.com/in/mohau-frederick-mokoena",
    email: "mohaufrederick@gmail.com",
  },
} as const;

export const navConfig: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Timeline", href: "/timeline" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
