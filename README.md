# J. Prado Tree Service & Landscape — Bilingual Website & Brand Logo

A modern, fast, mobile-responsive React application built for **J. Prado Tree Service & Landscape** (Fuquay-Varina, NC). Featuring instant bilingual switching (English / Español), multi-page routing, interactive Before & After comparison sliders, a quick photo estimate lead capture system, sticky mobile click-to-call, and custom high-resolution logo assets.

---

## 🌲 Features

- **Multi-Page React Architecture**:
  - **Home (`/`)**: High-converting hero with trust badges, services preview, before/after teaser, 3 pillars of trust, service area coverage, and quick estimate form.
  - **Services (`/services`)**: In-depth breakdowns for Tree Trimming & Pruning, Tree & Brush Removal, Seasonal Lawn & Yard Cleanup, and Routine Yard Maintenance, plus Emergency Storm alerts.
  - **Before & After Gallery (`/gallery`)**: Interactive comparison sliders (drag to compare before vs after), category filters (All, Tree Trimming, Brush Removal, Storm Cleanup), and local project captions.
  - **Service Areas (`/areas`)**: Local SEO page highlighting Fuquay-Varina, Holly Springs, Angier, and surrounding southern Wake & northern Harnett county coverage.
  - **Free Estimate / Contact (`/contact`)**: Multi-file project photo uploader (up to 5 photos with preview & removal), phone click-to-call, service selector, and FAQ accordions.
- **Instant Bilingual Support (EN / ES)**:
  - Complete English and Spanish wireframe copy switchable with one click via global `LanguageContext`.
  - Persists language choice in `localStorage`.
- **Mobile-First & Conversion Optimized**:
  - Sticky mobile bottom bar with instant click-to-call `(919) 671-9647` and quick photo estimate button.
  - Responsive hamburger drawer on mobile.
- **Custom Brand Identity & Logos**:
  - **Vector SVG Emblem (`public/logo.svg`, `public/logo-icon.svg`)**: Sharp, scalable, retina-ready oak crest with warm gold wood trunk, rolling green landscape curves, and professional typography.
  - **High-Resolution AI Rendered Logo (`public/j_prado_logo.jpg`)**: Photorealistic branding mark suitable for truck decals, uniforms, business cards, and social profiles.

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
Open your browser to `http://localhost:3000` (or the port displayed in terminal).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── j_prado_logo.jpg     # High-res rendered logo mark
│   ├── logo-icon.svg        # Clean vector SVG icon / favicon
│   └── logo.svg             # Full vector SVG horizontal brand mark
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BeforeAfterSlider.jsx # Interactive drag-to-compare image slider
│   │   ├── EstimateForm.jsx      # Lead capture form with photo uploader
│   │   ├── Footer.jsx            # Local SEO footer with contact & hours
│   │   ├── Logo.jsx              # Reusable responsive logo component
│   │   ├── Navbar.jsx            # Sticky responsive header with lang toggle
│   │   ├── ServiceCard.jsx       # Feature cards with icons & badges
│   │   └── StickyMobileBar.jsx   # Sticky mobile click-to-call & estimate bar
│   ├── context/
│   │   └── LanguageContext.jsx   # Global EN/ES state & localStorage hook
│   ├── data/
│   │   └── content.js            # Bilingual wireframe copy dictionary
│   ├── pages/
│   │   ├── AreasPage.jsx         # Service areas & 3 pillars
│   │   ├── ContactPage.jsx       # Free estimate request & FAQs
│   │   ├── GalleryPage.jsx       # Interactive before/after showcase
│   │   ├── Home.jsx              # Landing page
│   │   └── ServicesPage.jsx      # Comprehensive service catalog
│   ├── App.jsx                   # React Router & scroll management
│   ├── index.css                 # Tailwind directives & custom CSS
│   └── main.jsx                  # React 19 entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📞 Business Information

- **Client**: J. Prado Tree Service & Landscape
- **Location**: Fuquay-Varina, NC 27526
- **Phone**: (919) 671-9647
- **Hours**: Monday – Saturday: 7:00 AM – 6:00 PM
- **Service Territory**: Fuquay-Varina, Holly Springs, Angier, and surrounding Wake/Harnett communities.
