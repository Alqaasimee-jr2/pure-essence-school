# 🌙 Pure Essence School — Technical Documentation (v1.0)

This document provides a deep dive for developers maintaining the **Pure Essence School** codebase.

---

## 🏗️ Architecture & Framework
- **Next.js 14+**: Using the **App Router** for layouts, nested routing, and server-side performance.
- **TypeScript**: Full type safety for props, state, and constants.
- **Tailwind CSS v4**: Utility-first styling with advanced features (custom animations, gradient text, etc.).
- **Framer Motion**: Powering all scroll-triggered and page-exit animations.

---

## 🎨 Global Design Tokens
Design tokens are located in `src/app/globals.css` and custom themes in `tailwind.config.ts`.

| Token        | Variable/Reference | Value               |
| ------------ | ------------------ | ------------------- |
| **Headline** | `--font-headline`  | `Noto Serif`       |
| **Body**     | `--font-body`      | `Manrope`          |
| **Primary**  | `#570000`          | Pure Essence Maroon |
| **Secondary**| `#ad2c00`          | Pure Essence Rust   |
| **Accent**   | `#c9a900`          | Essence Gold        |
| **Glass**    | `.glass-morphism`  | `white/10 + blur`   |

---

## 🧩 Components & UI
The site uses a "Compound Component" pattern:
- **`AnimatedSection`**: A wrapper that handles all viewport-triggered animations. Use the `direction`, `delay`, and `duration` props for customization.
- **`navbar`**: High-z sticky header with dynamic scroll-glass effects.
- **`footer`**: Responsive, brand-rich footer with Arabic watermarks.
- **Form Components**:
    - `AdmissionsForm`: 4-step wizard with persistent state logic.
    - `CareersForm`: Standardized teacher application logic.

---

## 🔗 Business Logic & Integrations
### 1. **WhatsApp Deep-Linking**
Located in the form handlers (`handleWhatsApp`). 
Logic: `https://wa.me/{WHATSAPP_NUMBER}?text={ENCODED_MESSAGE}`.
All constants are sourced from `src/lib/constants.ts`.

### 2. **SEO & Metadata API**
- **Sitemap**: Generated via `src/app/sitemap.ts`.
- **Robots**: Generated via `src/app/robots.ts`.
- **Global Metadata**: Defined in `src/app/layout.tsx`.
- **Localized JSON-LD**: Embedded in the root layout via `<script type="application/ld+json" />`.

---

## 📂 Developer Directory
```bash
src/
├── app/               # Public entry points & Layouts
├── components/        # Isolated UI logic
│   ├── ui/            # "Pure" UI components
│   ├── forms/         # "Stateful" form components
│   └── layout/        # Site-wide layout containers
├── lib/               # Shared logic & Brand constants
└── styles/            # CSS & Global themes
```

---

## ⚙️ Maintenance Procedures
### **Updating School Info**
1. Open `src/lib/constants.ts`.
2. Edit the corresponding constant (e.g., `WHATSAPP_NUMBER`, `SCHOOL_ADDRESS`, `EMAIL`).
3. Save, and the entire site (Navbar, Footer, Forms, Contact page) is updated immediately.

### **Adding New Pages**
1. Create a folder in `src/app/`.
2. Add a `page.tsx`.
3. Wrap content in `<AnimatedSection>` for consistent branding.
4. Add the new link to `NAV_LINKS` in `src/lib/constants.ts`.

---

> [!TIP]
> **Asset Management**: For new chibi images or decorative patterns, place them in `public/images/` and use the Next.js `<Image />` component with `priority` for above-the-fold content.

---
**Maintained By**: Pure Essence School Technology Team
**Build Environment**: Next.js 14, React 18+, Node 18+
