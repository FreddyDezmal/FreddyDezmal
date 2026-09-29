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
 * Enough chips to answer "what's it built with?" at a glance. The full
 * list is on the case study, where a 15-item stack is context rather
 * than noise.
 */
const CARD_TECH_LIMIT = 6;

/**
 * Two columns on large screens: the story (what it is, what it's built
 * with, where to see it) on the left; the evidence (highlights + metrics)
 * on the right. On small screens they stack in the same reading order.
 *
 * The self-attributed pull quote was dropped from the card: it restated
 * the first highlight word-for-word, and a quote from one's own notes
 * reads like a testimonial it isn't. The highlights already carry the
 * claim, and the metrics carry its evidence.
 *
 * The case study is the strongest evidence on the site, so when one
 * exists it's the primary action — not a small text link at the bottom.
 * CTAs still render only for links that actually exist.
 */
export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const hasCaseStudy = Boolean(getCaseStudyBySlug(project.slug));
  const headingId = `project-${project.slug}`;
  const visibleTech = project.technologies.slice(0, CARD_TECH_LIMIT);
  const hiddenTechCount = project.technologies.length - visibleTech.length;

  return (
    <article
      aria-labelledby={headingId}
      className="rounded-lg border border-border bg-surface p-5 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
            {project.category}
          </p>
          <h3
            id={headingId}
            className="mt-2 text-xl font-semibold text-text-primary sm:text-2xl"
          >
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-normal text-text-secondary">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {visibleTech.map((tech) => (
              <li key={tech}>
                <Badge subtle>{tech}</Badge>
              </li>
            ))}
            {hiddenTechCount > 0 && (
              <li>
                <Badge subtle>
                  +{hiddenTechCount}
                  <span className="sr-only"> more technologies</span>
                </Badge>
              </li>
            )}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasCaseStudy && project.links.caseStudy && (
              <ButtonLink href={project.links.caseStudy} variant="primary">
                Read the case study
                <span aria-hidden="true">→</span>
              </ButtonLink>
            )}
            {project.links.liveDemo && (
              <ButtonLink href={project.links.liveDemo} variant="secondary">
                Live demo
              </ButtonLink>
            )}
            {project.links.github && (
              <ButtonLink href={project.links.github} variant="secondary">
                GitHub
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {project.highlights && project.highlights.length > 0 && (
            <>
              <h4 className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
                Engineering highlights
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-snug text-text-primary"
                  >
                    <span aria-hidden="true" className="text-accent">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-6 border-t border-border pt-6">
            <ProjectMetrics
              metrics={project.metrics.slice(0, CARD_METRIC_LIMIT)}
              compact
            />
          </div>
        </div>
      </div>
    </article>
  );
}
