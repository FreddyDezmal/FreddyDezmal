import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-border px-2.5 py-1",
        "text-xs font-medium text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
