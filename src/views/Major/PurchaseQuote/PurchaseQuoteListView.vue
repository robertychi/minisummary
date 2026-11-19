<script setup lang="ts">
/**
 * @file PurchaseQuoteListView.vue
 * @description
 */

import { computed } from "vue"
import { useRoute } from "vue-router"

// 取得當前路由裡取 meta
const route = useRoute()
const getPageTitle = computed(() => route.meta.title)
const getPageSubTitle = computed(() => route.meta.subTitle)
const getPageMeta = computed(() => route.meta)
</script>

<template>
  <div class="header-container">
    <!-- 顯示標題 -->
    <h2>{{ getPageTitle }} <small>{{ getPageSubTitle }}</small></h2>

    <!-- 或者是印出整個 meta 結構來檢查 -->
    <p>當前樣式風格：{{ getPageTitle }}</p>
    <p>當前樣式風格：{{ getPageMeta }}</p>
  </div>
</template>

<style scoped>
/* 樣式區域 */
</style>
