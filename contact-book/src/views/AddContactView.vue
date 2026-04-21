<template>
  <section>
    <h2>Add Contact</h2>
    <ContactForm submitLabel="Create Contact" @submit-contact="createContact" />
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import ContactForm from "../components/ContactForm.vue";
import { addContact } from "../utils/contactsStorage";

const router = useRouter();

function createContact(formData) {
  const newContact = {
    id: crypto.randomUUID(),
    ...formData,
  };

  addContact(newContact);
  router.push(`/contacts/${newContact.id}`);
}
</script>