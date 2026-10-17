# Sree Ganesh Linga (SGL) — Sticker & Trims Manufacturing

A pure, standalone **React** single-page application (SPA) built with **Vite**, **React Router v7**, and **Lucide React icons**.

> **Note**: This application runs 100% on the client side in React. No Node.js backend server or SQL database is required.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

Or simply double-click **`RUN_DEV.bat`** on Windows.

---

## 🛠️ Build for Production
To create an optimized production build:
```bash
npm run build
```
The output files will be in the `dist/` directory, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, AWS S3, Cloudflare Pages, etc.).

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
sgl/
├── public/                 # Static assets (logos, images, icons)
├── src/
│   ├── assets/             # Vector icons and graphics
│   ├── components/         # Reusable UI components (Navbar, Footer, ProductCard, etc.)
│   ├── pages/              # Main route views (Home, About, Products, Portfolio, Contact)
│   ├── services/
│   │   ├── api.js          # Pure client-side data service (zero-latency queries & local persistence)
│   │   ├── productsData.js # Catalog of 16 sticker & packaging products
│   │   ├── portfolioData.js# Showcase portfolio projects
│   │   └── productImages.js# Image fallbacks and curated photography mappings
│   ├── App.css
│   ├── App.jsx             # Route definitions & layout wrapper
│   ├── index.css           # Global modern typography & responsive styling
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies & build scripts
├── RUN_DEV.bat             # One-click Windows dev runner
└── vite.config.js          # Vite configuration
```

---

## ✨ Features
- **100% Pure React**: Fast, lightweight client-side application with zero external server dependencies.
- **Product Catalog**: 16 precision sticker and garment trim items with instant category filtering and live search.
- **Portfolio Showcase**: Interactive project gallery with quick-filter tags and full-screen preview modals.
- **Direct Enquiries**: Responsive contact form with localStorage submission storage and instant WhatsApp messaging integration.
