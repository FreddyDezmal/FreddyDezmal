import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/sections/blog-card";
import { getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Notes on building production software — architecture, trade-offs, and the occasional PostgreSQL trick.",
  path: "/blog",
});

// Revalidate periodically so new posts show up without a full redeploy.
export const revalidate = 3600;

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Blog
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Writing
          </h1>
        </div>

        <div className="mt-10 max-w-2xl">
          {posts.length === 0 ? (
            <p className="text-sm text-text-tertiary">Nothing published yet — check back soon.</p>
          ) : (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
          )}
        </div>
      </Container>
    </div>
  );
}
