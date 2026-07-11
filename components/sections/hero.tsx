import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

/**
 * Deliberately a pure Server Component — no "use client", no Framer Motion.
 * This is the LCP element of the entire site: text-only, zero JS required
 * to render it, zero layout shift. Per the constitution ("speed over
 * animations"), the hero earns its restraint precisely because it's the
 * first thing anyone sees. Motion is reserved for lower-stakes moments
 * further down the page.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
          {siteConfig.name}
        </p>

        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl"
        >
          Software Engineer
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-snug text-text-secondary sm:text-xl">
          {siteConfig.tagline}
        </p>

        <p className="mt-6 max-w-xl text-base leading-normal text-text-secondary">
          {siteConfig.description}
        </p>

        <div className="mt-10">
          <ButtonLink href="/work" variant="primary">
            View My Work
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
