import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Route path, e.g. "/philosophy" — used for both canonical and OG url. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

/**
 * Single place that decides how a page's title/description become OG tags,
 * Twitter tags, and a canonical URL. Individual pages only ever provide
 * title/description/path — they can't forget a field this way, and there's
 * nowhere for canonical vs. OG url to drift apart.
 */
/**
 * Explicit because a page-level `openGraph`/`twitter` object replaces the
 * parent's wholesale — without this, the generated app/opengraph-image
 * is silently dropped from every page that calls buildMetadata.
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.role}`,
};

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  tags,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph:
      type === "article"
        ? {
            type: "article",
            title,
            description,
            url,
            siteName: siteConfig.name,
            publishedTime,
            tags,
            images: [shareImage],
          }
        : {
            type: "website",
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [shareImage],
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
