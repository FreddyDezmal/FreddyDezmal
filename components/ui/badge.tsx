import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Lower-contrast, smaller chip. Used for technology chips on project
   * cards so they support the project rather than compete with it —
   * the default (non-subtle) style is still used on the case study page.
   */
  subtle?: boolean;
}

export function Badge({ children, className, subtle }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border",
        subtle
          ? "border-border px-2 py-0.5 text-xs font-normal text-text-secondary"
          : "border-border px-2.5 py-1 text-xs font-medium text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
