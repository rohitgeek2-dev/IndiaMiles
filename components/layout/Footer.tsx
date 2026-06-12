import Link from 'next/link';
import { ExternalLink, Globe, Mail, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'States', href: '/states' },
  { name: 'Categories', href: '/categories' },
  { name: 'Search', href: '/search' },
];

const popularStates = [
  { name: 'Rajasthan', href: '/states/rajasthan' },
  { name: 'Kerala', href: '/states/kerala' },
  { name: 'Goa', href: '/states/goa' },
  { name: 'Maharashtra', href: '/states/maharashtra' },
];

const travelCategories = [
  { name: 'Beaches', href: '/categories/beaches' },
  { name: 'Hill Stations', href: '/categories/hill-stations' },
  { name: 'Heritage Sites', href: '/categories/heritage-sites' },
  { name: 'Cultural Experiences', href: '/categories/cultural-experiences' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/95 py-16 text-sm text-muted-foreground">
      <div className="container mx-auto grid gap-10 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1.5fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-teal-600 text-white shadow-lg shadow-amber-500/20">
              IM
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                India Miles
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Premium travel curation
              </p>
            </div>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            Launch your next India journey with elegant stays, curated
            experiences, and premium itineraries crafted for discerning
            travellers.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Popular States
          </h3>
          <ul className="space-y-3">
            {popularStates.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Travel Categories
          </h3>
          <ul className="space-y-3">
            {travelCategories.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Newsletter
          </h3>
          <p className="max-w-sm leading-7 text-muted-foreground">
            Receive premium destination alerts, curated travel ideas, and luxury
            offers.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="min-w-0"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto rounded-full px-6 py-3"
            >
              Subscribe
            </Button>
          </form>
          <div className="flex items-center gap-4 pt-2 text-muted-foreground">
            <Link
              href="#"
              aria-label="Website"
              className="transition hover:text-primary"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Newsletter"
              className="transition hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Community"
              className="transition hover:text-primary"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="External link"
              className="transition hover:text-primary"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} India Miles. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="transition hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
