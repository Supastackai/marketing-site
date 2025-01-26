"use client";

import MarketingNav from "@/components/MarketingNav";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MarketingNav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">
          About Us
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission Section */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At DigitalAgency, we're passionate about helping businesses thrive in the 
              digital landscape. Our mission is to deliver innovative, data-driven 
              marketing solutions that drive real results and create lasting value for 
              our clients.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-purple-400 mb-8">
              Meet Our Team
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="w-24 h-24 bg-purple-600 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Alex Johnson
                </h3>
                <p className="text-gray-300 mb-4">
                  CEO & Founder
                </p>
                <p className="text-gray-300 text-sm">
                  15+ years in digital marketing and business strategy
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="w-24 h-24 bg-purple-600 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Sarah Lee
                </h3>
                <p className="text-gray-300 mb-4">
                  Creative Director
                </p>
                <p className="text-gray-300 text-sm">
                  Expert in brand strategy and visual storytelling
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="w-24 h-24 bg-purple-600 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Michael Chen
                </h3>
                <p className="text-gray-300 mb-4">
                  Data Analytics Lead
                </p>
                <p className="text-gray-300 text-sm">
                  Specializes in data-driven marketing optimization
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-purple-400 mb-8">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-purple-400 text-3xl">💡</div>
                <h3 className="text-xl font-bold text-white">
                  Innovation
                </h3>
                <p className="text-gray-300">
                  We stay ahead of the curve with cutting-edge strategies and technologies.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-purple-400 text-3xl">🤝</div>
                <h3 className="text-xl font-bold text-white">
                  Collaboration
                </h3>
                <p className="text-gray-300">
                  We work closely with our clients to achieve shared success.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-purple-400 text-3xl">📈</div>
                <h3 className="text-xl font-bold text-white">
                  Results-Driven
                </h3>
                <p className="text-gray-300">
                  We focus on delivering measurable outcomes that drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
