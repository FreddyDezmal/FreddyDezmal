import { TocEntry } from "@/lib/toc";

interface BlogTocProps {
  entries: TocEntry[];
}

export function BlogToc({ entries }: BlogTocProps) {
  if (entries.length === 0) return null;

  return (
    <nav aria-label="Article sections" className="sticky top-24">
      <p className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-border pl-4">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
