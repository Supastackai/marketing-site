"use client";

import MarketingNav from "@/components/MarketingNav";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">
      <MarketingNav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-conic from-purple-900 via-transparent to-transparent opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-conic from-transparent via-purple-900 to-transparent opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 md:mb-8"
          >
            Growth Science<br />for Modern Businesses
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We apply scientific methods to marketing, delivering measurable growth through experimentation and optimization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors text-sm sm:text-base">
              Get Started
            </a>
            <a href="/about" className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors text-sm sm:text-base">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <motion.div 
              className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-purple-600/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-3xl md:text-4xl mb-4">🔬</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Data-Driven Experiments
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We run controlled marketing experiments to identify the most effective growth strategies.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-purple-600/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-3xl md:text-4xl mb-4">📊</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Growth Analytics
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Advanced analytics to measure, predict, and optimize your marketing ROI.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-purple-600/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-3xl md:text-4xl mb-4">🧪</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Continuous Optimization
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We constantly test and refine strategies to maximize your growth potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8"
          >
            Ready to Apply Growth Science?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Let's run experiments and optimize your marketing for maximum growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Start Your Growth Experiment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Growth Science</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Applying scientific methods to marketing for measurable growth and optimization.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Services</a></li>
                <li><a href="/case-studies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">123 Growth St.</li>
                <li className="text-gray-400 text-sm">San Francisco, CA</li>
                <li className="text-gray-400 text-sm">(555) 123-4567</li>
                <li className="text-gray-400 text-sm">info@growthscience.com</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Newsletter</h4>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500"
                />
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Growth Science. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
