<script lang="ts" setup></script>

<template>
  <div class="right-menu"></div>
</template>

<style lang="scss" scoped>
.right-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 800px;
  height: 100%;
  transform-origin: right center;
  transform: perspective(600px) rotateY(-10deg);
  pointer-events: none;
}
</style>
