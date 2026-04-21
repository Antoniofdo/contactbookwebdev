<template>
  <header class="topbar">
    <h1>Contact Book</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add Contact</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
