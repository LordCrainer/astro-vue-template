<script setup lang="ts">
import BaseInput from "@atoms/BaseInput.vue";

withDefaults(
  defineProps<{
    id: string;
    label: string;
    type?: "text" | "email" | "tel" | "password";
    required?: boolean;
    error?: string;
  }>(),
  {
    required: false,
  },
);

const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="form-field">
    <label :for="id" class="form-field__label">
      {{ label }}
      <span v-if="required" aria-hidden="true">*</span>
    </label>
    <BaseInput
      :id="id"
      v-model="model"
      :type="type"
      :required="required"
      :invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
    />
    <p v-if="error" :id="`${id}-error`" class="form-field__error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-field__label {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
}

.form-field__error {
  font-size: var(--text-sm);
  color: var(--state-danger);
}
</style>
