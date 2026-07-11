import { Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectMetrics } from "@/components/sections/project-metrics";
import { getCaseStudyBySlug } from "@/content/case-studies";

interface ProjectShowcaseProps {
  project: Project;
}

/**
 * CTAs render conditionally on whatever links actually exist for the
 * project — never a disabled/greyed-out button for a link that doesn't
 * exist yet. A missing GitHub link means no GitHub button, full stop.
 *
 * The Case Study button specifically checks the case-study registry
 * rather than trusting project.links.caseStudy's mere presence — that
 * string gets set as soon as a project is added, before its case study
 * is necessarily written, which was previously producing a button that
 * led straight to a 404.
 */
export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const hasCaseStudy = Boolean(getCaseStudyBySlug(project.slug));

  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-text-primary sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-normal text-text-secondary">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>

          {project.quote && (
            <blockquote className="mt-6 border-l-2 border-accent pl-4 text-sm italic text-text-secondary">
              {project.quote.text}
              <footer className="mt-1 not-italic text-xs text-text-tertiary">
                — {project.quote.attribution}
              </footer>
            </blockquote>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {hasCaseStudy && project.links.caseStudy && (
              <ButtonLink href={project.links.caseStudy} variant="primary">
                Case Study
              </ButtonLink>
            )}
            {project.links.liveDemo && (
              <ButtonLink href={project.links.liveDemo} variant="secondary">
                Live Demo
              </ButtonLink>
            )}
            {project.links.github && (
              <ButtonLink href={project.links.github} variant="secondary">
                GitHub
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="lg:w-64 lg:shrink-0">
          <h4 className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
            Key Achievements
          </h4>
          <ul className="mt-3 space-y-3">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="text-sm leading-snug text-text-secondary">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <ProjectMetrics metrics={project.metrics} />
      </div>
    </article>
  );
}
