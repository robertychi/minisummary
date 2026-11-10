<template>
  <div>
    <!-- UI 元素 -->
    <p>Data: {{ stateRef }} / {{ stateReactive.name }}</p>
    <p>Computed: {{ getStateRef }} / {{ getStateReactive }}</p>
    <v-btn @click="doSomething()">做一些事</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'

// ========== state ==========
const stateRef = ref(1)
const stateReactive = reactive({
  name: 'may',
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
  console.log('做一些事')
}
</script>

<style scoped>
/* 樣式區域 */
</style>
