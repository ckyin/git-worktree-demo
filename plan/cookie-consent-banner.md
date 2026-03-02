## 待辦：Cookie 同意彈窗（Banner）

- 功能範圍：在頁面下方顯示 Cookie 使用說明與同意按鈕的 banner，記錄同意狀態並與 Footer 的「Cookie 政策」連結整合。
- 相關檔案：
  - `src/components/CookieConsent.jsx`：建立 banner 組件，讀寫 localStorage（例如 key: `cookie_consent`），控制是否顯示。
  - `src/App.jsx`：在 `Footer` 之後掛載 `<CookieConsent />`，保持結構為 `Navbar` → `<main>` → `Footer` → `CookieConsent`。
  - `src/index.css`：新增 `.cookie-banner`, `.cookie-banner__content`, `.cookie-banner__actions` 等樣式，固定於視窗底部並支援 light/dark 主題。
  - `src/data/footer.js`：沿用或調整「Cookie 政策」連結，供 banner 的「了解更多」使用。

