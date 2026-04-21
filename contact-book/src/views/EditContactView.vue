<template>
  <section v-if="contact">
    <h2>Edit Contact</h2>
    <ContactForm
      :contact="contact"
      submitLabel="Update Contact"
      @submit-contact="saveUpdatedContact"
    />
  </section>

  <p v-else>Contact not found.</p>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import ContactForm from "../components/ContactForm.vue";
import { getContactById, updateContact } from "../utils/contactsStorage";

const route = useRoute();
const router = useRouter();

const contact = getContactById(route.params.id);

function saveUpdatedContact(formData) {
  const updated = {
    ...contact,
    ...formData,
  };

  updateContact(updated);
  router.push(`/contacts/${updated.id}`);
}
</script>