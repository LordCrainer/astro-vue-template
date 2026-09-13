<script setup lang="ts">
import { reactive, ref } from "vue";
import FormField from "@molecules/FormField.vue";
import BaseButton from "@atoms/BaseButton.vue";
import { t } from "@lib/i18n";

const content = t().contact.form;

const form = reactive({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>

<template>
  <form v-if="!submitted" class="contact-form stack" @submit.prevent="handleSubmit">
    <FormField id="name" v-model="form.name" :label="content.nameLabel" required />
    <FormField
      id="phone"
      v-model="form.phone"
      :label="content.phoneLabel"
      type="tel"
      required
    />
    <FormField id="email" v-model="form.email" :label="content.emailLabel" type="email" />
    <BaseButton type="submit" size="lg">{{ content.submitLabel }}</BaseButton>
  </form>
  <p v-else class="contact-form__success">
    {{ content.successMessage }}
  </p>
</template>

<style scoped>
.contact-form {
  max-width: 32rem;
}

.contact-form__success {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--text-brand);
}
</style>
