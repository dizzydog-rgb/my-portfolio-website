<script setup>
defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <p>
        © 2026 Jackie Chen. All rights reserved.<br />
        Based in Taiwan
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f8f9fa;
  position: relative;
  z-index: 1;
}
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.webp');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.footer-wrapper {
  padding: 20px var(--containerPadding) 40px;
  p {
    font-size: 16px;
    line-height: 2;
    text-align: center;
    color: #f093af;
  }
}
</style>
