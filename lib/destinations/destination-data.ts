export type QuickFact = {
  label: string;
  value: string;
};

export type InfoCard = {
  icon: string;
  label: string;
  value: string;
};

export type SignatureExperience = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: string;
};

export type Itinerary = {
  id: string;
  title: string;
  days: number;
  locations: string[];
  price: string;
  imageUrl: string;
  href: string;
  description: string;
};

export type SeasonalMonth = {
  month: string;
  recommendation: string;
  rating: string;
  color: string;
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  price: string;
  rating: string;
  href: string;
  isFeatured?: boolean;
  description?: string;
};

export type TravelStory = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  date: string;
  href: string;
  isFeatured?: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'architecture' | 'nature' | 'food' | 'culture' | 'luxury';
};

export type NearbyDestination = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
  href: string;
};

export type Destination = {
  slug: string;
  name: string;
  subtitle: string;
  heroImage: string;
  quickFacts: QuickFact[];
  infoCards: InfoCard[];
  whyVisitHeading: string;
  whyVisitContent: string;
  signatureExperiences: SignatureExperience[];
  itineraries: Itinerary[];
  seasonalCalendar: SeasonalMonth[];
  hotels: Hotel[];
  travelStories: TravelStory[];
  gallery: GalleryImage[];
  nearbyDestinations: NearbyDestination[];
};

export const destinations: Record<string, Destination> = {
  jaipur: {
    slug: 'jaipur',
    name: 'Jaipur',
    subtitle:
      'The timeless capital of Rajasthan where royal palaces, vibrant bazaars, and luxury heritage stays create one of India\'s most unforgettable journeys.',
    heroImage:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80',
    quickFacts: [
      { label: 'Best Time', value: 'Oct – Mar' },
      { label: 'Ideal Duration', value: '4–6 Days' },
      { label: 'State', value: 'Rajasthan' },
      { label: 'Luxury Rating', value: 'Premium' },
    ],
    infoCards: [
      { icon: 'Calendar', label: 'Best Time To Visit', value: 'October to March' },
      { icon: 'Clock', label: 'Ideal Duration', value: '4–6 Days' },
      { icon: 'Plane', label: 'Nearest Airport', value: 'Jaipur International (JAI)' },
      { icon: 'Star', label: 'Popular For', value: 'Palaces, Bazaars, Heritage' },
      { icon: 'MessageSquare', label: 'Languages', value: 'Hindi, Rajasthani, English' },
      { icon: 'Compass', label: 'Travel Style', value: 'Heritage & Luxury' },
    ],
    whyVisitHeading: 'Why Jaipur Captivates Travellers',
    whyVisitContent: `Jaipur, the Pink City, is a living canvas of India's royal heritage. Founded in 1727 by Maharaja Sawai Jai Singh II, this UNESCO World Heritage city weaves together centuries of Rajput grandeur with a vibrant contemporary spirit.

Every corner of Jaipur tells a story. The imposing Amber Fort rises from the hills like a golden mirage, its mirrored halls reflecting the opulence of a bygone era. The Hawa Mahal, with its honeycomb façade of 953 windows, whispers tales of royal ladies observing street life unseen. The City Palace remains a living museum of regal traditions, where descendants of the royal family still reside.

Beyond the monuments, Jaipur is a sensory feast. The bazaars of Johari Bazaar and Bapu Bazaar overflow with handcrafted jewellery, block-printed textiles, and blue pottery that has adorned Indian homes for generations. The aroma of laal maas and dal baati churma wafts through heritage havelis turned luxury restaurants.

For the luxury traveller, Jaipur offers an unparalleled collection of palace hotels — converted royal residences where you sleep in chambers once occupied by maharajas. The city has mastered the art of old-world charm meeting modern indulgence, making it one of India's most rewarding destinations for those seeking authentic grandeur.`,
    signatureExperiences: [
      {
        id: 'exp-1',
        title: 'Amber Fort Sunrise',
        description: 'Witness the golden hour from Amer Fort before the crowds arrive, with private guided access to the Sheesh Mahal and Diwan-e-Khas.',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        duration: '3 hours',
        price: '₹8,500/person',
      },
      {
        id: 'exp-2',
        title: 'Royal Palace Tour',
        description: 'Exclusive after-hours tour of City Palace with a royal family historian, including private access to the private quarters and armory.',
        imageUrl: 'https://images.unsplash.com/photo-1600109397638-6e312e46f8d4?auto=format&fit=crop&w=800&q=80',
        duration: '2 hours',
        price: '₹12,000/person',
      },
      {
        id: 'exp-3',
        title: 'Luxury Dining Experience',
        description: 'A curated royal thali dinner at a heritage haveli, featuring traditional Rajasthani cuisine with live folk music and storytelling.',
        imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        duration: '2.5 hours',
        price: '₹6,500/person',
      },
      {
        id: 'exp-4',
        title: 'Heritage Walk',
        description: 'Guided walking tour through Jaipur\'s old city with an architectural historian, exploring hidden stepwells, temples, and artisan workshops.',
        imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        duration: '3 hours',
        price: '₹4,500/person',
      },
      {
        id: 'exp-5',
        title: 'Hot Air Balloon Ride',
        description: 'Soar above the Pink City at dawn with champagne breakfast, capturing aerial views of the forts, palaces, and the Aravalli hills.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        duration: '4 hours',
        price: '₹18,000/person',
      },
      {
        id: 'exp-6',
        title: 'Private Cultural Evening',
        description: 'An intimate evening at a heritage property featuring traditional Rajasthani dance, puppet show, and a private dinner under the stars.',
        imageUrl: 'https://images.unsplash.com/photo-1546521343-4eb2a0ed2a49?auto=format&fit=crop&w=800&q=80',
        duration: '3 hours',
        price: '₹9,500/person',
      },
    ],
    itineraries: [
      {
        id: 'itin-1',
        title: '3 Days in Jaipur',
        days: 3,
        locations: ['Jaipur'],
        price: '₹45,000',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        href: '/itineraries/jaipur-3-days',
        description: 'A curated weekend escape covering the highlights of the Pink City with luxury accommodations.',
      },
      {
        id: 'itin-2',
        title: '5 Days Royal Rajasthan',
        days: 5,
        locations: ['Jaipur', 'Jodhpur', 'Udaipur'],
        price: '₹1,25,000',
        imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        href: '/itineraries/royal-rajasthan-5-days',
        description: 'The ultimate royal circuit covering three iconic cities with palace stays and private transfers.',
      },
      {
        id: 'itin-3',
        title: '7 Days Heritage Journey',
        days: 7,
        locations: ['Jaipur', 'Pushkar', 'Jodhpur', 'Udaipur'],
        price: '₹1,85,000',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        href: '/itineraries/heritage-journey-7-days',
        description: 'An immersive deep-dive into Rajasthan\'s cultural heart with exclusive experiences and luxury camp stays.',
      },
    ],
    seasonalCalendar: [
      { month: 'January', recommendation: 'Peak season. Pleasant weather for sightseeing and outdoor activities.', rating: 'Excellent', color: 'from-blue-400 to-cyan-400' },
      { month: 'February', recommendation: 'Ideal weather for palace tours and heritage walks.', rating: 'Excellent', color: 'from-pink-400 to-rose-400' },
      { month: 'March', recommendation: 'Warm days, pleasant evenings. Great for photography.', rating: 'Very Good', color: 'from-green-400 to-emerald-400' },
      { month: 'April', recommendation: 'Hot days. Early morning/evening outings recommended.', rating: 'Fair', color: 'from-yellow-400 to-orange-400' },
      { month: 'May', recommendation: 'Very hot. Best to visit hill stations instead.', rating: 'Poor', color: 'from-orange-400 to-red-400' },
      { month: 'June', recommendation: 'Pre-monsoon heat. Off-season luxury rates available.', rating: 'Fair', color: 'from-red-400 to-purple-400' },
      { month: 'July', recommendation: 'Monsoon season. Occasional rains, lush landscapes.', rating: 'Fair', color: 'from-purple-400 to-indigo-400' },
      { month: 'August', recommendation: 'Monsoon continues. Fewer crowds, better hotel deals.', rating: 'Fair', color: 'from-indigo-400 to-blue-400' },
      { month: 'September', recommendation: 'Post-monsoon freshness. Good for exploring.', rating: 'Good', color: 'from-blue-400 to-teal-400' },
      { month: 'October', recommendation: 'Start of peak season. Perfect weather for all activities.', rating: 'Excellent', color: 'from-teal-400 to-green-400' },
      { month: 'November', recommendation: 'Pleasant weather. Pushkar Fair season nearby.', rating: 'Excellent', color: 'from-amber-400 to-orange-400' },
      { month: 'December', recommendation: 'Cool, crisp days. Perfect for luxury travel.', rating: 'Excellent', color: 'from-cyan-400 to-blue-400' },
    ],
    hotels: [
      {
        id: 'hotel-1',
        name: 'Rambagh Palace',
        location: 'Jaipur, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
        price: '₹65,000/night',
        rating: '4.9',
        href: '/hotels/rambagh-palace',
        isFeatured: true,
        description: 'Once the residence of the Maharaja of Jaipur, this Taj property is the epitome of royal luxury with sprawling gardens and regal suites.',
      },
      {
        id: 'hotel-2',
        name: 'The Oberoi Rajvilas',
        location: 'Jaipur, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1600109397638-6e312e46f8d4?auto=format&fit=crop&w=800&q=80',
        price: '₹72,000/night',
        rating: '4.8',
        href: '/hotels/oberoi-rajvilas',
        description: 'A luxury tented camp and palace hotel set in 32 acres of landscaped gardens with a world-class spa.',
      },
      {
        id: 'hotel-3',
        name: 'JW Marriott Jaipur',
        location: 'Jaipur, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80',
        price: '₹35,000/night',
        rating: '4.7',
        href: '/hotels/jw-marriott-jaipur',
        description: 'Contemporary luxury meets Rajasthani hospitality with modern amenities and fine dining options.',
      },
      {
        id: 'hotel-4',
        name: 'Fairmont Jaipur',
        location: 'Jaipur, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
        price: '₹42,000/night',
        rating: '4.6',
        href: '/hotels/fairmont-jaipur',
        description: 'Mughal-inspired architecture with luxurious rooms, a stunning pool, and award-winning restaurants.',
      },
    ],
    travelStories: [
      {
        id: 'story-1',
        title: 'A Week in the Pink City: Living Like Royalty',
        excerpt: 'From sunrise at Amber Fort to sunset cocktails at a private palace, our editor experiences the finest of Jaipur\'s luxury offerings.',
        author: 'Ananya Krishnan',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        date: 'March 15, 2026',
        href: '/journal/pink-city-royalty',
        isFeatured: true,
      },
      {
        id: 'story-2',
        title: 'The Royal Table: Jaipur\'s Finest Dining Experiences',
        excerpt: 'Exploring the city\'s culinary renaissance, from heritage thalis to modern Rajasthani cuisine in stunning settings.',
        author: 'Vikram Singh',
        imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        date: 'February 28, 2026',
        href: '/journal/jaipur-royal-table',
      },
      {
        id: 'story-3',
        title: 'Beyond the Pink: Jaipur\'s Hidden Artisan Communities',
        excerpt: 'Discover the master craftspeople keeping centuries-old traditions alive in the lanes of the old city.',
        author: 'Priya Sharma',
        imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        date: 'January 20, 2026',
        href: '/journal/jaipur-artisans',
      },
    ],
    gallery: [
      { id: 'g-1', src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', alt: 'Amber Fort at sunset', width: 800, height: 600, category: 'architecture' },
      { id: 'g-2', src: 'https://images.unsplash.com/photo-1600109397638-6e312e46f8d4?auto=format&fit=crop&w=800&q=80', alt: 'City Palace courtyard', width: 600, height: 800, category: 'architecture' },
      { id: 'g-3', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', alt: 'Rajasthani thali', width: 800, height: 600, category: 'food' },
      { id: 'g-4', src: 'https://images.unsplash.com/photo-1546521343-4eb2a0ed2a49?auto=format&fit=crop&w=800&q=80', alt: 'Traditional dance performance', width: 600, height: 800, category: 'culture' },
      { id: 'g-5', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80', alt: 'Hot air balloon over Jaipur', width: 800, height: 600, category: 'nature' },
      { id: 'g-6', src: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80', alt: 'Luxury pool at Rambagh Palace', width: 800, height: 600, category: 'luxury' },
      { id: 'g-7', src: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80', alt: 'Hawa Mahal facade', width: 600, height: 800, category: 'architecture' },
      { id: 'g-8', src: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80', alt: 'Jal Mahal at sunset', width: 800, height: 600, category: 'nature' },
    ],
    nearbyDestinations: [
      {
        id: 'near-1',
        name: 'Udaipur',
        location: 'Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'The City of Lakes — romantic, serene, and effortlessly luxurious.',
        href: '/destinations/udaipur',
      },
      {
        id: 'near-2',
        name: 'Jodhpur',
        location: 'Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        description: 'The Blue City — majestic forts and timeless blue-walled streets.',
        href: '/destinations/jodhpur',
      },
      {
        id: 'near-3',
        name: 'Pushkar',
        location: 'Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'A sacred lake town with a bohemian spirit and the famous Camel Fair.',
        href: '/destinations/pushkar',
      },
      {
        id: 'near-4',
        name: 'Ranthambore',
        location: 'Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
        description: 'Wild meets luxury with tiger safaris and jungle camp experiences.',
        href: '/destinations/ranthambore',
      },
    ],
  },
};