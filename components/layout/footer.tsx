import { Container } from "@/components/ui/container";

/**
 * The spec is explicit: "Single statement. Nothing else." Resisting the
 * urge to add sitemap links or social icons here is itself the engineering
 * decision — Contact already owns that job, so the footer doesn't duplicate it.
 */
export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-sm text-text-tertiary">
          Building software that solves real problems.
        </p>
      </Container>
    </footer>
  );
}
