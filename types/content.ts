export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  caseStudy?: string;
  github?: string;
  liveDemo?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  logo?: string;
  technologies: string[];
  achievements: string[];
  metrics: ProjectMetric[];
  quote?: {
    text: string;
    attribution: string;
  };
  links: ProjectLinks;
  featured: boolean;
}

export interface CaseStudySection {
  heading:
    | "Problem"
    | "Challenge"
    | "Research"
    | "Architecture"
    | "Technology Stack"
    | "Engineering Decisions"
    | "Problems Encountered"
    | "Trade-offs"
    | "Lessons Learned"
    | "Future Roadmap";
  body: string;
}

export interface CaseStudy {
  project: Project;
  sections: CaseStudySection[];
  diagram?: string; // path to architecture diagram asset
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  readingTime?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PhilosophyPrinciple {
  title: string;
  belief: string;
  example: string;
}

export interface TimelineMilestone {
  title: string;
  date?: string;
  description: string;
  projectSlug?: string;
}
