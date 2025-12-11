<script setup>
import { ref } from 'vue'

const count = ref(0)

const incrementCount = () => {
  count.value = count.value + 1
}
const zeroCount = () => {
  count.value = 0
}
</script>

<template>
  <div class="myCounter">
    <h1>Click this COUNTER !</h1>
    <p>您已經點擊了 {{ count }} 次</p>
    <div class="btns">
      <button @click="incrementCount">點我增加計數</button>
      <button @click="zeroCount">點我歸零</button>
    </div>
  </div>
</template>

<style scoped>
.myCounter {
  width: 600px;
  height: 300px;
  margin: 0 auto;
  border: 5px solid purple;
  background: linear-gradient(to bottom, blue 0, yellow 100%);
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.myCounter h1 {
  font-family: 'Courier New', Courier, monospace;
  color: red;
  line-height: 1.2;
}
.myCounter p {
  font-size: 50px;
  font-weight: bold;
  color: pink;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 40px;
}
.btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.btns button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.btns button:hover {
  transform: translateY(-4px);
  background: #ffffff;
  color: #2ecc71;
}
.btns button:active {
  transform: translateY(2px);
  box-shadow: none;
}
</style>
