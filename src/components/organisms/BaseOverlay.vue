<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@atoms/BaseButton.vue";
import BaseIcon from "@atoms/BaseIcon.vue";
import { useDismissibleOverlay } from "@lib/useDismissibleOverlay";

type Variant = "center" | "drawer-left" | "drawer-right";

const isOpen = defineModel<boolean>({ default: false });

withDefaults(
  defineProps<{
    /** Conecta el panel a su título vía aria-labelledby (el título puede vivir en el slot). */
    titleId: string;
    variant?: Variant;
    closeLabel: string;
  }>(),
  {
    variant: "center",
  },
);

const panelRef = ref<HTMLElement | null>(null);

function close() {
  isOpen.value = false;
}

useDismissibleOverlay(isOpen, panelRef, close);
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="overlay" :class="`overlay--${variant}`" @click.self="close">
      <div
        ref="panelRef"
        class="overlay__panel"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        tabindex="-1"
      >
        <BaseButton
          class="overlay__close"
          variant="ghost"
          size="md"
          icon-only
          :aria-label="closeLabel"
          @click="close"
        >
          <BaseIcon size="md">
            <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </BaseIcon>
        </BaseButton>

        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: var(--overlay-scrim);
  animation: overlay-fade var(--transition-base);
}

.overlay--center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5);
}

.overlay--drawer-left,
.overlay--drawer-right {
  display: flex;
}

.overlay--drawer-right {
  justify-content: flex-end;
}

.overlay--drawer-left {
  justify-content: flex-start;
}

.overlay__panel {
  position: relative;
  background-color: var(--surface-page);
  color: var(--text-primary);
  box-shadow: var(--shadow-lg);
  overflow-y: auto;
}

.overlay--center .overlay__panel {
  width: 100%;
  max-width: 32rem;
  max-height: calc(100vh - var(--space-10));
  padding: var(--space-8) var(--space-6) var(--space-6);
  border-radius: var(--radius-lg);
  animation: overlay-pop-center var(--transition-base);
}

.overlay--drawer-left .overlay__panel,
.overlay--drawer-right .overlay__panel {
  width: min(20rem, 85vw);
  height: 100%;
  padding: var(--space-8) var(--space-5) var(--space-5);
}

.overlay--drawer-right .overlay__panel {
  animation: overlay-slide-in-right var(--transition-base);
}

.overlay--drawer-left .overlay__panel {
  animation: overlay-slide-in-left var(--transition-base);
}

.overlay__close {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
}

@keyframes overlay-fade {
  from {
    opacity: 0;
  }
}

@keyframes overlay-pop-center {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(4px);
  }
}

@keyframes overlay-slide-in-right {
  from {
    transform: translateX(100%);
  }
}

@keyframes overlay-slide-in-left {
  from {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay,
  .overlay__panel {
    animation: none;
  }
}
</style>
