import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@views/RootView.vue"),
      children: [{ path: "", name: "HomeView", component: () => import("@views/HomeView.vue") }],
    },
  ],
})
