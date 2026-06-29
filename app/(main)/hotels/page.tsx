import { luxuryHotels, type HotelListing } from '@/lib/homepage-data';
import { HotelsPageClient } from './HotelsPageClient';

export type { HotelListing };

export const metadata = {
  title: 'Luxury Hotels | India Miles — Premium Stays Across India',
  description:
    'Discover India\'s finest luxury hotels, palace stays, and premium resorts — from the Oberoi Amarvilas to Taj Lake Palace.',
};

const featuredHotels: HotelListing[] = [
  {
    id: 'featured-1',
    name: 'The Oberoi Amarvilas',
    location: 'Agra, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1200&q=85',
    price: '₹85,000/night',
    rating: '4.9',
    href: '/hotels/oberoi-amarvilas',
  },
  {
    id: 'featured-2',
    name: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    price: '₹72,000/night',
    rating: '4.8',
    href: '/hotels/taj-lake-palace',
  },
  {
    id: 'featured-3',
    name: 'Wildflower Hall',
    location: 'Shimla, Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85',
    price: '₹55,000/night',
    rating: '4.7',
    href: '/hotels/wildflower-hall',
  },
  {
    id: 'featured-4',
    name: 'The Rambagh Palace',
    location: 'Jaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    price: '₹65,000/night',
    rating: '4.9',
    href: '/hotels/rambagh-palace',
  },
  {
    id: 'featured-5',
    name: 'Taj Mahal Palace',
    location: 'Mumbai, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85',
    price: '₹78,000/night',
    rating: '4.8',
    href: '/hotels/taj-mahal-palace',
  },
  {
    id: 'featured-6',
    name: 'Kumarakom Lake Resort',
    location: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=85',
    price: '₹45,000/night',
    rating: '4.7',
    href: '/hotels/kumarakom-lake',
  },
];

const allHotels = [...featuredHotels, ...luxuryHotels.filter((h) => !featuredHotels.find((f) => f.id === h.id))];

export default async function HotelsPage() {
  return <HotelsPageClient hotels={allHotels} featuredHotels={featuredHotels} />;
}