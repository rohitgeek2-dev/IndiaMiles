// lib/types.ts

// Data Models
export interface State {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  seo?: SeoMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  seo?: SeoMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  images: string[]; // Array of image URLs
  state?: State; // Nested state object or just stateId if fetched separately
  stateId: string;
  categories?: Category[]; // Nested category objects or just categoryIds
  categoryIds: string[];
  bestTimeToVisit?: string;
  thingsToDo: string[];
  howToReach?: string;
  seo?: SeoMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface BookingInquiry {
  id: string;
  destinationId: string;
  destination?: Destination; // Optional, if needed to display destination info with inquiry
  fullName: string;
  email: string;
  phoneNumber?: string;
  travelDates?: string;
  numTravelers: number;
  message?: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject?: string;
  message: string;
  status: 'pending' | 'replied' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface SeoMetadata {
  id: string;
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Form Inputs
export type BookingFormInputs = Pick<BookingInquiry, 'fullName' | 'email' | 'phoneNumber' | 'travelDates' | 'numTravelers' | 'message'>;
export type ContactFormInputs = Pick<ContactMessage, 'fullName' | 'email' | 'subject' | 'message'>;

// Nav Links
export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}
