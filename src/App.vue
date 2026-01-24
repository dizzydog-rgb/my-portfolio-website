<script setup>
import Navbar from './components/common/AppNavbar.vue'
import Footer from './components/common/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.content {
  min-height: 80vh;
}
</style>
