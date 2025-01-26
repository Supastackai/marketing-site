"use client";

import MarketingNav from "@/components/MarketingNav";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MarketingNav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Case Studies</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <a 
            href="/case-studies/ecommerce-growth" 
            className="block bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              E-commerce Growth Strategy
            </h2>
            <p className="text-gray-300 mb-4">
              Increased online sales by 250% for a fashion retailer through 
              targeted SEO and social media campaigns.
            </p>
            <div className="space-y-2">
              <div className="text-purple-400">→ 250% revenue growth</div>
              <div className="text-purple-400">→ 3x ROI on ad spend</div>
              <div className="text-purple-400">→ 120% increase in organic traffic</div>
            </div>
          </a>
          
          <a 
            href="/case-studies/saas-launch" 
            className="block bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              SaaS Product Launch
            </h2>
            <p className="text-gray-300 mb-4">
              Successfully launched a new SaaS product, generating $1M+ in ARR 
              within the first year.
            </p>
            <div className="space-y-2">
              <div className="text-purple-400">→ $1M+ ARR</div>
              <div className="text-purple-400">→ 15,000+ signups in first month</div>
              <div className="text-purple-400">→ 40% conversion rate</div>
            </div>
          </a>
          
          <a 
            href="/case-studies/restaurant-expansion" 
            className="block bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Local Business Expansion
            </h2>
            <p className="text-gray-300 mb-4">
              Helped a local restaurant chain expand to 5 new locations through 
              targeted digital marketing campaigns.
            </p>
            <div className="space-y-2">
              <div className="text-purple-400">→ 5 new locations</div>
              <div className="text-purple-400">→ 300% increase in delivery orders</div>
              <div className="text-purple-400">→ 4.8 average app rating</div>
            </div>
          </a>
          
          <a 
            href="/case-studies/mobile-app-growth" 
            className="block bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Mobile App Growth
            </h2>
            <p className="text-gray-300 mb-4">
              Grew a mobile app's user base from 10k to 500k active users in 
              6 months through viral marketing strategies.
            </p>
            <div className="space-y-2">
              <div className="text-purple-400">→ 500k active users</div>
              <div className="text-purple-400">→ 4.5x viral coefficient</div>
              <div className="text-purple-400">→ 25% week-over-week growth</div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
