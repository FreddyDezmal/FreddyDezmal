import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyBySlug, caseStudies } from "@/content/case-studies";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, projectJsonLd } from "@/lib/json-ld";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Only slugs with an actual case study are statically generated. A
 * project in content/projects without a written case study (currently
 * Pocket Circle and BugTracker) correctly 404s here rather than
 * rendering an empty or fabricated page — their Case Study buttons
 * won't even render (see ProjectShowcase) until that changes.
 */
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  return buildMetadata({
    title: caseStudy.project.name,
    description: caseStudy.project.description,
    path: `/work/${caseStudy.project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <>
      <JsonLdScript data={projectJsonLd(caseStudy.project)} />
      <CaseStudyLayout caseStudy={caseStudy} />
    </>
  );
}
