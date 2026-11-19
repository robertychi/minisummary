import { createRouter, createWebHistory } from "vue-router"
import authRoutes from "./modules/auth"
import majorRoutes from "./modules/major"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/RootView.vue"),

      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            style: "main", // 例如 major
            name: `Root`,
            upperCamelCaseName: "Root",
            snakeCaseName: "root",
            lowerCamelCaseName: "root",
            title: "首頁",
            subTitle: "",
          },
        },
        majorRoutes,
        authRoutes,
        // 未來新增其他大模組（例如進銷存、財務），直接加在這裡即可：
        // inventoryRoutes,
        // accountingRoutes,
      ],
    },
    // 404: 必須放在最後
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
})
