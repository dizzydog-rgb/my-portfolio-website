<template>
  <section class="product" ref="productRef">
    <div class="product__content">
      <div class="product__fixed">
        <div class="product__title">
          <div>
            <span>01</span>
            <h6>Design and Frontend Developer</h6>
          </div>
          <h2>My portfolio website</h2>
        </div>
        <div class="product__title">
          <div>
            <span>02</span>
            <h6>Design and Fullend Developer</h6>
          </div>
          <h2>Orderly & Steady</h2>
        </div>
        <div class="product__title">
          <div>
            <span>03</span>
            <h6>Team Leader and Frontend Developer</h6>
          </div>
          <h2>Chill Around</h2>
        </div>
      </div>
      <div class="product__img">
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/23/850/450" alt="My portfolio website" />
            <figcaption>
              Supported marketing efforts as a generalist designer, contributing to design during
              their second funding round which raised over $2M.
            </figcaption>
          </figure>
          <ul class="carousel__text">
            <li><span>Vue.js</span><span>Node.js</span><span>Vite</span>SCSS<span></span></li>
            <li><span>Vue.js</span><span>Node.js</span><span>Vite</span>SCSS<span></span></li>
          </ul>
        </div>
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/237/850/450" alt="Orderly & Steady" />
            <figcaption>
              Supported marketing efforts as a generalist designer, contributing to design during
              their second funding round which raised over $2M.
            </figcaption>
          </figure>
          <ul class="carousel__text">
            <li>Vue.js Node.js Vite SCSS</li>
            <li>Vue.js Node.js Vite SCSS</li>
          </ul>
        </div>
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/236/850/450" alt="Chill Around" />
            <figcaption>
              Supported marketing efforts as a generalist designer, contributing to design during
              their second funding round which raised over $2M.
            </figcaption>
          </figure>
          <ul class="carousel__text">
            <li>Vue.js Node.js Vite SCSS</li>
            <li>Vue.js Node.js Vite SCSS</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const titles = gsap.utils.toArray('.product__title')
  const images = gsap.utils.toArray('.product__item')

  if (titles.length === 0 || images.length === 0) return

  images.forEach((img, i) => {
    if (titles.length > 0 && images.length > 0) {
      ScrollTrigger.create({
        trigger: img,
        start: 'top 60%', // 當圖片頂部到達視窗下方 60%
        end: 'bottom 40%', // 當圖片底部離開視窗上方 40%
        onToggle: (self) => {
          if (self.isActive) {
            // 如果有舊的在亮，先關掉
            titles.forEach((t) => deactivateTitle(t))
            activateTitle(titles[i], i)
          } else {
            deactivateTitle(titles[i])
          }
        },
      })
    }
  })
})

// --- 活動樣式定義 ---
function activateTitle(el) {
  // 1. 透明度切換
  gsap.to(el, {
    opacity: 1,
    duration: 0.8,
    overwrite: 'auto',
  })

  // 2. 呼吸發光效果
  gsap.to(el, {
    textShadow: '0 0 10px #dd551f33, 0 0 15px #dd551f4D , 0 0 20px #dd551f80',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

function deactivateTitle(el) {
  // 1. 恢復半透明
  gsap.to(el, {
    opacity: 0.5,
    textShadow: '0 0 0px rgba(255,255,255,0)', // 消除發光
    duration: 0.5,
    overwrite: 'auto',
  })

  // 2. 停止該元素上的所有呼吸動畫
  gsap.killTweensOf(el, 'textShadow')
}
</script>

<style scoped>
.product {
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.product::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.png');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.product__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 var(--containerPadding) 120px;
  position: relative;
  display: grid;
  grid-template-columns: 7fr 8.5fr;
  align-items: start;
  gap: 5vw;
}
.product__fixed {
  margin-top: 100px;
  position: sticky;
  top: 200px;
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 70px;
}
.product__fixed .product__title {
  opacity: 0.5;
  text-shadow: 0 0 0px transparent;
  will-change: opacity, text-shadow;
}
.product__fixed .product__title > div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--SubColor02);
}
.product__fixed .product__title span {
  font-size: var(--f24);
  color: var(--SubColor);
  letter-spacing: 0.1em;
}
.product__fixed .product__title h6 {
  font-size: var(--f20);
  color: var(--SubColor);
  font-family: var(--SFontSans);
  line-height: 1.2;
}
.product__fixed h2 {
  font-size: var(--f46);
  color: var(--MainColor);
  font-style: italic;
  padding-top: 12px;
}

.product__img {
  display: flex;
  flex-flow: column;
  gap: 200px;
  position: relative;
}
.product__img .product__item figcaption {
  padding: 20px 15px 0;
  color: var(--MainColor);
}
.product__img .product__item .carousel__text {
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  overflow: hidden;
}
.product__img .product__item .carousel__text li {
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  font-size: var(--f50);
  color: var(--MainColor);
  line-height: 1.2;
  animation: carousel-right 5s linear infinite;
}
@keyframes carousel-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
