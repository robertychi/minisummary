# minisummary

> 以 **Tauri + Vue 3** 打造的輕量桌面應用，作為設計與開發 **ERP 系統** 的起點範本。

minisummary 以「小而完整」為目標：用最精簡的架構，示範 ERP 常見的模組劃分、資料流與桌面端整合方式，方便團隊快速擴充成正式的企業內部系統。

---

## 特色

- **輕量跨平台**：Tauri (Rust) 打包，安裝檔小、記憶體占用低，支援 Windows / macOS / Linux
- **現代前端**：Vue 3 + Composition API + TypeScript + Vite
- **ERP 導向的結構**：以業務模組（訂單、庫存、客戶、報表…）切分目錄，易於擴充
- **本機資料庫**：使用 SQLite 儲存本機資料
- **遠端資料庫**：使用 Firebase 作為遠端服務與資料同步
- **前後端分離**：前端透過 Tauri `invoke` 呼叫 Rust command，邏輯與 UI 解耦

## 技術棧

| 層級        | 技術                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| 桌面框架    | [Tauri 2.x](https://tauri.app/)                                                                                 |
| 前端框架    | [Vue 3](https://vuejs.org/)                                                                                     |
| 建置工具    | [Vite](https://vitejs.dev/)                                                                                     |
| 狀態管理    | [Pinia](https://pinia.vuejs.org/)                                                                               |
| 路由        | [Vue Router](https://router.vuejs.org/)                                                                         |
| UI 元件庫   | Vuetify 4                                                                                                       |
| 後端 (Rust) | Tauri commands + [rusqlite](https://github.com/rusqlite/rusqlite) / [sqlx](https://github.com/launchbadge/sqlx) |
| 遠端服務    | [Firebase](https://firebase.google.com/)                                                                        |
| 語言        | TypeScript、Rust                                                                                                |

## 環境需求

- [Node.js](https://nodejs.org/) >= 18（內含 npm）
- [Rust](https://www.rust-lang.org/tools/install)（stable）
- 各平台 Tauri 系統相依套件，請參考 [Tauri Prerequisites](https://tauri.app/start/prerequisites/)

## 快速開始

```bash
# 1. 取得專案
git clone <your-repo-url> minisummary
cd minisummary

# 2. 安裝相依套件
npm install

# 3. 啟動開發模式（含熱更新）
npm run tauri dev

# 4. 打包發佈版本
npm run tauri build
```

只想預覽前端畫面時：

```bash
npm run dev
```

## Roadmap

- [ ] 專案骨架與基礎版型
- [ ] 使用者登入與角色權限（RBAC）
- [ ] SQLite 資料層與 migration
- [ ] 銷售 / 庫存核心流程
- [ ] 報表匯出（Excel / PDF）
- [ ] 多語系（i18n）
- [ ] 自動更新（Tauri Updater）
- [ ] 資料備份與還原

## 推薦開發環境

- [VS Code](https://code.visualstudio.com/)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License

MIT © minisummary contributors
