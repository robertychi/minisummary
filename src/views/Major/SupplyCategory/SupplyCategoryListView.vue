<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

// 1. 取得當前路由物件
const route = useRoute()

// 2. 直接從 route.meta 讀取設定
// 建議可以用 computed 包起來，當路由切換時畫面才會自動響應更新
const pageTitle = computed(() => route.meta.title)
const pageSubTitle = computed(() => route.meta.subTitle)

// 也可以直接拿整個 meta 物件來用
const pageMeta = computed(() => route.meta)
</script>

<template>
  <div class="header-container">
    <!-- 顯示標題 -->
    <h2>{{ pageTitle }} <small>{{ pageSubTitle }}</small></h2>

    <!-- 或者是印出整個 meta 結構來檢查 -->
    <p>當前樣式風格：{{ pageMeta.style }}</p>
  </div>
</template>

<style scoped>
/* 樣式區域 */
</style>
