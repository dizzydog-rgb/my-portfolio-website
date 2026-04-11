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
*   **Vue 3 (Composition API)**：實踐組件化開發，將 UI 表現層與業務邏輯解耦，提升開發效率與代碼複用性。
*   **GSAP + ScrollTrigger**：高階動態狀態管理，處理複雜的 DOM 監聽與滾動觸發動畫。
*   **資源生命週期管理**：利用 `gsap.context()` (或 `ScrollTrigger.kill()`) 實作動畫自動清理機制，徹底杜絕 **記憶體洩漏 (Memory Leaks)**，確保長時間運行的流暢度。

### 2. 資料驅動與全端思維 (Full-Stack Potential)
*   **GitHub API 整合**：透過非同步請求實時串接 Commit 數據，動態展現開發活躍度，體現 Data-driven UI 的處理能力。
*   **DevOps 實務**：配置 **Cloudflare DNS** 託管與 **GitHub Pages** 自動化部署流程 (CI/CD)，掌握 Web 基礎設施、域名管理與安全性配置（SSL/HTTPS）。

## 📈 效能優化指標 (Performance Audit)

本專案在 Lighthouse 測試中達到近乎滿分的成績，展現了對細節的掌控力：

*   **Performance (90+)**：
    *   **圖片優化**：全站採用 WebP 格式轉換、Resize 處理與 Lazy Loading 延遲載入技術。
    *   **算力優化**：避開佈局屬性（Reflow），全數使用 GPU 加速屬性（Transform / Opacity）進行動畫處理。
*   **Accessibility (94+)**：實踐語意化 HTML 與 ARIA Label，確保跨族群的使用體驗與無障礙訪問。
*   **Best Practices / SEO (100)**：字體本地託管 (Self-hosting)、Meta Description 優化與嚴格的安全性配置。

## 🗺️ 未來演進藍圖 (Future Roadmap)

*   **後端轉型**：導入 Node.js (Express) 與 MongoDB 建立動態作品管理系統 (CMS)。
*   **安全性強化**：建立後端 Proxy 層以隱藏 API Key 並實施數據快取 (Caching)。
*   **數據導向**：整合 Google Analytics 進行使用者行為分析，持續優化 UI/UX。

## 🚀 快速開始 (Quick Start)

### 專案設置
```bash
npm install
```

### 開發環境啟動
```bash
npm run dev
```

### 生產環境構建
```bash
npm run build
```

### 自動化部署 (GitHub Pages)
```bash
npm run deploy
```

## 📬 聯絡資訊 (Contact)

*   **Live Demo**: [www.dizzydog-rgb.art](https://www.dizzydog-rgb.art)
*   **LinkedIn**: [Yi-Sheng Chen (Jackie)](https://www.linkedin.com/in/yi-sheng-chen-jackie)
*   **GitHub**: [@dizzydog-rgb](https://github.com/dizzydog-rgb)
*   **Email**: [yisheng.chen.jackie@gmail.com](mailto:yisheng.chen.jackie@gmail.com)
*   **Blog**: [Vocus (方格子)](https://vocus.cc/salon/dizzydog)
*   **CodePen**: [My Collection](https://codepen.io/collection/zzGkOR)

---
Copyright © 2024 Jackie. Built with ❤️ and precision.
