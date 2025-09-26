import React, { useState } from 'react';
import { Clock, User, Eye, TrendingUp } from 'lucide-react';
import { NewsArticle } from '../types';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles: NewsArticle[] = [
    {
      id: '1',
      title: 'Revolutionary Technology Breakthrough Changes Industry',
      excerpt: 'Scientists announce a groundbreaking discovery that could reshape the future of renewable energy and sustainable technology.',
      category: 'technology',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-15',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Global Markets Show Strong Recovery Signs',
      excerpt: 'Economic indicators suggest a positive trend as markets worldwide demonstrate resilience and growth potential.',
      category: 'business',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-14',
      readTime: '4 min'
    },
    {
      id: '3',
      title: 'Climate Summit Reaches Historic Agreement',
      excerpt: 'World leaders unite on ambitious climate goals, setting new standards for environmental protection and sustainability.',
      category: 'environment',
      image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-13',
      readTime: '6 min'
    },
    {
      id: '4',
      title: 'Sports Championship Delivers Thrilling Finale',
      excerpt: 'An unforgettable championship game captivates millions of viewers with extraordinary performances and dramatic moments.',
      category: 'sports',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-12',
      readTime: '3 min'
    },
    {
      id: '5',
      title: 'Health Research Reveals Promising Results',
      excerpt: 'New medical research provides hope for treating previously incurable conditions with innovative therapeutic approaches.',
      category: 'health',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-11',
      readTime: '7 min'
    },
    {
      id: '6',
      title: 'Entertainment Industry Embraces New Trends',
      excerpt: 'Streaming platforms and content creators adapt to changing viewer preferences with innovative programming formats.',
      category: 'entertainment',
      image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-10',
      readTime: '4 min'
    }
  ];

  const categories = ['all', 'technology', 'business', 'environment', 'sports', 'health', 'entertainment'];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the most recent news from around the world, curated for you.
          </p>
        </div>

        {/* Trending Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="font-medium">Breaking News</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                      Featured
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredArticles[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{filteredArticles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-4">{filteredArticles[0].readTime} read</span>
                      <User className="w-4 h-4 mr-1" />
                      <span>By Editorial Team</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter and never miss important news updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}