<script lang="ts" setup>
import IconSetting from '@/components/icons/Setting.vue'
import IconWarning from '@/components/icons/Warning.vue'
import IconMail from '@/components/icons/Mail.vue'
import IconCalendar from '@/components/icons/Calendar.vue'
</script>

<template>
  <div class="header-menu space-x-4 p-3">
    <IconSetting width="48px" fill="white" />
    <IconWarning width="48px" fill="white" />
    <IconMail width="48px" fill="white" />
    <IconCalendar width="48px" fill="white" />
  </div>
</template>

<style lang="scss" scoped>
.header-menu {
  display: flex;
}
</style>
