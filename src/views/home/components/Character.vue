<script lang="ts" setup>
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <div class="wh-full relative flex items-center justify-center">
    <img class="img" src="@/assets/images/character.png" alt="character" @click="$emit('click')" />
  </div>
</template>

<style lang="scss" scoped>
.img {
  width: 800px;
  position: relative;
  top: 15%;
  left: -10%;
}
</style>
