<script setup lang="ts">
import BaseOverlay from "./BaseOverlay.vue";
import { t } from "@lib/i18n";

defineProps<{
  /** Debe apuntar al id del elemento que hace de título dentro del slot. */
  titleId: string;
}>();

const isOpen = defineModel<boolean>({ default: false });
const content = t().a11y;
</script>

<template>
  <BaseOverlay v-model="isOpen" variant="center" :title-id="titleId" :close-label="content.closeDialog">
    <slot />
  </BaseOverlay>
</template>
