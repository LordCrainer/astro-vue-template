<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description?: string;
    image?: string;
    href?: string;
  }>(),
  {},
);
</script>

<template>
  <component :is="href ? 'a' : 'div'" :href="href" class="card-service">
    <div
      v-if="image"
      class="card-service__media"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div class="card-service__body">
      <h3 class="card-service__title">{{ title }}</h3>
      <p v-if="description" class="card-service__description">
        {{ description }}
      </p>
      <slot />
    </div>
  </component>
</template>

<style scoped>
.card-service {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-page);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

a.card-service:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-service__media {
  aspect-ratio: 4 / 3;
  background-color: var(--surface-muted);
  background-size: cover;
  background-position: center;
}

.card-service__body {
  padding: var(--space-4);
  background-color: var(--brand-secondary);
  color: var(--text-inverse);
}

.card-service__title {
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-1);
}

.card-service__description {
  font-size: var(--text-sm);
  color: var(--color-orange-300);
}
</style>
