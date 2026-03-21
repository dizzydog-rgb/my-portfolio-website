<script setup>
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppLoader from '../components/common/AppLoader.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ProductSection from '../components/sections/ProductSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const isLoading = ref(true)
const isHeroReady = ref(false) // 傳給 Loader 的圖片載入是否完成的訊號
const startHeroAnim = ref(false)

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant', // 使用 instant 確保在 Loader 蓋住時就完成，不要有滾動動畫
  })
})

// 處理 HeroSection 圖片載入完成的事件
const handleHeroLoaded = () => {
  isHeroReady.value = true
}

// 處理 AppLoader 讓進度條跑完 100% 動畫
const handleLoaderFinished = () => {
  isLoading.value = false
  startHeroAnim.value = true

  // 核心：給瀏覽器一點時間渲染 DOM，然後強制 GSAP 重新計算所有位置
  setTimeout(() => {
    ScrollTrigger.refresh()
    console.log('所有位置已重新計算')
  }, 100)
}

// 鎖定滾動：載入時禁止使用者亂滾
watch(
  isLoading,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  },
  { immediate: true },
)

// GSAP 退場動畫：讓 AppLoader 向上滑動消失
const onLoaderLeave = (el, done) => {
  gsap.to(el, {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut',
    onComplete: done,
  })
}
</script>

<template>
  <main>
    <Transition :css="false" @leave="onLoaderLeave">
      <AppLoader
        v-if="isLoading"
        :is-finished="isHeroReady"
        @loader-finished="handleLoaderFinished"
      />
    </Transition>

    <div :class="{ 'is-loading-content': isLoading }">
      <HeroSection :is-start="startHeroAnim" @heroImagesLoaded="handleHeroLoaded" />
      <ProductSection />
      <ContactSection />
    </div>
  </main>
</template>

<style scoped>
.is-loading-content {
  opacity: 0;
  pointer-events: none;
}

.content-wrapper {
  transition: opacity 0.5s ease;
}
</style>
