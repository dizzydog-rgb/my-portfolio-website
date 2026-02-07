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
        <div class="product product01">
          <figure>
            <img src="https://picsum.photos/seed/picsum/850/450" alt="My portfolio website" />
          </figure>
          <ul class="carousel__text">
            <li><span>Vue.js</span><span>Node.js</span><span>Vite</span>SCSS<span></span></li>
            <li><span>Vue.js</span><span>Node.js</span><span>Vite</span>SCSS<span></span></li>
          </ul>
        </div>
        <div class="product product01">
          <figure>
            <img src="https://picsum.photos/seed/picsum/850/450" alt="Orderly & Steady" />
          </figure>
          <ul class="carousel__text">
            <li>Vue.js Node.js Vite SCSS</li>
            <li>Vue.js Node.js Vite SCSS</li>
          </ul>
        </div>
        <div class="product product01">
          <figure>
            <img src="https://picsum.photos/seed/picsum/850/450" alt="Chill Around" />
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
// import { onMounted, ref } from 'vue'
// import gsap from 'gsap'
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
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.avif');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.product__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 20px;
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
.product__fixed .product__title > div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 8px;
  border-bottom: 1px solid #d4426e;
}
.product__fixed .product__title span {
  font-size: 24px;
  color: #dd551f;
  font-family: 'Instrument Serif', serif;
  letter-spacing: 0.15em;
}
.product__fixed .product__title h6 {
  font-size: 20px;
  color: #dd551f;
  font-family: 'Instrument Sans';
  line-height: 1.2;
}
.product__fixed h2 {
  font-size: 48px;
  color: #aa3b0f;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  padding-top: 12px;
}

.product__img {
  display: flex;
  flex-flow: column;
  gap: 200px;
  position: relative;
}
.product__img .carousel__text {
  width: 100%;
  position: absolute;
  bottom: 60px;
  display: flex;
  overflow: hidden;
}
.product__img .carousel__text li {
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  font-size: 48px;
  line-height: 1.2;
  color: #aa3b0f;
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
