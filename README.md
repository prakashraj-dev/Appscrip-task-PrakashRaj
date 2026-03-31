# Appscrip-task-[YourName]

A **Product Listing Page (PLP)** built with **Next.js 14** (App Router) as part of the Appscrip frontend engineering task.

---

## ✅ Task Checklist

| Requirement | Status |
|---|---|
| HTML & CSS implementation | ✅ CSS Modules (zero external UI libs) |
| Next.js (React SSR framework) | ✅ Next.js 14 App Router |
| Server Side Rendering (SSR) | ✅ Server Components + ISR via `fetch` |
| Responsive — mobile & tablet | ✅ CSS Grid + media queries |
| SEO: title, description, H1/H2 | ✅ Next.js `metadata` API |
| SEO: Schema / JSON-LD | ✅ CollectionPage + Product schema |
| SEO: image alt text | ✅ Auto-generated alt text per product |
| SEO-friendly image names | ✅ Slug-based title attributes |
| FakeStore API integration | ✅ Products + Categories |
| Minimum JS packages | ✅ Only Next.js — no Redux, Axios, UI libs |
| Code structure & naming | ✅ PascalCase components, camelCase fns, kebab-case CSS |
| Min DOM size | ✅ Semantic HTML, no wrapper bloat |
| Netlify hosting | ✅ `netlify.toml` configured |
| GitHub repo | ✅ Repo named `Appscrip-task-[Name]` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/yourusername/Appscrip-task-YourName.git
cd Appscrip-task-YourName

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm start
```

---

## 🗂 Project Structure

```
appscrip-task-yourname/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, schema
│   ├── page.tsx            # PLP — SSR Server Component
│   ├── loading.tsx         # Shimmer skeleton (Suspense fallback)
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # CSS variables + reset
├── components/
│   ├── Header/             # Sticky nav, mobile menu, icons
│   ├── FilterBar/          # Category tabs, sort dropdown, filter panel
│   ├── ProductGrid/        # Responsive CSS Grid layout
│   ├── ProductCard/        # Image, wishlist, rating, price
│   └── Footer/             # Newsletter, links, payment icons
├── lib/
│   └── api.ts              # FakeStore API fetch functions
├── netlify.toml            # Netlify deployment config
└── next.config.js          # Next.js image domains
```

---

## 🧠 Key Technical Decisions

### Server Side Rendering (SSR)
- `app/page.tsx` is a **React Server Component** — data is fetched on the server at request time
- Uses `next: { revalidate: 3600 }` for **ISR** — pages revalidate every hour without a full redeploy
- Product sorting is applied **server-side** based on URL search params

### SEO
- `metadata` export in `layout.tsx` sets `<title>`, `<meta description>`, OpenGraph, Twitter cards
- **JSON-LD Schema** for `CollectionPage` (page level) and `Product` (per card)
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
- H1 for page title, H2 for product titles and footer section headings
- `alt` text auto-generated from product title + category

### Performance
- `next/image` with `priority` on first 4 cards (LCP optimisation)
- `sizes` attribute on all images for responsive loading
- Sticky filter bar uses `position: sticky` (no JS)
- CSS-only animations (no animation libraries)

### Zero external UI packages
All icons are inline SVG — no icon library needed.
All styling is plain CSS Modules — no Tailwind, Bootstrap, or styled-components.

---

## 🌐 Deployment (Netlify)

1. Push this repo to GitHub as `Appscrip-task-YourName`
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`
5. Click **Deploy site**

---

## 📦 Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18"
}
```

That's it. No UI frameworks. No state management libraries. No CSS frameworks.

---

## 🔗 API

Products are sourced from [FakeStore API](https://fakestoreapi.com/):
- `GET /products` — All products
- `GET /products/categories` — Category list
- `GET /products/category/:name` — Filtered by category
