<script setup lang="ts">
defineProps<{
  term: string;
  definition: string;
}>();
</script>

<template>
  <article class="resource-card">
    <h3 class="resource-card__term">{{ term }}</h3>
    <p class="resource-card__definition">{{ definition }}</p>
  </article>
</template>

<style scoped>
.resource-card {
  padding: var(--space-5);
  border-radius: var(--radius-md);
  background-color: var(--surface-muted);
}

.resource-card__term {
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--brand-secondary);
  margin-bottom: var(--space-2);
}

.resource-card__definition {
  color: var(--text-secondary);
}
</style>
