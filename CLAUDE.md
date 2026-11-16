# 小商 minisum ERP 系統

此為專案根目錄的 CLAUDE.md，提供全局業務上下文。後端與前端各自的開發指令、程式架構慣例、coding style 請見：

請用中文回覆

# 業務代號對照表

| 模組       | 代號              | 單據簡碼 | 資料庫名稱         | 類別     |
| ---------- | ----------------- | -------- | ------------------ | -------- |
| 廠商類別   | SupplierCategory  | SUC      | supplier_category  | category |
| 客戶類別   | CustomerCategory  | CUC      | customer_category  | category |
| 產品類別   | ProductCategory   | PRC      | product_category   | category |
| 廠商       | Supplier          | SUP      | supplier           | firm     |
| 客戶       | Customer          | CUT      | customer           | firm     |
| 產品       | Product           | PRD      | product            | product  |
| 詢價       | PurchaseQuote     | PUQ      | purchase_quote     | daily    |
| 採購       | PurchaseOrder     | PUO      | purchase_order     | daily    |
| 進貨       | PurchaseBill      | PUB      | purchase_bill      | daily    |
| 進貨退回   | PurchaseReturn    | PUR      | purchase_return    | daily    |
| 應付帳款   | AccountPayable    | ACP      | account_payable    | account  |
| 報價單     | SalesQuote        | SAQ      | sales_quote        | daily    |
| 訂購單     | SalesOrder        | SAO      | sales_order        | daily    |
| 銷貨單     | SalesBill         | SAB      | sales_bill         | daily    |
| 銷貨退回單 | SalesReturn       | SAR      | sales_return       | daily    |
| 應收帳款   | AccountReceivable | ACR      | account_receivable | account  |
| 入庫單     | StockIn           | STI      | stock_in           | stock    |
| 出庫單     | StockOut          | STO      | stock_out          | stock    |

## 業務流程

**採購線：**
詢價(PUQ) → 採購(PUO) → 進貨(PUB) / 進貨退回(PUR) → 應付帳款(ACP)

**銷貨線：**
報價(SAQ) → 訂購(SAO) → 銷貨(SAB) / 銷貨退回(SAR) → 應收帳款(ACR)

**輔助模組：**
廠商類別(SUC) / 廠商(SUP)、客戶類別(CUC) / 客戶(CUT)、產品類別(PRC) / 產品(PRD)

修改任一模組的邏輯（尤其是金額、數量欄位）時，需考慮對上下游模組的影響（例如採購單金額異動，需考慮是否已產生應付帳款；出庫後庫存數量異動，需考慮是否已有銷貨單引用）。
