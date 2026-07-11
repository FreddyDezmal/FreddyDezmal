import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/**
 * Deliberately hand-mapped rather than pulling in @tailwindcss/typography —
 * one more dependency for what's ultimately a fixed, small set of elements
 * MDX actually produces. Every style here reads from the same design
 * tokens as the rest of the site.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-text-primary"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-mt-24 text-lg font-semibold tracking-tight text-text-primary"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-4 text-base leading-normal text-text-secondary" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-text-primary underline underline-offset-4 hover:text-accent"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-normal text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-normal text-text-secondary" {...props} />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-2 border-accent pl-4 text-base italic text-text-secondary"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-sm text-text-primary"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-4 overflow-x-auto rounded-lg border border-border bg-bg-subtle p-4 text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="mt-10 border-border" />,
};
