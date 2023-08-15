<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  level: number
  percent: number
}>()

const stroke = computed(() => {
  const length = props.percent * 3.3
  const space = (100 - props.percent) * 3.3
  return `${length} ${space}`
})
</script>

<template>
  <div class="level">
    <svg class="svg wh-full" viewBox="0 0 100 100">
      <circle
        cx="50%"
        cy="50%"
        r="48"
        stroke="rgba(255, 255, 255, .2)"
        fill="none"
        stroke-width="4"
      ></circle>
      <circle
        cx="50%"
        cy="50%"
        r="48"
        :stroke-dasharray="stroke"
        stroke="#ffee22"
        fill="none"
        stroke-width="4"
      ></circle>
    </svg>
    <div class="text">
      <div class="number">{{ level }}</div>
      <div class="label">LV</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.level {
  position: relative;
  width: 120px;
  height: 120px;
}

.svg {
  transform: rotate(270deg);
}

.text {
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.number {
  font-size: 80px;
  font-family: 'NovecentoSansWide';
}

.label {
  font-size: 18px;
}
</style>
