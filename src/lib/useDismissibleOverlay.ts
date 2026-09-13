import { watch, type Ref } from "vue";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Comportamiento compartido por BaseDialog y SidebarMenu: bloquea el scroll
 * del body, atrapa el foco dentro del panel, cierra con Escape y devuelve el
 * foco al elemento que abrió el overlay. Vive acá (no en cada componente)
 * porque ambos lo necesitan idéntico y no hay razón para mantenerlo dos veces.
 */
export function useDismissibleOverlay(
  isOpen: Ref<boolean>,
  panelRef: Ref<HTMLElement | null>,
  onClose: () => void,
) {
  let previouslyFocused: HTMLElement | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab" || !panelRef.value) return;

    const focusable = Array.from(
      panelRef.value.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  watch(isOpen, (open) => {
    if (open) {
      previouslyFocused = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeydown);
      requestAnimationFrame(() => {
        const target =
          panelRef.value?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? panelRef.value;
        target?.focus();
      });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);
      previouslyFocused?.focus();
    }
  });
}
