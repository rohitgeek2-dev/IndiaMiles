import { HeroSection } from '@/components/home/HeroSection';
import { PopularDestinations } from '@/components/home/PopularDestinations';
import { TravelThemes } from '@/components/home/TravelThemes';
import { PersonalizedRecs } from '@/components/home/PersonalizedRecs';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { StorytellingSection } from '@/components/home/StorytellingSection';
import { DreamJourney } from '@/components/home/DreamJourney';
import { IndiaMapSection } from '@/components/home/IndiaMapSection';
import { BestTimeSection } from '@/components/home/BestTimeSection';
import { LuxuryHotelCollection } from '@/components/home/LuxuryHotelCollection';
import { CuratedItinerariesSection } from '@/components/home/CuratedItinerariesSection';
import { FestivalsSection } from '@/components/home/FestivalsSection';
import { ConciergeSection } from '@/components/home/ConciergeSection';
import { InspirationGallery } from '@/components/home/InspirationGallery';
import { LuxuryFinaleSection } from '@/components/home/LuxuryFinaleSection';
import {
  homepageDestinations,
  homepageThemes,
  recommendedForYou,
  trendingThisMonth,
  homepageTestimonials,
  reviewStats,
  journalStories,
  seasonalCalendar,
  luxuryHotels,
  featuredItineraries,
  festivals,
} from '@/lib/homepage-data';

export const metadata = {
  title: 'India Miles | Discover Incredible India',
  description:
    'Discover luxury journeys, curated experiences, and premium travel inspiration across India with India Miles.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Premium Brand Introduction */}
      <HeroSection />

      {/* 2. Interactive India Map */}
      <IndiaMapSection />

      {/* 3. Popular Destinations */}
      <PopularDestinations destinations={homepageDestinations} />

      {/* 4. Travel Themes - Ways to Travel */}
      <TravelThemes themes={homepageThemes} />

      {/* 5. Personalized Recommendations */}
      <PersonalizedRecs
        recommendedForYou={recommendedForYou}
        trendingThisMonth={trendingThisMonth}
      />

      {/* 6. Social Proof - Testimonials & Reviews */}
      <SocialProofSection
        testimonials={homepageTestimonials}
        reviewStats={reviewStats}
      />

      {/* 7. Editorial Storytelling - Magazine Layout */}
      <StorytellingSection stories={journalStories} />

      {/* 8. Best Time To Visit India */}
      <BestTimeSection calendar={seasonalCalendar} />

      {/* 9. Luxury Hotel Collection */}
      <LuxuryHotelCollection hotels={luxuryHotels} />

      {/* 10. Curated Itineraries */}
      <CuratedItinerariesSection itineraries={featuredItineraries} />

      {/* 11. Dream Journey - Multi-Step Trip Builder */}
      <DreamJourney />

      {/* 12. Festivals & Events */}
      <FestivalsSection festivals={festivals} />

      {/* 13. Concierge Assistance */}
      <ConciergeSection />

      {/* 14. Travel Inspiration Gallery */}
      <InspirationGallery />

      {/* 15. Grand Finale — Plan + Subscribe */}
      <LuxuryFinaleSection />
    </>
  );
}
