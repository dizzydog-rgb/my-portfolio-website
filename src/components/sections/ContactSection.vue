<template>
  <section class="contact" ref="contactRef">
    <div class="contact__content">
      <div class="contact_img">
        <figure>
          <img src="https://picsum.photos/seed/picsum/780/1000" alt="My portfolio website" />
        </figure>
      </div>
      <div class="contact__info">
        <h2>CONTACT ME</h2>
        <div class="link__group">
          <div class="link item_a">
            <a href="">
              <div>
                <img src="@/assets/icons/mail-icon.svg" alt="" />
                <span>Email: yisheng.chen.jackie@gmail.com</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_b">
            <a href="">
              <div>
                <img src="@/assets/icons/github-icon.svg" alt="" />
                <span>Github</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_c">
            <a href="">
              <div>
                <img src="@/assets/icons/codepen-icon.svg" alt="" />
                <span>CodePen</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_d">
            <a href="">
              <div>
                <img src="@/assets/icons/vocus-icon.svg" alt="" />
                <span>BLOG(VOCUS)</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_e">
            <a href="">
              <div>
                <img src="@/assets/icons/linkedin-icon.svg" alt="" />
                <span>LinkedIn</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="animals">
        <figure><img src="@/assets/images/choju-1.png" alt="" /></figure>
        <figure><img src="@/assets/images/choju-2.png" alt="" /></figure>
        <figure><img src="@/assets/images/choju-3.png" alt="" /></figure>
        <figure><img src="@/assets/images/choju-4.png" alt="" /></figure>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { onMounted, ref } from 'vue'
// import gsap from 'gsap'
</script>

<style scoped>
.contact {
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.contact::before {
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
.contact__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 70px var(--containerPadding) 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  position: relative;
}

.contact__info h2 {
  font-size: var(--f120);
  letter-spacing: 0;
  color: var(--MainColor);
  white-space: nowrap;
  padding-bottom: 90px;
}
.contact__info .link__group {
  max-width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'a a'
    'b .'
    'c d'
    'e .'
    'f f';
  gap: 40px 20px;
}
.contact__info .link a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid var(--SubColor);
  border-radius: 50px;
  padding: 12px 20px;
}
.contact__info .link:not(.item_a) {
  max-width: 280px;
}
.contact__info .link a > div {
  display: flex;
  align-items: center;
  gap: 20px;
}
.contact__info .link a > div img {
  max-width: 24px;
}
.contact__info .link a span {
  font-size: var(--f20);
  font-family: var(--SFontSans);
  color: var(--SubColor);
}

.contact__content .animals {
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 60px;
  left: 20vw;
}
.contact__content .animals figure {
  max-width: 10vw;
  position: relative;
  z-index: 1;
}
.contact__content .animals figure::before {
  content: '';
  width: 100%;
  height: 15px;
  background: var(--MainColor);
  opacity: 0.5;
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  z-index: -1;
}
@keyframes jump-1 {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px) rotate(-2deg);
  }
}
@keyframes jump-2 {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}
.contact__content .animals figure:nth-of-type(1) {
  position: relative;
  bottom: 15vw;
}
.contact__content .animals figure:nth-of-type(1) img {
  animation: jump-1 1.5s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(2) {
  position: relative;
  bottom: 10vw;
}
.contact__content .animals figure:nth-of-type(2) img {
  animation: jump-2 1.8s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(3) {
  position: relative;
  bottom: 5vw;
}
.contact__content .animals figure:nth-of-type(3) img {
  animation: jump-1 2s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(4) img {
  animation: jump-2 2.5s infinite ease-in-out;
}

.item_a {
  grid-area: a;
}
.item_b {
  grid-area: b;
}
.item_c {
  grid-area: c;
}
.item_d {
  grid-area: d;
}
.item_e {
  grid-area: e;
}
</style>
