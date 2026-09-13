<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    value: string;
    href?: string;
  }>(),
  {},
);
</script>

<template>
  <component :is="href ? 'a' : 'div'" :href="href" class="contact-info">
    <span class="contact-info__label">{{ label }}</span>
    <span class="contact-info__value">{{ value }}</span>
  </component>
</template>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.contact-info__value {
  font-weight: var(--weight-bold);
  color: var(--text-primary);
}

.contact-info__label {
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-brand);
}
</style>
