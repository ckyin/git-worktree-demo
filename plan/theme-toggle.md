## 待辦：淺色 / 深色主題與切換

- 功能範圍：在現有設計系統上新增 light / dark 兩套主題配色，並在導覽列提供主題切換按鈕。
- 相關檔案：
  - `src/index.css`：新增 `:root[data-theme="light"]` 與 `:root[data-theme="dark"]` 顏色變數。
  - `src/App.jsx`：管理 `theme` state、初始化偏好、寫入 `document.documentElement.dataset.theme` 與 localStorage。
  - `src/components/Navbar.jsx`：顯示主題切換按鈕，呼叫 `toggleTheme`。

