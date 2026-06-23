import { notFound } from 'next/navigation';
import { destinations } from '@/lib/destinations/destination-data';
import { CinematicHero } from '@/components/destinations/CinematicHero';
import { DestinationOverview } from '@/components/destinations/DestinationOverview';
import { WhyVisitSection } from '@/components/destinations/WhyVisitSection';
import { SignatureExperiences } from '@/components/destinations/SignatureExperiences';
import { CuratedItineraries } from '@/components/destinations/CuratedItineraries';
import { BestTimeToVisit } from '@/components/destinations/BestTimeToVisit';
import { LuxuryHotels } from '@/components/destinations/LuxuryHotels';
import { TravelStories } from '@/components/destinations/TravelStories';
import { DestinationGallery } from '@/components/destinations/DestinationGallery';
import { NearbyDestinations } from '@/components/destinations/NearbyDestinations';
import { LuxuryConversion } from '@/components/destinations/LuxuryConversion';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = destinations[slug];

  if (!destination) {
    return { title: 'Destination Not Found | India Miles' };
  }

  return {
    title: `${destination.name} | India Miles Luxury Travel`,
    description: destination.subtitle,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations[slug];

  if (!destination) {
    notFound();
  }

  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <CinematicHero destination={destination} />

      {/* Section 2: Destination Overview */}
      <DestinationOverview destination={destination} />

      {/* Section 3: Why Visit */}
      <WhyVisitSection destination={destination} />

      {/* Section 4: Signature Experiences */}
      <SignatureExperiences destination={destination} />

      {/* Section 5: Curated Itineraries */}
      <CuratedItineraries destination={destination} />

      {/* Section 6: Best Time To Visit */}
      <BestTimeToVisit destination={destination} />

      {/* Section 7: Luxury Hotels */}
      <LuxuryHotels destination={destination} />

      {/* Section 8: Travel Stories */}
      <TravelStories destination={destination} />

      {/* Section 9: Destination Gallery */}
      <DestinationGallery destination={destination} />

      {/* Section 10: Nearby Destinations */}
      <NearbyDestinations destination={destination} />

      {/* Section 11: Luxury Conversion */}
      <LuxuryConversion destinationName={destination.name} />
    </>
  );
}