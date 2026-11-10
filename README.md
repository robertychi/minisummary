# minisummary

使用 Tauri 2 + Vue 3 + Vite 開發的桌面應用程式。

## 技術棧

- 前端：Vue 3、Vite
- 桌面端：Tauri 2、Rust（edition 2024）

## 開發環境

- Node.js 20 以上
- Rust（透過 [rustup](https://rustup.rs) 安裝）
- 依作業系統安裝 Tauri 的系統相依套件，詳見 [Tauri Prerequisites](https://tauri.app/start/prerequisites/)

## 常用指令

```
npm install            # 安裝前端依賴
npm run dev            # 只跑前端（瀏覽器，http://localhost:5173）
npm run tauri dev      # 開發模式（桌面視窗 + 熱更新）
npm run build          # 建置前端到 dist/
npm run tauri build    # 打包安裝檔（輸出在 src-tauri/target/release/bundle/）
cargo check --manifest-path src-tauri/Cargo.toml   # 檢查 Rust 端
```

## 專案結構

- `src/`：Vue 前端程式碼
- `src-tauri/src/lib.rs`：Rust 指令（command）與應用程式邏輯
- `src-tauri/tauri.conf.json`：Tauri 設定（視窗、devUrl、建置路徑）
- `src-tauri/Cargo.toml`：Rust 依賴
