import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyBySlug, caseStudies } from "@/content/case-studies";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, projectJsonLd } from "@/lib/json-ld";

interface CaseStudyPageProps {
  params: { slug: string };
}

/**
 * Only slugs with an actual case study are statically generated. A
 * project that exists in content/projects but doesn't have a case study
 * yet (StudyAI, REP, Advanced Events, at time of writing) correctly 404s
 * here rather than rendering an empty or fabricated page — the Case
 * Study buttons for those will point here once their write-ups exist.
 */
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.project.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) return {};

  return buildMetadata({
    title: caseStudy.project.name,
    description: caseStudy.project.description,
    path: `/work/${caseStudy.project.slug}`,
  });
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) notFound();

  return (
    <>
      <JsonLdScript data={projectJsonLd(caseStudy.project)} />
      <CaseStudyLayout caseStudy={caseStudy} />
    </>
  );
}
