<script setup lang="ts">
import BaseHeading from "@atoms/BaseHeading.vue";
import BaseText from "@atoms/BaseText.vue";
import BaseButton from "@atoms/BaseButton.vue";

withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    highlight?: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    image?: string;
  }>(),
  {
    ctaLabel: "Agenda tu cita",
    ctaHref: "/contacto",
  },
);
</script>

<template>
  <section
    class="hero"
    :style="image ? { backgroundImage: `url(${image})` } : undefined"
  >
    <div class="hero__scrim" />
    <div class="container hero__content">
      <p v-if="eyebrow" class="hero__eyebrow">{{ eyebrow }}</p>
      <BaseHeading :level="1" size="xl" tone="inverse">
        {{ title }}
      </BaseHeading>
      <BaseHeading
        v-if="highlight"
        :level="2"
        size="lg"
        class="hero__highlight"
      >
        {{ highlight }}
      </BaseHeading>
      <BaseText size="lg" tone="inverse" class="hero__description">
        {{ description }}
      </BaseText>
      <div class="hero__actions">
        <BaseButton :href="ctaHref" size="lg">{{ ctaLabel }}</BaseButton>
        <slot name="secondary-action" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: var(--brand-secondary);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 71, 0.85) 0%,
    rgba(11, 43, 71, 0.45) 100%
  );
}

.hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-block: var(--space-10) var(--space-12);
  max-width: 42rem;
}

.hero__eyebrow {
  color: var(--brand-accent);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero__highlight {
  color: var(--brand-accent);
}

.hero__description {
  max-width: 34rem;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-3);
}
</style>
