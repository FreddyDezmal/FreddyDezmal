import Link from "next/link";
import { Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectMetrics } from "@/components/sections/project-metrics";
import { getCaseStudyBySlug } from "@/content/case-studies";

interface ProjectShowcaseProps {
  project: Project;
}

/**
 * Cards show only the recruiter-relevant slice of metrics — a project's
 * full metric set (including product/funnel numbers) still lives on its
 * case study page via the same `project.metrics` array, unsliced.
 */
const CARD_METRIC_LIMIT = 3;

/**
 * Deliberately light: description, chips, the quote, a handful of
 * checkmark highlights, links, and the top metrics. The full engineering
 * explanation — the "why" behind each highlight — lives in the case
 * study, not here. Anyone who wants that detail clicks through for it.
 *
 * CTAs render conditionally on whatever links actually exist for the
 * project — never a disabled/greyed-out button for a link that doesn't
 * exist yet. A missing GitHub link means no GitHub button, full stop.
 *
 * The case study link specifically checks the case-study registry
 * rather than trusting project.links.caseStudy's mere presence — that
 * string gets set as soon as a project is added, before its case study
 * is necessarily written, which was previously producing a link that
 * led straight to a 404.
 */
export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const hasCaseStudy = Boolean(getCaseStudyBySlug(project.slug));

  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-text-primary sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-3 text-base leading-normal text-text-secondary">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge subtle>{tech}</Badge>
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

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
              Engineering Highlights
            </h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-snug text-text-secondary"
                >
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
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

      <div className="mt-8 border-t border-border pt-6">
        <ProjectMetrics metrics={project.metrics.slice(0, CARD_METRIC_LIMIT)} />
      </div>

      {hasCaseStudy && project.links.caseStudy && (
        <div className="mt-6">
          <Link
            href={project.links.caseStudy}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity duration-fast hover:opacity-80"
          >
            Read the case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </article>
  );
}
