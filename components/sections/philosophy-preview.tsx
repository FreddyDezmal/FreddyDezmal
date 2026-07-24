import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/sections/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { philosophyPrinciples } from "@/content/philosophy";

/**
 * The homepage's job is to earn curiosity, not explain everything — so
 * this shows only each principle's first sentence (the claim itself),
 * never the full belief + example pairing that lives on /philosophy.
 * Derived from the same source text rather than duplicated copy, so
 * there's exactly one place to edit a principle's wording.
 */
function firstSentence(text: string): string {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
}

export function PhilosophyPreview() {
  return (
    <section aria-labelledby="philosophy-preview-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          id="philosophy-preview-heading"
          eyebrow="Engineering Philosophy"
          title="What I actually believe"
        />

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyPrinciples.map((principle) => (
            <li key={principle.title} className="border-t border-border pt-4">
              <h3 className="text-sm font-semibold text-text-primary">
                {principle.title}
              </h3>
              <p className="mt-1.5 text-sm leading-normal text-text-secondary">
                {firstSentence(principle.belief)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ButtonLink href="/philosophy" variant="secondary">
            Read the full philosophy
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
