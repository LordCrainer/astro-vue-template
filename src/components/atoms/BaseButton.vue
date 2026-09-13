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
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
    disabled: false,
  },
);
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
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
  color: var(--brand-secondary);
}
.btn--outline:hover {
  background-color: var(--surface-muted);
}

.btn--ghost {
  background-color: transparent;
  color: var(--brand-secondary);
}
.btn--ghost:hover {
  background-color: var(--surface-muted);
}
</style>
