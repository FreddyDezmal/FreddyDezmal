import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { getFeaturedProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, personJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <JsonLdScript data={personJsonLd()} />
      <Hero />
      <SelectedProjects projects={featuredProjects} />
    </>
  );
}
