# Plantilla Astro + Vue

Stack: **Astro** (páginas/routing/SSG) + **Vue 3** (islas interactivas) + **Vite** (vía Astro) + **Bun** (runtime/paquetes).

Todo el contenido de texto es **lorem ipsum de ejemplo**: es un punto de partida reutilizable, no un sitio terminado. El nombre de marca, teléfono, textos y JSON-LD están centralizados para poder reemplazarlos rápido en un proyecto nuevo (ver "Cómo reutilizar esta plantilla" más abajo).

## Comandos

```bash
bun install
bun run dev       # servidor de desarrollo
bun run check     # type-check (astro check)
bun run build     # check + build de producción a dist/
bun run preview   # sirve dist/ localmente
```

## Estructura de carpetas

```
src/
  components/
    atoms/        # piezas sin dependencias de otros componentes (Button, Heading, Input, Icon, Badge, Logo)
    molecules/    # combinan 2-3 átomos (NavItem, CardService, FormField, TeamMemberCard, ResourceCard)
    organisms/    # secciones completas de página (SiteHeader, SiteFooter, HeroSection, ServicesGrid, ContactForm)
    templates/    # esqueletos de página reutilizables entre rutas (SimplePageTemplate.astro)
  layouts/
    BaseLayout.astro   # shell HTML único: <head>, header/footer, estilos globales
  pages/           # una ruta por archivo (index, nosotros, servicios, equipo, recursos, contacto)
  lib/
    navigation.ts  # nombre de marca, menú y datos de contacto — única fuente de verdad
    data/          # contenido estático tipado (services.ts, resources.ts)
  styles/
    tokens/        # variables CSS: colors.css, typography.css, spacing.css
    base/          # reset.css + estilos globales de elementos HTML
    utilities/     # clases utilitarias mínimas (.container, .stack, .cluster)
    global.css     # único punto de entrada — se importa una sola vez desde BaseLayout
```

Convención: **cada componente es una carpeta modular por sí mismo** (un `.vue`/`.astro` con su propio `<style scoped>`), aunque el sitio tenga pocas páginas. Nada de una hoja CSS gigante por página.

## Cómo reutilizar esta plantilla en un proyecto nuevo

1. `src/lib/navigation.ts` → cambiar `siteName`, `siteTagline`, `primaryNav` y `siteContact` (teléfono/WhatsApp). El logo, el footer, el `<title>` y el JSON-LD lo leen desde acá, no hay que tocarlos aparte.
2. `src/styles/tokens/colors.css` → cambiar la escala cruda (`--color-navy-*`, `--color-orange-*`) por los colores de la marca real. Los componentes solo tocan la capa semántica, así que un cambio de paleta se hace en un solo archivo — ver el razonamiento de contraste ya comentado ahí.
3. `public/logo-cagm.png` → reemplazar por el logo real del proyecto (mismo nombre de archivo, o actualizar las referencias en `SiteLogo.vue` y `BaseLayout.astro` si cambia el nombre).
4. `astro.config.mjs` → cambiar `SITE_URL` por el dominio real (afecta sitemap, canonical y OG).
5. `public/robots.txt` → actualizar la URL del sitemap con el mismo dominio.
6. `public/og-default.jpg` → hoy compone el logo sobre el fondo de marca (1200×630) — regenerar si cambia el logo o la paleta.
7. `src/layouts/BaseLayout.astro` → ajustar el `"@type"` del JSON-LD según el proyecto (`Organization`, `Person`, `ProfessionalService`, `LocalBusiness`, etc.).
8. `src/lib/data/services.ts` y `resources.ts` → reemplazar el contenido de ejemplo por el real.
9. Los textos de ejemplo específicos de cada página están directamente en cada `src/pages/*.astro`.

## Diseño atómico

- **Atoms**: sin lógica de negocio, solo props/slots. Sirven de base visual (`BaseButton`, `BaseHeading`, `BaseText`, `BaseInput`, `BaseIcon`, `BaseBadge`, `SiteLogo`).
- **Molecules**: combinan átomos para un propósito concreto (`FormField` = label + `BaseInput`; `CardService`; `NavItem`).
- **Organisms**: piezas de página con estado o composición mayor (`SiteHeader` con menú móvil, `ContactForm` con `reactive()`, `HeroSection`).
- **Templates**: layout de contenido reutilizable sin datos reales (`SimplePageTemplate.astro`: título + intro + slot).
- **Pages**: inyectan datos reales en un template (`src/pages/*.astro`).

Al añadir un componente nuevo, decide su nivel por **cuántas otras piezas depende**, no por dónde "se ve mejor".

## CSS: buenas prácticas aplicadas

1. **Tokens primero, nunca valores mágicos.** Todo color/espaciado/radio sale de `src/styles/tokens/*.css` como custom properties. Los componentes solo consumen la capa semántica (`--text-primary`, `--brand-primary`, `--space-4`), nunca la escala cruda (`--color-orange-500`) directamente.
2. **Un solo entrypoint global** (`styles/global.css`), importado una única vez en `BaseLayout.astro`. Todo lo demás es `<style scoped>` dentro del propio componente — evita cascadas globales impredecibles.
3. **Sin "modo oscuro automático" en un sitio de marca.** Los colores de marca (navy/naranja, del logo real) son fijos; invertirlos con `prefers-color-scheme` rompe el contraste (ya se vio en pruebas: texto navy sobre fondo navy). Si se quiere dark mode real, se define explícitamente token por token, no algorítmicamente.
4. **Mobile-first con pocos breakpoints** (`960px` para nav de escritorio, `720px`/`1080px` para grids). Cada componente declara sus propios breakpoints; no hay un archivo central de "responsive".
5. **BEM ligero** para nombrar clases dentro de cada componente (`.card-service__title`, `.card-service--variant`), útil porque el scope ya lo da Vue/Astro — el prefijo evita ambigüedad al leer el HTML compilado.

## Alias de rutas

Configurados en `tsconfig.json` y usados en todo el código: `@/`, `@atoms/`, `@molecules/`, `@organisms/`, `@templates/`, `@layouts/`, `@styles/`, `@lib/`.

## SEO

- `astro.config.mjs` define `site` (⚠️ **hoy es un placeholder** `https://example.com`) y usa `@astrojs/sitemap`, que genera `sitemap-index.xml` en cada build.
- `public/robots.txt` apunta a ese sitemap (actualizar la URL junto con `site`).
- `BaseLayout.astro` genera por página: `<title>`, meta description, canonical, Open Graph, Twitter Card y un bloque JSON-LD `Organization` (schema.org, de ejemplo). Cada `.astro` de página puede pasar `title`, `description`, `image` y `noindex` como props.
- `public/og-default.jpg` compone el logo (`public/logo-cagm.png`) sobre el fondo de marca (1200×630) para que las meta tags no apunten a un 404 ni a un color plano sin identidad.

## Accesibilidad y "Best Practices" (Lighthouse)

- Link "Saltar al contenido" (`.skip-link` en `BaseLayout.astro`), visible solo con foco de teclado.
- Paleta de color auditada con ratio de contraste WCAG AA (4.5:1 para texto normal): `--brand-primary`, `--text-brand`, `--state-danger` y `--state-success` usan tonos más oscuros que la escala "cruda" original porque los tonos claros (`teal-500`, `green-500`, `red-500`) no pasaban el ratio como texto o como fondo de botón con texto blanco. El razonamiento completo está comentado en `src/styles/tokens/colors.css`.
- `public/_headers` agrega cabeceras de seguridad (CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`). **Formato Netlify/Cloudflare Pages** — si el hosting final es Vercel u otro, hay que migrar el mismo contenido a `vercel.json` (`headers`) o el mecanismo equivalente.
- Sin `v-html`/`set:html` sobre datos externos, sin dependencias de CDNs de terceros, sin errores de consola verificado en Chrome.

## Agentic browsing

- `public/llms.txt` describe el sitio y sus rutas en texto plano para agentes de IA (convención emergente, similar a `robots.txt`).
- El HTML es server-rendered (Astro), así que un agente que solo lee el DOM ve el contenido real sin ejecutar JS — a diferencia de un SPA client-rendered.
- El JSON-LD en cada página refuerza esto: le da a cualquier consumidor automatizado (buscador o agente) la entidad y el teléfono sin tener que inferirlos del texto.

## Próximos pasos sugeridos

- Añadir imágenes reales (`src/assets/images`) y usar `astro:assets` para optimización.
- Si `services.ts`/`resources.ts` crecen mucho, migrar a *content collections* de Astro en vez de un array TS — es también el paso previo natural para conectar un CMS headless (Decap CMS, Keystatic, etc.), ya que ambos escriben Markdown/YAML que Content Collections consume directamente.
