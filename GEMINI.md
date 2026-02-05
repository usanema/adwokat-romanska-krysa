# Project Context: Adwokat Anna Romańska-Krysa Website

## 1. Project Overview
**Goal:** Create a high-end, editorial-style law firm website for Anna Romańska-Krysa.
**Design Reference:** Heavily inspired by [leandra-isler.ch](https://www.leandra-isler.ch/en), focusing on minimalist elegance, massive typography, and "negative space" (airiness).
**Tone:** Calm authority, professionalism, empathy ("Spokój w Obliczu Prawa").

## 2. Tech Stack
*   **Framework:** [Astro](https://astro.build) (v5+)
*   **UI Library:** React (integrated via Astro)
*   **Styling:** Tailwind CSS (v4 / `@theme` configuration)
*   **Icons:** Lucide React
*   **Animations:** 
    *   **Scroll:** [Lenis](https://github.com/darkroomengineering/lenis) for smooth, inertial scrolling.
    *   **Reveal:** Native CSS `IntersectionObserver` adding `.is-visible` class to `.animate-on-scroll` elements.

## 3. Design System
The design is centralized in `src/styles/global.css`.

### Color Palette
*   **Cream (Background):** `#FAFAF5` (Warm, paper-like off-white)
*   **Primary (Bottle Green):** `#1E392A` (Main brand color, headings, accents)
*   **Accent (Beige/Gold):** `#DBC1AC` (Subtle highlights, secondary accents)
*   **Text (Dark):** `#0F1F15` (Almost black green for body text)

### Typography
*   **Headings (Display):** `DM Sans` (Google Fonts). Often used in Uppercase, large sizes (6vw-12vw), with high contrast between weights.
*   **Body (Sans):** `Inter` (Google Fonts). Clean, legible, typically tracked wide (`tracking-widest` for labels).

### Key Design Principles
1.  **Editorial Layout:** Use of staggered grids (e.g., Services page), sticky titles, and asymmetric layouts.
2.  **Typography as Image:** Text is the main visual element. Headings are massive and often broken into multiple lines with varying indentation.
3.  **Micro-Interactions:** 
    *   **Navigation:** "Leandra-style" hover effect — a thin, rounded square border (`rounded-md`, `border-primary`) fades in and scales up around the menu item text.
    *   **Links:** Body links have underline animations (`scale-x`). Hero CTA mimics this text-link style (no buttons) for consistency.
    *   **Images:** Images start grayscale and transition to color on hover.
    *   **Smooth Scroll:** Mandatory `Lenis` integration for premium feel.
4.  **Accordions:** Details (especially in Services) are hidden behind clean accordion interfaces to maintain minimalism.

## 4. Architecture & Key Files

### Directories
*   `src/pages/`: Astro pages (`index.astro`, `about.astro`, `services.astro`, `contact.astro`, `blog.astro`).
*   `src/components/`: React UI components.
    *   `Header.jsx`: Fixed, minimalist navigation.
    *   `Footer.jsx`: Contains massive "Rezerwacja Terminu" call to action.
    *   `ServiceDetail.jsx`: Complex component handling the staggered image/text layout + accordions.
*   `src/layouts/`:
    *   `Layout.astro`: **CRITICAL**. Contains the `<head>`, global redirects, and the **Lenis + IntersectionObserver** script for smooth scrolling and animations.

### Animation Strategy
To animate an element, add the class `animate-on-scroll` to it.
*   The `Layout.astro` script detects this class.
*   When the element enters the viewport (threshold 0.1), the class `is-visible` is added.
*   CSS in `global.css` handles the transition (opacity 0->1, translateY 30px->0).
*   Use `delay-100`, `delay-200`, `delay-300` helper classes for staggering.

## 5. Development Guidelines
*   **New Components:** Prefer React for interactive components (dropdowns, accordions). Use Astro for static layout.
*   **Styling:** Use Tailwind utility classes. For repeated complex animations, define them in `global.css`.
*   **Images:** 
    *   Use local assets in `public/` for permanent branding images (e.g., `hero-anna.jpeg`). 
    *   Use `object-top` for portraits to ensure face visibility.
    *   Continue using high-quality editorial photography.

## 6. Current Status
*   **Home:** 2-column Hero (Text Left, Image Right), Minimalist Services list, Philosophy section.
*   **Services:** Staggered grid layout with large images and accordion details.
*   **About:** Editorial profile layout.
*   **Contact:** Clean grid with information and form placeholder.
*   **Blog:** List-based layout.
