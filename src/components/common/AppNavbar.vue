<script setup>
defineOptions({
  name: 'AppNavbar',
})

import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
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
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 1000;

  background-color: transparent;
  backdrop-filter: blur(0);
  -webkit-backdrop-filter: blur(0);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  transition: all 0.4s ease;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  color: #aa3b0f;
}
.navbar.navbar--scrolled {
  padding: 15px 40px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.navbar .logo {
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
  color: #aa3b0f;
  text-decoration: none;
  font-family: 'Instrument Serif', serif;
  font-weight: 300;
}

/* 當前路徑的樣式 */
.router-link-active {
  color: #2ecc71;
  font-weight: bold;
}
</style>
