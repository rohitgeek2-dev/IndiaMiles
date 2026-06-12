export type HomepageDestination = {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  description: string;
  href: string;
};

export type HomepageState = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  href: string;
};

export type HomepageCategory = {
  id: string;
  name: string;
  description: string;
  accent: string;
  href: string;
};

export type HomepageExperience = {
  id: string;
  title: string;
  location: string;
  tag: string;
  price: string;
  imageUrl: string;
  href: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl: string;
};

export type StatCounter = {
  id: string;
  value: string;
  label: string;
};

export const homepageDestinations: HomepageDestination[] = [
  {
    id: 'jaipur',
    name: 'Royal Jaipur Retreat',
    location: 'Rajasthan',
    category: 'Heritage & Palaces',
    rating: '4.9',
    reviews: '1.8k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1611449781731-7e3b4e859c62?auto=format&fit=crop&w=1200&q=80',
    description:
      'Experience the pink city with exclusive palace stays, royal cuisine, and timeless culture.',
    href: '/states/rajasthan',
  },
  {
    id: 'kerala',
    name: 'Kerala Backwater Odyssey',
    location: 'Kerala',
    category: 'Luxury Cruises',
    rating: '4.8',
    reviews: '1.3k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description:
      'Drift through serene canals, private houseboats, and signature Ayurvedic rituals.',
    href: '/states/kerala',
  },
  {
    id: 'goa',
    name: 'Goa Coastal Collection',
    location: 'Goa',
    category: 'Beach Escapes',
    rating: '4.7',
    reviews: '2.1k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    description:
      'Sunset beach villas, private cabanas, and premium coastal dining experiences.',
    href: '/states/goa',
  },
  {
    id: 'uttarakhand',
    name: 'Himalayan Luxe Escape',
    location: 'Uttarakhand',
    category: 'Hill Stations',
    rating: '4.9',
    reviews: '940 reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1526481280695-3e5a8d150a0e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Curated mountain lodges, sunrise treks, and serene forest hideaways.',
    href: '/states/uttarakhand',
  },
];

export const homepageStates: HomepageState[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Timeless palaces, desert luxury, and royal heritage journeys.',
    imageUrl:
      'https://images.unsplash.com/photo-1545060894-65f426ee6b6b?auto=format&fit=crop&w=1200&q=80',
    href: '/states/rajasthan',
  },
  {
    id: 'kerala-state',
    name: 'Kerala',
    description: 'Backwaters, spice-lined resorts, and lush tropical escapes.',
    imageUrl:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    href: '/states/kerala',
  },
  {
    id: 'goa-state',
    name: 'Goa',
    description: 'Sun-soaked beaches, luxury beach clubs, and vibrant coastal life.',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    href: '/states/goa',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    description: 'Pine forests, boutique hill resorts, and alpine wellness retreats.',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    href: '/states/himachal-pradesh',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description: 'Luxury city stays, coastal escapes, and cultural heritage tours.',
    imageUrl:
      'https://images.unsplash.com/photo-1529230971539-6c3f0a0a726a?auto=format&fit=crop&w=1200&q=80',
    href: '/states/maharashtra',
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    description: 'Spiritual temples, palace stays, and South India elegance.',
    imageUrl:
      'https://images.unsplash.com/photo-1513426155444-5f2fa587d1b9?auto=format&fit=crop&w=1200&q=80',
    href: '/states/tamil-nadu',
  },
];

export const homepageCategories: HomepageCategory[] = [
  {
    id: 'historical',
    name: 'Historical Places',
    description: 'Royal forts, palaces, and cultural monuments.',
    accent: 'from-amber-500 to-orange-300',
    href: '/categories/historical-places',
  },
  {
    id: 'temples',
    name: 'Temples',
    description: 'Sacred journeys and spiritual architecture.',
    accent: 'from-sky-500 to-cyan-400',
    href: '/categories/temples',
  },
  {
    id: 'beaches',
    name: 'Beaches',
    description: 'Premium coastal escapes and serene shorelines.',
    accent: 'from-cyan-500 to-blue-500',
    href: '/categories/beaches',
  },
  {
    id: 'hill-stations',
    name: 'Hill Stations',
    description: 'Mountain retreats with luxe mountain lodges.',
    accent: 'from-emerald-500 to-teal-500',
    href: '/categories/hill-stations',
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    description: 'Nature safaris and immersive jungle experiences.',
    accent: 'from-lime-500 to-emerald-500',
    href: '/categories/wildlife',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Thrilling climbs, river rafting, and active journeys.',
    accent: 'from-fuchsia-500 to-purple-500',
    href: '/categories/adventure',
  },
  {
    id: 'heritage',
    name: 'Heritage Sites',
    description: 'UNESCO wonders and storied cultural landmarks.',
    accent: 'from-rose-500 to-pink-500',
    href: '/categories/heritage-sites',
  },
  {
    id: 'culture',
    name: 'Cultural Experiences',
    description: 'Festivals, artisans, and curated local rituals.',
    accent: 'from-orange-500 to-amber-500',
    href: '/categories/cultural-experiences',
  },
];

export const homepageExperiences: HomepageExperience[] = [
  {
    id: 'sunrise-palace',
    title: 'Sunrise Palace Stay',
    location: 'Jaipur, Rajasthan',
    tag: 'Heritage Luxury',
    price: 'From ₹18,500 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1523861759679-b27018e1bf44?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/jaipur-palace',
  },
  {
    id: 'backwater-sanctuary',
    title: 'Backwater Sanctuary',
    location: 'Alleppey, Kerala',
    tag: 'Wellness Retreat',
    price: 'From ₹16,000 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/kerala-backwaters',
  },
  {
    id: 'mountain-luxe',
    title: 'Mountain Luxe Escape',
    location: 'Uttarakhand Hills',
    tag: 'Adventure & Calm',
    price: 'From ₹14,800 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/uttarakhand-lodge',
  },
];

export const homepageTestimonials: Testimonial[] = [
  {
    id: 'kavya',
    name: 'Kavya Sharma',
    role: 'Luxury Traveller',
    quote:
      'India Miles turned our long-awaited Rajasthan journey into a flawless luxury story. Every detail felt premium, personal, and unforgettable.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 'arjun',
    name: 'Arjun Mehta',
    role: 'Executive Planner',
    quote:
      'The curated experiences and seamless planning made our family trip an elevated discovery of India’s beauty.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 'mira',
    name: 'Mira Kapoor',
    role: 'Culture Explorer',
    quote:
      'From temple journeys to beachside luxury, the service felt modern and deeply rooted in Indian heritage.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1544001313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
  },
];

export const homepageStats: StatCounter[] = [
  { id: 'destinations', value: '520+', label: 'Destinations' },
  { id: 'states', value: '28', label: 'States & UTs' },
  { id: 'attractions', value: '1,200+', label: 'Attractions' },
  { id: 'travelers', value: '95k+', label: 'Travelers Served' },
];
