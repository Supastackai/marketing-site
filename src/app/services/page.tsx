"use client";

import MarketingNav from "@/components/MarketingNav";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MarketingNav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">
          Our Services
        </h1>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Digital Strategy */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    Digital Strategy
                  </h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Science-backed strategies that align with your business goals and deliver measurable growth through experimentation and optimization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Market research & analysis</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Customer journey mapping</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Omnichannel strategy</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Performance optimization</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="text-purple-400 font-medium">Key Results</div>
                <div className="text-gray-300 mt-2 space-y-1">
                  <div>→ 3x ROI on marketing spend</div>
                  <div>→ 120% increase in organic traffic</div>
                  <div>→ 40% higher conversion rates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Design */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    Creative Design
                  </h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Data-informed designs that scientifically optimize user engagement and conversion rates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Brand identity development</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Web & mobile UI/UX design</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Marketing collateral</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Motion graphics & animation</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="text-purple-400 font-medium">Key Results</div>
                <div className="text-gray-300 mt-2 space-y-1">
                  <div>→ 75% faster brand recognition</div>
                  <div>→ 40% higher engagement rates</div>
                  <div>→ 90% client satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all hover:scale-[1.02]">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    Data Analytics
                  </h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced analytics and experimentation to uncover growth opportunities and validate hypotheses.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Data collection & integration</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Performance dashboards</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Predictive analytics</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Customer segmentation</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="text-purple-400 font-medium">Key Results</div>
                <div className="text-gray-300 mt-2 space-y-1">
                  <div>→ 50% faster decision making</div>
                  <div>→ 35% improved campaign ROI</div>
                  <div>→ 90% data accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
