<script setup lang="ts">
defineProps<{
  id: string;
  type?: "text" | "email" | "tel" | "password";
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
}>();

const model = defineModel<string>({ default: "" });
</script>

<template>
  <input
    :id="id"
    v-model="model"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    :required="required"
    :aria-invalid="invalid || undefined"
    class="input"
    :class="{ 'input--invalid': invalid }"
  />
</template>

<style scoped>
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  background-color: var(--surface-page);
  color: var(--text-primary);
  font-size: var(--text-base);
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.input::placeholder {
  color: var(--text-secondary);
}

.input:focus-visible {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px var(--brand-accent);
}

.input--invalid {
  border-color: var(--state-danger);
}
</style>
