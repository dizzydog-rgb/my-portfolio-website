<template>
  <section class="hero" ref="heroRef">
    <div class="hero__content">
      <h1 class="hero__title">FRONTEND <br />DEVELOPER</h1>
      <BaseButton class="hero__button" @click="goProject"
        ><span>CONTACT ME</span><img src="@/assets/icons/arrow-top-right.svg" alt="arrow"
      /></BaseButton>
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
  overflow: hidden;
  padding-top: 75px;
  display: flex;
  align-items: end;
  justify-content: start;
  position: relative;
}
.hero__title {
  font-size: 120px;
  line-height: 1.2;
  color: #aa3b0f;
  font-family: 'Instrument Serif', serif;
  padding-left: 40px;
  padding-bottom: 40px;
}
.hero__button {
  font-size: 40px;
  font-family: 'Instrument Serif', serif;
  color: #aa3b0f;
  background: transparent;
  opacity: 1;
  position: absolute;
  right: 40px;
  top: 120px;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  padding: 10px 30px;
}
.hero__button img {
  color: #aa3b0f;
  transition: 0.2s linear;
}

.hero__button:hover {
  background: #aa3b0f;
  color: #ffffff;
  transform: translate(0);
}
.hero__button:hover img {
  transform: rotate(45deg);
  filter: brightness(0) invert(1);
}
</style>
