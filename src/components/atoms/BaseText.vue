<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: "p" | "span";
    size?: "sm" | "base" | "lg";
    tone?: "default" | "muted" | "inverse";
  }>(),
  {
    as: "p",
    size: "base",
    tone: "default",
  },
);
</script>

<template>
  <component :is="as" class="text" :class="[`text--${size}`, `text--${tone}`]">
    <slot />
  </component>
</template>

<style scoped>
.text {
  font-family: var(--font-sans);
  line-height: var(--leading-relaxed);
}

.text--sm {
  font-size: var(--text-sm);
}
.text--base {
  font-size: var(--text-base);
}
.text--lg {
  font-size: var(--text-lg);
}

.text--default {
  color: var(--text-primary);
}
.text--muted {
  color: var(--text-secondary);
}
.text--inverse {
  color: var(--text-inverse);
}
</style>
