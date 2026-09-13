import { es } from "./es";

/**
 * Registro de locales — hoy solo "es". Para sumar inglés: crear `en.ts` con
 * el mismo shape que `es.ts` y agregarlo acá. Nada más del código cambia,
 * porque todo el resto ya consume `t()` en vez de strings sueltos.
 */
export const locales = { es } as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = "es";

/** Devuelve el diccionario de contenido para un locale (o el default). */
export function t(locale: Locale = defaultLocale) {
  return locales[locale];
}
