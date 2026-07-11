"use client";

import { useEffect } from "react";

interface EasterEggOverlayProps {
  onClose: () => void;
}

const LINES = [
  "$ npx hire-mohau",
  "✓ Problem Solver Loaded",
  "✓ Engineering Mindset Loaded",
  "✓ Ready to Build",
];

/**
 * Plain CSS transition-delay for the staggered reveal rather than Framer
 * Motion — this is the one place on the site that's pure fun rather than
 * information, so it gets to be a little playful, but it still doesn't
 * need a JS animation library for four lines of text. The global
 * prefers-reduced-motion rule in globals.css already makes this appear
 * instantly for anyone who needs that.
 */
export function EasterEggOverlay({ onClose }: EasterEggOverlayProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-lg border border-border bg-bg-subtle p-6 font-mono text-sm shadow-md"
      >
        {LINES.map((line, index) => (
          <p
            key={line}
            className="animate-[fadeIn_var(--duration-slow)_var(--ease-out)_both] text-text-primary"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {line}
          </p>
        ))}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-xs text-text-tertiary transition-colors duration-fast hover:text-text-primary"
        >
          Press Esc or click anywhere to close
        </button>
      </div>
    </div>
  );
}
