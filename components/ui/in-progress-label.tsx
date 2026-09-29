/**
 * Small, quiet status label for work that isn't finished yet. Being
 * upfront about what's in progress is part of the site's "evidence over
 * claims" rule — unfinished work is shown as unfinished, not dressed up.
 */
export function InProgressLabel() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 font-mono text-[0.6875rem] normal-case tracking-normal text-text-secondary">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      In progress
    </span>
  );
}
