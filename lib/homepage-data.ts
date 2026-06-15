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
  bestSeason: string;
  duration: string;
  startingPrice: string;
  tags: string[];
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
  icon: string;
  color: string;
};

export type HomepageExperience = {
  id: string;
  title: string;
  location: string;
  tag: string;
  price: string;
  imageUrl: string;
  href: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  isVerified: boolean;
  videoUrl?: string;
};

export type StatCounter = {
  id: string;
  value: string;
  label: string;
};

export type TravelTheme = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  imageUrl: string;
  href: string;
};

export type Recommendation = {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  price: string;
  rating: string;
  href: string;
  reason: string;
};

export type FloatingDestination = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  position: string;
};

export type Festival = {
  id: string;
  name: string;
  location: string;
  month: string;
  imageUrl: string;
  description: string;
};

export type HotelListing = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  price: string;
  rating: string;
  href: string;
};

export type JournalStory = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  date: string;
  href: string;
};

export const popularSearchChips = [
  { label: 'Rajasthan', href: '/states/rajasthan' },
  { label: 'Kerala', href: '/states/kerala' },
  { label: 'Goa', href: '/states/goa' },
  { label: 'Himalayas', href: '/categories/hill-stations' },
  { label: 'Luxury Trains', href: '/categories/heritage-sites' },
];

export const trustIndicators = [
  { value: '95K+', label: 'Travelers' },
  { value: '1,200+', label: 'Curated Experiences' },
  { value: '4.9', label: 'Average Rating' },
];

export const floatingDestinations: FloatingDestination[] = [
  {
    id: 'udaipur',
    name: 'Udaipur',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80',
    price: '₹18,500/night',
    position: 'top-[15%] right-[8%]',
  },
  {
    id: 'kerala-float',
    name: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80',
    price: '₹16,000/night',
    position: 'top-[45%] left-[5%]',
  },
  {
    id: 'goa-float',
    name: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    price: '₹12,500/night',
    position: 'top-[70%] right-[12%]',
  },
];

export const homepageDestinations: HomepageDestination[] = [
  {
    id: 'jaipur',
    name: 'Royal Jaipur Retreat',
    location: 'Rajasthan',
    category: 'Heritage & Palaces',
    rating: '4.9',
    reviews: '1.8k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    description:
      'Experience the pink city with exclusive palace stays, royal cuisine, and timeless culture.',
    href: '/states/rajasthan',
    bestSeason: 'Oct-Mar',
    duration: '5-7 Days',
    startingPrice: '₹45,000',
    tags: ['Palace Stay', 'Royal Cuisine', 'Heritage Walk'],
  },
  {
    id: 'kerala',
    name: 'Kerala Backwater Odyssey',
    location: 'Kerala',
    category: 'Luxury Cruises',
    rating: '4.8',
    reviews: '1.3k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    description:
      'Drift through serene canals, private houseboats, and signature Ayurvedic rituals.',
    href: '/states/kerala',
    bestSeason: 'Sep-Mar',
    duration: '6-8 Days',
    startingPrice: '₹52,000',
    tags: ['Houseboat', 'Ayurveda', 'Sunset Cruise'],
  },
  {
    id: 'goa',
    name: 'Goa Coastal Collection',
    location: 'Goa',
    category: 'Beach Escapes',
    rating: '4.7',
    reviews: '2.1k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Sunset beach villas, private cabanas, and premium coastal dining experiences.',
    href: '/states/goa',
    bestSeason: 'Nov-Feb',
    duration: '4-6 Days',
    startingPrice: '₹38,000',
    tags: ['Beach Villa', 'Water Sports', 'Nightlife'],
  },
  {
    id: 'uttarakhand',
    name: 'Himalayan Luxe Escape',
    location: 'Uttarakhand',
    category: 'Hill Stations',
    rating: '4.9',
    reviews: '940 reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Curated mountain lodges, sunrise treks, and serene forest hideaways.',
    href: '/states/uttarakhand',
    bestSeason: 'Apr-Jun, Sep-Oct',
    duration: '5-7 Days',
    startingPrice: '₹42,000',
    tags: ['Mountain Lodge', 'Trekking', 'Wildlife Safari'],
  },
  {
    id: 'varanasi',
    name: 'Sacred Varanasi Experience',
    location: 'Uttar Pradesh',
    category: 'Spiritual Journeys',
    rating: '4.8',
    reviews: '1.1k reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Witness the eternal city with private Ganga aarti, heritage walks, and spiritual immersions.',
    href: '/states/uttar-pradesh',
    bestSeason: 'Oct-Mar',
    duration: '3-5 Days',
    startingPrice: '₹28,000',
    tags: ['Ganga Aarti', 'Heritage Walk', 'Spiritual'],
  },
  {
    id: 'sikkim',
    name: 'Sikkim Himalayan Haven',
    location: 'Sikkim',
    category: 'Mountain Retreats',
    rating: '4.7',
    reviews: '780 reviews',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    description:
      'Explore pristine valleys, Buddhist monasteries, and breathtaking mountain panoramas.',
    href: '/states/sikkim',
    bestSeason: 'Mar-Jun, Sep-Dec',
    duration: '6-8 Days',
    startingPrice: '₹35,000',
    tags: ['Monastery', 'Trekking', 'Organic Farming'],
  },
];

export const homepageThemes: TravelTheme[] = [
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Palace stays, private jets, and bespoke VIP experiences across India.',
    icon: 'Gem',
    color: 'from-amber-400 to-orange-500',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    href: '/categories/luxury',
  },
  {
    id: 'heritage',
    name: 'Heritage',
    description: 'UNESCO wonders, royal forts, and centuries-old architectural marvels.',
    icon: 'Landmark',
    color: 'from-rose-400 to-pink-500',
    imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80',
    href: '/categories/heritage-sites',
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    description: 'Tiger safaris, bird sanctuaries, and immersive jungle expeditions.',
    icon: 'Binocular',
    color: 'from-emerald-400 to-green-500',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80',
    href: '/categories/wildlife',
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Ayurvedic retreats, yoga sanctuaries, and holistic healing journeys.',
    icon: 'Heart',
    color: 'from-teal-400 to-cyan-500',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    href: '/categories/wellness',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Mountain treks, river rafting, paragliding, and off-road expeditions.',
    icon: 'Mountain',
    color: 'from-sky-400 to-blue-500',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    href: '/categories/adventure',
  },
  {
    id: 'culinary',
    name: 'Culinary',
    description: 'Gourmet food trails, cooking masterclasses, and royal dining experiences.',
    icon: 'ChefHat',
    color: 'from-red-400 to-rose-500',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    href: '/categories/culinary',
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Scenic landscapes, architectural marvels, and expert-led photo tours.',
    icon: 'Camera',
    color: 'from-violet-400 to-purple-500',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
    href: '/categories/photography',
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    description: 'Sacred pilgrimages, meditation retreats, and ancient wisdom immersions.',
    icon: 'Zen',
    color: 'from-indigo-400 to-blue-500',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=600&q=80',
    href: '/categories/spiritual',
  },
];

export const recommendedForYou: Recommendation[] = [
  {
    id: 'rec-1',
    title: 'Mysore Palace & Coorg Luxury',
    location: 'Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1600109397638-6e312e46f8d4?auto=format&fit=crop&w=800&q=80',
    price: '₹32,000',
    rating: '4.8',
    href: '/destinations/mysore-coorg',
    reason: 'Based on your interest in Heritage & Coffee Plantations',
  },
  {
    id: 'rec-2',
    title: 'Andaman Island Retreat',
    location: 'Andaman & Nicobar',
    imageUrl: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80',
    price: '₹48,000',
    rating: '4.9',
    href: '/destinations/andaman',
    reason: 'Trending among luxury beach lovers',
  },
  {
    id: 'rec-3',
    title: 'Leh-Ladakh Overland Expedition',
    location: 'Ladakh',
    imageUrl: 'https://images.unsplash.com/photo-1486911278844-a81c8a14fdb0?auto=format&fit=crop&w=800&q=80',
    price: '₹55,000',
    rating: '4.7',
    href: '/destinations/leh-ladakh',
    reason: 'Popular among adventure seekers this month',
  },
  {
    id: 'rec-4',
    title: 'Rishikesh Wellness Sanctuary',
    location: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    price: '₹25,000',
    rating: '4.8',
    href: '/destinations/rishikesh-wellness',
    reason: 'Perfect for your wellness journey',
  },
];

export const trendingThisMonth: Recommendation[] = [
  {
    id: 'trend-1',
    title: 'Rajasthan Royal Circuit',
    location: 'Jaipur, Jodhpur, Udaipur',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    price: '₹78,000',
    rating: '4.9',
    href: '/destinations/rajasthan-circuit',
    reason: '#1 Trending Luxury Circuit',
  },
  {
    id: 'trend-2',
    title: 'Kerala Houseboat Cruise',
    location: 'Alleppey, Kumarakom',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    price: '₹42,000',
    rating: '4.8',
    href: '/destinations/kerala-cruise',
    reason: 'Most Booked This Month',
  },
  {
    id: 'trend-3',
    title: 'Goa Beach Villa Collection',
    location: 'North & South Goa',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    price: '₹36,000',
    rating: '4.7',
    href: '/destinations/goa-villas',
    reason: 'Top Rated Beach Experience',
  },
];

export const homepageStates: HomepageState[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Timeless palaces, desert luxury, and royal heritage journeys.',
    imageUrl:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    href: '/states/rajasthan',
  },
  {
    id: 'kerala-state',
    name: 'Kerala',
    description: 'Backwaters, spice-lined resorts, and lush tropical escapes.',
    imageUrl:
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    href: '/states/himachal-pradesh',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description: 'Luxury city stays, coastal escapes, and cultural heritage tours.',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    href: '/states/maharashtra',
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    description: 'Spiritual temples, palace stays, and South India elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1600109397638-6e312e46f8d4?auto=format&fit=crop&w=1200&q=80',
    href: '/states/tamil-nadu',
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
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/jaipur-palace',
    description: 'Wake up to royal vistas in a 300-year-old palace, now reimagined as a modern luxury sanctuary.',
  },
  {
    id: 'backwater-sanctuary',
    title: 'Backwater Sanctuary',
    location: 'Alleppey, Kerala',
    tag: 'Wellness Retreat',
    price: 'From ₹16,000 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/kerala-backwaters',
    description: 'Drift through emerald canals on a private houseboat, with Ayurvedic treatments under starlit skies.',
  },
  {
    id: 'mountain-luxe',
    title: 'Mountain Luxe Escape',
    location: 'Uttarakhand Hills',
    tag: 'Adventure & Calm',
    price: 'From ₹14,800 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/uttarakhand-lodge',
    description: 'Perched at 8,000 feet, this glass-walled lodge offers Himalayan panoramas with infinity-edge hot tubs.',
  },
  {
    id: 'goa-beach-club',
    title: 'Goa Beach Club Experience',
    location: 'South Goa',
    tag: 'Beach Luxury',
    price: 'From ₹12,500 / night',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    href: '/destinations/goa-beach-club',
    description: 'Private beach cabanas, sunset champagne service, and curated coastal dining at its finest.',
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
    isVerified: true,
  },
  {
    id: 'arjun',
    name: 'Arjun Mehta',
    role: 'Executive Planner',
    quote:
      'The curated experiences and seamless planning made our family trip an elevated discovery of India\'s beauty.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
    isVerified: true,
    videoUrl: '/testimonials/arjun.mp4',
  },
  {
    id: 'mira',
    name: 'Mira Kapoor',
    role: 'Culture Explorer',
    quote:
      'From temple journeys to beachside luxury, the service felt modern and deeply rooted in Indian heritage.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
    isVerified: true,
  },
  {
    id: 'rahul',
    name: 'Rahul Verma',
    role: 'Adventure Enthusiast',
    quote:
      'The Himalayan trek was impeccably organized. Luxury camping at 12,000 feet with gourmet meals under the stars — absolutely magical.',
    rating: 5,
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    isVerified: true,
  },
];

export const homepageStats: StatCounter[] = [
  { id: 'destinations', value: '520+', label: 'Destinations' },
  { id: 'states', value: '28', label: 'States & UTs' },
  { id: 'attractions', value: '1,200+', label: 'Curated Experiences' },
  { id: 'travelers', value: '95K+', label: 'Travelers Served' },
];

export const reviewStats = {
  totalReviews: '12,847',
  averageRating: 4.9,
  distribution: [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 1.5 },
    { stars: 1, percentage: 0.5 },
  ],
};

export const festivals: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali Festival',
    location: 'Nationwide',
    month: 'October',
    imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=800&q=80',
    description: 'The festival of lights illuminates India with dazzling displays, fireworks, and celebrations.',
  },
  {
    id: 'holi',
    name: 'Holi Celebrations',
    location: 'Mathura, Vrindavan',
    month: 'March',
    imageUrl: 'https://images.unsplash.com/photo-1546521343-4eb2a0ed2a49?auto=format&fit=crop&w=800&q=80',
    description: 'Experience the vibrant festival of colors in its spiritual heartland.',
  },
  {
    id: 'pushkar',
    name: 'Pushkar Camel Fair',
    location: 'Pushkar, Rajasthan',
    month: 'November',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'A mesmerizing desert fair with camel trading, folk performances, and cultural vibrancy.',
  },
];

export const luxuryHotels: HotelListing[] = [
  {
    id: 'hotel-1',
    name: 'The Oberoi Amarvilas',
    location: 'Agra, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80',
    price: '₹85,000/night',
    rating: '4.9',
    href: '/hotels/oberoi-amarvilas',
  },
  {
    id: 'hotel-2',
    name: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    price: '₹72,000/night',
    rating: '4.8',
    href: '/hotels/taj-lake-palace',
  },
  {
    id: 'hotel-3',
    name: 'Wildflower Hall',
    location: 'Shimla, Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    price: '₹55,000/night',
    rating: '4.7',
    href: '/hotels/wildflower-hall',
  },
];

export const journalStories: JournalStory[] = [
  {
    id: 'story-1',
    title: 'The Royal Road: A Journey Through Rajasthan\'s Golden Triangle',
    excerpt: 'Discover the magic of Jaipur, Jodhpur, and Udaipur through the eyes of a seasoned luxury traveler.',
    author: 'Ananya Krishnan',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    date: 'March 15, 2026',
    href: '/journal/royal-road-rajasthan',
  },
  {
    id: 'story-2',
    title: 'Finding Stillness in the Himalayas: A Wellness Pilgrimage',
    excerpt: 'How a week-long retreat in the Himalayan foothills transformed my perspective on luxury travel.',
    author: 'Vikram Singh',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    date: 'February 28, 2026',
    href: '/journal/himalayan-wellness',
  },
  {
    id: 'story-3',
    title: 'Kerala\'s Backwaters: Cruising Through Paradise',
    excerpt: 'An intimate journey through emerald canals, spice gardens, and centuries-old traditions.',
    author: 'Priya Sharma',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    date: 'January 20, 2026',
    href: '/journal/kerala-backwaters',
  },
];

export const seasonalCalendar = [
  { month: 'January', destinations: ['Goa', 'Kerala', 'Rajasthan'], color: 'from-blue-400 to-cyan-400' },
  { month: 'February', destinations: ['Rajasthan', 'Kerala', 'Goa'], color: 'from-pink-400 to-rose-400' },
  { month: 'March', destinations: ['Rajasthan', 'Himachal', 'Uttarakhand'], color: 'from-green-400 to-emerald-400' },
  { month: 'April', destinations: ['Himachal', 'Uttarakhand', 'Sikkim'], color: 'from-yellow-400 to-orange-400' },
  { month: 'May', destinations: ['Himachal', 'Ladakh', 'Sikkim'], color: 'from-orange-400 to-red-400' },
  { month: 'June', destinations: ['Ladakh', 'Himachal', 'Kashmir'], color: 'from-red-400 to-purple-400' },
  { month: 'July', destinations: ['Ladakh', 'Kashmir', 'Rajasthan'], color: 'from-purple-400 to-indigo-400' },
  { month: 'August', destinations: ['Ladakh', 'Kashmir', 'Himachal'], color: 'from-indigo-400 to-blue-400' },
  { month: 'September', destinations: ['Kerala', 'Rajasthan', 'Himachal'], color: 'from-blue-400 to-teal-400' },
  { month: 'October', destinations: ['Rajasthan', 'Kerala', 'Goa'], color: 'from-teal-400 to-green-400' },
  { month: 'November', destinations: ['Rajasthan', 'Goa', 'Kerala'], color: 'from-amber-400 to-orange-400' },
  { month: 'December', destinations: ['Goa', 'Rajasthan', 'Kerala'], color: 'from-cyan-400 to-blue-400' },
];

export const featuredItineraries = [
  {
    id: 'itin-1',
    title: 'The Grand Rajasthan Explorer',
    days: 10,
    locations: ['Delhi', 'Jaipur', 'Jodhpur', 'Udaipur'],
    price: '₹1,85,000',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    href: '/itineraries/grand-rajasthan',
  },
  {
    id: 'itin-2',
    title: 'Kerala & Tamil Nadu Cultural Odyssey',
    days: 12,
    locations: ['Chennai', 'Madurai', 'Alleppey', 'Kochi'],
    price: '₹2,25,000',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    href: '/itineraries/south-india-odyssey',
  },
  {
    id: 'itin-3',
    title: 'Himalayan Luxury Circuit',
    days: 14,
    locations: ['Shimla', 'Manali', 'Leh', 'Srinagar'],
    price: '₹3,50,000',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    href: '/itineraries/himalayan-luxe',
  },
];