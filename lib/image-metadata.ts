/**
 * Image Metadata Strategy for India Miles
 *
 * Structured metadata for connecting to:
 * - Unsplash API
 * - Pexels API
 * - Cloudinary
 * - Sanity CMS
 * - Contentful
 *
 * Usage: Import these objects to generate image URLs dynamically
 * via your chosen CMS or image service provider.
 */

export type ImageMetadata = {
  title: string;
  imageQuery: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string;
};

/**
 * Hero & Hero-adjacent imagery
 */
export const heroImages: Record<string, ImageMetadata> = {
  heroPrimary: {
    title: 'Luxury Rajasthan Palace',
    imageQuery: 'Luxury palace Rajasthan India sunset golden hour',
    alt: 'Luxury palace hotel in Rajasthan during golden sunset with dramatic architecture',
    credit: 'Unsplash',
  },
  floatingUdaipur: {
    title: 'Udaipur Lake Palace',
    imageQuery: 'Udaipur Lake Palace Rajasthan luxury hotel',
    alt: 'Taj Lake Palace floating in Udaipur lake at dusk',
    credit: 'Unsplash',
  },
  floatingKerala: {
    title: 'Kerala Backwaters Houseboat',
    imageQuery: 'Luxury houseboat Kerala backwaters aerial view',
    alt: 'Traditional luxury houseboat sailing through Kerala backwaters',
    credit: 'Unsplash',
  },
  floatingGoa: {
    title: 'Goa Beach Resort',
    imageQuery: 'Luxury beach resort Goa palm trees sunset',
    alt: 'Premium beachfront resort in Goa with palm trees and sunset views',
    credit: 'Unsplash',
  },
};

/**
 * Destination & State imagery
 */
export const destinationImages: Record<string, ImageMetadata> = {
  rajasthan: {
    title: 'Rajasthan Heritage',
    imageQuery: 'Rajasthan palace desert luxury heritage India',
    alt: 'View of a majestic Rajasthani palace in the desert landscape',
  },
  kerala: {
    title: 'Kerala Backwaters',
    imageQuery: 'Kerala backwaters houseboat palm trees sunset',
    alt: 'Serene Kerala backwaters with traditional houseboats and palm trees',
  },
  goa: {
    title: 'Goa Beach',
    imageQuery: 'Goa beach luxury resort coastal India',
    alt: 'Luxurious beach resort on the coast of Goa',
  },
  himalayas: {
    title: 'Himalayan Mountain Retreat',
    imageQuery: 'Himalayan mountain luxury retreat snow peaks',
    alt: 'Premium mountain retreat with panoramic Himalayan snow-capped peaks',
  },
  ladakh: {
    title: 'Ladakh Landscape',
    imageQuery: 'Ladakh mountain landscape Buddhist monastery',
    alt: 'Breathtaking Ladakh landscape with ancient Buddhist monastery',
  },
  varanasi: {
    title: 'Sacred Varanasi Ghats',
    imageQuery: 'Varanasi Ghats Ganges river ceremony spiritual',
    alt: 'Ganga aarti ceremony at the sacred ghats of Varanasi',
  },
};

/**
 * Experience & Theme imagery
 */
export const experienceImages: Record<string, ImageMetadata> = {
  heritageTours: {
    title: 'Heritage Tour India',
    imageQuery: 'India UNESCO heritage site fort palace architecture',
    alt: 'Grand UNESCO World Heritage site showcasing Indian architecture',
  },
  wellnessRetreats: {
    title: 'Wellness Retreat India',
    imageQuery: 'Ayurveda wellness retreat Kerala spa yoga meditation',
    alt: 'Serene Ayurvedic wellness retreat in Kerala with yoga pavilion',
  },
  wildlifeSafaris: {
    title: 'Indian Wildlife Safari',
    imageQuery: 'Bengal tiger safari Ranthambore national park India',
    alt: 'Majestic Bengal tiger in its natural habitat during safari',
  },
  culinaryTrails: {
    title: 'Indian Culinary Experience',
    imageQuery: 'Indian gourmet cuisine fine dining royal thali',
    alt: 'Luxurious Indian gourmet dining experience with traditional thali',
  },
  adventure: {
    title: 'Adventure Travel India',
    imageQuery: 'Mountain trekking Himachal Pradesh adventure India',
    alt: 'Adventure trekking through the stunning mountains of Himachal Pradesh',
  },
};

/**
 * Hotel & Accommodation imagery
 */
export const hotelImages: Record<string, ImageMetadata> = {
  oberoiAmarvilas: {
    title: 'Oberoi Amarvilas Agra',
    imageQuery: 'Oberoi Amarvilas Agra Taj Mahal view luxury hotel',
    alt: 'Luxury suite at The Oberoi Amarvilas with Taj Mahal view',
    credit: 'Oberoi Hotels',
  },
  tajLakePalace: {
    title: 'Taj Lake Palace Udaipur',
    imageQuery: 'Taj Lake Palace Udaipur floating palace luxury',
    alt: 'Iconic Taj Lake Palace seemingly floating on Udaipur lake',
    credit: 'Taj Hotels',
  },
  wildflowerHall: {
    title: 'Wildflower Hall Shimla',
    imageQuery: 'Wildflower Hall Shimla Himalayan luxury resort',
    alt: 'Wildflower Hall luxury resort in Shimla with Himalayan vistas',
    credit: 'Oberoi Hotels',
  },
};

/**
 * Journey & Journal imagery
 */
export const journalImages: Record<string, ImageMetadata> = {
  goldenTriangle: {
    title: 'Rajasthan Golden Triangle',
    imageQuery: 'India golden triangle Jaipur Agra Delhi travel',
    alt: 'The iconic Golden Triangle circuit through Delhi, Agra, and Jaipur',
  },
  himalayanWellness: {
    title: 'Himalayan Wellness Pilgrimage',
    imageQuery: 'Himalayan wellness retreat meditation mountains',
    alt: 'Peaceful wellness retreat nestled in the Himalayan mountains',
  },
  keralaBackwaters: {
    title: 'Kerala Backwater Cruise',
    imageQuery: 'Kerala houseboat cruise backwater canal palm trees',
    alt: 'Luxurious houseboat cruising through Kerala backwater canals',
  },
};

/**
 * Festival imagery
 */
export const festivalImages: Record<string, ImageMetadata> = {
  diwali: {
    title: 'Diwali Festival of Lights',
    imageQuery: 'Diwali festival India diyas lamps celebration',
    alt: 'Beautiful Diwali celebration with traditional clay lamps and fireworks',
  },
  holi: {
    title: 'Holi Festival of Colors',
    imageQuery: 'Holi festival colors celebration Mathura India',
    alt: 'Vibrant Holi festival celebration with colorful powders',
  },
  pushkarFair: {
    title: 'Pushkar Camel Fair',
    imageQuery: 'Pushkar camel fair Rajasthan desert festival',
    alt: 'The famous Pushkar Camel Fair in the Rajasthan desert',
  },
};

/**
 * Utility to generate Unsplash URL from a query
 */
export function getUnsplashUrl(
  query: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
  }
): string {
  const { width = 1920, height = 1080, quality = 80 } = options ?? {};
  return `https://images.unsplash.com/photo-${query}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

/**
 * Utility to generate Pexels URL (placeholder structure)
 * Integrate with your Pexels API key at build/runtime
 */
export function getPexelsUrl(photoId: string): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb`;
}

/**
 * Utility to generate Cloudinary URL
 */
export function getCloudinaryUrl(
  publicId: string,
  transformations?: Record<string, string>
): string {
  const base = `https://res.cloudinary.com/your-cloud/image/upload`;
  const tx = transformations
    ? Object.entries(transformations)
        .map(([k, v]) => `${k}_${v}`)
        .join(',')
    : 'q_auto,f_auto';
  return `${base}/${tx}/${publicId}`;
}

/**
 * Utility for responsive image srcSet generation
 */
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = [640, 768, 1024, 1280, 1536, 1920]
): string {
  return widths.map((w) => `${baseUrl}&w=${w} ${w}w`).join(', ');
}