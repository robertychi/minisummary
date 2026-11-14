import process from "node:process"
import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import vueDevTools from "vite-plugin-vue-devtools"

const host = process.env.TAURI_DEV_HOST

import vuetify from "vite-plugin-vuetify"

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    vue(),
    vueDevTools(),
    vuetify({ autoImport: true }),

    Components({
      dirs: ["src/components"], // 要掃描的資料夾（預設就是這個）
      extensions: ["vue"],
      deep: true, // 是否掃描子資料夾
      dts: "src/components.d.ts", // 產生型別宣告（TS / Volar 提示用）
    }),
  ],

  /* Path alias(需與 tsconfig.json 的 paths 對應) */
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}))
