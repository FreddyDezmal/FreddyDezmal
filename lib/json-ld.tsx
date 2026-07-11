import { headers } from "next/headers";
import { Project, BlogFrontmatter } from "@/types/content";
import { siteConfig } from "@/config/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  };
}

export function articleJsonLd(post: BlogFrontmatter) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: siteConfig.name },
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    creator: { "@type": "Person", name: siteConfig.name },
    url: `${siteConfig.url}/work/${project.slug}`,
    keywords: project.technologies.join(", "),
  };
}

/** Renders as a <script type="application/ld+json"> — call inside a Server Component. */
export async function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? undefined;

  // Escaping '<' prevents a "</script>" (or "<script") sequence inside any
  // field from breaking out of the script context. All current data here
  // is site-controlled (project/post content, not user input), but this
  // is the kind of check that should never depend on that staying true.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      nonce={nonce}
      suppressHydrationWarning
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
