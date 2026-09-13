<script setup lang="ts">
import CardService from "@molecules/CardService.vue";

export interface Service {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

defineProps<{
  services: readonly Service[];
}>();
</script>

<template>
  <div class="services-grid">
    <CardService
      v-for="service in services"
      :key="service.title"
      :title="service.title"
      :description="service.description"
      :image="service.image"
      :href="service.href"
    />
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

@media (min-width: 720px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1080px) {
  .services-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
