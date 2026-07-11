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
          }
        : {
            type: "website",
            title,
            description,
            url,
            siteName: siteConfig.name,
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
