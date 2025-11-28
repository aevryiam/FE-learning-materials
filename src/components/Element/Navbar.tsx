"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="shrink-0">
              <h1 className="text-xl font-bold text-blue-600">
                CollabLearn FE
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/slicing" className="text-gray-600 hover:text-blue-600">
              Slicing
            </Link>
            <Link
              href="/tailwind"
              className="text-gray-600 hover:text-blue-600"
            >
              Tailwind
            </Link>
            <Link href="/nextjs" className="text-gray-600 hover:text-blue-600">
              Next.js
            </Link>
            <Link href="/redux" className="text-gray-600 hover:text-blue-600">
              Redux
            </Link>
            <Link
              href="/fetching"
              className="text-gray-600 hover:text-blue-600"
            >
              Fetching
            </Link>
            <Link
              href="/responsive"
              className="text-gray-600 hover:text-blue-600"
            >
              Responsive
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/slicing"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Slicing
              </Link>
              <Link
                href="/tailwind"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Tailwind
              </Link>
              <Link
                href="/nextjs"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Next.js
              </Link>
              <Link
                href="/redux"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Redux
              </Link>
              <Link
                href="/fetching"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Fetching
              </Link>
              <Link
                href="/responsive"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Responsive
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
