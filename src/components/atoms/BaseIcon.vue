<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    label?: string;
  }>(),
  {
    size: "md",
  },
);
</script>

<template>
  <span
    class="icon"
    :class="`icon--${size}`"
    :role="label ? 'img' : 'presentation'"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
  >
    <slot />
  </span>
</template>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
}

.icon--sm {
  width: 1rem;
  height: 1rem;
}
.icon--md {
  width: 1.5rem;
  height: 1.5rem;
}
.icon--lg {
  width: 2rem;
  height: 2rem;
}
</style>
