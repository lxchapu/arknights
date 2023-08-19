<script lang="ts" setup>
defineProps<{
  level: number
}>()
</script>

<template>
  <svg viewBox="0 0 12 12" width="1em" height="1em">
    <g fill="currentColor">
      <path d="M10,4.5v-2H1v7h9v-2h1v-3H10z M9,8.5H2v-5h7V8.5z" />
      <rect v-if="level > 0" x="3" y="4.5" width="1" height="3" />
      <rect v-if="level > 1" x="5" y="4.5" width="1" height="3" />
      <rect v-if="level > 2" x="7" y="4.5" width="1" height="3" />
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
