import { defineStore } from "pinia"
import { ref } from "vue"

export const useMajorNavStore = defineStore("majorNav", () => {
  const isDrawerOpen = ref(true)
  function toggleDrawer() {
    console.log(isDrawerOpen.value)
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
  ])

  return { isDrawerOpen, drawerItems, toggleDrawer }
})
