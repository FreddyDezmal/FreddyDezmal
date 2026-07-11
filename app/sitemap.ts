import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/philosophy",
    "/timeline",
    "/blog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  // Only case studies that actually exist as pages — a project without a
  // written case study yet would otherwise get listed for search engines
  // to find and immediately 404 on.
  const projectRoutes = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/work/${cs.project.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
