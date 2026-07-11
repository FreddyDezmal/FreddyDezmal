import Link from "next/link";
import { clsx } from "clsx";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border text-text-primary hover:bg-bg-subtle",
  ghost: "text-text-secondary hover:text-text-primary",
};

/**
 * A single link-styled-as-button primitive. Real <Link> under the hood
 * (not a <button> + router.push) so it's a real anchor for keyboard/SEO
 * purposes by default.
 */
export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium",
        "transition-colors duration-fast ease-out",
        variantStyles[variant],
        className
      )}
    >
      {children}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </Link>
  );
}
