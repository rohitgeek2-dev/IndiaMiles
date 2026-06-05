import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Sparkles, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">India Miles</h3>
          <p className="text-sm text-muted-foreground">
            Your journey to incredible India starts here. Discover breathtaking
            destinations and plan your perfect trip.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/destinations"
                className="hover:text-primary transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/states"
                className="hover:text-primary transition-colors"
              >
                States
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-primary transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="hover:text-primary transition-colors"
              >
                Advanced Search
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Stay updated with our latest destinations and offers.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
            />
            <Button type="submit">Subscribe</Button>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <Globe className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Zap className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Sparkles className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:rohitgeek2@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center text-sm text-muted-foreground mt-10">
        © {new Date().getFullYear()} India Miles. All rights reserved.
      </div>
    </footer>
  );
}
