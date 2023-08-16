<script lang="ts" setup>
import IconArrowBottom from '@/components/icons/ArrowBottom.vue'

defineProps<{
  text: string
}>()
</script>

<template>
  <div class="voice-box">
    {{ text }}
    <span class="label">VOICE</span>
    <IconArrowBottom class="icon" fill="white" width="30px" />
  </div>
</template>

<style lang="scss" scoped>
.voice-box {
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  position: relative;
  margin: 0 10px;
  padding: 20px;
  pointer-events: auto;
}

.label {
  position: absolute;
  display: block;
  top: -4px;
  left: -5px;
  width: 30%;
  padding: 2px 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(168, 168, 168, 0.7);
}

.icon {
  position: absolute;
  bottom: 2px;
  right: 2px;
}
</style>
