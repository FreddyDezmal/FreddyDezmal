"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Container } from "@/components/ui/container";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { siteConfig, navConfig } from "@/config/site";

/**
 * Client Component by necessity, not default: active-link state
 * (usePathname) and the mobile menu toggle both require it. Everything
 * that doesn't need interactivity (Footer, page content) stays a Server
 * Component — this is the one deliberate exception near the top of the tree.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on route change and on Escape.
  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-sm">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-text-primary"
          >
            {getInitials(siteConfig.name)}
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 sm:flex">
            {navConfig.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "text-sm font-medium transition-colors duration-fast",
                      active
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 sm:flex">
            <ThemeSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 sm:hidden">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md
                         text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="border-t border-border sm:hidden"
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {navConfig.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block rounded-md px-3 py-2.5 text-base font-medium",
                      active
                        ? "bg-bg-subtle text-text-primary"
                        : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </header>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      {isOpen ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" />
      )}
    </svg>
  );
}
