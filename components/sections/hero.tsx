import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { Portrait } from "@/components/ui/portrait";

/**
 * Deliberately a pure Server Component — no "use client", no Framer Motion.
 * This is the LCP element of the entire site: text-only, zero JS required
 * to render it, zero layout shift. Motion is reserved for lower-stakes
 * moments further down the page.
 *
 * Order is the order a visitor's questions arrive in: who is this (name as
 * the h1), what do they do and where are they in their career (role +
 * education), what do they care about (positioning), what do they work
 * with (stack), and where's the proof (counts derived from content, so
 * they can never drift from what the site actually shows).
 *
 * The portrait sits beside the text on desktop and as a small avatar
 * above the name on phones — present enough to put a face to the name,
 * never so large it competes with it. It's the LCP candidate on desktop,
 * hence `priority`.
 */
export function Hero() {
  const { socials, education, primaryStack, availability } = siteConfig;

  return (
    <section
      aria-labelledby="hero-heading"
      className="pb-4 pt-14 sm:pb-8 sm:pt-24"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-3xl">
            {availability && (
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-success"
                />
                {availability}
              </p>
            )}

            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl"
            >
              {siteConfig.name}
            </h1>

            <p className="mt-4 text-lg leading-snug text-text-primary sm:text-xl">
              {siteConfig.role}
              <span aria-hidden="true" className="px-2 text-text-tertiary">
                ·
              </span>
              <span className="text-text-secondary">
                {education.degree} student at {education.school}
              </span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-normal text-text-secondary sm:text-lg">
              {siteConfig.positioning}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
              <div>
                <dt className="sr-only">Projects</dt>
                <dd className="text-text-primary">
                  {projects.length} projects
                  <span className="text-text-tertiary">
                    {" "}
                    · {caseStudies.length} case studies
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Primary stack</dt>
                <dd className="text-text-secondary">
                  {primaryStack.join(" · ")}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/work" variant="primary">
                View my work
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
              <span className="-ml-3 flex items-center gap-1 sm:ml-0">
                <ButtonLink
                  href={socials.github}
                  variant="ghost"
                  className="px-3"
                >
                  GitHub
                </ButtonLink>
                <ButtonLink
                  href={socials.linkedin}
                  variant="ghost"
                  className="px-3"
                >
                  LinkedIn
                </ButtonLink>
              </span>
            </div>
          </div>

          <Portrait
            priority
            sizes="(min-width: 1024px) 288px, (min-width: 768px) 240px, 112px"
            className="order-first h-28 w-28 shrink-0 rounded-full ring-1 ring-border md:order-none md:h-auto md:w-60 md:rounded-lg lg:w-72"
          />
        </div>
      </Container>
    </section>
  );
}
