# Jackie's Portfolio 🚀

[![Vue](https://img.shields.io/badge/Vue.js-3.x-4fc08d?logo=vue.js)](https://vuejs.org/)
[![GSAP](https://img.shields.io/badge/Animations-GSAP-green?logo=greensock)](https://greensock.com/gsap/)
[![Vite](https://img.shields.io/badge/Build-Vite-646cff?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"1px-Perfect Implementation & Engineering Excellence."**
> 一個追求極致視覺還原度與高性能網頁架構的個人作品集專案。

---

## 🌟 核心定位與價值 (Core Philosophy)

*   **1px-Perfect Implementation**：以極致還原度為核心，將設計稿精準轉化為高品質代碼，確保視覺表現與設計初衷高度一致。
*   **工程化思維**：不只是「做畫面」，而是建構具備可維護性、高效能與系統觀的 Web 應用，強調代碼的整潔與架構的合理性。

## 🛠️ 技術棧與工程實踐 (Technical Highlights)

### 1. 前端架構 (Frontend Excellence)
*   **Vue 3 (Composition API)**：實踐組件化開發，將 UI 表現層與業務邏輯解耦。
*   **GSAP + ScrollTrigger**：高階動態狀態管理，處理複雜的 DOM 監聽與滾動觸發動畫。
*   **資源生命週期管理**：利用 `gsap.context()` (或 `ScrollTrigger.kill()`) 實作動畫自動清理機制，徹底杜絕 **記憶體洩漏 (Memory Leaks)**。

### 2. 資料驅動與全端思維 (Full-Stack Potential)
*   **GitHub API 整合**：透過非同步請求實時串接 Commit 數據，動態展現開發活躍度。
*   **DevOps 實務**：配置 Cloudflare DNS 託管與 GitHub Pages 自動化部署流程 (CI/CD)。

## 📈 效能優化指標 (Performance Audit)

本專案在 Lighthouse 測試中達到近乎滿分的成績，展現了對細節的掌控力：

*   **Performance (90+)**：圖片 WebP 優化、Lazy Loading 與 GPU 加速渲染。
*   **Accessibility (94+)**：實踐語意化 HTML 與 ARIA Label。
*   **Best Practices / SEO (100)**：字體本地託管、Meta Description 優化與安全性配置。

---

## 💡 問題解決案例 (Case Study)

### **挑戰：複雜 GSAP 滾動動畫導致 FPS 掉幀**
在實作高頻率滾動觸發動畫（如 Hero Section 與多層級視差效果）時，發現部分裝置出現明顯的掉幀與渲染卡頓現象，影響使用者體驗。

### **解決方案：**
1.  **開啟硬體加速**：透過 `will-change: transform` 屬性通知瀏覽器預先優化，將動畫渲染負擔從 CPU 轉移至 **GPU 硬體加速**。
2.  **優化刷新頻率**：精確調校 `ScrollTrigger` 的 `refresh` 頻率，並利用 `scrub` 平滑插值技術減少主線程運算壓力。
3.  **最終成果**：
    *   成功將動畫維持在穩定的 **60FPS**。
    *   大幅提升 **Lighthouse 效能評分** 至 90+ 高標。
    *   確保在低配備裝置上依然保有流暢的滾動視覺。

---

## 🗺️ 未來演進藍圖 (Future Roadmap)

*   **後端轉型**：導入 Node.js (Express) 與 MongoDB 建立動態作品管理系統 (CMS)。
*   **安全性強化**：建立後端 Proxy 層以隱藏 API Key 並實施數據快取 (Caching)。
*   **數據導向**：整合 Google Analytics 進行使用者行為分析。

## 🚀 快速開始 (Quick Start)

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## 📬 聯絡資訊 (Contact)

*   **Live Demo**: [www.dizzydog-rgb.art](https://www.dizzydog-rgb.art)
*   **LinkedIn**: [Yi-Sheng Chen (Jackie)](https://www.linkedin.com/in/yi-sheng-chen-jackie)
*   **GitHub**: [@dizzydog-rgb](https://github.com/dizzydog-rgb)
*   **Email**: [yisheng.chen.jackie@gmail.com](mailto:yisheng.chen.jackie@gmail.com)
*   **CodePen**: [My Collection](https://codepen.io/collection/zzGkOR)

---
Copyright © 2024 Jackie. Built with ❤️ and precision.
