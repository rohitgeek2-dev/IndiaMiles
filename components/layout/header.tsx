'use client';

import Link from 'next/link';
import { NavLink } from '@/lib/types';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { DarkModeToggle } from '@/components/common/DarkModeToggle';

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'States', href: '/states' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 pointer-events-none" />

          <div className="relative flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" />
              <span className="font-semibold text-lg tracking-tight">
                India Miles
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-2 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/15 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <DarkModeToggle />

              <Button size="sm" className="hidden md:flex rounded-full">
                Explore
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden rounded-full bg-white/10 backdrop-blur-xl"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="border-white/10 bg-black/40 backdrop-blur-3xl"
                >
                  <div className="mt-10 flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="rounded-xl px-4 py-3 text-lg hover:bg-white/10 transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
