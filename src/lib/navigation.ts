export interface NavLink {
  /** Clave que busca su texto en `t().nav[key]` — ver src/lib/i18n. */
  key: "home" | "about" | "services" | "team" | "resources" | "contact";
  href: string;
}

/**
 * Identidad de marca y estructura de navegación — no es copy traducible,
 * por eso vive separado de src/lib/i18n (un nombre de marca o una URL no
 * cambian entre idiomas). Es la única constante que hay que tocar para
 * reutilizar este template en otro proyecto: el logo, el footer, el
 * `<title>` y el JSON-LD lo leen desde acá.
 */
export const siteName = "Carlos Garcia";

export const primaryNav: NavLink[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/nosotros" },
  { key: "services", href: "/servicios" },
  { key: "team", href: "/equipo" },
  { key: "resources", href: "/recursos" },
  { key: "contact", href: "/contacto" },
];

export const siteContact = {
  phoneValue: "+00 000 000 0000",
  phoneHref: "tel:+000000000000",
  whatsappHref: "https://wa.me/000000000000",
};
