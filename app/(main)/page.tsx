// import { HeroSection } from "@/components/home/HeroSection";
// import { TrendingSection } from "@/components/home/TrendingSection";
// import { CategorySection } from "@/components/home/CategorySection";

import { CategorySection } from '@/components/home/CategoryGrid';
import { HeroSection } from '@/components/home/HeroSection';
import { TrendingSection } from '@/components/home/TrendingPlaces';
import {
  getCategories,
  getTopPlaces,
  getTrendingPlaces,
} from '@/services/travel-service';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [trendingPlaces, topPlaces, categories] = await Promise.all([
    getTrendingPlaces(6),
    getTopPlaces(6),
    getCategories(),
  ]);

  const featuredPlaces = trendingPlaces.length > 0 ? trendingPlaces : topPlaces;

  return (
    <>
      <HeroSection />
      <TrendingSection places={featuredPlaces} />
      <CategorySection categories={categories} />
    </>
  );
}
