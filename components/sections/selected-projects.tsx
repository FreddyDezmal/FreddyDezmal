import { Project } from "@/types/content";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/sections/section-header";
import { ProjectShowcase } from "@/components/sections/project-showcase";

interface SelectedProjectsProps {
  projects: Project[];
}

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  return (
    <section aria-labelledby="selected-projects-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          id="selected-projects-heading"
          eyebrow="Selected Work"
          title="Projects, not slides"
        />
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
