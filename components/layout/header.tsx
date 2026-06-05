"use client"

import Link from "next/link"
import { NavLink } from "@/lib/types"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { DarkModeToggle } from "@/components/common/DarkModeToggle"

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "States", href: "/states" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <span className="font-bold text-xl">India Miles</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <DarkModeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Link href="/" className="mr-4 flex items-center space-x-2 mb-6">
                <span className="font-bold text-xl">India Miles</span>
              </Link>
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
