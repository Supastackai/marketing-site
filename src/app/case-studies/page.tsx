"use client";

import MarketingNav from "@/components/MarketingNav";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MarketingNav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Case Studies</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              E-commerce Growth Strategy
            </h2>
            <p className="text-gray-300 mb-4">
              Increased online sales by 250% for a fashion retailer through 
              targeted SEO and social media campaigns.
            </p>
            <div className="text-purple-400">→ 250% revenue growth</div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              SaaS Product Launch
            </h2>
            <p className="text-gray-300 mb-4">
              Successfully launched a new SaaS product, generating $1M+ in ARR 
              within the first year.
            </p>
            <div className="text-purple-400">→ $1M+ ARR</div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Local Business Expansion
            </h2>
            <p className="text-gray-300 mb-4">
              Helped a local restaurant chain expand to 5 new locations through 
              targeted digital marketing campaigns.
            </p>
            <div className="text-purple-400">→ 5 new locations</div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Mobile App Growth
            </h2>
            <p className="text-gray-300 mb-4">
              Grew a mobile app's user base from 10k to 500k active users in 
              6 months through viral marketing strategies.
            </p>
            <div className="text-purple-400">→ 500k active users</div>
          </div>
        </div>
      </main>
    </div>
  );
}
