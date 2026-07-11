import Link from "next/link";
import { CaseStudy } from "@/types/content";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectMetrics } from "@/components/sections/project-metrics";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { TableOfContents } from "@/components/case-study/table-of-contents";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
}

export function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  const { project, sections, diagram } = caseStudy;

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Link
          href="/work"
          className="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
        >
          ← All work
        </Link>

        <header className="mt-6 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
            {project.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-snug text-text-secondary">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.liveDemo && (
              <ButtonLink href={project.links.liveDemo} variant="primary">
                Live Demo
              </ButtonLink>
            )}
            {project.links.github && (
              <ButtonLink href={project.links.github} variant="secondary">
                GitHub
              </ButtonLink>
            )}
          </div>
        </header>

        <div className="mt-10 border-t border-border pt-8">
          <ProjectMetrics metrics={project.metrics} />
        </div>

        {diagram && (
          <div className="mt-12 rounded-lg border border-border p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={diagram} alt={`${project.name} architecture diagram`} className="w-full" />
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="divide-y divide-border">
            {sections.map((section) => (
              <CaseStudySection key={section.heading} section={section} />
            ))}
          </div>
          <aside className="hidden lg:block">
            <TableOfContents sections={sections} />
          </aside>
        </div>
      </Container>
    </article>
  );
}
