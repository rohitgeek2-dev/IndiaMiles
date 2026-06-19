# TODO — Luxury Homepage Redesign (IndiaMiles)

## Phase 0 — Audit (no code changes)
- [ ] Review **all homepage sections** rendered in `app/(main)/page.tsx`.
- [ ] Identify repeated layout patterns (containers, headings, image overlays, gradients, hover cards).
- [ ] Identify responsiveness gaps vs requirements (mobile-first, no horizontal scrolling, typography scaling, luxury feel on mobile).
- [ ] Verify which sections use non-compliant horizontal scroll behavior.
- [ ] **Preserve `IndiaMapSection` exactly as-is**.

## Phase 1 — Create foundation design-system primitives
Create reusable components (Tailwind-first, minimal custom CSS):
- [ ] `components/common/SectionLayout.tsx`
- [ ] `components/common/SectionHeading.tsx`
- [ ] `components/common/Reveal.tsx` (Framer Motion + reduced-motion handling)
- [ ] `components/common/LuxuryImage.tsx` (next/image with consistent cinematic treatment)
- [ ] `components/common/StoryFeatureCard.tsx`

Additional primitives (recommended, but can be added incrementally):
- [ ] `components/common/EditorialSplitSection.tsx`
- [ ] `components/common/LuxuryQuoteBlock.tsx`
- [ ] `components/common/ConciergeFeature.tsx`
- [ ] `components/common/DestinationShowcase.tsx`
- [ ] `components/common/ExperienceTimeline.tsx`
- [ ] `components/common/LuxuryCTA.tsx`
- [ ] `components/common/ImageMasonry.tsx`
- [ ] `components/common/HotelShowcaseCard.tsx`

## Phase 2 — Motion system implementation
- [ ] Define site-wide motion presets (fade-up reveal, gentle opacity transitions, 400–900ms, ease-out curves).
- [ ] Ensure no bouncing/spring-heavy/aggressive scaling.
- [ ] Ensure scroll-triggered animations use `viewport={{ once: true }}` and are subtle.
- [ ] Add reduced-motion support to `Reveal`.

## Phase 3 — Section redesign refactor (storytelling > grids)
Refactor each section to use the primitives and distinct compositions:
- [ ] Hero: ensure typography + image treatment + premium motion language; keep dark luxury feel.
- [ ] Popular Destinations: convert card-like grids into editorial storytelling blocks.
- [ ] Travel Themes: make composition distinctive (avoid repetitive card visuals).
- [ ] Personalized Recommendations: ensure luxury personalization feel (no utilitarian grid).
- [ ] Social Proof / testimonials: use `LuxuryQuoteBlock` and editorial layout.
- [ ] Stories from the Road: rework to use `StoryFeatureCard` + mobile editorial reflow.
- [ ] Best Time To Visit Every Destination:
  - [ ] Redesign to preserve **premium interactive destination explorer**.
  - [ ] Desktop: luxury horizontal season/month navigation (imagery + editorial copy).
  - [ ] Mobile: usability-first approach (Tabs acceptable if needed).
  - [ ] Ensure no horizontal page scrolling and no horizontal overflow issues.
- [ ] Hotel Collection: preserve editorial hospitality design; avoid booking grid.
- [ ] Curated Itineraries / Dream Journey: convert into journey-focused vertical storytelling.
- [ ] Festivals / India cultural heartbeat: full-width immersive experiences.
- [ ] Concierge service: implement `ConciergeFeature` / timeline style.
- [ ] Inspiration gallery: coffee-table-book aesthetic (use `ImageMasonry` / editorial gallery).
- [ ] Newsletter CTA: exclusive membership invitation tone via `LuxuryCTA`.
- [ ] Final CTA banner: luxury, subtle motion, mobile-friendly.

## Phase 4 — Image performance pass
- [ ] Replace all raw `<img>` in redesigned sections with `LuxuryImage`.
- [ ] Ensure `loading="lazy"` for below-the-fold.
- [ ] Add appropriate `sizes` for responsive images.
- [ ] Verify no layout shift from images.

## Phase 5 — Responsiveness + overflow validation
- [ ] Confirm: no horizontal scrolling anywhere (no `overflow-x-auto` unless strictly contained).
- [ ] Validate typography scaling across 320px / 768px / 1440px.
- [ ] Validate cards stack gracefully and spacing is consistent.
- [ ] Validate luxury feel on mobile (edge-to-edge imagery, refined spacing).

## Phase 6 — Final verification
- [ ] Run `pnpm lint` and `pnpm build`.
- [ ] Manual test navigation + key interactive sections.
- [ ] (Optional) run Lighthouse and target strong scores.

