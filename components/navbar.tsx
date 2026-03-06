'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-white text-sm font-bold">
            C
          </div>
          <span>codeCrew</span>
        </Link>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Home
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Courses
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Training Programs
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Pricing
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Testimonials
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
          Register Now
        </Button>
      </div>
    </nav>
  );
}
