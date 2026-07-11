import { slugify } from "@/lib/utils";

export interface TocEntry {
  text: string;
  id: string;
}

/** Pulls every "## " (h2) heading out of raw MDX source for the sidebar TOC. */
export function extractHeadings(mdxSource: string): TocEntry[] {
  const matches = mdxSource.matchAll(/^##\s+(.+)$/gm);
  return Array.from(matches, (match) => {
    const text = (match[1] ?? "").trim();
    return { text, id: slugify(text) };
  });
}
