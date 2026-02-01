<template>
  <section class="product-section" ref="productSection">
    <div class="product-container">
      <h2 class="fly-in-text" ref="textRef">Ukiyo-e from Japan</h2>
      <div class="product-box">Artwork</div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊套件
gsap.registerPlugin(ScrollTrigger)

const textRef = ref(null)
const productSection = ref(null)

onMounted(() => {
  // 先清理掉所有舊的追蹤器，避免熱更新造成的重複渲染
  ScrollTrigger.getAll().forEach((t) => t.kill())

  // --- 1. 文字拆解邏輯 ---
  const textElement = textRef.value
  const text = textElement.textContent
  const chars = text.split('')

  // 清空並重新注入 span
  textElement.innerHTML = ''
  chars.forEach((char) => {
    const span = document.createElement('span')
    span.className = 'char'
    span.innerHTML = char === ' ' ? '&nbsp;' : char
    textElement.appendChild(span)
  })

  // --- 2. 建立時間軸 ---
  // 我們將所有的動畫串在一個 ScrollTrigger Timeline 裡
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: productSection.value,
      start: 'top top', // 碰到頂部開始
      end: '+=500', // 捲動 800px 長度
      scrub: 1, // 關鍵：這讓動畫跟隨滾輪
      pin: true, // 釘住螢幕
      markers: true, // 開啟標記，除錯完可以刪掉
    },
  })

  // 3. 定義飛入動畫 (從亂七八糟飛回原位)
  tl.from('.char', {
    opacity: 0,
    x: () => Math.random() * 1000 - 500,
    y: () => Math.random() * 1000 - 500,
    z: () => Math.random() * 500 - 250,
    rotation: () => Math.random() * 360,
    scale: 0,
    stagger: {
      each: 0.02,
      from: 'random',
    },
    duration: 2,
    ease: 'power2.out',
  })

  // 4. 接續 Product Box 出現
  tl.from(
    '.product-box',
    {
      y: 50,
      scale: 0,
      opacity: 0,
      duration: 1,
    },
    '-=0.5',
  )
})
</script>

<style scoped>
.product-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
}

.product-container {
  display: flex;
  flex-direction: column;
}

.fly-in-text {
  font-size: 48px;
  color: #fff;
  letter-spacing: 0.3rem;
  perspective: 1000px;
}
.product-box {
  color: #707070;
  font-size: 20px;
  margin-top: 20px;
}

/* 關鍵：必須是 inline-block 才能吃 transform */
:deep(.char) {
  display: inline-block;
  will-change: transform, opacity;
}
</style>
