<script setup lang="ts">
import { siteContact } from "@lib/navigation";
</script>

<template>
  <a
    :href="siteContact.whatsappHref"
    class="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="whatsapp-button__avatar" aria-hidden="true">WA</span>
    <span class="whatsapp-button__text">
      <span class="whatsapp-button__title">¿Necesitas ayuda?</span>
      <span class="whatsapp-button__value">{{ siteContact.phoneValue }}</span>
    </span>
  </a>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  right: var(--space-5);
  bottom: var(--space-5);
  z-index: 30;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-2);
  border-radius: var(--radius-full);
  background-color: var(--surface-page);
  box-shadow: var(--shadow-lg);
}

.whatsapp-button__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-full);
  background-color: var(--state-success);
  color: var(--text-inverse);
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
}

.whatsapp-button__text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.whatsapp-button__title {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

.whatsapp-button__value {
  font-weight: var(--weight-bold);
  color: var(--text-brand);
}

@media (max-width: 480px) {
  .whatsapp-button__text {
    display: none;
  }
}
</style>
