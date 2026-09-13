<script setup lang="ts">
import { primaryNav, siteContact, siteName } from "@lib/navigation";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__row">
      <p class="site-footer__brand">{{ siteName }}</p>
      <nav class="site-footer__nav" aria-label="Pie de página">
        <a v-for="link in primaryNav" :key="link.href" :href="link.href">
          {{ link.label }}
        </a>
      </nav>
      <a :href="siteContact.phoneHref" class="site-footer__phone">
        {{ siteContact.phoneValue }}
      </a>
    </div>
    <p class="site-footer__legal">
      © {{ year }} {{ siteName }}. Todos los derechos reservados.
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--brand-secondary);
  color: var(--text-inverse);
  padding-block: var(--space-6) var(--space-4);
}

.site-footer__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.site-footer__brand {
  font-weight: var(--weight-bold);
  font-size: var(--text-lg);
}

.site-footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  font-size: var(--text-sm);
}

.site-footer__phone {
  font-weight: var(--weight-semibold);
  color: var(--brand-accent);
}

.site-footer__legal {
  margin-top: var(--space-6);
  text-align: center;
  font-size: var(--text-xs);
  color: var(--color-orange-300);
}
</style>
