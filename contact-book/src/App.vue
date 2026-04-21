<script setup>
import HeaderNav from "./components/HeaderNav.vue";
</script>

<template>
  <div class="app-shell">
    <HeaderNav />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

