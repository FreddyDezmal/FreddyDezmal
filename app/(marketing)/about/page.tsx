import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLdScript, personJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `A short introduction to ${siteConfig.name}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <JsonLdScript data={personJsonLd()} />
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            About
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Hi, I&rsquo;m Mohau.
          </h1>

          <div className="mt-6 space-y-4 text-base leading-normal text-text-secondary">
            <p>
              I&rsquo;m a software engineer studying IT at BelgiumCampus
              ITVersity, focused on building production-quality software —
              the kind that handles real money, real user data, and real
              concurrency correctly, not just on the happy path.
            </p>
            <p>
              Everything on this site is built the same way I build
              anything: security and correctness enforced at the database
              level wherever possible, decisions made deliberately rather
              than by default, and evidence — metrics, architecture,
              trade-offs — over claims.
            </p>
            <p>
              If you want the reasoning behind that approach, the{" "}
              <Link href="/philosophy" className="text-text-primary underline underline-offset-4 hover:text-accent">
                Engineering Philosophy
              </Link>{" "}
              page goes deeper. If you want to see how it got built project
              by project, the{" "}
              <Link href="/timeline" className="text-text-primary underline underline-offset-4 hover:text-accent">
                Builder Timeline
              </Link>{" "}
              lays that out.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="text-sm font-medium text-accent transition-colors duration-fast hover:opacity-80"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
