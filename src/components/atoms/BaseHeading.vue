<script setup lang="ts">
withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 4;
    size?: "sm" | "md" | "lg" | "xl";
    tone?: "default" | "inverse" | "brand";
  }>(),
  {
    level: 2,
    size: "md",
    tone: "default",
  },
);
</script>

<template>
  <component
    :is="`h${level}`"
    class="heading"
    :class="[`heading--${size}`, `heading--${tone}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
.heading {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
}

.heading--sm {
  font-size: var(--text-xl);
}
.heading--md {
  font-size: var(--text-2xl);
}
.heading--lg {
  font-size: var(--text-3xl);
}
.heading--xl {
  font-size: var(--text-4xl);
}

.heading--default {
  color: var(--text-primary);
}
.heading--inverse {
  color: var(--text-inverse);
}
.heading--brand {
  color: var(--text-brand);
}
</style>
