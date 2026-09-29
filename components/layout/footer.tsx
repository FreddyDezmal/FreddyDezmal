import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Email", href: `mailto:${siteConfig.socials.email}` },
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

/**
 * The statement stays; the name and three contact links are added. Every
 * page ends here, including deep case studies and blog posts — so this is
 * where a reader who's just been convinced looks for "how do I reach this
 * person?". Making them navigate to /contact for that is one step too many.
 */
export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-text-tertiary">
              Building software that solves real problems.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Contact links">
            {footerLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-block py-1 text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
                  >
                    {link.label}
                    {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
