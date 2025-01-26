"use client";

import MarketingNav from "@/components/MarketingNav";

const posts = [
  {
    title: "The Future of Digital Marketing in 2025",
    description: "Explore the latest trends shaping the digital marketing landscape and how businesses can adapt.",
    date: "2025-01-15",
    category: "Trends"
  },
  {
    title: "Mastering Social Media Algorithms",
    description: "Learn how to optimize your content for maximum reach and engagement across platforms.",
    date: "2025-01-10",
    category: "Social Media"
  },
  {
    title: "SEO Strategies for E-commerce Success",
    description: "Discover proven techniques to boost your online store's visibility and sales.",
    date: "2025-01-05",
    category: "SEO"
  },
  {
    title: "Data-Driven Marketing Decisions",
    description: "How to leverage analytics to make smarter marketing choices and improve ROI.",
    date: "2024-12-20",
    category: "Analytics"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MarketingNav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Blog</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-all"
            >
              <div className="text-sm text-purple-400 mb-2">
                {post.date} • {post.category}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
