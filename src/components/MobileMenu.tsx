"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-purple-400 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
