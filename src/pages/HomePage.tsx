import React, { useState } from 'react';
import {
  Gamepad2,
  Newspaper,
  Calculator,
  Star as Stars,
  ArrowRight,
  TrendingUp,
  User,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { PageType } from '../types';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Newspaper,
      title: 'News',
      description: 'Stay updated with the latest news from around the world.',
      page: 'news' as PageType,
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Calculator,
      title: 'Financial Calculators',
      description: 'Make informed financial decisions with our powerful tools.',
      page: 'calculators' as PageType,
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: Stars,
      title: 'Astrology',
      description: 'Explore your horoscope and discover cosmic insights.',
      page: 'astrology' as PageType,
      color: 'from-yellow-600 to-orange-600',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'All features are optimized for speed and seamless usage.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: User,
      title: 'User Friendly',
      description: 'Intuitive interface designed for everyone.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Join a thriving community of users and experts.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const whatYouCanDo = [
    {
      icon: Gamepad2,
      title: 'Play Games',
      description: 'Challenge yourself and have fun with exciting games.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Calculator,
      title: 'Manage Finances',
      description: 'Plan, calculate, and track your financial goals.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Stars,
      title: 'Discover Astrology',
      description: 'Read daily horoscopes and explore cosmic insights.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Newspaper,
      title: 'Stay Updated',
      description: 'Get the latest news from around the globe.',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500 -z-10" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Welcome to Fynsta
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto h-12"
          >
            <Typewriter
              options={{
                strings: [
                  'Play amazing games.',
                  'Check your horoscope.',
                  'Plan your finances.',
                  'Stay updated with news.',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setCurrentPage('games')}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all shadow-md hover:shadow-lg"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What You Can Do on Fynsta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the features and services designed to enrich your daily life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whatYouCanDo.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 relative overflow-hidden cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Fynsta?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a seamless, fast, and interactive experience across all features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl relative overflow-hidden"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-center rounded-t-3xl mt-12 mx-4 md:mx-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-6">Join Fynsta today and unlock the full experience.</p>
        <button
          onClick={() => setCurrentPage('games')}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
        >
          Join Now
        </button>
      </section>
    </div>
  );
}
