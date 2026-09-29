import Link from "next/link";
import { TimelineMilestone } from "@/types/content";
import { getCaseStudyBySlug } from "@/content/case-studies";
import { InProgressLabel } from "@/components/ui/in-progress-label";

interface TimelineItemProps {
  milestone: TimelineMilestone;
  isLast: boolean;
}

export function TimelineItem({ milestone, isLast }: TimelineItemProps) {
  const hasCaseStudy = milestone.projectSlug
    ? Boolean(getCaseStudyBySlug(milestone.projectSlug))
    : false;

  return (
    <li className="relative pb-10 pl-10 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-3 h-full w-px bg-border"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
      />

      {(milestone.date || milestone.status === "ongoing") && (
        <p className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-text-tertiary">
          {milestone.date}
          {milestone.status === "ongoing" && <InProgressLabel />}
        </p>
      )}
      <h3 className="mt-1 text-lg font-semibold text-text-primary">
        {hasCaseStudy ? (
          <Link
            href={`/work/${milestone.projectSlug}`}
            className="transition-colors duration-fast hover:text-accent"
          >
            {milestone.title}
          </Link>
        ) : (
          milestone.title
        )}
      </h3>
      <p className="mt-2 max-w-xl text-sm leading-normal text-text-secondary">
        {milestone.description}
      </p>
    </li>
  );
}
