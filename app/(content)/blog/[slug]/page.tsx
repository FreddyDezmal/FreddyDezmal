import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogToc } from "@/components/sections/blog-toc";
import { mdxComponents } from "@/lib/mdx-components";
import { getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { extractHeadings } from "@/lib/toc";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, articleJsonLd } from "@/lib/json-ld";

interface BlogPostPageProps {
  params: { slug: string };
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

// Only slugs returned by generateStaticParams are ever servable — any
// other value 404s at the routing layer, before getPostBySlug (and its
// filesystem access) ever runs.
export const dynamicParams = false;

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.frontmatter.slug}`,
    type: "article",
    publishedTime: post.frontmatter.publishedAt,
    tags: post.frontmatter.tags,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const headings = extractHeadings(content);
  const relatedPosts = getRelatedPosts(frontmatter.slug, frontmatter.tags);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <JsonLdScript data={articleJsonLd(frontmatter)} />
        <header className="max-w-2xl">
          <p className="text-xs text-text-tertiary">
            <time dateTime={frontmatter.publishedAt}>
              {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {frontmatter.readingTime && <> · {frontmatter.readingTime}</>}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-lg leading-snug text-text-secondary">
            {frontmatter.description}
          </p>
          {frontmatter.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="max-w-2xl">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: { light: "github-light", dark: "github-dark" },
                        keepBackground: false,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>
          <aside className="hidden lg:block">
            <BlogToc entries={headings} />
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-2xl border-t border-border pt-8">
            <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
              Related
            </h2>
            <div className="mt-4">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
