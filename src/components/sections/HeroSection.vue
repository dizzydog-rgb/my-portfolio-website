<template>
  <section class="hero" ref="heroRef">
    <div class="hero__content">
      <h1 class="hero__title">你好，我是 <span class="highlight">前端開發者</span></h1>
      <p class="hero__subtitle">專注於打造直觀且具備動態美感的網頁體驗。</p>
      <div class="hero__actions">
        <BaseButton @click="goProject">查看作品</BaseButton>
        <BaseButton type="secondary">聯絡我</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import BaseButton from '../base/BaseButton.vue'

const heroRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.hero__title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
  })
    .to(
      '.hero__subtitle',
      {
        opacity: 1,
        y: 0,
        x: 0, // 可以加一點位移
        duration: 0.8,
      },
      '-=0.6',
    ) // "-=0.6" 代表在上一個動畫結束前 0.6 秒就開始，讓動作更連貫
    .to(
      '.hero__actions',
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2, // 如果按鈕有多個，會一個接一個跳出來
      },
      '-=0.4',
    )
})
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}
.hero__title {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.hero__subtitle {
  font-size: 1.5rem;
  opacity: 0;
} /* 先隱藏，交給 GSAP 控制 */
.hero__actions {
  margin-top: 2rem;
  opacity: 0;
  display: flex;
  gap: 40px;
}
.highlight {
  color: #2ecc71;
}
</style>
