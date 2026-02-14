<template>
  <section class="hero" ref="heroRef">
    <div class="hero__content">
      <h1 class="hero__title">FRONTEND <br />DEVELOPER</h1>
      <BaseButton class="hero__button" @click="goProject"
        ><span>CONTACT ME</span><img src="@/assets/icons/arrow-top-right.svg" alt="arrow"
      /></BaseButton>
      <section class="ukiyo-stage" ref="stageRef">
        <div class="layer layer--mountains">
          <img v-for="n in 3" :key="'mtn' + n" :src="getImg('mountain', n)" class="mtn-img" />
        </div>

        <div class="layer layer--waves">
          <img v-for="n in 3" :key="'wave' + n" :src="getImg('wave', n)" class="wave-img" />
        </div>

        <div class="layer layer--people">
          <img v-for="n in 8" :key="'ppl' + n" :src="getImg('people', n)" class="people-img" />
        </div>

        <div class="stage-overlay"></div>

        <div class="layer layer--monsters">
          <img v-for="n in 10" :key="'mon' + n" :src="getImg('monster', n)" class="monster-img" />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import BaseButton from '../base/BaseButton.vue'

const heroRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.ukiyo-stage',
      start: 'top top',
      end: '+=3000', // 增加捲動長度，讓動畫慢慢跑
      scrub: 1.5,
      pin: true,
    },
  })

  tl.to('.mtn-img', { y: 0, stagger: 0.3, duration: 2, ease: 'power2.out' })
    .to('.wave-img', { x: 0, stagger: 0.2, duration: 2 }, '-=1') // 海浪跟山重疊一點點進場
    .to(
      '.people-img',
      {
        y: '-=300', // 從間隙向上浮出
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,
      },
      '-=0.5',
    )
    .to('.stage-overlay', { opacity: 0.7, duration: 1 }) // 變暗
    .to('.monster-img', {
      opacity: 1,
      scale: 1,
      x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
      y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
      rotation: () => Math.random() * 360,
      stagger: { each: 0.05, from: 'random' },
      duration: 1,
    })
})

gsap.to('.monster-img', {
  x: '+=20',
  y: '-=20',
  repeat: -1,
  yoyo: true,
  duration: 'random(0.5, 1.5)',
  ease: 'sine.inOut',
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
  font-size: var(--f120);
  line-height: 1.2;
  color: var(--MainColor);
  padding-left: var(--containerPadding);
  padding-bottom: 40px;
}
.hero__button {
  font-size: var(--f40);
  color: var(--MainColor);
  font-family: var(--SFontSans);
  background: transparent;
  opacity: 1;
  position: absolute;
  right: var(--containerPadding);
  top: 120px;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  padding: 10px 30px;
}
.hero__button img {
  color: var(--MainColor);
  transition: 0.2s linear;
}

.hero__button:hover {
  background: var(--MainColor);
  color: #ffffff;
  transform: translate(0);
}
.hero__button:hover img {
  transform: rotate(45deg);
  filter: brightness(0) invert(1);
}

.ukiyo-stage {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fdfaf2; /* 宣紙底色 */
}

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

/* 層級排序 */
.layer--mountains {
  z-index: 10;
}
.layer--waves {
  z-index: 20;
}
.layer--people {
  z-index: 15;
} /* 人物夾在山與海之間 */
.stage-overlay {
  position: absolute;
  inset: 0;
  background: black;
  opacity: 0;
  z-index: 25;
}
.layer--monsters {
  z-index: 30;
}

/* 初始位移設定 */
.mtn-img {
  transform: translateY(100%);
}
.wave-img:nth-child(odd) {
  transform: translateX(-100%);
}
.wave-img:nth-child(even) {
  transform: translateX(100%);
}
.people-img {
  transform: translateY(100%);
  opacity: 0;
}
.monster-img {
  opacity: 0;
  scale: 0.5;
  position: absolute;
}
</style>
