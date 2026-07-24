import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/sections/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogFrontmatter } from "@/types/content";

interface LatestPostProps {
  post: BlogFrontmatter | undefined;
}

/**
 * Renders nothing when there are no posts yet, rather than an empty
 * "Latest Writing" section with nothing under it.
 */
export function LatestPost({ post }: LatestPostProps) {
  if (!post) return null;

  return (
    <section aria-labelledby="latest-post-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          id="latest-post-heading"
          eyebrow="Latest Writing"
          title="From the blog"
        />

        <div className="mt-8 max-w-2xl">
          <BlogCard post={post} />
        </div>

        <div className="mt-2">
          <ButtonLink href="/blog" variant="secondary">
            Read more posts
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
