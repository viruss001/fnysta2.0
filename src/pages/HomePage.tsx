import React from 'react';
import { Gamepad2, Newspaper, Calculator, Star as Stars, ArrowRight, TrendingUp } from 'lucide-react';
import { PageType } from '../types';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const features = [
    {
      icon: Gamepad2,
      title: 'Games',
      description: 'Discover and play amazing games across different genres.',
      page: 'games' as PageType,
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Newspaper,
      title: 'News',
      description: 'Stay updated with the latest news from around the world.',
      page: 'news' as PageType,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Calculator,
      title: 'Financial Calculators',
      description: 'Make informed financial decisions with our powerful tools.',
      page: 'calculators' as PageType,
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Stars,
      title: 'Astrology',
      description: 'Explore your horoscope and discover cosmic insights.',
      page: 'astrology' as PageType,
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to Fynsta
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your all-in-one platform for entertainment, information, financial planning, and cosmic wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('games')}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of tools and entertainment options designed to enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage(feature.page)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group p-8"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">100+</span>
              </div>
              <p className="text-gray-600">Games Available</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Newspaper className="w-8 h-8 text-green-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-600">News Updates</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Calculator className="w-8 h-8 text-purple-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">15+</span>
              </div>
              <p className="text-gray-600">Calculators</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Stars className="w-8 h-8 text-yellow-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">12</span>
              </div>
              <p className="text-gray-600">Zodiac Signs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}