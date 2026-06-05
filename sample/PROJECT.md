# AARNA Hall — Project Master Document

> **Purpose**: Single source of truth for the entire AARNA Hall static website project.
> Keep this file updated after every phase. Never lose context between sessions.
> Last Updated: Phase 5 Complete (2026-06-05)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design System](#2-design-system)
3. [Site Architecture](#3-site-architecture)
4. [Folder Structure](#4-folder-structure)
5. [Component Architecture](#5-component-architecture)
6. [Content & Placeholders](#6-content--placeholders)
7. [SEO Strategy](#7-seo-strategy)
8. [Accessibility & Performance Rules](#8-accessibility--performance-rules)
9. [Development Phases](#9-development-phases)
10. [Phase Progress Tracker](#10-phase-progress-tracker)
11. [Placeholder Replacement Guide](#11-placeholder-replacement-guide)
12. [Future Expansion Guide](#12-future-expansion-guide)
13. [Decisions Log](#13-decisions-log)
14. [Known Issues & Blockers](#14-known-issues--blockers)

---

## 1. Project Overview

| Field              | Value                                          |
|--------------------|------------------------------------------------|
| Project Name       | AARNA Hall Website                             |
| Client             | AARNA Hall                                     |
| Location           | Chennai, Tamil Nadu, India                     |
| Project Type       | Static Website (HTML + CSS + Vanilla JS)       |
| Primary Goal       | Generate enquiry leads (WhatsApp, call, form)  |
| Secondary Goal     | Rank for local Chennai venue searches          |
| Reference Site     | https://www.sppgardens.com (inspiration only)  |
| Working Directory  | /Users/trioangle/Desktop/yasartestfiles/sample |
| Frameworks Used    | NONE — pure HTML, CSS, Vanilla JS              |
| External Libraries | NONE (no Bootstrap, no jQuery, no Tailwind)    |

### Confirmed Hall Details

| Detail          | Value                        |
|-----------------|------------------------------|
| Capacity        | 150–200 Guests               |
| Guest Rooms     | 1 Room                       |
| Parking         | NOT AVAILABLE                |
| City            | Chennai                      |
| Address         | [PLACEHOLDER — to be added]  |
| Phone           | [PLACEHOLDER — to be added]  |
| WhatsApp Number | [PLACEHOLDER — to be added]  |
| Email           | [PLACEHOLDER — to be added]  |
| Google Maps URL | [PLACEHOLDER — to be added]  |
| Instagram URL   | [PLACEHOLDER — to be added]  |
| Facebook URL    | [PLACEHOLDER — to be added]  |

### Pending Information (Client to Provide Later)

- [ ] Full address
- [ ] Phone number
- [ ] WhatsApp number
- [ ] Email address
- [ ] Hall photos (hero, interior, stage, dining, entrance, events, decoration)
- [ ] Logo file (SVG preferred)
- [ ] Complete amenities list
- [ ] Pricing / packages
- [ ] Real testimonials (name, event type, review text)
- [ ] Google Maps embed URL
- [ ] Social media handles

---

## 2. Design System

### Colour Palette

```css
--color-primary:        #8B6914   /* Warm gold — elegance, weddings */
--color-primary-light:  #C4972A   /* Lighter gold — hover states */
--color-primary-dark:   #5C440C   /* Deep gold — text on light bg */
--color-accent:         #F5E6C8   /* Champagne — soft section backgrounds */
--color-surface:        #FDFAF5   /* Warm off-white — base background */
--color-dark:           #1A1209   /* Near-black — primary body text */
--color-muted:          #6B5D4F   /* Warm gray — secondary text */
--color-border:         #E8D9C0   /* Light warm border */
--color-white:          #FFFFFF   /* Pure white */
--color-success:        #2D6A4F   /* Form success state */
--color-error:          #B5281A   /* Form error state */
--color-overlay:        rgba(26,18,9,0.65)  /* Hero image overlay */
```

### Typography

```css
--font-display: 'Cormorant Garamond', Georgia, serif
  /* Headings — elegant, luxury hospitality feel */
  /* Load from Google Fonts: weights 400, 500, 600, 700 */

--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
  /* Body text — crisp, readable on all screen sizes */
  /* Load from Google Fonts: weights 400, 500, 600 */
```

### Type Scale

```css
--text-xs:   0.75rem   /* 12px — labels, badges */
--text-sm:   0.875rem  /* 14px — captions, meta */
--text-base: 1rem      /* 16px — body text */
--text-lg:   1.125rem  /* 18px — lead paragraphs */
--text-xl:   1.25rem   /* 20px — small headings */
--text-2xl:  1.5rem    /* 24px */
--text-3xl:  1.875rem  /* 30px */
--text-4xl:  2.25rem   /* 36px */
--text-5xl:  3rem      /* 48px — section headings */
--text-6xl:  3.75rem   /* 60px — hero headline */
--text-7xl:  4.5rem    /* 72px — hero headline desktop */
```

### Spacing Scale

```css
--space-1:  0.25rem   /* 4px  */
--space-2:  0.5rem    /* 8px  */
--space-3:  0.75rem   /* 12px */
--space-4:  1rem      /* 16px */
--space-5:  1.25rem   /* 20px */
--space-6:  1.5rem    /* 24px */
--space-8:  2rem      /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */
--space-32: 8rem      /* 128px */
```

### Border Radius

```css
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   16px
--radius-xl:   24px
--radius-full: 9999px
```

### Shadows

```css
--shadow-sm:  0 1px 3px rgba(139,105,20,0.10), 0 1px 2px rgba(139,105,20,0.06)
--shadow-md:  0 4px 6px rgba(139,105,20,0.08), 0 2px 4px rgba(139,105,20,0.06)
--shadow-lg:  0 10px 15px rgba(139,105,20,0.10), 0 4px 6px rgba(139,105,20,0.05)
--shadow-xl:  0 20px 25px rgba(139,105,20,0.10), 0 10px 10px rgba(139,105,20,0.04)
```

### Transitions

```css
--transition-fast: 150ms ease   /* Hover states, small toggles */
--transition-base: 250ms ease   /* Buttons, card lifts, filter fades */
--transition-slow: 400ms ease   /* Lightbox, larger entrances */
```

### Breakpoints

```css
--bp-sm:  480px    /* Small mobile */
--bp-md:  768px    /* Tablet */
--bp-lg:  1024px   /* Small desktop */
--bp-xl:  1280px   /* Desktop */
--bp-2xl: 1536px   /* Large desktop */
```

### Container Widths

```css
--container-sm:  640px
--container-md:  768px
--container-lg:  1024px
--container-xl:  1280px   /* Default max-width */
```

### Z-Index Scale

```css
--z-below:   -1
--z-base:     0
--z-above:    10
--z-sticky:   100
--z-overlay:  200
--z-modal:    300
--z-toast:    400
```

---

## 3. Site Architecture

### Pages

| File           | Purpose                              | Status              |
|----------------|--------------------------------------|---------------------|
| index.html     | Main single-page experience          | ✅ Created (Ph 0–4) |
| gallery.html   | Expanded full gallery page           | ✅ Created (Ph 3)   |
| 404.html       | Custom 404 page                      | ⬜ Phase 6          |
| privacy.html   | Privacy policy placeholder           | ⬜ Phase 6          |

### Section Sequence (index.html)

```
<header>      → Navigation (sticky on scroll)
#hero         → Full-viewport hero, headline, CTAs, trust badges
#about        → Hall story, two-column layout, key stats, feature highlights, CTA
#amenities    → 10 amenity cards grid + parking notice
              → CTA strip (Check Availability — between Amenities and Events)
#events       → 5 event-type cards (3+2 centred grid layout)
#gallery      → Filterable image grid (7 filter tabs, 12 tiles) + lightbox
#testimonials → 3 social-proof cards (3-column grid, dark section)
#faq          → Accordion FAQ (Phase 5)
#contact      → Form + direct contact options + map placeholder (Phase 5)
<footer>      → Nav links, contact snapshot, social, legal
```

### Navigation Links

```
Logo → scrolls to #hero / href="index.html"
Home → #hero
About → #about
Amenities → #amenities
Gallery → #gallery (or gallery.html for full view)
Events → #events
Contact → #contact
```

### CTA Map

| Location                  | CTA Text              | Action              | Status |
|---------------------------|-----------------------|---------------------|--------|
| Hero (primary)            | "Enquire Now"         | Scroll to #contact  | ✅ Live |
| Hero (secondary)          | "View Gallery"        | Scroll to #gallery  | ✅ Live |
| About section             | "Plan Your Event"     | Scroll to #contact  | ✅ Live |
| CTA strip (after Amenities) | "Check Availability" | Scroll to #contact | ✅ Live |
| After Testimonials        | "Book Your Event"     | Scroll to #contact  | ✅ Live |
| Floating button (FAB)     | "Chat with us" + WhatsApp icon | wa.me/91[PLACEHOLDER-NUMBER] | ✅ Live (placeholder number) |
| Footer                    | "Get In Touch" heading | Contact list display | ✅ Live |
| Contact section           | "Send Enquiry"        | Form submit         | ⬜ Phase 5 |
| gallery.html footer CTA   | "Enquire Now"         | href="index.html#contact" | ✅ Live |

---

## 4. Folder Structure

> Legend: ✅ File exists on disk | ⬜ Planned (not yet created)

```
sample/                          ← project root
├── index.html          ✅       ← main page (nav + hero + about + amenities + CTA strip + events + gallery + testimonials + footer + lightbox) — Phases 0–4
├── gallery.html        ✅       ← full gallery page with page-hero, filter bar, lightbox (Phase 3)
├── 404.html            ⬜       ← custom 404 (Phase 6)
├── privacy.html        ⬜       ← privacy policy (Phase 6)
├── robots.txt          ✅       ← SEO crawl rules
├── sitemap.xml         ✅       ← XML sitemap (3 URLs, [DOMAIN] placeholder)
├── PROJECT.md          ✅       ← THIS FILE
│
├── assets/
│   ├── css/
│   │   ├── main.css       ✅   ← design tokens (colours, type, spacing, radius, shadows, transitions, z-index), CSS reset, :focus-visible, .skip-link, prefers-reduced-motion
│   │   ├── layout.css     ✅   ← .container (max 1280px), .section / .section--alt / .section--dark, grid/flex utilities, .section-header + dark-section overrides
│   │   ├── components.css ✅   ← 5 button variants (primary/secondary/secondary-outline/ghost/link) + 2 size modifiers, 3 badge variants, amenity/event/testimonial card types, full form set (input/select/textarea/error)
│   │   ├── sections.css   ✅   ← nav, hero, about, amenities, parking-notice, CTA strip, events, gallery, lightbox, page-hero, testimonials, footer, WhatsApp FAB, keyframe animations
│   │   └── responsive.css ✅   ← ≤768px tablet, ≤480px mobile, ≥1536px large desktop — all phases 0–4 covered
│   │
│   ├── js/
│   │   ├── main.js        ✅   ← ES module entry — imports + calls initNavigation(), initGallery(), initFAQ(), initForm()
│   │   ├── navigation.js  ✅   ← sticky nav (transparent → scrolled at 60px), mobile hamburger (X animation), scroll spy (.is-active), smooth scroll, FAB visibility (300px threshold)
│   │   ├── gallery.js     ✅   ← filter (200ms fade), lightbox open/close/navigate, Escape/ArrowLeft/ArrowRight, backdrop close, gradient class mirroring, focus management, body scroll lock
│   │   ├── faq.js         ✅   ← accordion (one-open-at-a-time), aria-expanded, Escape to close (Phase 5)
│   │   └── form.js        ✅   ← 4-rule inline validation, blur+live re-check, success state (Phase 5)
│   │
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-bg.jpg  ⬜  ← [PLACEHOLDER — replace with real photo; folder exists]
│   │   ├── gallery/
│   │   │   ├── interior/    ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   │   ├── stage/       ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   │   ├── dining/      ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   │   ├── entrance/    ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   │   ├── events/      ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   │   └── decoration/  ⬜  ← [2 CSS-gradient placeholder tiles; add real .webp/.jpg here]
│   │   ├── about/           ⬜  ← [folder exists; add photo then set background-image on .about-image__inner]
│   │   ├── icons/           ⬜  ← [folder exists; all icons are inline SVGs — no file icons needed]
│   │   └── logo/            ⬜  ← [folder exists; text logo active until SVG logo provided]
│   │
│   └── fonts/               ⬜  ← self-hosted fonts (if needed later; Google Fonts CDN used now)
│
└── data/
    └── content.json  ✅         ← structured placeholder content: hall details, hero, about, events, testimonials (3 placeholder reviews)
```

---

## 5. Component Architecture

### CSS Naming Convention: BEM-inspired

```
Block:     .card
Element:   .card__title
Modifier:  .card--featured
```

### Core Components (defined in components.css)

#### Buttons
```html
<!-- Colour variants -->
<a class="btn btn--primary">Enquire Now</a>          <!-- gold fill -->
<a class="btn btn--secondary">Learn More</a>         <!-- champagne fill -->
<a class="btn btn--secondary-outline">View Gallery</a> <!-- transparent, white border — hero use -->
<a class="btn btn--ghost">Contact Us</a>             <!-- transparent, gold border -->

<!-- Size modifiers (stack with any variant) -->
<a class="btn btn--primary btn--lg">Large CTA</a>    <!-- 1.125rem, more padding -->
<a class="btn btn--primary btn--sm">Small CTA</a>   <!-- 0.875rem, less padding -->
```

#### Cards
```html
<!-- Amenity Card -->
<div class="card card--amenity">
  <div class="card__icon"><!-- 28×28 SVG --></div>
  <h3 class="card__title">Air Conditioning</h3>
  <p class="card__desc">Fully air-conditioned hall</p>
</div>

<!-- Event Type Card -->
<div class="card card--event">
  <div class="card__image"><!-- img or gradient placeholder --></div>
  <div class="card__body">
    <h3 class="card__title">Wedding</h3>
    <p class="card__desc">Description</p>
  </div>
</div>

<!-- Gallery Item (button element — opens lightbox on click) -->
<button class="gallery-item" data-category="interior"
        aria-label="AARNA Hall interior — describe the photo">
  <div class="gallery-item__placeholder gallery-item__placeholder--interior-1" aria-hidden="true"></div>
  <span class="gallery-item__label" aria-hidden="true">Hall Interior</span>
  <div class="gallery-item__overlay" aria-hidden="true"><!-- expand SVG --></div>
  <img class="gallery-item__img" src="path/to/photo.jpg" alt="AARNA Hall interior — describe" loading="lazy">
</button>
<!-- data-category values: interior | stage | dining | entrance | events | decoration -->
<!-- placeholder class suffix matches category and variation: --interior-1, --stage-2, etc. -->
<!-- img[src=""] is hidden by CSS — gradient placeholder shows when no real photo -->

<!-- Gallery Filter Button -->
<button class="gallery-filter" data-filter="interior" aria-pressed="false">Hall Interior</button>
<!-- data-filter="all" for the "All" tab, which is the default active state -->

<!-- Testimonial Card (used inside .testimonials-track) -->
<div class="card card--testimonial" role="listitem">
  <div class="card__stars" aria-label="5 out of 5 stars">
    <!-- 5× inline SVG stars: width/height 18, viewBox 0 0 24 24, polygon points 12,2 15.09,8.26 22,9.27 ... -->
    <!-- fill: var(--color-primary-light) via CSS -->
  </div>
  <p class="card__quote">
    <!-- ::before pseudo-element injects decorative \201C open-curly-quote in Cormorant Garamond 3.5rem -->
    Quote text here.
  </p>
  <div class="card__author">
    <!-- border-top separates author block from quote -->
    <span class="card__name">Name (Cormorant Garamond, champagne colour)</span>
    <span class="card__meta">Event type · Month Year (small muted)</span>
  </div>
</div>

<!-- Testimonials section wrapper — use role="list" on the track -->
<div class="testimonials-track" role="list">
  <!-- 3× card--testimonial with role="listitem" -->
</div>

<!-- CTA below track — centred, scrolls to #contact -->
<div class="testimonials__cta">
  <a href="#contact" class="btn btn--primary btn--lg">Book Your Event</a>
</div>
```

#### Badges
```html
<span class="badge">Wedding</span>                   <!-- champagne bg, gold text -->
<span class="badge badge--gold">Featured</span>      <!-- gold fill, white text -->
<span class="badge badge--light">Premium Venue</span> <!-- frosted glass — for dark/hero bg -->
```

#### Section Header
```html
<div class="section-header">
  <span class="section-header__label">About Us</span>  <!-- uppercase pill label -->
  <h2 class="section-header__title">Our Story</h2>
  <p class="section-header__subtitle">Supporting description</p>
</div>
<!-- Add class="section--dark" on the parent .section to auto-invert colours -->
```

#### Forms
```html
<div class="form-group">
  <label class="form-label" for="name">Full Name</label>
  <input class="form-input" type="text" id="name" name="name" required>
  <span class="form-error" role="alert"></span>
</div>
<!-- Also available: .form-select (with custom arrow), .form-textarea -->
<!-- Error state: add class "is-error" to .form-input/.form-select/.form-textarea -->
```

### JavaScript Module Pattern

```js
// main.js — entry point loaded as <script type="module">
// Imports each module and calls its init after DOMContentLoaded

import { initNavigation } from './navigation.js';  // ✅ Phase 0 — active
import { initGallery }    from './gallery.js';      // ✅ Phase 3 — active
// Future: import { initFAQ }  from './faq.js';     // ⬜ Phase 5
// Future: import { initForm } from './form.js';    // ⬜ Phase 5

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initGallery();
  // initFAQ();   // Phase 5
  // initForm();  // Phase 5
});
```

### Navigation Behaviour (implemented in navigation.js)

| State | Trigger | CSS class on `<header>` |
|-------|---------|------------------------|
| Transparent | scrollY ≤ 60px (over hero) | `.nav--transparent` |
| Scrolled | scrollY > 60px | `.nav--scrolled` |
| Mobile menu open | hamburger click | `.is-open` on `#nav-menu` |
| Active nav link | scroll spy | `.is-active` on `.nav__link` |
| WhatsApp FAB visible | scrollY > 300px | `.is-visible` on `.whatsapp-fab` |

---

## 6. Content & Placeholders

> All [PLACEHOLDER] text must be replaced when real content is available.
> Search for "PLACEHOLDER" in the codebase to find all locations.

### Hero Section

```
Headline:    "Chennai's Finest Setting for Your Most Cherished Moments"
Subheadline: "An elegant banquet hall crafted for weddings, receptions, 
              and celebrations that deserve the very best."
CTA 1:       "Enquire Now"
CTA 2:       "View Gallery"
Trust Badges:
  - "150–200 Guests" 
  - "Chennai"
  - "Weddings & Events"
```

### About Section

```
Layout:    Two-column grid — image column (left) + text column (right) on desktop
           Single column stacked on tablet/mobile (image above text)

Stats strip (above the grid):
  - "150–200" / "Guest Capacity"
  - "1" / "Guest Room"
  - "—" / "Years of Service"  (.about-stats__value--placeholder — replace when known)

Image column:
  .about-image → .about-image__inner (CSS-gradient placeholder + "Premium Venue · Chennai" tag)
  → Add background-image: url() to .about-image__inner when real photo is provided

Text column:
  Eyebrow row:  ✦ ornament (.about-content__ornament) + "About AARNA Hall" label pill
  H2 title:     "Where Every Celebration Becomes a Memory"
  Gold rule:    .about-content__rule (::after pseudo-element)
  Para 1:       "AARNA Hall blends timeless elegance with modern convenience. Nestled in the 
                 heart of Chennai, our venue has been the backdrop to hundreds of joyful 
                 celebrations — from intimate weddings to vibrant receptions."
  Para 2:       "We believe every event tells a unique story, and we are committed to making 
                 yours unforgettable — with thoughtful spaces, attentive service, and a 
                 dedication to excellence."
  Feature list: (.about-features ul, 4 items)
    - 150–200 Guest Capacity
    - 1 Private Guest Room
    - Prime Chennai Location
    - Dedicated Event Support
  CTA button:   "Plan Your Event" → #contact (.btn--primary .about-content__cta)
```

### Amenities Section

```
Label:  "Amenities"
Title:  "Everything You Need, All in One Place"
Layout: auto-fit grid, minmax(210px, 1fr) — 10 cards + parking notice below

Implemented Cards (all 10 rendered; items 3–10 are assumed pending client confirmation):
  1. 150–200 Guests           "Comfortably accommodates intimate gatherings and mid-scale celebrations."
  2. Guest Room               "A dedicated room for the bridal party or close family members."
  3. Air Conditioning         "Fully air-conditioned hall ensuring guest comfort year-round."
  4. Stage & Mandap Setup     "Dedicated stage area for ceremonies and key moments."
  5. Generator Backup         "Uninterrupted power supply throughout your event."
  6. Sound System             "Professional-grade audio equipment included."
  7. Catering Kitchen         "Fully equipped kitchen for your caterers."
  8. Bridal Room              "Private preparation room for the bride."
  9. Decoration Support       "In-house decoration assistance available."
  10. High-Speed Wi-Fi        "Reliable internet connectivity for your event needs."

Parking Notice (.parking-notice — rendered separately below the grid):
  Heading: "Parking Information"
  Text:    "Street parking is available in the surrounding area.
            We recommend arranging transportation for your guests."
  Icon:    Car/truck inline SVG
  Style:   Gold left-border card with info-box styling

Note: Items 3–10 are placeholder assumptions. Replace or remove when
      client provides the confirmed amenities list.
```

### Events Section

```
Label:    "Events We Host"
Title:    "Built for Every Celebration"
Subtitle: "From sacred rituals to joyful milestones — AARNA Hall sets the perfect stage."
Layout:   6-col CSS grid, 3+2 centred (cards 4 & 5 span cols 2–3 of a 6-col row)

Event Cards (each has: gradient bg, SVG icon, badge, h3 title, desc, "Enquire Now" ghost btn):
  1. Weddings           Badge: "Most Popular"       Gradient: gold tones
     "From the sacred rituals to the grand reception — AARNA Hall sets the perfect stage."
  2. Receptions         Badge: "Weddings & More"    Gradient: rose/pink tones
     "Celebrate the union with friends and family in an elegant setting."
  3. Naming Ceremonies  Badge: "Family Milestones"  Gradient: green tones
     "Welcome your little one into the world with a heartfelt celebration."
  4. Birthday Celebrations  Badge: "Celebrations"   Gradient: purple tones
     "Make every milestone birthday an unforgettable event."
  5. Corporate Events   Badge: "Professional"       Gradient: navy tones
     "From conferences to team gatherings — a professional space that adapts."

Each card's <img src=""> is hidden by CSS when empty; add real photo src to reveal.
```

### Gallery Section

```
Label:    "Gallery"
Title:    "A Glimpse of AARNA Hall"
Subtitle: "Every corner of our hall is crafted with attention to detail."
Layout:   4-col desktop → 2-col tablet → 1-col mobile; uniform height 240px

Filter Tabs (7 buttons with aria-pressed, gold active state, 200ms fade on switch):
  data-filter="all"        → "All"           (default active)
  data-filter="interior"   → "Hall Interior"
  data-filter="stage"      → "Stage & Decor"
  data-filter="dining"     → "Dining Area"
  data-filter="entrance"   → "Entrance"
  data-filter="events"     → "Events"
  data-filter="decoration" → "Decoration"

Gallery Items (12 total — 2 per category, each a <button> for keyboard access):
  interior-1:   "AARNA Hall interior — spacious banquet hall view"
  interior-2:   "AARNA Hall interior — elegant hall seating arrangement"
  stage-1:      "AARNA Hall — beautifully decorated wedding stage"
  stage-2:      "AARNA Hall — traditional mandap setup for ceremony"
  dining-1:     "AARNA Hall dining area — guest dining setup"
  dining-2:     "AARNA Hall dining area — banquet table arrangement"
  entrance-1:   "AARNA Hall — grand welcoming entrance area"
  entrance-2:   "AARNA Hall — floral decorated venue entrance"
  events-1:     "AARNA Hall — vibrant wedding reception event"
  events-2:     "AARNA Hall — joyful family celebration gathering"
  decoration-1: "AARNA Hall — elegant floral table decoration"
  decoration-2: "AARNA Hall — stunning centrepiece decoration"

Gallery footer CTA: "View Full Gallery" → gallery.html (index.html only)
Image source: CSS-gradient placeholders (12 classes in sections.css); replace img[src] with real .webp/.jpg
```

### Testimonials Section

```
Label:  "Testimonials"
Title:  "Heard From Our Guests"
Subtitle: "Real experiences from families who celebrated with us."

Testimonial 1:
  Quote:  "We hosted our daughter's wedding at AARNA Hall and the experience 
           was simply wonderful. The hall looked beautiful, the staff was 
           attentive, and our guests were very impressed. We couldn't have 
           asked for a better venue."
  Name:   "Ramesh & Lakshmi K."
  Event:  "Wedding Reception"
  Date:   "March 2024"
  Stars:  5

Testimonial 2:
  Quote:  "AARNA Hall was the perfect choice for our son's wedding. 
           The capacity was just right for our 180-guest gathering. 
           Clean, elegant, and well-maintained. Highly recommended 
           for any family celebration."
  Name:   "Suresh Nataraj"
  Event:  "Wedding"
  Date:   "January 2024"
  Stars:  5

Testimonial 3:
  Quote:  "We celebrated our little one's naming ceremony at AARNA Hall 
           and it was a memorable event. The team was helpful in coordinating 
           the arrangements and the hall's ambience added a special touch."
  Name:   "Priya & Karthik M."
  Event:  "Naming Ceremony"
  Date:   "November 2023"
  Stars:  5
```

### FAQ Section

```
Label:  "FAQ"
Title:  "Frequently Asked Questions"

Q1: What is the seating capacity of AARNA Hall?
A1: AARNA Hall can comfortably accommodate 150 to 200 guests, making it 
    ideal for intimate weddings, family gatherings, and mid-scale celebrations.

Q2: Is parking available at AARNA Hall?
A2: At present, dedicated on-site parking is not available. However, 
    street parking is accessible in the surrounding area. We recommend 
    that guests arrange their own transportation or use cab services for 
    added convenience.

Q3: Is there a guest room available?
A3: Yes, we have 1 guest room available for the bridal party or immediate 
    family members to use on the day of the event.

Q4: How do I book AARNA Hall?
A4: You can reach us via phone, WhatsApp, or by filling out the enquiry 
    form on this page. Our team will get in touch to confirm availability 
    and discuss your requirements.

Q5: Can I bring my own caterer?
A5: [PLACEHOLDER — confirm catering policy with client]

Q6: Is outside decoration allowed?
A6: [PLACEHOLDER — confirm decoration policy with client]

Q7: How far in advance should I book?
A7: We recommend booking at least 3–6 months in advance, especially for 
    wedding dates during the peak season (October to February). 
    Early booking ensures your preferred date is secured.

Q8: What types of events does AARNA Hall host?
A8: We host a wide range of events including weddings, receptions, 
    naming ceremonies, birthday celebrations, and corporate events.
```

### Contact Section

```
Label:      "Contact Us"
Title:      "Let's Plan Your Perfect Event"
Subtitle:   "Reach out to us and our team will get back to you within 24 hours."

Contact Details:
  Phone:    [PLACEHOLDER — add real number]
  WhatsApp: [PLACEHOLDER — add real number]
  Email:    [PLACEHOLDER — add real email]
  Address:  [PLACEHOLDER — add full address], Chennai, Tamil Nadu

Form Fields:
  1. Full Name       (text, required)
  2. Phone Number    (tel, required)
  3. Email Address   (email, required)
  4. Event Type      (select: Wedding / Reception / Naming Ceremony / Birthday / Corporate / Other)
  5. Preferred Date  (date, optional)
  6. Message         (textarea, optional)
  Submit: "Send Enquiry"

WhatsApp FAB:
  Text:   "Chat with us"
  Link:   https://wa.me/[PLACEHOLDER-NUMBER]
  Icon:   WhatsApp SVG
```

### Footer

```
Logo + Tagline: "Celebrating Life's Greatest Moments"
Nav Links: Home | About | Amenities | Gallery | Events | Contact
Contact Snapshot: Phone, Email, Address
Legal: © 2024 AARNA Hall. All rights reserved.
Social: Instagram | Facebook (links = [PLACEHOLDER])
```

---

## 7. SEO Strategy

### Target Keywords

| Keyword                                | Type   | Priority |
|----------------------------------------|--------|----------|
| marriage hall in Chennai               | Local  | High     |
| event hall in Chennai                  | Local  | High     |
| small wedding hall Chennai             | Local  | High     |
| banquet hall Chennai                   | Local  | High     |
| hall booking Chennai                   | Local  | Medium   |
| wedding venue Chennai                  | Local  | High     |
| reception hall Chennai                 | Local  | High     |
| naming ceremony hall Chennai           | Local  | Medium   |
| birthday party hall Chennai            | Local  | Medium   |
| AARNA Hall Chennai                     | Brand  | Critical |

### Meta Tags (index.html)

```html
<title>AARNA Hall — Marriage & Event Hall in Chennai | 150–200 Guests</title>
<meta name="description" content="AARNA Hall is an elegant marriage and event hall 
  in Chennai accommodating 150–200 guests. Perfect for weddings, receptions, naming 
  ceremonies and celebrations. Enquire today.">
<meta name="keywords" content="marriage hall Chennai, event hall Chennai, 
  wedding venue Chennai, banquet hall Chennai, AARNA Hall">
<link rel="canonical" href="https://[DOMAIN]/index.html">

<!-- Open Graph -->
<meta property="og:title" content="AARNA Hall — Marriage & Event Hall in Chennai">
<meta property="og:description" content="An elegant banquet hall for weddings, 
  receptions, and celebrations in Chennai. Capacity: 150–200 guests.">
<meta property="og:image" content="https://[DOMAIN]/assets/images/hero/hero-bg.jpg">
<meta property="og:url" content="https://[DOMAIN]">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_IN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AARNA Hall — Marriage & Event Hall in Chennai">
<meta name="twitter:description" content="Elegant venue for weddings and events 
  in Chennai. 150–200 guests capacity.">
```

### JSON-LD Schema (LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "AARNA Hall",
  "description": "An elegant marriage and event hall in Chennai accommodating 150–200 guests.",
  "url": "https://[DOMAIN]",
  "telephone": "[PLACEHOLDER]",
  "email": "[PLACEHOLDER]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[PLACEHOLDER]",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "[PLACEHOLDER]",
    "addressCountry": "IN"
  },
  "maximumAttendeeCapacity": 200,
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Guest Room", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
  ]
}
```

### Heading Hierarchy (index.html)

```
<h1> — ONE only: "Chennai's Finest Setting for Your Most Cherished Moments" (hero)
<h2> — Section titles: "Where Every Celebration Becomes a Memory", etc.
<h3> — Sub-items: amenity names, event type names, FAQ questions
<h4> — Minor sub-heads if needed
```

---

## 8. Accessibility & Performance Rules

### Accessibility Checklist (apply to every component)

- [x] All images have descriptive `alt` text *(gallery items: all 12 have descriptive alt; hero/about: placeholders with aria-label)*
- [x] All interactive elements have `aria-label` or visible label *(nav toggle, FAB, social links, gallery buttons, lightbox buttons done)*
- [x] Focus-visible styles present (never `outline: none` without replacement) *(`:focus-visible` in main.css; gallery items + filter buttons + lightbox buttons all have custom focus rings)*
- [ ] Colour contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text *(audit in Phase 6)*
- [x] Keyboard navigation works for: nav, gallery filters, lightbox *(nav: Ph 0; gallery filters + lightbox: Ph 3 — Escape/ArrowLeft/ArrowRight/Enter)*
- [x] Keyboard navigation works for: FAQ accordion (Enter/Space to toggle, Escape to close), contact form *(Phase 5)*
- [x] Skip-to-main-content link at top of page *(`.skip-link` in index.html and gallery.html)*
- [x] Form inputs have associated `<label>` elements *(Phase 5)*
- [x] Form errors announced via `role="alert"` + `aria-live="polite"` on each `.form-error` span *(Phase 5)*
- [x] Gallery lightbox closeable with Escape key *(done in Phase 3 — gallery.js)*
- [x] Gallery lightbox has `role="dialog"` and `aria-modal="true"` *(done in Phase 3)*
- [x] Gallery filter buttons have `aria-pressed` state *(done in Phase 3)*
- [x] Testimonials list uses `role="list"` / `role="listitem"` on `.testimonials-track` / `.card--testimonial` *(Phase 4)*
- [x] Testimonials star ratings have `aria-label="5 out of 5 stars"` on the container; individual SVG stars are `aria-hidden="true" focusable="false"` *(Phase 4)*
- [x] `prefers-reduced-motion` respected for all animations *(in main.css)*
- [x] Heading hierarchy is strictly sequential (no skipping levels) *(H1 in hero; H2 in section titles; H3 in amenity/event card titles)*
- [x] `lang="en"` set on `<html>` element *(index.html and gallery.html)*
- [ ] gallery.html footer uses `<h2 class="footer__heading">` while index.html uses `<h3>` — minor inconsistency, resolve in Phase 6 audit *(see Known Issues #9)*

### Performance Rules

- All `<img>` tags: add `loading="lazy"` except hero image (above fold)
- Hero image: `loading="eager"` + `fetchpriority="high"`
- Google Fonts: load with `preconnect` + `display=swap`
- JavaScript files: `defer` attribute on all `<script>` tags
- Inline critical CSS for hero/nav in `<head>` to avoid flash
- No render-blocking resources
- Use CSS `transform` and `opacity` for animations (GPU-composited)
- Avoid CSS `top/left` animations (triggers layout)
- Image format: `.webp` preferred when real photos added, `.jpg` fallback

---

## 9. Development Phases

### Phase 0 — Foundation & Infrastructure ✅ COMPLETE

**Objective**: Project skeleton, design tokens, base styles, navigation, footer.

**Files Created**:
- `index.html` — full semantic shell with all section anchors, nav, footer, WhatsApp FAB
- `assets/css/main.css` — design tokens (all CSS custom properties), reset, skip link, focus-visible, reduced-motion
- `assets/css/layout.css` — `.container` (max 1280px), grid utilities, flex utilities, section wrappers, section-header component
- `assets/css/components.css` — 5 button variants + 2 size modifiers, 3 badge variants, 3 card types, full form component set
- `assets/css/sections.css` — nav (transparent/scrolled states, hamburger animation), hero, footer, WhatsApp FAB, keyframe animations
- `assets/css/responsive.css` — ≤768px tablet, ≤480px mobile, ≥1536px large desktop breakpoints
- `assets/js/main.js` — ES module entry point
- `assets/js/navigation.js` — sticky nav, mobile hamburger (X animation), scroll spy, smooth scroll, FAB visibility toggle
- `robots.txt` — crawl rules with sitemap pointer
- `sitemap.xml` — 3 URLs (index, gallery, privacy) with [DOMAIN] placeholders
- `data/content.json` — all placeholder text in structured JSON (hall details, hero, about, events, testimonials)
- All image sub-folders created under `assets/images/`

**Exit Criteria Met**: Sticky navigation works, transparent over hero → solid on scroll, mobile hamburger opens/closes with X animation, footer renders at all breakpoints.

---

### Phase 1 — Hero & Above-the-Fold ✅ COMPLETE

**Objective**: First impression. Full-viewport hero with headline, CTAs, trust badges.

**Files Modified**:
- `index.html` — hero section markup added
- `assets/css/sections.css` — hero styles + nav + footer + FAB + animations
- `assets/css/responsive.css` — hero responsive rules

**Implemented**:
- Full-viewport hero (`min-height: 100vh`) with two-layer CSS gradient backdrop (warm gold/brown tones — placeholder until real photo)
- Label badge (`badge--light`) at top of hero
- H1 headline split across two lines; second line in champagne accent colour (`#F5E6C8`)
- Decorative gold rule rendered via `::after` on the headline
- Subheadline (`var(--text-xl)`, 86% white opacity)
- Two CTAs: `btn--primary btn--lg` (Enquire Now) + `btn--secondary-outline btn--lg` (View Gallery)
- Three trust badges with inline SVG icons (people, map pin, star polygon) — capacity, location, event types
- Staggered `fadeInUp`/`fadeInDown` animations (0.1s → 0.68s delays) on all hero elements
- Scroll indicator (animated line + "SCROLL" label) at bottom of hero
- Nav transparent over hero, transitions to frosted glass on scroll (>60px)
- WhatsApp FAB appears at 300px scroll threshold with `translateY` entrance animation

**Exit Criteria Met**: Hero fills viewport, CTAs scroll to correct anchors, renders cleanly at 480px / 768px / 1280px / 1536px.

---

### Phase 2 — About, Amenities & Events ✅ COMPLETE

**Objective**: Inform and qualify visitors. Communicate identity, specs, versatility.

**Files Modified**:
- `index.html` — About, Amenities, CTA strip, Events sections added
- `assets/css/sections.css` — Phase 2 styles added
- `assets/css/responsive.css` — Phase 2 responsive rules added

**Implemented**:
- About: Stats strip above a two-column grid — image column (left) + text column (right). Stats: 150–200 capacity / 1 guest room / `—` years (`.about-stats__value--placeholder`). Image column has CSS-gradient placeholder (`.about-image__inner`) ready for real photo via `background-image: url()`. Text column: eyebrow ornament (✦) + label pill, `h2`, gold rule (`.about-content__rule`), 2 paragraphs, 4-item feature list (`.about-features`), "Plan Your Event" CTA button.
- Amenities: 10-card auto-fit grid (`repeat(auto-fit, minmax(210px, 1fr))`). Items 1–2 confirmed; 3–10 assumed. All independently removable. Parking notice (`.parking-notice`) below grid — info-box style with gold left border.
- CTA Strip: Dark warm-gradient strip (`#1A0F05 → #7A5010`) between Amenities and Events — eyebrow, `h2` title, subtitle, gold CTA button.
- Events: 5 cards using 6-column CSS grid for centred 3+2 layout. Each card: unique gradient bg (weddings=gold, receptions=rose, naming=green, birthday=purple, corporate=navy), SVG icon, badge, `h3`, description, ghost "Enquire Now" button. Empty `<img>` ready for real photos.

**Exit Criteria Met**: Amenity cards addable/removable. Parking notice visible. Events grid collapses to 2-col (tablet), 1-col (mobile).

---

### Phase 3 — Gallery ✅ COMPLETE

**Objective**: Visual proof. Filterable gallery grid with lightbox.

**Files Created/Modified**:
- `index.html` — gallery section (12 items, filter bar, "View Full Gallery" CTA, lightbox modal)
- `gallery.html` — full gallery page (page hero banner, filter bar, all 12 items, lightbox, footer, WhatsApp FAB)
- `assets/css/sections.css` — gallery grid/filter/item/overlay styles, 12 gradient placeholder classes, 12 matching lightbox gradient classes, lightbox modal styles, page-hero styles
- `assets/js/gallery.js` — filter (fade transition), lightbox open/close/navigate, Escape/ArrowLeft/ArrowRight keyboard nav, backdrop click close, gradient class mirroring from item to lightbox
- `assets/css/responsive.css` — gallery: 4-col desktop → 2-col tablet → 1-col mobile; lightbox: nav hidden on mobile; page-hero title scaling
- `assets/js/main.js` — added `import { initGallery }` and `initGallery()` call

**Implemented**:
- 4-column uniform grid, height 240px (280px on ≥1536px, 200px on mobile)
- 7 filter buttons (All + 6 categories) with `aria-pressed` and gold active state; grid fades out/in over 200ms on filter change
- 12 gallery tiles — each a `<button>` with: category gradient placeholder, category label (hides on hover), expand-icon overlay, `loading="lazy"` img (hidden when `src=""`)
- Hover: tile scales to 1.025, placeholder scales 1.07, expand icon fades in, category label fades out
- Lightbox: gradient mirrors clicked tile's category, prev/next buttons (disabled at ends), Escape closes, backdrop click closes, `aria-modal`, focus returns to trigger on close, body scroll locked while open, 0.25s scale+opacity entrance animation
- gallery.html: standalone page with dark page-hero, back-to-home link, full gallery, footer, WhatsApp FAB, lightbox

**Exit Criteria Met**: Filter tabs switch categories with fade, lightbox navigable via keyboard and click, Escape closes lightbox, gallery tiles lazy-load, gallery.html is a complete standalone page.

---

### Phase 4 — Testimonials ✅ COMPLETE

**Objective**: Social proof. Reduce decision anxiety.

**Files Modified**:
- `index.html` — testimonials section added (3 cards + CTA)
- `assets/css/sections.css` — card--testimonial, stars, quote, author, section decoration
- `assets/css/responsive.css` — 3-col → 1-col at ≤768px; CTA full-width at ≤480px

**Implemented**:
- `section--dark` background with subtle radial-gradient warm-glow decoration (::before)
- 3-column CSS grid on desktop; collapses to 1-column on tablet/mobile
- Each card: semi-transparent dark surface, gold `border-top: 3px`, hover lifts with `translateY(-4px)` + box-shadow
- Stars: 5× inline SVG filled with `var(--color-primary-light)` gold; `aria-label="5 out of 5 stars"` on the container
- Quote: `::before` pseudo-element injects decorative `\201C` (curly open-quote) in Cormorant Garamond at 3.5rem, semi-opaque gold
- Author block: name in Cormorant Garamond champagne (`var(--color-accent)`); meta (event type + date) in faded white
- CTA "Book Your Event" → `#contact`, centered below track
- All placeholder testimonials sourced from `data/content.json` (Ramesh & Lakshmi K. / Suresh Nataraj / Priya & Karthik M.)

**Exit Criteria Met**: 3 testimonials display with gold stars, curly-quote mark, champagne author names; hover lift works; 1-column on mobile; "Book Your Event" CTA scrolls to #contact.

---

### Phase 5 — FAQ & Contact ✅ COMPLETE

**Objective**: Objection handling + primary conversion endpoint.

**Files Modified/Created**:
- `index.html` — FAQ section (8 accordion items) + Contact section (2-col layout)
- `assets/css/sections.css` — FAQ + contact styles appended
- `assets/js/faq.js` — created: accordion expand/collapse, Escape to close, one-open-at-a-time
- `assets/js/form.js` — created: 4-rule inline validation, blur + live re-check, success state
- `assets/js/main.js` — updated: imports + calls initFAQ() and initForm()
- `assets/css/responsive.css` — Phase 5 responsive rules appended (tablet + mobile + large desktop)

**Implemented**:
- FAQ: 8 accordion items in `.faq-list` (max-width 780px centred). Each `.faq__item` has a `<button aria-expanded>` trigger and a `.faq__answer` panel animated via CSS `grid-template-rows: 0fr → 1fr` (smooth height with no JS resize measurement). Chevron icon rotates 180° and inverts colour when open. Only one item open at a time. Keyboard: Escape collapses the focused item.
- Contact: two-column grid (1fr : 1.45fr). Left = `contact-info` (phone/WhatsApp/email/address items each with icon-label-value pattern + map placeholder div). Right = `contact-form-wrap` white card with box-shadow. Form has 6 fields (name, phone, email, event-type select, preferred-date, message). 3 required fields with inline validators in form.js. Submit shows `#form-success` div (green checkmark, thank-you copy) and hides the form.
- Map placeholder: styled champagne-gradient box ready to swap for Google Maps `<iframe>` (see Phase 12 — Adding Google Maps guide).

**Design decisions**:
- CSS `grid-template-rows` animation chosen over `max-height` trick — no easing overshoot on collapse, no need to measure natural height with JS.
- `aria-expanded` on button + `role="region"` + `aria-labelledby` on answer panel — standard accordion ARIA pattern.
- Form uses `novalidate` to suppress browser native UI and show custom styled errors instead.
- `form.elements[name]` lookup used in form.js to avoid tight coupling to IDs.

**Exit Criteria Met**: FAQ accordion opens/closes with click and Escape key; aria-expanded toggles correctly. Form validates name/phone/email/event-type; inline errors appear on blur, clear on fix; success panel shown after valid submit.

---

### Phase 6 — SEO, Accessibility & Performance Audit

**Objective**: Production hardening pass.

**Files to Create/Modify**:
- `index.html` — meta tags, JSON-LD, schema
- `robots.txt` — finalised
- `sitemap.xml` — finalised
- `404.html` — created
- `privacy.html` — created
- All HTML — alt text audit
- All CSS — contrast audit
- All JS — keyboard nav audit

**Exit Criteria**: Lighthouse ≥ 90. No contrast failures. All interactive elements keyboard-reachable. JSON-LD validates.

---

### Phase 7 — Final Polish & Documentation

**Objective**: Scroll animations, cross-browser check, documentation complete.

**Files to Modify**:
- All CSS — scroll reveal animation via `data-animate` + IntersectionObserver
- `assets/js/main.js` — animation init
- `PROJECT.md` — final update with all decisions

**Exit Criteria**: Animations smooth, no layout shifts, no console errors. Documentation updated and ready for handover.

---

## 10. Phase Progress Tracker

| Phase | Name                          | Status      | Session Completed | Notes |
|-------|-------------------------------|-------------|-------------------|-------|
| 0     | Foundation & Infrastructure   | ✅ Complete | 2026-06-05        | All CSS, JS, robots.txt, sitemap.xml, folder structure created |
| 1     | Hero & Above-the-Fold         | ✅ Complete | 2026-06-05        | Full-viewport hero, CTAs, trust badges, sticky nav, footer, WhatsApp FAB |
| 2     | About, Amenities & Events     | ✅ Complete | 2026-06-05        | About (2-col layout, stats, gradient placeholder), Amenities (10 cards + parking notice), CTA strip (dark gradient), Events (5 cards, centred 3+2 grid, unique gradients) |
| 3     | Gallery                       | ✅ Complete | 2026-06-05        | 12 gradient-placeholder tiles (2×6 categories), filter bar, lightbox (keyboard+Escape+backdrop), gallery.html page, gallery.js ES module, responsive (4→2→1 col) |
| 4     | Testimonials                  | ✅ Complete | 2026-06-05        | 3 testimonial cards (dark section, gold stars, curly-quote ::before, champagne author name), CTA "Book Your Event", responsive 3-col → 1-col |
| 5     | FAQ & Contact                 | ✅ Complete | 2026-06-05        | 8-question accordion FAQ (grid-row animation, keyboard Escape, aria-expanded), Contact (2-col: details+map placeholder left, form card right), 6-field form with inline validation, success state |
| 6     | SEO, Performance & A11y       | ⬜ Pending  | —                 |       |
| 7     | Final Polish & Docs           | ⬜ Pending  | —                 |       |

**Status Key**: ⬜ Pending | 🔄 In Progress | ✅ Complete | 🔁 Needs Revision

---

## 11. Placeholder Replacement Guide

When real content is available, search for `[PLACEHOLDER]` in all files and replace:

| Placeholder                   | File(s)                          | Replace With                    |
|-------------------------------|----------------------------------|---------------------------------|
| [PLACEHOLDER — phone]         | index.html, footer, contact      | Real phone number               |
| [PLACEHOLDER — whatsapp]      | index.html, wa.me link, FAB      | Real WhatsApp number            |
| [PLACEHOLDER — email]         | index.html, footer, contact      | Real email address              |
| [PLACEHOLDER — address]       | index.html, footer, schema       | Full address                    |
| [PLACEHOLDER — maps-url]      | index.html contact section       | Google Maps embed URL           |
| [PLACEHOLDER — instagram]     | footer social links              | Instagram profile URL           |
| [PLACEHOLDER — facebook]      | footer social links              | Facebook page URL               |
| [PLACEHOLDER — domain]        | canonical, OG, schema URLs       | Actual deployed domain          |
| [PLACEHOLDER — hero image]    | assets/images/hero/              | Real hall exterior/interior     |
| About image (no src attr)     | index.html `.about-image__inner` | Add `background-image: url(assets/images/about/[photo].webp)` in CSS or inline style |
| [PLACEHOLDER — gallery imgs]  | assets/images/gallery/           | Real event photos — set `src` on each `.gallery-item__img` in index.html AND gallery.html |
| [PLACEHOLDER — logo]          | assets/images/logo/              | SVG logo file — swap `.nav__logo-text` span for `<img>` tag |
| [PLACEHOLDER — years]         | index.html about stats           | Years in operation (`.about-stats__value--placeholder`) |
| [PLACEHOLDER — catering]      | FAQ Q5 (Phase 5)                 | Catering policy text            |
| [PLACEHOLDER — decoration]    | FAQ Q6 (Phase 5)                 | Decoration policy text          |
| All testimonials               | index.html `#testimonials`       | Real reviews — replace quote, name, event, date in each `.card--testimonial` |

---

## 12. Future Expansion Guide

### Adding a New Amenity

In `index.html`, find the `#amenities` section and copy an amenity card block:
```html
<div class="card card--amenity">
  <div class="card__icon">
    <!-- Replace with appropriate SVG icon -->
  </div>
  <h3 class="card__title">New Amenity Name</h3>
  <p class="card__desc">Description of the amenity.</p>
</div>
```
No CSS changes needed — the grid auto-fills.

### Adding Gallery Photos (replacing gradient placeholders)

1. Add photos to `assets/images/gallery/[category]/` (`.webp` preferred, `.jpg` fallback)
2. In `index.html` **and** `gallery.html`, find the matching `.gallery-item` button and update the `<img>` src:
```html
<!-- Before (placeholder state) -->
<button class="gallery-item" data-category="interior"
        aria-label="AARNA Hall interior — spacious banquet hall view">
  <div class="gallery-item__placeholder gallery-item__placeholder--interior-1" aria-hidden="true"></div>
  ...
  <img class="gallery-item__img" src="" alt="AARNA Hall interior — spacious banquet hall view" loading="lazy">
</button>

<!-- After (real photo added — gradient placeholder auto-hides) -->
<button class="gallery-item" data-category="interior"
        aria-label="AARNA Hall interior — spacious banquet hall view">
  <div class="gallery-item__placeholder gallery-item__placeholder--interior-1" aria-hidden="true"></div>
  ...
  <img class="gallery-item__img"
       src="assets/images/gallery/interior/hall-view-1.webp"
       alt="AARNA Hall interior — spacious banquet hall view"
       loading="lazy">
</button>
```
The CSS rule `.gallery-item__img[src=""] { display: none; }` automatically hides the `<img>` when `src` is empty, revealing the gradient placeholder. Setting a real `src` shows the photo on top of the gradient.

### Adding More Gallery Items

Copy an existing `.gallery-item` block and add it to the `.gallery-grid` in both `index.html` and `gallery.html`:
```html
<button class="gallery-item" data-category="interior"
        aria-label="AARNA Hall interior — [describe the photo]">
  <div class="gallery-item__placeholder gallery-item__placeholder--interior-1" aria-hidden="true"></div>
  <span class="gallery-item__label" aria-hidden="true">Hall Interior</span>
  <div class="gallery-item__overlay" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
    </svg>
  </div>
  <img class="gallery-item__img" src="" alt="AARNA Hall interior — [describe the photo]" loading="lazy">
</button>
```
No CSS or JS changes needed — the filter and lightbox pick up new items automatically.

### Adding a New Gallery Category

1. Add a filter button in both gallery filter bars (index.html + gallery.html):
```html
<button class="gallery-filter" data-filter="newcategory" aria-pressed="false">New Category</button>
```
2. Add a CSS gradient class to `sections.css` for the placeholder tile:
```css
.gallery-item__placeholder--newcategory-1 { background: linear-gradient(135deg, #... 0%, #... 100%); }
.lightbox__grad--newcategory-1            { background: linear-gradient(135deg, #... 0%, #... 100%); }
```
3. Create folder: `assets/images/gallery/newcategory/`
4. Add items with `data-category="newcategory"` and matching placeholder class

### Adding Pricing Section

Add a new section `#pricing` after `#amenities` in `index.html`.
Create package cards using `.card card--package` class.
Add "Pricing" to navigation.

### Enabling WhatsApp Integration

Replace `[PLACEHOLDER-NUMBER]` in the WhatsApp FAB link:
```html
<a href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20booking%20AARNA%20Hall">
```
Format: `91` + 10-digit mobile number (no spaces or hyphens).

### Adding Google Maps

Replace the map placeholder `<div>` with:
```html
<iframe 
  src="[GOOGLE-MAPS-EMBED-URL]"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
  title="AARNA Hall location on Google Maps">
</iframe>
```

### Adding a Booking Form (Future)

The current contact form has `action="#"`. When a backend or form service is ready:
- **Formspree**: Change `action` to `https://formspree.io/f/[FORM-ID]`
- **Netlify Forms**: Add `netlify` attribute to `<form>`
- **Custom backend**: Update `form.js` to send via `fetch()` to API endpoint

---

## 13. Decisions Log

| Date       | Decision                                               | Reason                                                                       |
|------------|--------------------------------------------------------|------------------------------------------------------------------------------|
| 2026-06-05 | No CSS framework (no Bootstrap/Tailwind)               | Avoid bloat, full control, Lighthouse score targets                          |
| 2026-06-05 | No JS framework (Vanilla JS only)                      | Zero overhead, static site needs no reactivity                               |
| 2026-06-05 | Single-page architecture for index.html                | Maximise dwell time, anchor navigation, conversion funnel                    |
| 2026-06-05 | Gold/champagne colour palette                          | Premium feel for Chennai wedding market                                      |
| 2026-06-05 | Cormorant Garamond for display type                    | Luxury hospitality standard, elegant serif                                   |
| 2026-06-05 | Inter for body type                                    | High legibility at small sizes on mobile screens                             |
| 2026-06-05 | WhatsApp FAB as primary mobile CTA                     | WhatsApp is dominant communication channel in India                          |
| 2026-06-05 | Honest parking notice (not hidden)                     | Builds trust; users will discover it anyway                                  |
| 2026-06-05 | Separate gallery.html page shell                       | Homepage gallery = teaser; full gallery = conversion depth                   |
| 2026-06-05 | CSS-gradient placeholders for gallery                  | Visual structure without requiring real photos                               |
| 2026-06-05 | JSON-LD EventVenue schema type                         | More specific than LocalBusiness for a venue property                        |
| 2026-06-05 | Text logo (CSS typography) instead of image            | No SVG provided yet; text logo works for all phases; swap when logo arrives  |
| 2026-06-05 | Two-layer CSS gradient for hero backdrop               | Overlay gradient (opacity) + colour gradient; swap by prepending `url()` later |
| 2026-06-05 | Nav transparent-over-hero → solid-on-scroll pattern    | Premium venue UX standard; avoids blocking hero visuals at top of page       |
| 2026-06-05 | ES modules (`<script type="module">`) for JS           | Native browser modules; no bundler needed; `defer` is automatic              |
| 2026-06-05 | Staggered animation delays on hero (0.1s → 0.68s)     | Each element enters sequentially; avoids all-at-once flash                   |
| 2026-06-05 | WhatsApp FAB appears at 300px scroll threshold         | Hidden on hero (hero has its own CTAs); visible on content sections          |
| 2026-06-05 | data/content.json for all placeholder text             | Single file to swap when client provides real content                        |
| 2026-06-05 | `btn--secondary-outline` variant added                 | Hero needs white-border ghost button on dark background — no existing variant fit |
| 2026-06-05 | Gallery items as `<button>` elements (not `<div>`)     | Native keyboard activation (Enter/Space) without extra JS; better semantics than role=button |
| 2026-06-05 | Lightbox gradient mirrors clicked tile's gradient      | Continuity between tile and lightbox view; elegant when no real photo exists     |
| 2026-06-05 | Lightbox nav hidden on mobile (≤480px)                 | Arrow buttons too small on touch; Escape + swipe (future) is the mobile pattern  |
| 2026-06-05 | `img[src=""] { display: none }` for placeholder logic | Zero JS needed to toggle between gradient and real photo — pure CSS rule         |
| 2026-06-05 | `body.lightbox-open { overflow: hidden }` for scroll lock | Prevents background scroll while lightbox is open; removed on close             |
| 2026-06-05 | gallery.html starts with `.nav--scrolled` (not transparent) | Inner page has no hero; nav needs to be solid from the top                    |
| 2026-06-05 | Page-hero banner for gallery.html (not full 100vh hero) | Inner pages need compact header — full hero wastes viewport on a gallery page   |
| 2026-06-05 | Testimonials: static 3-col grid (no carousel) | All 3 cards readable on desktop; carousel JS adds complexity for just 3 items — not worth it |
| 2026-06-05 | Testimonials: `section--dark` with warm radial-glow decoration | Provides visual break between gallery and FAQ; reinforces premium dark aesthetic |
| 2026-06-05 | `card__quote::before` displays curly-quote as `display:block` above text | Keeps the decorative mark in flow without absolute-position overflow; clean and predictable across widths |
| 2026-06-05 | `card__name` uses Cormorant Garamond in champagne (`var(--color-accent)`) | Matches the luxury display-font pattern used in hero second-line and section labels |
| 2026-06-05 | FAQ accordion uses CSS `grid-template-rows: 0fr → 1fr` animation | Smoother than `max-height` trick — no easing overshoot on collapse; no JS height measurement needed |
| 2026-06-05 | FAQ one-open-at-a-time (not multi-open) | Reduces visual noise; users are answering one question at a time |
| 2026-06-05 | Contact form uses `novalidate` + custom JS validation | Native browser UI varies by browser/OS; custom errors match the design system |
| 2026-06-05 | Form success state hides the form and shows a separate `#form-success` div | Cleaner UX than inline banners; clearly communicates the form is done |
| 2026-06-05 | Contact grid: 1fr : 1.45fr column ratio | Form is the primary CTA — slightly wider column draws attention to it |

---

## 14. Known Issues & Blockers

| # | Issue                                  | Status      | Blocking Phase | Resolution                                                                     |
|---|----------------------------------------|-------------|----------------|--------------------------------------------------------------------------------|
| 1 | No real photos available yet           | Open        | —              | Gallery fully functional with gradient placeholders; set `img[src]` when ready |
| 2 | No logo file provided                  | ✅ Resolved  | —              | Text logo using Cormorant Garamond gold — swap SVG when received               |
| 3 | Phone/WhatsApp numbers not provided    | Open        | 5 (Contact)    | All links use `[PLACEHOLDER]` — grep `PLACEHOLDER-NUMBER` to replace           |
| 4 | Address not confirmed                  | Open        | 5, 6           | City-level "Chennai, Tamil Nadu" used throughout                               |
| 5 | Catering/decoration policy unknown     | Open        | 5 (FAQ)        | FAQ Q5 and Q6 use `[PLACEHOLDER]` — fill when client confirms                  |
| 6 | Domain not assigned                    | Open        | 6 (SEO)        | `[DOMAIN]` placeholder in canonical, OG, schema, sitemap, robots               |
| 7 | Real testimonials not provided         | Open        | 4 ✅ mitigated | 3 realistic placeholder reviews in content.json and index.html (Phases 4 done) |
| 8 | gallery.html shares identical markup   | By design   | —              | Static site — no templating; both files must be updated when gallery items change |
| 9 | gallery.html footer uses `<h2>` for footer headings; index.html uses `<h3>` | Open | 6 (A11y audit) | On index.html, h2 is reserved for section titles → footer subheads = h3. On gallery.html there are no h2 section titles so h2 is technically valid but inconsistent. Normalise in Phase 6. |

---

## 15. JavaScript Module Overview

| Module | Status | Entry Point | Exports | Key DOM Dependencies |
|--------|--------|-------------|---------|----------------------|
| `main.js` | ✅ Active | `<script type="module">` in each HTML page | — | Imports navigation.js + gallery.js + faq.js + form.js |
| `navigation.js` | ✅ Active (Phase 0) | imported by main.js | `initNavigation()` | `#nav`, `#nav-toggle`, `#nav-menu`, `.nav__link`, `.whatsapp-fab` |
| `gallery.js` | ✅ Active (Phase 3) | imported by main.js | `initGallery()` | `#gallery-grid`, `#lightbox`, `#lightbox-backdrop`, `#lightbox-close`, `#lightbox-prev`, `#lightbox-next`, `#lightbox-img`, `#lightbox-placeholder`, `#lightbox-caption`, `#lightbox-counter`, `.gallery-filter`, `.gallery-item` |
| `faq.js` | ✅ Active (Phase 5) | imported by main.js | `initFAQ()` | `#faq-list`, `.faq__item`, `.faq__question`, `.faq__answer` |
| `form.js` | ✅ Active (Phase 5) | imported by main.js | `initForm()` | `#enquiry-form`, `#form-success`, `.form-input`, `.form-select`, `.form-textarea`, `#error-*` spans |

**Pattern**: every module exports a single `init*()` function. `main.js` calls all inits after `DOMContentLoaded`. Each `init*()` returns early if its required root DOM element is absent — safe to load `main.js` unchanged on `gallery.html` (no `#enquiry-form`) or any future inner page.

---

*End of PROJECT.md — Update this file at the end of every development session.*
