/**
 * Todo el copy del sitio en un solo lugar, con la forma que va a tener
 * cuando haya más de un locale (ver `./index.ts`). Para agregar inglés más
 * adelante: crear `en.ts` con este mismo shape y registrarlo en `index.ts` —
 * nada más del código cambia.
 */
export const es = {
  site: {
    tagline: "Desarrollo de software",
    defaultDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    team: "Equipo",
    resources: "Recursos",
    contact: "Contacto",
  },

  a11y: {
    skipToContent: "Saltar al contenido",
    mainNav: "Principal",
    mobileNav: "Principal (móvil)",
    footerNav: "Pie de página",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    closeDialog: "Cerrar",
  },

  header: {
    contactLabel: "Contacto",
    ctaLabel: "Contactar",
  },

  theme: {
    switchToDark: "Cambiar a modo oscuro",
    switchToLight: "Cambiar a modo claro",
  },

  whatsapp: {
    helpLabel: "¿Necesitas ayuda?",
  },

  footer: {
    legalSuffix: "Todos los derechos reservados.",
  },

  home: {
    metaDescription:
      "Desarrollo de software a medida: aplicaciones web rápidas, accesibles y fáciles de mantener.",
    eyebrow: "Desarrollo de software a medida",
    highlight: "DESARROLLO DE SOFTWARE",
    description:
      "Construyo productos web rápidos, accesibles y fáciles de mantener, de principio a fin.",
    ctaLabel: "Contactar",
    servicesHeading: "Nuestros servicios",
    servicesIntro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },

  services: {
    pageTitle: "Nuestros servicios",
    metaDescription:
      "Servicios de desarrollo de software: frontend, backend, integraciones y mantenimiento.",
    pageIntro:
      "Desde la idea hasta producción: desarrollo, integro y mantengo software a medida.",
    items: [
      { title: "Desarrollo web", description: "Sitios y apps a medida" },
      { title: "Frontend", description: "Interfaces rápidas y accesibles" },
      { title: "Backend", description: "APIs y lógica de negocio" },
      { title: "Integraciones", description: "Conectá tus herramientas" },
      { title: "Mantenimiento", description: "Soporte y mejoras continuas" },
      { title: "Consultoría técnica", description: "Arquitectura y buenas prácticas" },
    ],
  },

  resources: {
    pageTitle: "Recursos",
    metaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      { term: "Lorem ipsum", definition: "Dolor sit amet, consectetur adipiscing elit." },
      { term: "Sed do eiusmod", definition: "Tempor incididunt ut labore et dolore magna aliqua." },
      { term: "Ut enim ad minim", definition: "Veniam, quis nostrud exercitation ullamco laboris." },
      { term: "Duis aute irure", definition: "Dolor in reprehenderit in voluptate velit esse." },
      { term: "Excepteur sint", definition: "Occaecat cupidatat non proident, sunt in culpa." },
      { term: "Qui officia", definition: "Deserunt mollit anim id est laborum." },
    ],
  },

  about: {
    pageTitle: "Lorem ipsum dolor sit amet",
    metaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageIntro:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    missionTitle: "Misión",
    missionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visionTitle: "Visión",
    visionText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  team: {
    pageTitle: "Nuestro equipo",
    metaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    viewProfileLabel: "Ver perfil",
    members: [
      {
        name: "Nombre Apellido",
        jobTitle: "Cargo o rol",
        bio: "Lorem ipsum · Dolor sit amet · Consectetur adipiscing",
      },
      {
        name: "Nombre Apellido",
        jobTitle: "Cargo o rol",
        bio: "Sed do eiusmod · Tempor incididunt · Ut labore et dolore",
      },
    ],
  },

  contact: {
    pageTitle: "Contacto",
    metaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    form: {
      nameLabel: "Nombre",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      submitLabel: "Enviar mensaje",
      successMessage: "¡Gracias! Te contactaremos a la brevedad.",
    },
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "Ut enim ad minim veniam?",
        answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Duis aute irure dolor?",
        answer: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        question: "Excepteur sint occaecat?",
        answer: "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
} as const;
