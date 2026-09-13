<script setup lang="ts">
type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    /** Botón cuadrado sin padding horizontal extra, para un solo BaseIcon (cerrar, hamburguesa, etc). */
    iconOnly?: boolean;
    /** Requerido cuando iconOnly es true y no hay texto visible para lectores de pantalla. */
    ariaLabel?: string;
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
    disabled: false,
    iconOnly: false,
  },
);
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--icon-only': iconOnly }]"
    :aria-label="ariaLabel"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--icon-only': iconOnly }]"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  border-radius: var(--radius-full);
  border: 2px solid transparent;
  white-space: nowrap;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);
}

.btn:active {
  transform: translateY(1px);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Sizes */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}
.btn--md {
  padding: var(--space-3) var(--space-5);
  font-size: var(--text-base);
}
.btn--lg {
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-lg);
}

/* Icon-only override — same hit areas as the size scale above, but square */
.btn--icon-only.btn--sm {
  padding: var(--space-2);
}
.btn--icon-only.btn--md {
  padding: var(--space-3);
}
.btn--icon-only.btn--lg {
  padding: var(--space-4);
}

/* Variants */
.btn--primary {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
}
.btn--primary:hover {
  background-color: var(--brand-primary-strong);
}

.btn--secondary {
  background-color: var(--brand-secondary);
  color: var(--text-inverse);
}
.btn--secondary:hover {
  background-color: var(--color-navy-700);
}

.btn--outline {
  background-color: transparent;
  border-color: currentColor;
  color: var(--text-primary);
}
.btn--outline:hover {
  background-color: var(--surface-muted);
}

.btn--ghost {
  background-color: transparent;
  color: var(--text-primary);
}
.btn--ghost:hover {
  background-color: var(--surface-muted);
}
</style>
