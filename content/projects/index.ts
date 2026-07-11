import { Project } from "@/types/content";
import { saveQuest } from "./save-quest";
import { studyAI } from "./study-ai";
import { rep } from "./rep";
import { advancedEvents } from "./advanced-events";
import { pocketCircle } from "./pocket-circle";
import { bugTracker } from "./bug-tracker";

/**
 * Order matches the spec's featured sequence (SaveQuest, StudyAI, REP,
 * Advanced Events) followed by the two non-featured projects. Adding a
 * new project going forward means: one new file in content/projects/,
 * one import + array entry here — nothing else in the app changes.
 */
export const projects: Project[] = [
  saveQuest,
  studyAI,
  rep,
  advancedEvents,
  pocketCircle,
  bugTracker,
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
