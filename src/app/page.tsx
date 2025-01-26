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
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8"
          >
            Digital Marketing<br />Reimagined
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            We help brands grow through innovative digital strategies, creative campaigns, and data-driven results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-lg transition-colors">
              Get Started
            </a>
            <a href="/about" className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 font-medium px-8 py-4 rounded-lg transition-colors">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                We've helped businesses increase their revenue by up to 300% through our data-driven strategies.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Targeted Strategies</h3>
              <p className="text-gray-300">
                Our campaigns are tailored to your unique audience and business goals.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-purple-400 text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Reporting</h3>
              <p className="text-gray-300">
                Real-time dashboards keep you informed about campaign performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's create a custom strategy that drives real results for your brand.
          </p>
          <a 
            href="/contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
