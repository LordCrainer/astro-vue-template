import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

// TODO: reemplazar por el dominio real antes de desplegar a producción —
// astro-sitemap y las URLs canónicas/OG dependen de este valor.
const SITE_URL = "https://example.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [vue(), sitemap()],
});
