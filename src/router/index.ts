import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@views/RootView.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@views/HomeView.vue"),
        },
        {
          path: "/Major",
          name: "Major",
          component: () => import("@views/MajorView.vue"),
          children: [
            // Major
            {
              path: "/MajorIndex",
              name: "MajorIndex",
              component: () => import("@views/Major/MajorIndexView.vue"),
            },
            // SupplyCategory
            {
              path: "/Major/SupplyCategoryList",
              name: "SupplyCategoryList",
              component: () => import("@/views/Major/SupplyCategory/SupplyCategoryListView.vue"),
            },
            {
              path: "/Major/SupplyCategoryCreate",
              name: "SupplyCategoryCreate",
              component: () => import("@/views/Major/SupplyCategory/SupplyCategoryCreateView.vue"),
            },
            {
              path: "/Major/SupplyCategoryShow/:id",
              name: "SupplyCategoryShow",
              component: () => import("@/views/Major/SupplyCategory/SupplyCategoryShowView.vue"),
            },
            {
              path: "/Major/SupplyCategoryEdit/:id/edit",
              name: "SupplyCategoryEdit",
              component: () => import("@/views/Major/SupplyCategory/SupplyCategoryEditView.vue"),
            },
            // CustomerCategory
            {
              path: "/Major/CustomerCategoryList",
              name: "CustomerCategoryList",
              component: () =>
                import("@/views/Major/CustomerCategory/CustomerCategoryListView.vue"),
            },
            {
              path: "/Major/CustomerCategoryCreate",
              name: "CustomerCategoryCreate",
              component: () =>
                import("@/views/Major/CustomerCategory/CustomerCategoryCreateView.vue"),
            },
            {
              path: "/Major/CustomerCategoryShow/:id",
              name: "CustomerCategoryShow",
              component: () =>
                import("@/views/Major/CustomerCategory/CustomerCategoryShowView.vue"),
            },
            {
              path: "/Major/CustomerCategoryEdit/:id/edit",
              name: "CustomerCategoryEdit",
              component: () =>
                import("@/views/Major/CustomerCategory/CustomerCategoryEditView.vue"),
            },
            // ProductCategory
            {
              path: "/Major/ProductCategoryList",
              name: "ProductCategoryList",
              component: () => import("@/views/Major/ProductCategory/ProductCategoryListView.vue"),
            },
            {
              path: "/Major/ProductCategoryCreate",
              name: "ProductCategoryCreate",
              component: () =>
                import("@/views/Major/ProductCategory/ProductCategoryCreateView.vue"),
            },
            {
              path: "/Major/ProductCategoryShow/:id",
              name: "ProductCategoryShow",
              component: () => import("@/views/Major/ProductCategory/ProductCategoryShowView.vue"),
            },
            {
              path: "/Major/ProductCategoryEdit/:id/edit",
              name: "ProductCategoryEdit",
              component: () => import("@/views/Major/ProductCategory/ProductCategoryEditView.vue"),
            },
            // Supply
            {
              path: "/Major/SupplyList",
              name: "SupplyList",
              component: () => import("@/views/Major/Supply/SupplyListView.vue"),
            },
            {
              path: "/Major/SupplyCreate",
              name: "SupplyCreate",
              component: () => import("@/views/Major/Supply/SupplyCreateView.vue"),
            },
            {
              path: "/Major/SupplyShow/:id",
              name: "SupplyShow",
              component: () => import("@/views/Major/Supply/SupplyShowView.vue"),
            },
            {
              path: "/Major/SupplyEdit/:id/edit",
              name: "SupplyEdit",
              component: () => import("@/views/Major/Supply/SupplyEditView.vue"),
            },
            // Customer
            {
              path: "/Major/CustomerList",
              name: "CustomerList",
              component: () => import("@/views/Major/Customer/CustomerListView.vue"),
            },
            {
              path: "/Major/CustomerCreate",
              name: "CustomerCreate",
              component: () => import("@/views/Major/Customer/CustomerCreateView.vue"),
            },
            {
              path: "/Major/CustomerShow/:id",
              name: "CustomerShow",
              component: () => import("@/views/Major/Customer/CustomerShowView.vue"),
            },
            {
              path: "/Major/CustomerEdit/:id/edit",
              name: "CustomerEdit",
              component: () => import("@/views/Major/Customer/CustomerEditView.vue"),
            },
            // Product
            {
              path: "/Major/ProductList",
              name: "ProductList",
              component: () => import("@/views/Major/Product/ProductListView.vue"),
            },
            {
              path: "/Major/ProductCreate",
              name: "ProductCreate",
              component: () => import("@/views/Major/Product/ProductCreateView.vue"),
            },
            {
              path: "/Major/ProductShow/:id",
              name: "ProductShow",
              component: () => import("@/views/Major/Product/ProductShowView.vue"),
            },
            {
              path: "/Major/ProductEdit/:id/edit",
              name: "ProductEdit",
              component: () => import("@/views/Major/Product/ProductEditView.vue"),
            },
          ],
        },
      ],
    },
    // 404:必須放在最後
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@views/NotFoundView.vue"),
    },
  ],
})
