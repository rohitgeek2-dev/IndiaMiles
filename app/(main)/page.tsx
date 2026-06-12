import { CallToActionBanner } from '@/components/home/CallToActionBanner';
import { CategorySection } from '@/components/home/CategoryGrid';
import { FeaturedExperiences } from '@/components/home/FeaturedExperiences';
import { HeroSection } from '@/components/home/HeroSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { StatsSection } from '@/components/home/StatsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ExploreStates } from '@/components/home/StatesGrid';
import { PopularDestinations } from '@/components/home/PopularDestinations';
import {
  homepageCategories,
  homepageDestinations,
  homepageExperiences,
  homepageStates,
  homepageTestimonials,
} from '@/lib/homepage-data';

export const metadata = {
  title: 'India Miles | Discover Incredible India',
  description:
    'Discover luxury journeys, curated experiences, and premium travel inspiration across India with India Miles.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations destinations={homepageDestinations} />
      <ExploreStates states={homepageStates} />
      <CategorySection categories={homepageCategories} />
      <FeaturedExperiences experiences={homepageExperiences} />
      <StatsSection />
      <TestimonialsSection testimonials={homepageTestimonials} />
      <NewsletterSection />
      <CallToActionBanner />
    </>
  );
}
