<script setup lang="ts">
import { siteName } from "@lib/navigation";
import { t } from "@lib/i18n";

const content = t();

withDefaults(
  defineProps<{
    href?: string;
  }>(),
  {
    href: "/",
  },
);
</script>

<template>
  <a :href="href" class="logo" :aria-label="`${siteName}, ir al inicio`">
    <img class="logo__mark" src="/logo-cagm.png" alt="" width="40" height="40" />
    <span class="logo__text">
      <span class="logo__name">{{ siteName }}</span>
      <span class="logo__tag">{{ content.site.tagline }}</span>
    </span>
  </a>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}

.logo__mark {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo__name {
  font-weight: var(--weight-bold);
  font-size: var(--text-lg);
  color: var(--text-primary);
}

.logo__tag {
  font-weight: var(--weight-semibold);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  color: var(--text-brand);
  text-transform: uppercase;
}
</style>
