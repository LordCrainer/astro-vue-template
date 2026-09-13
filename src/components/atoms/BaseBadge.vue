<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: "brand" | "neutral";
  }>(),
  {
    tone: "brand",
  },
);
</script>

<template>
  <span class="badge" :class="`badge--${tone}`">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
}

.badge--brand {
  background-color: var(--color-orange-100);
  color: var(--text-brand);
}

.badge--neutral {
  background-color: var(--surface-muted);
  color: var(--text-secondary);
}
</style>
