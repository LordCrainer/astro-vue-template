<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseIcon from "@atoms/BaseIcon.vue";
import { t } from "@lib/i18n";

const content = t().theme;
const STORAGE_KEY = "theme";

const isDark = ref(false);

onMounted(() => {
  isDark.value = document.documentElement.getAttribute("data-theme") === "dark";
});

function toggle() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
  try {
    localStorage.setItem(STORAGE_KEY, isDark.value ? "dark" : "light");
  } catch (_) {
    /* localStorage puede fallar en modo privado — el toggle sigue funcionando en memoria */
  }
}
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="isDark ? content.switchToLight : content.switchToDark"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <BaseIcon size="md">
      <svg v-if="isDark" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </BaseIcon>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: calc(var(--space-10) + var(--space-4));
  right: var(--space-5);
  z-index: 30;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-full);
  background-color: var(--surface-page);
  color: var(--text-primary);
  box-shadow: var(--shadow-lg);
  opacity: 0.7;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  opacity: 1;
}

.theme-toggle:active {
  transform: scale(0.94);
}
</style>
