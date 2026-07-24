import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/sections/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { TimelineItem } from "@/components/sections/timeline-item";
import { timelineMilestones } from "@/content/timeline";

const PREVIEW_COUNT = 4;

export function TimelinePreview() {
  const recentMilestones = timelineMilestones.slice(-PREVIEW_COUNT);

  return (
    <section aria-labelledby="timeline-preview-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          id="timeline-preview-heading"
          eyebrow="Builder Timeline"
          title="The journey so far"
        />

        <ol className="mt-10 max-w-xl">
          {recentMilestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.title}
              milestone={milestone}
              isLast={index === recentMilestones.length - 1}
            />
          ))}
        </ol>

        <div className="mt-4">
          <ButtonLink href="/timeline" variant="secondary">
            See the full timeline
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
