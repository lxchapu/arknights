<script lang="ts" setup>
import SystemInfo from './system-info.vue'
import AssetInfo from './asset-info.vue'
import FightRow from './fight-row.vue'
import TeamRow from './team-row.vue'
import ShopRow from './shop-row.vue'
import OtherRow from './other-row.vue'
</script>

<template>
  <div class="right-menu">
    <div class="content">
      <SystemInfo />
      <AssetInfo />
      <FightRow />
      <TeamRow />
      <ShopRow />
      <OtherRow />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-menu {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  transform-origin: right center;
  pointer-events: auto;
  user-select: none;
  transform: perspective(600px) rotateY(-10deg);
}
</style>
