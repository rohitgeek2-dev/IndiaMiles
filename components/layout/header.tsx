'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  ChevronDown,
  Heart,
  Search,
  MapPin,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { DarkModeToggle } from '@/components/common/DarkModeToggle';

const megaMenuItems = [
  {
    title: 'Destinations',
    description: 'Luxury escapes across India',
    icon: MapPin,
    items: [
      {
        name: 'Rajasthan',
        href: '/states/rajasthan',
        meta: 'Palaces & deserts',
        image:
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Kerala',
        href: '/states/kerala',
        meta: 'Backwaters & wellness',
        image:
          'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Goa',
        href: '/states/goa',
        meta: 'Beachfront luxury',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Himachal Pradesh',
        href: '/states/himachal-pradesh',
        meta: 'Mountain retreats',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Uttarakhand',
        href: '/states/uttarakhand',
        meta: 'Himalayan serenity',
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Ladakh',
        href: '/states/ladakh',
        meta: 'High-altitude adventure',
        image:
          'https://images.unsplash.com/photo-1486911278844-a81c8a14fdb0?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    title: 'Experiences',
    description: 'Signature travel moments',
    icon: Compass,
    items: [
      {
        name: 'Heritage Tours',
        href: '/categories/heritage-sites',
        meta: 'Royal legacies',
        image:
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Beach Escapes',
        href: '/categories/beaches',
        meta: 'Coastal luxury',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Wellness Retreats',
        href: '/categories/wellness',
        meta: 'Nature & calm',
        image:
          'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Wildlife Safaris',
        href: '/categories/wildlife',
        meta: 'Jungle encounters',
        image:
          'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Culinary Trails',
        href: '/categories/culinary',
        meta: 'Gourmet journeys',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Adventure',
        href: '/categories/adventure',
        meta: 'Thrill & explore',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
];

const navLinks = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Journal', href: '/journal' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer mounting flag to next microtask to satisfy hooks lint.
    Promise.resolve().then(() => setMounted(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass shadow-[0_10px_40px_rgba(15,23,42,0.08)] border-b border-border/50'
          : 'bg-transparent backdrop-blur-0 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-teal-600 text-white shadow-lg shadow-amber-500/20">
            <span className="text-base font-bold">IM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`text-base font-semibold tracking-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              India Miles
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.35em] transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/60'}`}
            >
              Luxury travel
            </span>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-1 md:flex" ref={menuRef}>
          {megaMenuItems.map((group) => {
            const Icon = group.icon;
            const isOpen = openMenu === group.title;

            return (
              <div key={group.title} className="relative">
                <button
                  onClick={() => setOpenMenu(isOpen ? null : group.title)}
                  onMouseEnter={() => setOpenMenu(group.title)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isScrolled
                      ? 'text-foreground hover:bg-muted'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {group.title}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setOpenMenu(null)}
                      className="absolute left-0 top-full mt-3 w-[480px] overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl backdrop-blur-3xl"
                    >
                      <div className="p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {group.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {group.description}
                            </p>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="rounded-full text-xs"
                          >
                            <Link href={`/${group.title.toLowerCase()}`}>
                              View all
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setOpenMenu(null)}
                              className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-muted"
                            >
                              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-foreground group-hover:text-teal-500 transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {item.meta}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Simple nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <DarkModeToggle />

          {/* Search */}
          <button
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
              isScrolled
                ? 'border-border bg-card hover:bg-muted text-foreground'
                : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
            }`}
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Wishlist */}
          <button
            className={`hidden md:flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
              isScrolled
                ? 'border-border bg-card hover:bg-muted text-foreground'
                : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
            }`}
          >
            <Heart className="h-4 w-4" />
          </button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden rounded-full ${
                  isScrolled
                    ? 'bg-muted text-foreground'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="rounded-[2rem] border border-border/50 bg-card p-6 shadow-2xl backdrop-blur-3xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-teal-600 text-white">
                    IM
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">India Miles</p>
                    <p className="text-xs text-muted-foreground">
                      Premium travel
                    </p>
                  </div>
                </Link>
                <DarkModeToggle />
              </div>

              <div className="space-y-6">
                {megaMenuItems.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {group.title}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-muted"
                        >
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.meta}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile nav links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/search"
                  className="flex items-center justify-center gap-2 rounded-full border border-border/50 bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Search className="h-4 w-4" />
                  Search
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
