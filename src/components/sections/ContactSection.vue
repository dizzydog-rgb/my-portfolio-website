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
                <img src="@/assets/icons/mail.svg" alt="" />
                <span>Email: yisheng.chen.jackie@gmail.com</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_b">
            <a href="">
              <div>
                <img src="@/assets/icons/mail.svg" alt="" />
                <span>Github</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_c">
            <a href="">
              <div>
                <img src="@/assets/icons/mail.svg" alt="" />
                <span>CodePen</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_d">
            <a href="">
              <div>
                <img src="@/assets/icons/mail.svg" alt="" />
                <span>BLOG(VOCUS)</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
          <div class="link item_e">
            <a href="">
              <div>
                <img src="@/assets/icons/mail.svg" alt="" />
                <span>LinkedIn</span>
              </div>
              <img src="@/assets/icons/arrow-outward.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="current__focus item_f">
          <h5>Current Focus: Astro.js, GSAP, et cetera.</h5>
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
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.avif');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.contact__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 70px 40px 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
}

.contact__info h2 {
  font-size: 120px;
  letter-spacing: 0;
  font-family: 'Instrument Serif', serif;
  color: #aa3b0f;
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
  gap: 40px 0;
}
.contact__info .link a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #dd551f;
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
.contact__info .link a span {
  font-size: 20px;
  color: #dd551f;
  font-family: 'Instrument Sans';
}
.contact__info .current__focus {
  width: fit-content;
  font-size: 32px;
  color: #d4426e;
  font-family: 'Instrument Serif', serif;
  line-height: 1.5;
  border-bottom: 2px solid #dd551f;
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
