<script setup lang="ts">
import { ref } from "vue";
import SiteLogo from "@atoms/SiteLogo.vue";
import BaseButton from "@atoms/BaseButton.vue";
import NavItem from "@molecules/NavItem.vue";
import ContactInfoItem from "@molecules/ContactInfoItem.vue";
import { primaryNav, siteContact } from "@lib/navigation";

withDefaults(
  defineProps<{
    currentPath?: string;
  }>(),
  {
    currentPath: "/",
  },
);

const isMenuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <div class="container site-header__row">
      <SiteLogo />

      <nav class="site-header__nav" aria-label="Principal">
        <NavItem
          v-for="link in primaryNav"
          :key="link.href"
          :href="link.href"
          :active="link.href === currentPath"
        >
          {{ link.label }}
        </NavItem>
      </nav>

      <div class="site-header__actions">
        <ContactInfoItem
          class="site-header__phone"
          :label="siteContact.phoneLabel"
          :value="siteContact.phoneValue"
          :href="siteContact.phoneHref"
        />
        <BaseButton href="/contacto" size="md">Citas</BaseButton>
        <button
          type="button"
          class="site-header__toggle"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Abrir menú de navegación"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <nav
      v-if="isMenuOpen"
      id="mobile-nav"
      class="site-header__mobile-nav"
      aria-label="Principal (móvil)"
    >
      <NavItem
        v-for="link in primaryNav"
        :key="link.href"
        :href="link.href"
        :active="link.href === currentPath"
      >
        {{ link.label }}
      </NavItem>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: var(--surface-page);
  border-bottom: 1px solid var(--border-default);
}

.site-header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-3);
}

.site-header__nav {
  display: none;
  align-items: center;
  gap: var(--space-5);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.site-header__phone {
  display: none;
}

.site-header__toggle {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-2);
}

.site-header__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--brand-secondary);
}

.site-header__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5) var(--space-5);
  border-top: 1px solid var(--border-default);
}

@media (min-width: 960px) {
  .site-header__nav {
    display: flex;
  }
  .site-header__phone {
    display: flex;
  }
  .site-header__toggle {
    display: none;
  }
}
</style>
