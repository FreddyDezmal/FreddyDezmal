import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description: "Every project, not just the highlights — architecture, trade-offs, and real metrics.",
  path: "/work",
});

export default function WorkIndexPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Work
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Every project
          </h1>
        </div>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
