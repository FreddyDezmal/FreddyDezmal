import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

const contactLinks = [
  { label: "Email", value: siteConfig.socials.email, href: `mailto:${siteConfig.socials.email}` },
  { label: "LinkedIn", value: "in/mohau-frederick-mokoena", href: siteConfig.socials.linkedin },
  { label: "GitHub", value: "FreddyDezmal", href: siteConfig.socials.github },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-lg">
          <p className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Get in touch
          </h1>

          <ul className="mt-10 divide-y divide-border border-t border-border">
            {contactLinks.map((link) => {
              const isExternal = /^https?:\/\//.test(link.href);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-4 transition-colors duration-fast hover:text-accent"
                  >
                    <span className="text-sm font-medium text-text-primary">
                      {link.label}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {link.value}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}
