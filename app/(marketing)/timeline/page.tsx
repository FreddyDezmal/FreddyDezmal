import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { TimelineItem } from "@/components/sections/timeline-item";
import { timelineMilestones } from "@/content/timeline";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Builder Timeline",
  description: "A chronological engineering journey — from the first project to today.",
  path: "/timeline",
});

export default function TimelinePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Builder Timeline
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            The engineering journey, not the employment history.
          </h1>
        </div>

        <ol className="mt-12 max-w-xl">
          {timelineMilestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.title}
              milestone={milestone}
              isLast={index === timelineMilestones.length - 1}
            />
          ))}
        </ol>
      </Container>
    </div>
  );
}
