# Folder Structure

```
app/
  (marketing)/            Route group: shared layout for low-density pages
    page.tsx               → "/"  Home
    philosophy/page.tsx     → "/philosophy"
    about/page.tsx          → "/about"
    contact/page.tsx        → "/contact"
    timeline/page.tsx       → "/timeline"
    layout.tsx              shared marketing chrome/metadata
  (content)/               Route group: article/case-study chrome (TOC, reading time)
    work/
      page.tsx              → "/work" project index
      [slug]/page.tsx        → "/work/[slug]" case study
    blog/
      page.tsx              → "/blog" article index
      [slug]/page.tsx        → "/blog/[slug]" MDX article
    layout.tsx              shared content chrome
  layout.tsx                ROOT layout: <html>, fonts, theme script, Navbar, Footer
  globals.css               design tokens (CSS variables) + Tailwind layers
  sitemap.ts                Metadata API sitemap generator
  robots.ts                 Metadata API robots generator
  not-found.tsx

components/
  ui/                      Primitive, dumb, reusable: Button, Badge, Card, Container
  layout/                  Navbar, Footer, ThemeSwitcher, MobileNav, SkipLink
  sections/                Home page sections: Hero, SelectedProjects, SectionHeader, CTA
  case-study/              CaseStudyLayout, CaseStudySection, MetricsGrid, ArchitectureDiagram

content/
  projects/                Typed project + case-study data (*.ts), one file per project
  blog/                    MDX articles, one file per post

hooks/                     useTheme, useReducedMotion, useScrollProgress, etc.
lib/                       mdx.ts (compile pipeline), seo.ts (metadata builders), utils.ts
styles/                    Non-Tailwind CSS if ever needed (kept minimal deliberately)
types/                     Project, CaseStudy, BlogPost, NavItem shared interfaces
config/                    site.config.ts (name, url, socials), nav.config.ts
constants/                 Design-token-adjacent constants not expressed as CSS vars
public/
  images/projects/         Project screenshots/logos
  fonts/                   Self-hosted variable fonts
scripts/                   One-off build/content scripts (e.g. reading-time check)
__tests__/                 Unit + component tests, mirrors component structure
.github/workflows/         CI: lint, typecheck, test, Lighthouse CI, preview deploy
```

## Why this shape

- **Route groups `(marketing)` / `(content)`** exist purely to give two different
  pages the layout they need (hero-style pages vs. article-style pages with a
  TOC and reading time) without either layout leaking into the other.
- **`components/ui` vs `components/sections`**: `ui` components know nothing about
  Mohau's content — they're the kind of primitives you could drop into any product.
  `sections` compose `ui` primitives into this site's actual sections. This is what
  makes the design system genuinely reusable rather than one-off markup with a
  shared color palette.
- **`content/` is not `app/`**: content and routing are decoupled on purpose, so a
  new project or article never requires touching routing code — just adding a file.
