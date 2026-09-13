<script setup lang="ts">
import BaseButton from "@atoms/BaseButton.vue";

withDefaults(
  defineProps<{
    name: string;
    jobTitle: string;
    image?: string;
    href?: string;
  }>(),
  {},
);
</script>

<template>
  <article class="team-card">
    <div
      class="team-card__media"
      :style="image ? { backgroundImage: `url(${image})` } : undefined"
    />
    <div class="team-card__body">
      <h3 class="team-card__name">{{ name }}</h3>
      <p class="team-card__role">{{ jobTitle }}</p>
      <div class="team-card__details">
        <slot />
      </div>
      <BaseButton v-if="href" :href="href" variant="secondary" size="sm">
        Ver perfil
      </BaseButton>
    </div>
  </article>
</template>

<style scoped>
.team-card {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-muted);
}

.team-card__media {
  aspect-ratio: 4 / 3;
  background-color: var(--border-default);
  background-size: cover;
  background-position: center;
}

.team-card__body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.team-card__name {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
}

.team-card__role {
  font-weight: var(--weight-semibold);
  color: var(--text-brand);
}

.team-card__details {
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

@media (min-width: 640px) {
  .team-card {
    grid-template-columns: 1fr 1.4fr;
  }
}
</style>
