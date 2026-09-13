# Astro + Vue Template

**Astro** (pages/routing/SSG) + **Vue 3** (interactive islands) + **Vite** (via Astro) + **Bun** (runtime/package manager).

All copy is **placeholder lorem ipsum** — this is a reusable starting point, not a finished site. Brand name, contact info, text content, and JSON-LD are all centralized so a new project can swap them in one pass (see "Reusing this template" below).

## Commands

```bash
bun install
bun run dev       # dev server
bun run check     # type-check (astro check)
bun run build     # check + production build to dist/
bun run preview   # serve dist/ locally
```

## Folder structure

```
src/
  components/
    atoms/        # no dependency on other components (Button, Heading, Input, Icon, Badge, Logo)
    molecules/    # combine 2-3 atoms (NavItem, CardService, FormField, TeamMemberCard, ResourceCard)
    organisms/    # full page sections (SiteHeader, SiteFooter, HeroSection, ServicesGrid, ContactForm)
    templates/    # page skeletons reused across routes (SimplePageTemplate.astro)
  layouts/
    BaseLayout.astro   # the one HTML shell: <head>, header/footer, global styles
  pages/           # one route per file (index, nosotros, servicios, equipo, recursos, contacto)
  lib/
    navigation.ts  # brand identity (name, hrefs, phone) — not copy, doesn't change per locale
    i18n/          # all site copy, shaped to support more than one locale (see "i18n" below)
  styles/
    tokens/        # CSS custom properties: colors.css, typography.css, spacing.css
    base/          # reset.css + global element styles
    utilities/     # a handful of layout utilities (.container, .stack, .cluster)
    global.css     # single entry point — imported once, from BaseLayout only
```

Convention: **every component is its own self-contained unit** (a `.vue`/`.astro` file with its own `<style scoped>`), even though the site only has a few pages. No giant shared stylesheet per page.

## Reusing this template

1. `src/lib/navigation.ts` → change `siteName`, `primaryNav` (hrefs), and `siteContact` (phone/WhatsApp). The logo, footer, `<title>`, and JSON-LD all read from here.
2. `src/lib/i18n/es.ts` → replace the placeholder copy with the real thing. It's the only file to touch for text changes — no component or page has loose strings (see "i18n" below).
3. `src/styles/tokens/colors.css` → swap the raw scale (`--color-navy-*`, `--color-orange-*`) for the real brand colors. Components only ever touch the semantic layer, so a palette change is a one-file edit — the contrast reasoning is commented right there.
4. `public/logo-cagm.png` → replace with the real logo (keep the filename, or update the references in `SiteLogo.vue` and `BaseLayout.astro`).
5. `astro.config.mjs` → set `SITE_URL` to the real domain (drives the sitemap, canonical URLs, and OG tags).
6. `public/robots.txt` → update the sitemap URL to match.
7. `public/og-default.jpg` → currently the logo composited over the brand background (1200×630) — regenerate if the logo or palette changes.
8. `src/layouts/BaseLayout.astro` → adjust the JSON-LD `"@type"` for the project (`Organization`, `Person`, `ProfessionalService`, `LocalBusiness`, etc.).

## i18n

All copy lives in `src/lib/i18n/`, not scattered across components and pages:

- `es.ts` is the full dictionary (the only locale today). Every page/component does `const content = t()` and reads from it.
- `index.ts` registers the available locales (`locales = { es }`), and exports the `Locale` type and the `t(locale?)` helper.
- `navigation.ts` deliberately stays **outside** `i18n/`: brand name, routes, and phone number aren't copy that changes with the language.

**To add English later:**
1. Create `src/lib/i18n/en.ts` with the same shape as `es.ts` (TypeScript will flag any missing key, thanks to `es.ts`'s `as const`).
2. Register it in `index.ts`: `export const locales = { es, en } as const;`.
3. Only then does it make sense to add locale-prefixed routes (Astro's native `astro:i18n`: `/es/...`, `/en/...`) and, if automatic detection is wanted, a middleware that reads `Accept-Language` on the homepage and redirects. That's intentionally not built yet — there's no point wiring up routing before there's real content in more than one language.

## Atomic design

- **Atoms**: no business logic, just props/slots (`BaseButton`, `BaseHeading`, `BaseText`, `BaseInput`, `BaseIcon`, `BaseBadge`, `SiteLogo`).
- **Molecules**: atoms combined for one purpose (`FormField` = label + `BaseInput`; `CardService`; `NavItem`).
- **Organisms**: page sections with state or heavier composition (`SiteHeader` with its mobile menu, `ContactForm` with `reactive()`, `HeroSection`).
- **Templates**: reusable content layout with no real data (`SimplePageTemplate.astro`: title + intro + slot).
- **Pages**: feed real data into a template (`src/pages/*.astro`).

When adding a new component, its level is decided by **how many other pieces it depends on**, not by where it looks best.

## CSS practices

1. **Tokens first, no magic values.** Every color/spacing/radius comes from `src/styles/tokens/*.css` as custom properties. Components only consume the semantic layer (`--text-primary`, `--brand-primary`, `--space-4`), never the raw scale directly.
2. **One global entry point** (`styles/global.css`), imported once from `BaseLayout.astro`. Everything else is `<style scoped>` inside its own component.
3. **No automatic dark mode on a branded site.** Brand colors are fixed; flipping them with `prefers-color-scheme` breaks contrast (we hit this: navy text on navy background). A real dark mode should redefine tokens deliberately, not algorithmically.
4. **Mobile-first, few breakpoints** (`960px` for desktop nav, `720px`/`1080px` for grids), declared per component rather than in a central "responsive" file.
5. **Light BEM** for class names inside each component (`.card-service__title`, `.card-service--variant`) — the scoping already comes from Vue/Astro, the prefix just keeps the compiled HTML readable.

## Path aliases

Configured in `tsconfig.json`, used throughout: `@/`, `@atoms/`, `@molecules/`, `@organisms/`, `@templates/`, `@layouts/`, `@styles/`, `@lib/`.

## SEO

- `astro.config.mjs` sets `site` (⚠️ **currently a placeholder**, `https://example.com`) and uses `@astrojs/sitemap`, which generates `sitemap-index.xml` on every build.
- `public/robots.txt` points to that sitemap — update the URL alongside `site`.
- `BaseLayout.astro` generates, per page: `<title>`, meta description, canonical, Open Graph, Twitter Card, and a JSON-LD `Organization` block (schema.org, as an example). Each page can pass `title`, `description`, `image`, and `noindex` as props.
- `public/og-default.jpg` composites the logo over the brand background so social previews never hit a 404 or a flat, brandless color.

## Accessibility & Lighthouse "Best Practices"

- A "Skip to content" link (`.skip-link` in `BaseLayout.astro`), visible only on keyboard focus.
- The color palette is WCAG AA-audited (4.5:1 for normal text) — see the reasoning in `src/styles/tokens/colors.css`.
- `public/_headers` adds security headers (CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`). **Netlify/Cloudflare Pages format** — port the same rules to `vercel.json` for Vercel or the equivalent on another host.
- No `v-html`/`set:html` on external data, no third-party CDN dependencies, no console errors (verified in Chrome).

## Agentic browsing

- `public/llms.txt` describes the site and its routes in plain text for AI agents (an emerging convention, similar to `robots.txt`).
- The HTML is server-rendered (Astro), so an agent reading only the DOM sees the real content without executing JS — unlike a client-rendered SPA.
- The JSON-LD on every page reinforces this: it hands an automated consumer (search engine or agent) the entity and phone number without inferring them from prose.

## Suggested next steps

- Add real images (`src/assets/images`) and use `astro:assets` for optimization.
- If `src/lib/i18n/es.ts`'s `services`/`resources` arrays grow large, migrate them to Astro content collections — also the natural stepping stone to a headless CMS (Decap CMS, Keystatic, etc.), since both write Markdown/YAML that content collections consume directly.
