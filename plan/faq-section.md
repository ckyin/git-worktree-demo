## 待辦：常見 QA 問答區（FAQ）

- 功能範圍：在單頁中新增「常見問題」區塊，並在導覽列加入「常見問題」錨點連結。
- 相關檔案：
  - `src/data/faq.js`：新增 FAQ 資料陣列，包含多筆 `{ question, answer, category? }`。
  - `src/components/FAQ.jsx`：建立 `<section id="faq" className="section faq">`，以 grid / column 呈現問答。
  - `src/App.jsx`：在 `<main>` 中於 `Pricing` 與 `CallToAction` 之間插入 `<FAQ />`。
  - `src/data/navigation.js`：增加 `{ label: '常見問題', href: '#faq' }` 導覽項目。
  - `src/index.css`：新增 `.faq`, `.faq-list`, `.faq-item`, `.faq-question`, `.faq-answer` 等樣式。

