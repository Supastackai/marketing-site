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
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Digital Strategy */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">
                  Digital Strategy
                </h2>
                <p className="text-gray-300 mb-6">
                  We develop comprehensive digital marketing strategies that align with 
                  your business objectives and drive measurable results.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Market research and analysis</li>
                  <li>Customer journey mapping</li>
                  <li>Omnichannel strategy development</li>
                  <li>Performance tracking and optimization</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Key Benefits
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Increased brand visibility</li>
                  <li>Higher conversion rates</li>
                  <li>Improved ROI</li>
                  <li>Data-driven decision making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Creative Design */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">
                  Creative Design
                </h2>
                <p className="text-gray-300 mb-6">
                  Our creative team delivers stunning designs that capture your brand's 
                  essence and engage your target audience.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Brand identity development</li>
                  <li>Web and mobile UI/UX design</li>
                  <li>Marketing collateral creation</li>
                  <li>Motion graphics and animation</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Key Benefits
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Enhanced brand recognition</li>
                  <li>Improved user engagement</li>
                  <li>Consistent brand experience</li>
                  <li>Competitive differentiation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">
                  Data Analytics
                </h2>
                <p className="text-gray-300 mb-6">
                  We transform raw data into actionable insights to optimize your 
                  marketing performance and drive business growth.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Data collection and integration</li>
                  <li>Performance dashboards</li>
                  <li>Predictive analytics</li>
                  <li>Customer segmentation</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Key Benefits
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Data-driven decision making</li>
                  <li>Improved campaign performance</li>
                  <li>Enhanced customer understanding</li>
                  <li>Increased marketing efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
