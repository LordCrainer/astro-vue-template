export interface NavLink {
  label: string;
  href: string;
}

/**
 * Nombre de marca centralizado — es la única constante que hay que tocar
 * para reutilizar este template en otro proyecto (título de página,
 * logo, footer y JSON-LD lo consumen desde acá).
 */
export const siteName = "Carlos Garcia";
export const siteTagline = "Desarrollo de software";

export const primaryNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export const siteContact = {
  phoneLabel: "Contacto",
  phoneValue: "+00 000 000 0000",
  phoneHref: "tel:+000000000000",
  whatsappHref: "https://wa.me/000000000000",
};
