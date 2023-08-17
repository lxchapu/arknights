<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { format } from 'date-fns'
import IconBattery from '@/components/icons/Battery.vue'

let timer: any = null

const current = ref('')
const batteryLevel = ref(3)

/**
 * 更新当前时间
 */
function updateCurrent() {
  current.value = format(new Date(), 'yyyy/MM/dd HH:mm')
}

updateCurrent()

onMounted(() => {
  timer = setInterval(() => {
    updateCurrent()
  }, 1000)
  // 获取设备电量剩余百分比
  navigator.getBattery()?.then((battery: any) => {
    batteryLevel.value = Math.floor(battery.level * 3)
  })
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})
</script>

<template>
  <div class="system-info">
    <div class="line line--left"></div>
    <IconBattery class="icon" :level="batteryLevel" />
    <div class="time">{{ current }}</div>
    <div class="line line--right"></div>
  </div>
</template>

<style lang="scss" scoped>
.system-info {
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
}

.line {
  height: 3px;
  background-color: white;

  &--left {
    width: 120px;
    margin-right: 16px;
  }

  &--right {
    width: 100%;
    flex: 1;
  }
}
.icon {
  flex-shrink: 0;
  font-size: 28px;
  filter: drop-shadow(4px 3px 2px #333);
  margin-right: 10px;
}

.time {
  flex-shrink: 0;
  font-size: 20px;
  white-space: nowrap;
  text-shadow: 4px 3px 2px #333;
  margin-right: 16px;
}
</style>
