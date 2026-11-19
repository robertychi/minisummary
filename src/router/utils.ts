import type { RouteRecordRaw } from "vue-router"

/**
- 將字串轉為 snake_case（例如 SupplyCategory -> supply_category）
 */
function toSnakeCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()
}

/**
- 將字串轉為 lowerCamelCase（例如 SupplyCategory -> supplyCategory）
 */
function toLowerCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

/**
 * 自動產生標準 CRUD 四支路由 (List, Create, Show, Edit)
 * @param modulePath 上層目錄路徑，例如 "Major"
 * @param resource 資源名稱，例如 "SupplyCategory"
 * @param resourceTitle 資源標題，例如 "廠商類別"
 * @param style 樣式，例如 "supply"
 */
export function createCrudRoutes(
  modulePath: string,
  resource: string,
  resourceTitle: string = resource,
  style: string = resource,
): RouteRecordRaw[] {
  const basePath = `/${modulePath}/${resource}`
  // 自動產生您需要的命名變體
  const snakeName = toSnakeCase(resource)
  const lowerCamelName = toLowerCamelCase(resource)
  // 動態 import 需注意：在 Vite 中建議維持明確的相對或別名層級
  return [
    {
      path: `${basePath}List`,
      name: `${resource}List`,
      component: () => import(`@/views/${modulePath}/${resource}/${resource}ListView.vue`),
      meta: {
        style: style, // 例如 major
        name: `${resource}List`,
        upperCamelCaseName: resource,
        snakeCaseName: snakeName,
        lowerCamelCaseName: lowerCamelName,
        title: resourceTitle,
        subTitle: "列表",
      },
    },
    {
      path: `${basePath}Create`,
      name: `${resource}Create`,
      component: () => import(`@/views/${modulePath}/${resource}/${resource}CreateView.vue`),
      meta: {
        style: toLowerCamelCase(modulePath),
        name: `${resource}Create`,
        upperCamelCaseName: resource,
        snakeCaseName: snakeName,
        lowerCamelCaseName: lowerCamelName,
        title: resourceTitle,
        subTitle: "新增",
      },
    },
    {
      path: `${basePath}Show/:id`,
      name: `${resource}Show`,
      component: () => import(`@/views/${modulePath}/${resource}/${resource}ShowView.vue`),
      meta: {
        style: toLowerCamelCase(modulePath),
        name: `${resource}Show`,
        upperCamelCaseName: resource,
        snakeCaseName: snakeName,
        lowerCamelCaseName: lowerCamelName,
        title: resourceTitle,
        subTitle: "詳細",
      },
    },
    {
      path: `${basePath}Edit/:id/edit`,
      name: `${resource}Edit`,
      component: () => import(`@/views/${modulePath}/${resource}/${resource}EditView.vue`),
      meta: {
        style: toLowerCamelCase(modulePath),
        name: `${resource}Edit`,
        upperCamelCaseName: resource,
        snakeCaseName: snakeName,
        lowerCamelCaseName: lowerCamelName,
        title: resourceTitle,
        subTitle: "編輯",
      },
    },
  ]
}
