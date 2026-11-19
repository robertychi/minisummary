<script setup lang="ts">
/**
 * @file MajorView.vue
 * @description
 */
import { storeToRefs } from "pinia"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useMajorNavStore } from "@/stores/majorNav"
import { useThemeStore } from "@/stores/theme"

// Pinia
const route = useRoute()
const themeColor = useThemeStore().themeColor

// page for meta
const getPageTitle = computed(() => route.meta.title)
const getPageSubTitle = computed(() => route.meta.subTitle)
const getPageStyle = computed(() => route.meta.style)

// drawer
const drawerStore = useMajorNavStore()
const isDrawerOpen = storeToRefs(drawerStore).isDrawerOpen
const drawerItems = drawerStore.drawerItems

const router = useRouter()
function toActive(routeName: string) {
  router.push({ name: routeName })
}
</script>
<template>
  <v-app>
    <!-- Vuetify 3 移除 app 屬性，dark 改為 theme="dark" -->
    <v-app-bar :color="themeColor[`${getPageStyle}`]" theme="dark" density="compact">
      <v-app-bar-nav-icon @click="drawerStore.toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        >{{ getPageTitle }}
        <span v-if="getPageSubTitle">- {{ getPageSubTitle }}</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list nav>
        <template v-for="(item, index) in drawerItems" :key="item.subHeader || index">
          <v-list-subheader v-if="item.subHeader">
            {{ item.subHeader }}
          </v-list-subheader>
          <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            exact
            @click="toActive(subItem.routeName)"
          >
            <v-icon>{{ subItem.icon }}</v-icon>
            {{ subItem.title }}
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
