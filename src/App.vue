<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

/**
 * 判断设备是否为移动端
 */
function isMobile() {
  const userAgentInfo = navigator.userAgent
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = false
  for (let v = 0; v < agents.length; v++) {
    if (userAgentInfo.indexOf(agents[v]) > 0) {
      flag = true
      break
    }
  }
  return flag
}

onMounted(() => {
  if (isMobile()) {
    document.body.style.zoom = window.innerWidth / 1500 + ''
  }
})
</script>

<template>
  <RouterView />
</template>
