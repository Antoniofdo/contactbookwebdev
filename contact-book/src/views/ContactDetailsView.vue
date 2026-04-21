<template>
  <section v-if="contact" class="details-card">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>

    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>
    <p><strong>Address:</strong> {{ contact.address }}</p>

    <div class="actions">
      <RouterLink :to="`/edit/${contact.id}`" class="btn">Edit</RouterLink>
      <button @click="removeContact" class="btn danger">Delete</button>
    </div>
  </section>

  <p v-else>Contact not found.</p>
</template>

<script setup>
import { useRoute, useRouter, RouterLink } from "vue-router";
import { getContactById, deleteContact } from "../utils/contactsStorage";

const route = useRoute();
const router = useRouter();

const contact = getContactById(route.params.id);

function removeContact() {
  deleteContact(route.params.id);
  router.push("/");
}
</script>