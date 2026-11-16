<script setup lang="ts">
/**
 * @file MajorAppBar.vue
 * @description
 */

import { useMajorNavStore } from "@/stores/majorNav"

const isDrawerOpen = useMajorNavStore().isDrawerOpen

function toggleDrawer() {
  useMajorNavStore().toggleDrawer()
}
</script>

<template>
  <v-app-bar app color="primary" dark dense>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar-title>小商. </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
/* 樣式區域 */
</style>
