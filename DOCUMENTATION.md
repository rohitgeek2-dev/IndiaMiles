# India Miles — Project Documentation

## Overview

**India Miles** is a premium luxury travel discovery platform built with Next.js. It showcases curated destinations, luxury hotels, travel stories, festivals, itineraries, and experiences across India. The platform is designed with a world-class editorial aesthetic inspired by Aman Resorts, Four Seasons, Condé Nast Traveller, and National Geographic Travel.

---

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16.2.6 (Turbopack)                      |
| Language     | TypeScript                                      |
| Styling      | Tailwind CSS v4 + CSS variables                 |
| Animations   | Framer Motion                                   |
| Icons        | Lucide React                                    |
| Database     | PostgreSQL via Prisma ORM                       |
| UI Library   | Radix UI (Dialog, Slot) + shadcn/ui             |
| Forms        | react-hook-form + Zod                           |
| Package Mgr  | pnpm (workspace-based)                          |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint

# Format
pnpm format
```

The development server runs at `http://localhost:3000`.

---

## Project Structure

```
india-travel-explorer/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── globals.css               # Global styles + CSS variables
│   ├── (main)/                   # Main route group
│   │   ├── page.tsx              # Homepage (all sections)
│   │   ├── layout.tsx            # (main) group layout
│   │   ├── [stateSlug]/          # Dynamic state pages
│   │   ├── about/                # About page
│   │   ├── categories/           # Category listing
│   │   ├── contact/              # Contact page
│   │   ├── destinations/         # Destinations pages
│   │   ├── place/                # Individual place pages
│   │   ├── privacy/              # Privacy policy
│   │   ├── search/               # Search page
│   │   ├── states/               # States listing
│   │   └── terms/                # Terms & conditions
│   └── api/                      # API routes
│       ├── booking/              # Booking inquiries
│       ├── cities/               # City endpoints
│       ├── contact/              # Contact form
│       ├── discovery/            # Search, autocomplete, recommendations
│       └── states/               # State/city data
│
├── components/                   # React components
│   ├── common/                   # Shared components
│   │   ├── ImageMasonry.tsx
│   │   ├── LuxuryCard.tsx
│   │   ├── LuxuryImage.tsx
│   │   ├── Reveal.tsx            # Scroll reveal animations
│   │   ├── SectionDivider.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SectionLayout.tsx
│   │   ├── StoryFeatureCard.tsx  # Vertical editorial card
│   │   └── ...
│   ├── home/                     # Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── IndiaMapSection.tsx
│   │   ├── PopularDestinations.tsx
│   │   ├── TravelThemes.tsx
│   │   ├── PersonalizedRecs.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── StorytellingSection.tsx  # Editorial magazine layout
│   │   ├── BestTimeSection.tsx      # Month selector
│   │   ├── LuxuryHotelCollection.tsx
│   │   ├── CuratedItinerariesSection.tsx
│   │   ├── DreamJourney.tsx
│   │   ├── FestivalsSection.tsx
│   │   ├── ConciergeSection.tsx
│   │   ├── InspirationGallery.tsx
│   │   ├── LuxuryFinaleSection.tsx  # Grand finale (plan + subscribe)
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Site header / navigation
│   │   ├── Footer.tsx           # 3-section luxury footer
│   │   └── ThemeProvider.tsx
│   └── ui/                      # shadcn/ui primitives
│       ├── button.tsx
│       └── input.tsx
│
├── lib/                         # Shared utilities
│   ├── types.ts                 # Core TypeScript interfaces
│   ├── homepage-data.ts         # All homepage mock data + types
│   ├── utils.ts                 # Tailwind class merge utility
│   ├── prisma.ts                # Prisma client singleton
│   └── ...
│
├── prisma/                      # Database schema & seed
│   ├── schema.prisma            # Prisma data models
│   └── seed.ts                  # Database seed script
│
├── services/                    # Business logic layer
│   └── travel-service.ts
│
├── tailwind.config.js           # Tailwind theme configuration
├── next.config.ts               # Next.js configuration
├── package.json
└── tsconfig.json
```

---

## Homepage Sections (in order)

| #  | Component                        | Description                                            |
| -- | -------------------------------- | ------------------------------------------------------ |
| 1  | `HeroSection`                    | Premium brand introduction with cinematic hero         |
| 2  | `IndiaMapSection`                | Interactive India map with state exploration           |
| 3  | `PopularDestinations`            | Curated destination cards                              |
| 4  | `TravelThemes`                   | Ways to travel (Luxury, Heritage, Wildlife, etc.)      |
| 5  | `PersonalizedRecs`               | "Recommended for You" + "Trending This Month"          |
| 6  | `SocialProofSection`             | Testimonials, reviews, rating distribution             |
| 7  | `StorytellingSection`            | Editorial magazine layout (featured 50% + 2 cards)     |
| 8  | `BestTimeSection`                | Month selector with seasonal destination data          |
| 9  | `LuxuryHotelCollection`         | Featured hotel hero + 2 secondary cards                |
| 10 | `CuratedItinerariesSection`      | Multi-day itinerary showcases                          |
| 11 | `DreamJourney`                   | Multi-step trip builder                                |
| 12 | `FestivalsSection`               | Festival & events carousel                             |
| 13 | `ConciergeSection`               | Concierge assistance CTA                               |
| 14 | `InspirationGallery`             | Travel inspiration image grid                          |
| 15 | `LuxuryFinaleSection`            | Unified "Plan" + "Subscribe" conversion section        |

---

## Design System

### Colors

| Token         | Hex       | Usage                    |
| ------------- | --------- | ------------------------ |
| `gold`        | `#C9A94E` | Primary accent           |
| `gold-light`  | `#D4B45A` | Lighter gold             |
| `gold-dark`   | `#A88A3A` | Darker gold              |
| `teal`        | `#208B7E` | Secondary accent         |
| `cream`       | `#FAF8F4` | Luxury section bg        |
| `sand`        | `#F5F1E8` | Alternative warm bg      |
| `#111827`     | —         | Primary text             |
| `#4B5563`     | —         | Secondary text           |
| `#6B7280`     | —         | Muted text               |
| `#EAC587`     | —         | Gold accent (editorial)  |
| `#F8FAFC`     | —         | Section background       |

### Shadows

```js
shadow-card:      "0 2px 12px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)"
shadow-card-hover:"0 8px 30px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)"
shadow-luxury:    "0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)"
shadow-luxury-lg: "0 10px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)"
shadow-luxury-xl: "0 20px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)"
```

### Typography

```js
display-lg:  ["5rem",    { lineHeight: "1.05", letterSpacing: "-0.03em" }]
display:     ["4rem",    { lineHeight: "1.05", letterSpacing: "-0.03em" }]
heading-1:   ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }]
heading-2:   ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.02em" }]
heading-3:   ["2.5rem",  { lineHeight: "1.2",  letterSpacing: "-0.015em"}]
heading-4:   ["2rem",    { lineHeight: "1.25", letterSpacing: "-0.01em" }]
```

### Spacing

```js
section:    "6rem"
section-lg: "8rem"
section-xl: "10rem"
```

---

## Key Components

### StoryFeatureCard (`components/common/StoryFeatureCard.tsx`)

Vertical editorial card used in the storytelling section:

- Image top (h-44 to h-48) with hover zoom (`scale-105`)
- Gold accent bar at top of image
- Content bottom with metadata (uppercase 11px tracking), serif title, excerpt, gold CTA
- Card lift (`-translate-y-[3px]`) + shadow increase on hover
- 24px border radius, white background, `shadow-card`

### StorytellingSection (`components/home/StorytellingSection.tsx`)

Editorial magazine layout — 3 stories in a 3-column grid:

| Featured (50%) | Story 2 (25%) | Story 3 (25%) |
| -------------- | ------------- | ------------- |

- Featured story: full-bleed image with dark gradient overlay, white editorial text, large serif headline (42px)
- Secondary stories: rendered via `StoryFeatureCard` with vertical stack

### BestTimeSection (`components/home/BestTimeSection.tsx`)

Month selector with active state:

- **Active**: Gold gradient (`#EAC587` → `#D4AF6A`), dark text, golden glow shadow
- **Inactive**: White, hover lift + gold border transition
- Horizontal scroll on mobile, pill-shaped buttons

### LuxuryHotelCollection (`components/home/LuxuryHotelCollection.tsx`)

Two-tier hotel showcase:

- **Featured**: Full-width hero, panoramic image 560px, dark overlay, hotel name at 42px serif, rating badge with glassmorphism, gold CTA
- **Secondary**: 2-column vertical card grid, image top (h-64), content below with rating, price, location

### LuxuryFinaleSection (`components/home/LuxuryFinaleSection.tsx`)

Unified conversion section replacing separate newsletter + CTA:

- Cream background (`#FAF8F4`)
- Central header: "Your extraordinary India journey starts here"
- Two side-by-side cards: left = "Start Planning" (with primary + secondary buttons), right = "Stay Inspired" (email subscribe form)
- Gold gradient buttons, `shadow-card`, 24px radius

### Footer (`components/layout/Footer.tsx`)

Three-section luxury brand footer:

1. **Stay Inspired banner** — Cream background, 72px editorial headline, email subscribe
2. **Main footer** — 5-column grid: Brand + trust badges | Quick Links | Popular States | Travel Categories | Connect + 24/7 Concierge card
3. **Bottom bar** — Dark navy (`#071321`), copyright + privacy/terms/contact links that hover gold

---

## Data Models

### `lib/homepage-data.ts`

Contains all mock data with TypeScript types:

| Type               | Description                    |
| ------------------ | ------------------------------ |
| `HomepageDestination` | Destination cards               |
| `HomepageState`       | State cards                     |
| `TravelTheme`         | Travel category themes          |
| `Recommendation`      | Personalized/trending recs      |
| `Testimonial`         | User testimonials               |
| `JournalStory`        | Editorial stories               |
| `HotelListing`        | Hotel cards                     |
| `Festival`            | Festival/event entries          |
| `FloatingDestination` | Hero section floating badges    |

### `prisma/schema.prisma`

Database models for production data:

- `State`, `Category`, `Destination`
- `BookingInquiry`, `ContactMessage`
- `SeoMetadata`

---

## API Routes

| Route                        | Method | Description                  |
| ---------------------------- | ------ | ---------------------------- |
| `/api/states`                | GET    | List all states              |
| `/api/states/[slug]/cities`  | GET    | Cities in a state            |
| `/api/cities/[slug]/places`  | GET    | Places in a city             |
| `/api/discovery/top`         | GET    | Top destinations             |
| `/api/discovery/trending`    | GET    | Trending destinations        |
| `/api/discovery/autocomplete`| GET    | Search autocomplete          |
| `/api/discovery/recommendations/[slug]` | GET | Place recommendations |
| `/api/booking`               | POST   | Submit booking inquiry       |
| `/api/contact`               | POST   | Submit contact form          |

---

## Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Generate Prisma client + build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm format     # Format with Prettier
pnpm db:seed    # Seed the database
```

---

## Key Conventions

- All homepage sections are individual components in `components/home/`
- Shared UI components live in `components/common/`
- Layout components (Header, Footer) are in `components/layout/`
- All data types are defined in `lib/homepage-data.ts`
- Tailwind class merging utility: `lib/utils.ts` (via `tailwind-merge` + `clsx`)
- CSS variables for theming are defined in `app/globals.css`
- The `tailwind.config.js` extends the base Tailwind theme with custom colors, shadows, font sizes, and spacing

---

## Recent Redesigns

The following sections were redesigned for a luxury editorial aesthetic:

1. **StorytellingSection** → 3-column magazine spread (50/25/25)
2. **BestTimeSection** → Gold gradient active month pills
3. **LuxuryHotelCollection** → Full-width hero + 2-card grid
4. **LuxuryFinaleSection** → Unified plan + subscribe conversion (replaced separate NewsletterSection + CallToActionBanner)
5. **Footer** → 3-section luxury brand experience with newsletter banner, 5-column grid, dark bottom bar
6. **StoryFeatureCard** → Vertical editorial card with image zoom + lift hover