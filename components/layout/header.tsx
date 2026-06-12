'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Compass, MapPin, Globe } from 'lucide-react';
import { DarkModeToggle } from '@/components/common/DarkModeToggle';

const navGroups = [
  {
    title: 'Destinations',
    description: 'Luxury escapes across India',
    items: [
      {
        name: 'Rajasthan',
        href: '/states/rajasthan',
        meta: 'Palaces & deserts',
      },
      { name: 'Kerala', href: '/states/kerala', meta: 'Backwaters & wellness' },
      { name: 'Goa', href: '/states/goa', meta: 'Beachfront luxury' },
    ],
  },
  {
    title: 'States',
    description: 'Curated regional journeys',
    items: [
      {
        name: 'Himachal Pradesh',
        href: '/states/himachal-pradesh',
        meta: 'Mountain retreats',
      },
      {
        name: 'Uttarakhand',
        href: '/states/uttarakhand',
        meta: 'Himalayan serenity',
      },
      {
        name: 'Maharashtra',
        href: '/states/maharashtra',
        meta: 'City escapes & coast',
      },
    ],
  },
  {
    title: 'Experiences',
    description: 'Signature travel moments',
    items: [
      {
        name: 'Beach Escapes',
        href: '/categories/beaches',
        meta: 'Coastal luxury',
      },
      {
        name: 'Heritage Tours',
        href: '/categories/heritage-sites',
        meta: 'Royal legacies',
      },
      {
        name: 'Wellness Retreats',
        href: '/categories/wildlife',
        meta: 'Nature & calm',
      },
    ],
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-3xl shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
      <div className="container mx-auto flex h-20 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-teal-600 text-white shadow-lg shadow-amber-500/20">
            <span className="text-lg font-bold">IM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight">
              India Miles
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Luxury travel
            </span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-3 md:flex">
          {navGroups.map((group) => (
            <div key={group.title} className="group relative">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/30">
                {group.title}
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>

              <div className="invisible absolute left-0 top-full mt-3 hidden min-w-[20rem] flex-col gap-3 rounded-[2rem] border border-white/10 bg-background/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:flex group-hover:visible">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {group.title}
                  </p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {group.description}
                  </span>
                </div>
                <div className="grid gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-3xl px-4 py-3 transition hover:bg-white/10"
                    >
                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.meta}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden rounded-full md:inline-flex"
          >
            <Link href="/search">
              <Globe className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="hidden rounded-full px-6 py-2 font-semibold md:inline-flex"
          >
            <Link href="/plan">Plan Your Trip</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="rounded-[2rem] border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-3xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-teal-600 text-white">
                    IM
                  </div>
                  <div>
                    <p className="font-semibold">India Miles</p>
                    <p className="text-xs text-muted-foreground">
                      Premium travel
                    </p>
                  </div>
                </Link>
                <DarkModeToggle />
              </div>
              <div className="space-y-4">
                {navGroups.map((group) => (
                  <details
                    key={group.title}
                    className="rounded-3xl border border-white/10 bg-white/5"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-2 px-4 py-4 text-sm font-semibold">
                      {group.title}
                      <ChevronDown className="h-4 w-4" />
                    </summary>
                    <div className="space-y-2 border-t border-white/10 px-4 py-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-2xl px-3 py-3 text-sm transition hover:bg-white/10"
                        >
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.meta}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <Link
                  href="/search"
                  className="block rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white/10"
                >
                  Search
                </Link>
                <Link
                  href="/plan"
                  className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90"
                >
                  Plan Your Trip
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
