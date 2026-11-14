<script setup lang="ts">
/**
 * @file HomeView.vue
 * @description 測試
 */

import { computed, reactive, ref } from "vue"
import { useCounterStore } from "@/stores/counter"

const counter = useCounterStore()
// ========== state ==========
const stateRef = ref(1)
const stateReactive = reactive({
  name: "may",
})

// ========== computed ==========
const getStateRef = computed(() => {
  return stateRef.value
})
const getStateReactive = computed(() => {
  return stateReactive.name
})

// ========== methods ==========
function doSomething() {
  console.log("做一些事")
}
</script>

<template>
  <v-app>
    <v-app-bar title="My App" />
    <v-main>
      <v-container>
        <h1>Home View</h1>
        <p>Welcome to the Home View!</p>
      </v-container>
      <v-container>
        <v-btn @click="stateRef++">增加 f. 4545</v-btn>
        <!-- UI 元素 -->
        <p class="color-red">Data: {{ stateRef }} / {{ stateReactive.name }}</p>
        <p>Computed: {{ getStateRef }} / {{ getStateReactive }}</p>
        <v-btn @click="doSomething()">做一些事</v-btn>
      </v-container>
      <v-container>
        <p>count: {{ counter.count }}</p>
        <p>double: {{ counter.double }}</p>
        <v-btn @click="counter.increment">+1</v-btn>
        <v-btn @click="counter.reset">重置</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
/* 樣式區域 */
</style>
