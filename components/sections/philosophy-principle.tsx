import { PhilosophyPrinciple as PhilosophyPrincipleData } from "@/types/content";

interface PhilosophyPrincipleProps {
  principle: PhilosophyPrincipleData;
}

export function PhilosophyPrincipleCard({ principle }: PhilosophyPrincipleProps) {
  return (
    <article className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight text-text-primary">
        {principle.title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-normal text-text-secondary">
        {principle.belief}
      </p>
      <p className="mt-4 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-normal text-text-tertiary">
        {principle.example}
      </p>
    </article>
  );
}
