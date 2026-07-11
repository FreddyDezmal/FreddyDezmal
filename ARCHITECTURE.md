# Architecture Plan — Mohau Frederick Mokoena Engineering Portfolio

## 1. Guiding Principle

This is a software product, not a portfolio site. Every technical decision is judged
against the Design Constitution (speed, clarity, evidence, intentionality) before
it's judged on looks.

## 2. Rendering Strategy

- **Server Components by default.** Client Components are opt-in and reserved for:
  theme switcher, mobile nav toggle, project filter/tab UI, Konami-code listener,
  and any Framer Motion wrapper that needs `useEffect`/interaction state.
- **Static generation (SSG) for everything content-driven**: home, projects, case
  studies, blog posts, about, philosophy, timeline. These rarely change per-request.
- **Incremental Static Regeneration** for the blog index, so new MDX posts appear
  without a full redeploy (`revalidate: 3600` as a starting point).
- No client-side data fetching for primary content — content lives in the repo
  (MDX + typed JSON/TS content modules), so there is no runtime API dependency,
  no loading spinners, no layout shift.

## 3. Content Model

Two content sources, deliberately kept separate:

- `content/projects/*.ts` — typed project + case-study data (structured, not prose-heavy).
  Using `.ts` instead of MDX here because project metrics/architecture data is
  structured and benefits from type-checking (metrics, tech stack, links).
- `content/blog/*.mdx` — long-form writing, compiled via `next-mdx-remote` or
  `@next/mdx` at build time, with rehype/remark plugins for syntax highlighting,
  heading IDs (for TOC), and reading-time calculation.

This split means the blog can grow organically (just add `.mdx` files) while
project data stays strongly typed and validated against a shared `Project` type.

## 4. Design System Delivery

Design tokens are defined once, as CSS custom properties in `globals.css`, and
mapped into Tailwind via `tailwind.config.ts`. This gives:

- Single source of truth for color/spacing/typography/radius/elevation/motion.
- Dark mode via the `class` strategy + `prefers-color-scheme` fallback, with
  no-flash handling via an inline blocking script in `<head>` (reads
  `localStorage` before paint, sets `class="dark"` on `<html>`).
- Components consume tokens only through Tailwind utility classes — no hardcoded
  hex values anywhere in component code. This is what makes the system
  "reusable and composable" rather than a fixed set of one-off styles.

## 5. Routing Map (App Router)

```
/                         Home (hero + selected projects)
/work                     Full project index
/work/[slug]              Case study page (Problem → Roadmap structure)
/philosophy               Engineering Philosophy
/timeline                 Builder Timeline
/blog                     Blog index
/blog/[slug]              MDX article
/about                    About (brief, philosophy-first)
/contact                  Minimal contact
/sitemap.xml              generated via Metadata API
/robots.txt               generated via Metadata API
```

Route groups: `(marketing)` for home/philosophy/about/contact (shared layout,
shared metadata defaults), `(content)` for `/work/*` and `/blog/*` (shared
article/case-study chrome: TOC, reading time, related content).

## 6. Component Architecture (contracts, not just names)

Every component in the spec's list gets:
- A typed props interface exported alongside it (`ComponentNameProps`).
- A Server Component by default; `"use client"` only added when interaction demands it.
- Composability over configuration: e.g. `CaseStudyLayout` accepts `children`
  broken into named slots (`<CaseStudySection title="Architecture">`) rather
  than one giant props object — this is what lets each case study read as
  hand-written engineering prose rather than a templated form.

## 7. Performance Plan (targeting Lighthouse 100/100/100/100)

- `next/font` with `display: swap` and self-hosted variable fonts — zero
  layout shift, zero third-party font requests.
- `next/image` everywhere, with explicit `sizes` and priority only on the
  LCP element (hero heading is text, so likely no `priority` image needed above the fold).
- Framer Motion imported per-component (not globally) and gated behind
  `prefers-reduced-motion`; motion tokens (`duration`, `easing`) come from
  the design system, not inline magic numbers.
- No client-side analytics blocking render — Plausible/PostHog loaded via
  `next/script` with `strategy="afterInteractive"`.
- Route-level code splitting is automatic via App Router; heavy interactive
  bits (e.g. an architecture-diagram viewer) are `next/dynamic` with `ssr: false`
  only if they're genuinely client-only.

## 8. Accessibility Plan

- Landmark regions (`header`, `nav`, `main`, `footer`) in the root layout once —
  not re-declared per page.
- Heading hierarchy enforced by convention: page = one `h1`, sections = `h2`,
  handled by a shared `SectionHeader` component so it can't be gotten wrong page-to-page.
- Focus-visible styles defined once in the design system, not per component.
- Skip-to-content link in root layout.
- Reduced-motion media query respected globally via a small CSS rule and
  checked in any Framer Motion variant.

## 9. Phased Build Order

This is the order I'll actually build in, one production-quality slice at a time:

1. **Foundation** — repo scaffold, config, design tokens, root layout, theme switcher (this step)
2. **Navbar + Footer** — global chrome, keyboard-nav verified
3. **Home** — hero + Selected Projects section (with real content for one project first)
4. **Project data model + remaining project cards**
5. **Case Study template** — built against the first fully-fleshed project
6. **Engineering Philosophy page**
7. **Builder Timeline**
8. **Blog system** (MDX pipeline) + first article
9. **About + Contact**
10. **SEO pass** (metadata, JSON-LD, sitemap, robots)
11. **Easter egg**
12. **CI/CD + testing scaffolding**

Each step ships lint-clean, type-clean, and reviewed against the Constitution
before the next starts.
