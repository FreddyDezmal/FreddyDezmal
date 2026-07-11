import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogFrontmatter } from "@/types/content";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Slugs come from a URL route param and are used to build a filesystem
// path. Without this check, a request like /blog/../../../../etc/passwd
// would be handed straight to fs.readFileSync. Only plain, lowercase,
// hyphenated segments are ever valid slugs — anything else is rejected
// before it touches the filesystem, not just filtered after.
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

interface RawPost {
  frontmatter: BlogFrontmatter;
  content: string;
}

function readPostFile(filename: string): RawPost {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx$/, "");

  const frontmatter: BlogFrontmatter = {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
  };

  return { frontmatter, content };
}

/** All posts, newest first — used by the blog index. */
export function getAllPosts(): BlogFrontmatter[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readPostFile(file).frontmatter)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/** A single post's frontmatter + raw MDX body, for the article route. */
export function getPostBySlug(slug: string): RawPost | null {
  if (!VALID_SLUG.test(slug)) return null;

  const filename = `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, filename);

  // Belt-and-suspenders: even with the regex above, confirm the resolved
  // path is still actually inside BLOG_DIR before reading it.
  if (!filePath.startsWith(BLOG_DIR + path.sep)) return null;
  if (!fs.existsSync(filePath)) return null;

  return readPostFile(filename);
}

/** Up to `limit` other posts sharing at least one tag — for "related". */
export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogFrontmatter[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}
