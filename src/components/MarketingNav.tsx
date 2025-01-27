"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function MarketingNav() {
  return (
    <nav className="sticky top-0 bg-gray-900/95 backdrop-blur-md rounded-b-xl border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Growth Scientist
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 ml-12">
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/case-studies" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Case Studies
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/contact" 
              className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
