interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Every section on every page routes its heading through this component.
 * That's what keeps the h2-heading hierarchy correct site-wide without
 * each section having to remember the right heading level or spacing.
 */
export function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-normal text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
