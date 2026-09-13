<script setup lang="ts">
import BaseOverlay from "./BaseOverlay.vue";
import { t } from "@lib/i18n";

withDefaults(
  defineProps<{
    /** Debe apuntar al id del elemento que hace de título dentro del slot. */
    titleId: string;
    side?: "left" | "right";
  }>(),
  {
    side: "right",
  },
);

const isOpen = defineModel<boolean>({ default: false });
const content = t().a11y;
</script>

<template>
  <BaseOverlay
    v-model="isOpen"
    :variant="side === 'left' ? 'drawer-left' : 'drawer-right'"
    :title-id="titleId"
    :close-label="content.closeMenu"
  >
    <slot />
  </BaseOverlay>
</template>
