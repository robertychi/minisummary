import { defineStore } from "pinia"

export const useThemeStore = defineStore("theme", () => {
  const themeColor: Record<string, string> = {
    main: "blue",
    supply: "purple",
    customer: "green",
    product: "red",
  }

  return { themeColor }
})
