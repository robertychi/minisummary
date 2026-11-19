import type { RouteRecordRaw } from "vue-router"
import { createCrudRoutes } from "../utils"

const majorRoutes: RouteRecordRaw = {
  path: "/Major",
  name: "Major",
  component: () => import("@/views/MajorView.vue"),
  children: [
    {
      path: "MajorIndex",
      name: "MajorIndex",
      component: () => import("@/views/Major/MajorIndexView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `MajorIndex`,
        upperCamelCaseName: "MajorIndex",
        snakeCaseName: "major_index",
        lowerCamelCaseName: "majorIndex",
        title: "首頁",
        subTitle: "",
      },
    },
    // category
    ...createCrudRoutes("Major", "SupplyCategory", "廠商類別", "supply"),
    ...createCrudRoutes("Major", "CustomerCategory", "客戶類別", "customer"),
    ...createCrudRoutes("Major", "ProductCategory", "產品類別", "product"),
    // basic
    ...createCrudRoutes("Major", "Supply", "廠商資料", "supply"),
    ...createCrudRoutes("Major", "Customer", "客戶資料", "customer"),
    ...createCrudRoutes("Major", "Product", "產品資料", "product"),
    // daily for supply
    ...createCrudRoutes("Major", "PurchaseQuote", "詢價單", "supply"),
    ...createCrudRoutes("Major", "PurchaseOrder", "採購單", "supply"),
    ...createCrudRoutes("Major", "PurchaseBill", "進貨單", "supply"),
    ...createCrudRoutes("Major", "PurchaseReturn", "進貨退回單", "supply"),
    // daily for customer
    ...createCrudRoutes("Major", "SalesQuote", "報價單", "customer"),
    ...createCrudRoutes("Major", "SalesOrder", "訂購單", "customer"),
    ...createCrudRoutes("Major", "SalesBill", "銷貨單", "customer"),
    ...createCrudRoutes("Major", "SalesReturn", "銷貨退回單", "customer"),
    // account
    ...createCrudRoutes("Major", "AccountPayable", "應付帳款單", "supply"),
    ...createCrudRoutes("Major", "AccountReceivable", "應收帳款單", "customer"),
    // stock
    // ...createCrudRoutes("Major", "StockIn", "入庫單", "supply"),
    // ...createCrudRoutes("Major", "StockOut", "出庫單", "customer"),
  ],
}

export default majorRoutes
