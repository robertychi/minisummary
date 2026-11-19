<script setup lang="ts">
/**
 * @file MajorView.vue
 * @description
 */
import { watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

watch(
  () => route.fullPath, // 監聽路徑變化
  () => {
    const title = route.meta.title ? `${route.meta.title} ` : ""
    const subTitle = route.meta.subTitle ?? ""
    document.title = `${title}${subTitle} - 小商`
  },
  { immediate: true }, // 確保第一次進來也會執行
)
</script>
<template>
  <router-view />
</template>
