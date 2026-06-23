import Link from 'next/link';
import { ExternalLink, Globe, Mail, MessageCircle, MapPin, Phone, Star, Shield, Sparkles, ArrowRight, Send } from 'lucide-react';
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

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Globe },
  { name: 'Twitter', href: '#', icon: MessageCircle },
  { name: 'YouTube', href: '#', icon: ExternalLink },
  { name: 'LinkedIn', href: '#', icon: Mail },
];

export function Footer() {
  return (
    <footer>
      {/* ============ SECTION 1: STAY INSPIRED BANNER ============ */}
      <div className="relative overflow-hidden bg-[#FAF8F4]">
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gold/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-teal/[0.04] blur-3xl" />

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Stay Connected
            </span>
            <h2 className="mt-4 font-serif text-[40px] font-bold leading-[1.05] tracking-tight text-[#111827] sm:text-[56px] md:text-[64px] lg:text-[72px]">
              Journeys worth
              <br />
              <span className="text-gradient-gold">remembering</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Subscribe for destination guides, curated itineraries, and luxury travel insights delivered to your inbox.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#EAC587] focus:ring-[#EAC587]/20 shadow-sm"
                />
                <Button
                  type="submit"
                  className="group rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-6 text-sm font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </form>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ SECTION 2: MAIN FOOTER ============ */}
      <div className="relative bg-white border-t border-[#E5E7EB]/40">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/50 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-14 sm:py-18">
          <div className="grid gap-10 md:grid-cols-5 md:gap-8 lg:gap-12">
            {/* Column 1: Brand + Trust */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC587] to-[#D4AF6A] text-white shadow-lg shadow-[#EAC587]/20">
                  <span className="text-lg font-bold">IM</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#111827]">
                    India Miles
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#6B7280]">
                    Premium travel curation
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#6B7280]">
                Launch your next India journey with elegant stays, curated experiences, and premium itineraries crafted for discerning travellers.
              </p>

              {/* Trust badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAC587]/10">
                    <Star className="h-4 w-4 text-[#EAC587]" />
                  </div>
                  <span>Luxury stays & curated experiences</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAC587]/10">
                    <Shield className="h-4 w-4 text-[#EAC587]" />
                  </div>
                  <span>Expert support & secure booking</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAC587]/10">
                    <Sparkles className="h-4 w-4 text-[#EAC587]" />
                  </div>
                  <span>Bespoke itineraries</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF]">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group text-sm font-medium text-[#4B5563] transition-all duration-300 hover:text-[#111827]"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#EAC587] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Popular States */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF]">
                Popular States
              </h3>
              <ul className="mt-5 space-y-3.5">
                {popularStates.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group text-sm font-medium text-[#4B5563] transition-all duration-300 hover:text-[#111827]"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#EAC587] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Travel Categories */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF]">
                Travel Categories
              </h3>
              <ul className="mt-5 space-y-3.5">
                {travelCategories.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group text-sm font-medium text-[#4B5563] transition-all duration-300 hover:text-[#111827]"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#EAC587] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Connect With Us */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF]">
                Connect With Us
              </h3>

              {/* Social icons */}
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:border-[#EAC587] hover:bg-[#FAF8F4] hover:text-[#EAC587] hover:-translate-y-0.5 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              {/* Phone support card */}
              <div className="mt-6 rounded-2xl border border-[#E5E7EB]/60 bg-[#FAF8F4] p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                    <Phone className="h-4 w-4 text-[#EAC587]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      24/7 Concierge
                    </p>
                    <p className="mt-0.5 text-xs text-[#6B7280]">
                      +91 1800-XXX-XXXX
                    </p>
                    <p className="mt-1 text-xs text-[#6B7280]">
                      concierge@indiamiles.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ SECTION 3: BOTTOM BAR ============ */}
      <div className="relative bg-[#071321]">
        {/* Gold accent top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EAC587]/30 to-transparent" />

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} India Miles. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-xs text-white/50 transition-all duration-300 hover:text-[#EAC587]"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/terms"
                className="text-xs text-white/50 transition-all duration-300 hover:text-[#EAC587]"
              >
                Terms & Conditions
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/contact"
                className="text-xs text-white/50 transition-all duration-300 hover:text-[#EAC587]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}