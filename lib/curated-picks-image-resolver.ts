import type { HomepageDestination, Recommendation } from '@/lib/homepage-data';

export type CuratedPicksImageInput = {
  id?: string;
  title?: string;
  location?: string;
  imageUrl?: string | null;
  href?: string;
};

type ImageResolution = {
  src: string;
  alt: string;
  source: 'cms' | 'destination-fallback' | 'state-fallback' | 'none';
};

const EMPTY_SRC = '';

// Destination-specific fallbacks tuned for correctness.
// NOTE: These are strict by destination/location identity; never random.
const destinationFallbacks: Record<
  string,
  { src: string; alt: string }
> = {
  // Mysore Palace & Coorg Luxury
  'mysore-coorg': {
    src: 'https://images.unsplash.com/photo-1560518883-ce090ffs.jpg?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mysore Palace and Coorg hills with lush greenery',
  },
  'mysore palace & coorg luxury': {
    src: 'https://images.unsplash.com/photo-1560518883-ce090ffs.jpg?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mysore Palace and Coorg hills with lush greenery',
  },

  // Andaman Island Retreat
  'andaman': {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    alt: 'Radhanagar Beach on the Andaman Islands',
  },
  'andaman & nicobar': {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    alt: 'Radhanagar Beach on the Andaman Islands',
  },

  // Leh–Ladakh Overland Expedition
  'leh-ladakh': {
    src: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pangong Lake and Himalayan landscapes of Ladakh',
  },
  'ladakh': {
    src: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pangong Lake and Himalayan landscapes of Ladakh',
  },

  // Rishikesh Wellness Sanctuary
  'rishikesh': {
    src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ganga River and yoga retreat atmosphere in Rishikesh',
  },
  'uttarakhand': {
    src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ganga River and Himalayan foothills of Uttarakhand',
  },
};

// State fallbacks keyed by state/location string.
// Used only if destination-level resolution fails.
const stateFallbacks: Record<string, { src: string; alt: string }> = {
  Karnataka: {
    src: destinationFallbacks['mysore-coorg'].src,
    alt: 'Mysore Palace and Coorg hills with lush greenery',
  },
  'Andaman & Nicobar': {
    src: destinationFallbacks['andaman'].src,
    alt: 'Radhanagar Beach on the Andaman Islands',
  },
  Ladakh: {
    src: destinationFallbacks['ladakh'].src,
    alt: 'Pangong Lake and Himalayan landscapes of Ladakh',
  },
  Uttarakhand: {
    src: destinationFallbacks['uttarakhand'].src,
    alt: 'Ganga River and Himalayan foothills of Uttarakhand',
  },
};

function normalizeKey(input: string | undefined | null): string {
  return (input ?? '')
    .trim()
    .toLowerCase()
    .replace(/[’'“”]/g, '')
    .replace(/\s+/g, ' ');
}

function slugFromHref(href?: string): string | null {
  if (!href) return null;
  // expected like: /destinations/mysore-coorg
  const parts = href.split('/').filter(Boolean);
  const last = parts[parts.length - 1];
  return last || null;
}

function pickCmsImageForDestination(_input: CuratedPicksImageInput): string | null {
  // The codebase currently uses a mocked homepage-data.ts for curated picks.
  // This resolver supports CMS/destination-featured images when available.
  // Hook point for wiring real CMS data later.
  return null;
}

function getFallbackByDestination(input: CuratedPicksImageInput): ImageResolution | null {
  const keyFromHref = slugFromHref(input.href);
  if (keyFromHref && destinationFallbacks[keyFromHref]) {
    const f = destinationFallbacks[keyFromHref];
    return { src: f.src, alt: f.alt, source: 'destination-fallback' };
  }

  const titleKey = normalizeKey(input.title);
  if (titleKey && destinationFallbacks[titleKey]) {
    const f = destinationFallbacks[titleKey];
    return { src: f.src, alt: f.alt, source: 'destination-fallback' };
  }

  const locationKey = normalizeKey(input.location);
  if (locationKey && destinationFallbacks[locationKey]) {
    const f = destinationFallbacks[locationKey];
    return { src: f.src, alt: f.alt, source: 'destination-fallback' };
  }

  return null;
}

function getFallbackByState(input: CuratedPicksImageInput): ImageResolution | null {
  const location = (input.location ?? '').trim();
  if (!location) return null;
  const f = stateFallbacks[location];
  if (!f) return null;
  return { src: f.src, alt: f.alt, source: 'state-fallback' };
}

export function resolveCuratedPicksImage(item: CuratedPicksImageInput): {
  src: string;
  alt: string;
} {
  // 1) CMS featured image (when wired)
  const cmsSrc = pickCmsImageForDestination(item);
  if (cmsSrc) {
    const alt = item.title || item.location || 'Destination image';
    return { src: cmsSrc, alt };
  }

  // 2) Destination-specific fallback (strict)
  const destFallback = getFallbackByDestination(item);
  if (destFallback) {
    return { src: destFallback.src, alt: destFallback.alt };
  }

  // 3) State-specific fallback (still strict by state name)
  const stateFallback = getFallbackByState(item);
  if (stateFallback) {
    return { src: stateFallback.src, alt: stateFallback.alt };
  }

  // 4) Last resort: if an imageUrl exists in data, we refuse it for curated picks
  // to avoid unrelated images under any circumstances.
  // Returning empty src triggers the existing onError fallback UI.
  return { src: EMPTY_SRC, alt: item.title || item.location || 'Destination image' };
}

// Convenience types for future reuse
export function resolveRecommendationImage(rec: Recommendation) {
  return resolveCuratedPicksImage(rec);
}

export function resolveHomepageDestinationImage(dest: HomepageDestination) {
  return resolveCuratedPicksImage(dest as unknown as CuratedPicksImageInput);
}

