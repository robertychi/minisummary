# minisummary

Tauri 2 + Vue 3 + Vite 桌面應用程式。指令與專案結構見 README.md。

- 回覆請用中文 

## 開發規則

- 前端呼叫 Rust 使用 `invoke`，Rust 端的指令要在 `lib.rs` 加上 `#[tauri::command]`，並註冊到 `invoke_handler`。
- 新增 Tauri 外掛時，npm 套件和 Rust crate 都要安裝，並在 `lib.rs` 註冊。
- 修改程式後，先確認 `npm run tauri dev` 能正常啟動再回報完成。
- 回覆與程式註解使用繁體中文。

## Vue 寫法規範

- 所有 `.vue` 單一檔案元件，區塊順序固定由上至下為：`<template>`、`<script>`、`<style>`。
- 使用 Vue 3 的 `<script setup>`（如需 TypeScript 則加上 `lang="ts"`）。
- 樣式使用 `<style scoped>`，除非是刻意的全域樣式。

範例：

```vue
<template>
  <div class="hello">{{ message }}</div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello");
</script>

<style scoped>
.hello {
  color: #333;
}
</style>
```

## 注意事項

- **版本對齊**：`@tauri-apps/api` 與 Rust 的 `tauri` crate 的主版本、次版本必須相同（例如都是 2.11.x），否則啟動會報版本不一致的錯誤。更新其中一邊時，要檢查另一邊。
- 檢查版本：`npm ls @tauri-apps/api`、`cargo tree -p tauri --depth 0 --manifest-path src-tauri/Cargo.toml`。
- 不要手動修改 `Cargo.lock`、`package-lock.json`，用指令更新。
- 不要提交 `node_modules/`、`dist/`、`src-tauri/target/`。
