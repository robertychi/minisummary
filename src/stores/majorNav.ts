import { defineStore } from "pinia"
import { ref } from "vue"

export const useMajorNavStore = defineStore("majorNav", () => {
  const isDrawerOpen = ref(true)
  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
  }
  const drawerItems = ref([
    {
      subHeader: "歡迎來到小商",
      subItems: [
        {
          style: "main",
          title: "面版",
          icon: "mdi-view-dashboard",
          routeName: "MajorIndex",
        },
      ],
    },
    {
      keyWord: "daily",
      subHeader: "日常業務",
      subItems: [
        {
          style: "supply",
          title: "詢價單",
          icon: "mdi-numeric-1-box",
          routeName: "PurchaseQuoteList",
        },
        {
          style: "customer",
          title: "報價單",
          icon: "mdi-numeric-2-box",
          routeName: "SalesQuoteList",
        },
        {
          style: "supply",
          title: "採購單",
          icon: "mdi-numeric-3-box",
          routeName: "PurchaseOrderList",
        },
        {
          style: "customer",
          title: "訂購單",
          icon: "mdi-numeric-4-box",
          routeName: "SalesOrderList",
        },
        {
          style: "supply",
          title: "進貨單",
          icon: "mdi-numeric-5-box",
          routeName: "PurchaseBillList",
        },
        {
          style: "customer",
          title: "銷貨單",
          icon: "mdi-numeric-6-box",
          routeName: "SalesBillList",
        },
      ],
    },
    {
      keyWord: "return",
      subHeader: "退回業務",
      subItems: [
        {
          style: "supply",
          title: "進貨退回單",
          icon: "mdi-numeric-7-box",
          routeName: "PurchaseReturnList",
        },
        {
          style: "customer",
          title: "銷貨退回單",
          icon: "mdi-numeric-8-box",
          routeName: "SalesReturnList",
        },
      ],
    },
    {
      keyWord: "account",
      subHeader: "帳務管理",
      subItems: [
        {
          style: "supply",
          title: "應付帳款",
          icon: "mdi-cash-minus",
          routeName: "AccountPayableList",
        },
        {
          style: "customer",
          title: "應收帳款",
          icon: "mdi-cash-plus",
          routeName: "AccountReceivableList",
        },
      ],
    },
    {
      keyWord: "stock",
      subHeader: "庫存管理",
      subItems: [
        {
          style: "supply",
          title: "入庫單",
          icon: "mdi-package-down",
          routeName: "AccountPayableList",
        },
        {
          style: "customer",
          title: "出庫單",
          icon: "mdi-package-up",
          routeName: "AccountReceivableList",
        },
      ],
    },
    {
      keyWord: "basic",
      subHeader: "基本資料",
      subItems: [
        {
          style: "supply",
          title: "廠商資料",
          icon: "mdi-factory",
          routeName: "SupplyList",
        },
        {
          style: "customer",
          title: "客戶資料",
          icon: "mdi-office-building-outline",
          routeName: "CustomerList",
        },
        {
          style: "product",
          title: "產品資料",
          icon: "mdi-package-variant",
          routeName: "ProductList",
        },
      ],
    },
    {
      keyWord: "Category",
      subHeader: "各項類別",
      subItems: [
        {
          style: "supply",
          title: "廠商類別",
          icon: "mdi-bookmark",
          routeName: "SupplyCategoryList",
        },
        {
          style: "customer",
          title: "客戶類別",
          icon: "mdi-bookmark",
          routeName: "CustomerCategoryList",
        },
        {
          style: "product",
          title: "產品類別",
          icon: "mdi-bookmark",
          routeName: "ProductCategoryList",
        },
      ],
    },
  ])

  return { isDrawerOpen, drawerItems, toggleDrawer }
})
