import { CaseStudySection as CaseStudySectionData } from "@/types/content";
import { slugify } from "@/lib/utils";

interface CaseStudySectionProps {
  section: CaseStudySectionData;
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  const id = slugify(section.heading);

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-8">
      <h2
        id={`${id}-heading`}
        className="text-xl font-semibold tracking-tight text-text-primary"
      >
        {section.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-normal text-text-secondary">
        {section.body}
      </p>
    </section>
  );
}
