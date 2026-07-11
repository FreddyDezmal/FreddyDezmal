import Link from "next/link";
import { BlogFrontmatter } from "@/types/content";

interface BlogCardProps {
  post: BlogFrontmatter;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="border-b border-border py-6 first:pt-0 last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="group block">
        <p className="text-xs text-text-tertiary">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && <> · {post.readingTime}</>}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-text-primary transition-colors duration-fast group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-normal text-text-secondary">
          {post.description}
        </p>
      </Link>
    </article>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
