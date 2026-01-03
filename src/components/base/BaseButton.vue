<template>
  <button class="base-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-btn {
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
.base-btn:hover {
  transform: translateY(-4px);
  background: #ffffff;
  color: #2ecc71;
}
.base-btn:active {
  transform: translateY(2px);
  box-shadow: none;
}
</style>
