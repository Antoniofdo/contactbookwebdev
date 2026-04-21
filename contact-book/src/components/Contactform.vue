<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <label>
      First Name
      <input v-model="form.firstName" type="text" required />
    </label>

    <label>
      Last Name
      <input v-model="form.lastName" type="text" required />
    </label>

    <label>
      Email
      <input v-model="form.email" type="email" required />
    </label>

    <label>
      Phone
      <input v-model="form.phone" type="text" />
    </label>

    <label>
      Address
      <input v-model="form.address" type="text" />
    </label>

    <button type="submit" class="btn">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  contact: {
    type: Object,
    default: () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    }),
  },
  submitLabel: {
    type: String,
    default: "Save Contact",
  },
});

const emit = defineEmits(["submit-contact"]);

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
});

watch(
  () => props.contact,
  (newContact) => {
    form.firstName = newContact.firstName || "";
    form.lastName = newContact.lastName || "";
    form.email = newContact.email || "";
    form.phone = newContact.phone || "";
    form.address = newContact.address || "";
  },
  { immediate: true }
);

function handleSubmit() {
  emit("submit-contact", { ...form });
}
</script>