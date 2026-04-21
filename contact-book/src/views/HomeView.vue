<template>
  <section>
    <div class="page-header">
      <div>
        <h2>All Contacts</h2>
        <p>{{ filteredContacts.length }} contact(s)</p>
      </div>

      <RouterLink to="/add" class="btn">+ Add Contact</RouterLink>
    </div>

    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by first or last name..."
      class="search-input"
    />

    <div v-if="filteredContacts.length" class="contact-list">
      <RouterLink
        v-for="contact in filteredContacts"
        :key="contact.id"
        :to="`/contacts/${contact.id}`"
        class="contact-card"
      >
        <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
        <p>{{ contact.email }}</p>
      </RouterLink>
    </div>

    <p v-else>No contacts found.</p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { getContacts } from "../utils/contactsStorage";

const searchTerm = ref("");
const contacts = ref(getContacts());

const filteredContacts = computed(() => {
  return contacts.value
    .filter((contact) => {
      const fullName =
        `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.value.toLowerCase());
    })
    .sort((a, b) => a.lastName.localeCompare(b.lastName));
});
</script>