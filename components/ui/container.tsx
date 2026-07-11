import type { ElementType, ReactNode } from "react";
import { clsx } from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * The single width/padding authority for the site. No component should
 * set its own max-width or horizontal padding — it should wrap content
 * in <Container> instead. This is what keeps every section's edges
 * aligned without each one re-deriving the same numbers.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-container px-5 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
