import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

/**
 * The homepage's closing beat — a short prompt and two links, not the
 * full contact page's list. Anyone who wants every channel clicks
 * through to /contact.
 */
export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta-heading" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-xl border-t border-border pt-10">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Contact
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            Want to know more?
          </h2>
          <p className="mt-3 text-base leading-normal text-text-secondary">
            I&rsquo;m always open to talking about engineering, opportunities,
            or whatever I should build next.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.socials.email}`} variant="primary">
              Email me
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              All contact options
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
