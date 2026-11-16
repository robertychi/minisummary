<script setup lang="ts">
/**
 * @file AboutView.vue
 * @description
 */

import { computed, ref } from "vue"

const stateRef = ref(1)
const getStateRef = computed(() => {
  return stateRef.value
})
</script>

<template>
  <p>AboutView.vue {{ getStateRef }}</p>
</template>

<style scoped>
/* 樣式區域 */
</style>
