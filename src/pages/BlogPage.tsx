import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Introducing BlockInfura RollUp-as-a-Service',
      excerpt: 'Scale your blockchain applications with our new RaaS solution...',
      date: 'March 15, 2024',
      author: 'John Smith',
      category: 'Product Updates',
      readTime: '5 min read'
    },
    {
      title: 'Web3 Infrastructure Best Practices',
      excerpt: 'Learn how to optimize your blockchain infrastructure for scale...',
      date: 'March 12, 2024',
      author: 'Sarah Johnson',
      category: 'Technical Guides',
      readTime: '8 min read'
    },
    {
      title: 'The Future of Layer 2 Scaling Solutions',
      excerpt: 'Exploring the latest developments in Layer 2 scaling technologies...',
      date: 'March 10, 2024',
      author: 'Mike Chen',
      category: 'Industry Insights',
      readTime: '6 min read'
    }
  ];

  const categories = [
    'Product Updates',
    'Technical Guides',
    'Industry Insights',
    'Case Studies',
    'Company News'
  ];

  return (
    <div className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BlockInfura Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, updates, and guides from our team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="px-3 py-1 bg-[#E99710]/10 text-[#E99710] rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#E99710] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="text-[#E99710] hover:text-[#d88a0e] font-medium flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="text-gray-600 hover:text-[#E99710] transition-colors w-full text-left py-2">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-[#E99710] to-[#d88a0e] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4">Get the latest updates directly in your inbox</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg mb-4 text-gray-900"
              />
              <button className="w-full bg-white text-[#E99710] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;