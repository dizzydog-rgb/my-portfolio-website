<script setup>
  defineOptions({
    name: 'AppNavbar'
  })
</script>

<template>
  <nav class="navbar">
    <div class="logo">My Portfolio</div>
    <div class="links">
      <router-link to="/">首頁</router-link>
      <router-link to="/library">組件展示庫</router-link>
      <router-link to="/blog">部落格</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #333;
  color: white;
}
.links{
  display: flex;
  justify-content: center;
  gap: 40px;
}
.links a {
  color: white;
  text-decoration: none;
}
/* 當前路徑的樣式 */
.router-link-active {
  color: #2ecc71;
  font-weight: bold;
}
</style>
