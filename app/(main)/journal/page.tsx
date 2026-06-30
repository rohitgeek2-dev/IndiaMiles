import { journalStories, type JournalStory } from '@/lib/homepage-data';
import { JournalPageClient } from './JournalPageClient';

export type { JournalStory };

export const metadata = {
  title: 'Journal | India Miles — Travel Stories & Inspiration',
  description:
    'Explore curated travel stories, destination guides, and luxury travel inspiration from across India — written by our community of seasoned travellers.',
};

export default async function JournalPage() {
  return <JournalPageClient stories={journalStories} />;
}