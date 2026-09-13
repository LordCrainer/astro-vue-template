<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    active?: boolean;
  }>(),
  {
    active: false,
  },
);
</script>

<template>
  <a :href="href" class="nav-item" :class="{ 'nav-item--active': active }">
    <slot />
  </a>
</template>

<style scoped>
.nav-item {
  position: relative;
  padding: var(--space-2) 0;
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: var(--brand-primary);
  transform: scaleX(0);
  transition: transform var(--transition-fast);
}

.nav-item:hover {
  color: var(--text-brand);
}

.nav-item--active {
  color: var(--text-brand);
}

.nav-item--active::after {
  transform: scaleX(1);
}
</style>
