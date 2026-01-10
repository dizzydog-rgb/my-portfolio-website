<script setup>
defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="title">
        <h6>CONTACT ME</h6>
        <h2>聯絡我</h2>
      </div>
      <div class="link-group">
        <div class="link"><a href="">Github</a></div>
        <div class="link"><a href="">Email</a></div>
        <div class="link"><a href="">Vocus</a></div>
        <div class="link"><a href="">LinkedIn</a></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  background: #f8f9fa;
}
.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 60px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .title h6 {
    font-size: 30px;
    color: indigo;
  }
  .title h2 {
    font-size: 60px;
  }
  .link-group {
    display: flex;
    flex-flow: column;
    gap: 20px;
    a {
      font-size: 24px;
      color: purple;
    }
  }
}
</style>
