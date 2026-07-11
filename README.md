# Mohau Frederick Mokoena — Engineering Portfolio

A production-quality software product whose purpose is to demonstrate engineering
excellence — not a template with a name on it. See `ARCHITECTURE.md` for the
full reasoning behind every structural decision.

## Status: All 12 phases complete

Built:
- [x] Project scaffold, folder architecture, design token system
- [x] Root layout: no-flash dark mode, skip link, Navbar, Footer
- [x] Home: Hero + Selected Projects (SaveQuest, StudyAI, REP, Advanced Events)
- [x] Full project data model (6 projects: the 4 above + Pocket Circle + BugTracker)
- [x] Case Study template + 4 written case studies (SaveQuest, StudyAI, REP, Advanced Events)
- [x] Engineering Philosophy page
- [x] Builder Timeline
- [x] Blog (MDX pipeline: syntax highlighting, TOC, reading time, related posts) + 2 posts
- [x] About + Contact
- [x] SEO pass: Metadata API, JSON-LD, canonical URLs, dynamic sitemap, robots.txt
- [x] Easter egg (Konami code)
- [x] CI/CD (GitHub Actions: lint, typecheck, test, build, Lighthouse CI)

## Known gaps (flagged honestly rather than papered over)

- **`/work` index page** doesn't exist yet — only individual case studies
  (`/work/[slug]`) do. The nav's "Work" link and several "All work" back-links
  currently point at a route that isn't built.
- **Pocket Circle and BugTracker** have project data but no case studies yet,
  so their Case Study buttons 404 on purpose.
- **Lessons Learned / Future Roadmap** are placeholders on 3 of 4 case studies
  (StudyAI's Future Roadmap is real, pulled from its scaling plan) — these need
  the author's actual retrospective, which isn't something that should be
  invented on their behalf.
- **Blog** has 2 of the 6 originally suggested posts; the rest need either more
  source material or the author's own voice for the more personal topics.
- **Testing**: Vitest/Testing Library/jest-axe are configured in `package.json`
  and referenced by CI, but no test files exist yet.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run typecheck
npm run test
```

## Design Principles (non-negotiable)

1. Speed over animations · 2. Clarity over decoration · 3. Engineering over
marketing · 4. Projects over personality · 5. Show evidence before claims ·
6. One purpose per page · 7. Mobile-first, desktop-perfect · 8. Accessibility
is mandatory · 9. Every interaction is intentional · 10. The software is the hero.

Every PR/feature should be checked against this list before merging.
