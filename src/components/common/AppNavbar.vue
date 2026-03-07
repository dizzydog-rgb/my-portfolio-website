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
    <router-link to="/"><div class="logo">Jackie Chen</div></router-link>
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
  color: var(--MainColor);
}
.navbar.navbar--scrolled {
  padding: 15px 40px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.navbar .logo {
  font-size: var(--f32);
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.links {
  display: flex;
  justify-content: center;
  gap: 40px;
}
.links a {
  font-size: var(--f24);
  color: var(--MainColor);
  text-decoration: none;
  font-weight: 300;
}

/* 當前路徑的樣式 */
.links a.is-active {
  animation: text-glow 2.5s ease-in-out infinite;
}
@keyframes text-glow {
  0%,
  100% {
    text-shadow: 0 0 0px rgba(255, 154, 113, 0);
    opacity: 1;
  }
  50% {
    text-shadow:
      0 0 4px #ff9a71,
      0 0 10px #ff9a71,
      0 0 15px #ff9a71;
    opacity: 0.8;
  }
}

@media (max-width: 480px) {
  .links {
    gap: 20px;
  }
  .navbar.navbar--scrolled {
    padding: 15px 25px;
  }
}
</style>
