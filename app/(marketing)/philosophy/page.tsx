import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PhilosophyPrincipleCard } from "@/components/sections/philosophy-principle";
import { philosophyPrinciples } from "@/content/philosophy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Philosophy",
  description:
    "Practical engineering beliefs on security, reliability, maintainability, scalability, accessibility, and simplicity — grounded in real project decisions.",
  path: "/philosophy",
});

export default function PhilosophyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Engineering Philosophy
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What I actually believe, not what sounds good on a slide.
          </h1>
          <p className="mt-4 text-lg leading-snug text-text-secondary">
            Every principle here is paired with a real decision from a real
            project — not a claim without evidence.
          </p>
        </div>

        <div className="mt-12">
          {philosophyPrinciples.map((principle) => (
            <PhilosophyPrincipleCard key={principle.title} principle={principle} />
          ))}
        </div>
      </Container>
    </div>
  );
}
