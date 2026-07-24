import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { PhilosophyPreview } from "@/components/sections/philosophy-preview";
import { TimelinePreview } from "@/components/sections/timeline-preview";
import { LatestPost } from "@/components/sections/latest-post";
import { ContactCta } from "@/components/sections/contact-cta";
import { getHomepageProjects } from "@/content/projects";
import { getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, personJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

// Revalidate periodically so a new blog post surfaces on the homepage
// without a full redeploy — mirrors the blog index's own revalidate.
export const revalidate = 3600;

/**
 * The homepage is a trailer, not the movie: Hero, 3 selected projects,
 * a philosophy teaser, a timeline teaser, the latest post, and a
 * contact prompt. Every "full" version of these lives on its own page
 * (/work, /philosophy, /timeline, /blog, /contact) for anyone who
 * clicks through wanting more.
 */
export default function HomePage() {
  const homepageProjects = getHomepageProjects();
  const [latestPost] = getAllPosts();

  return (
    <>
      <JsonLdScript data={personJsonLd()} />
      <Hero />
      <SelectedProjects projects={homepageProjects} />
      <PhilosophyPreview />
      <TimelinePreview />
      <LatestPost post={latestPost} />
      <ContactCta />
    </>
  );
}
