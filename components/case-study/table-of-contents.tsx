import { CaseStudySection } from "@/types/content";
import { slugify } from "@/lib/utils";

interface TableOfContentsProps {
  sections: CaseStudySection[];
}

/**
 * Deliberately not a Client Component with scroll-spy. A plain anchor
 * list costs zero JS and gets someone to the right section just as
 * effectively — scroll-spy would be motion/interactivity spent on a
 * feature that doesn't need it, which the constitution rules out.
 */
export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav aria-label="Case study sections" className="sticky top-24">
      <p className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-border pl-4">
        {sections.map((section) => (
          <li key={section.heading}>
            <a
              href={`#${slugify(section.heading)}`}
              className="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
