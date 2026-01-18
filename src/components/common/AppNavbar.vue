<script setup>
defineOptions({
  name: 'AppNavbar',
})
</script>

<template>
  <nav class="navbar">
    <div class="logo">Jackie Chen</div>
    <div class="links">
      <router-link to="/">About</router-link>
      <router-link to="/library">Library</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  background: #333;
  color: white;
  .logo {
    font-size: 32px;
    font-family: 'Instrument Serif', serif;
    letter-spacing: 0.05em;
  }
  .links {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .links a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-family: 'Instrument Serif', serif;
    font-weight: 300;
  }
}

/* 當前路徑的樣式 */
.router-link-active {
  color: #2ecc71;
  font-weight: bold;
}
</style>
