import { CaseStudy } from "@/types/content";
import { saveQuestCaseStudy } from "./save-quest";
import { studyAICaseStudy } from "./study-ai";
import { repCaseStudy } from "./rep";
import { advancedEventsCaseStudy } from "./advanced-events";

export const caseStudies: CaseStudy[] = [
  saveQuestCaseStudy,
  studyAICaseStudy,
  repCaseStudy,
  advancedEventsCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.project.slug === slug);
}
