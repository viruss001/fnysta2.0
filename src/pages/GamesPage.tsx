import React, { useState } from 'react';
import { Play, Star, Users, Clock } from 'lucide-react';
import { Game } from '../types';

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const games: Game[] = [
    {
      id: '1',
      title: 'Puzzle Master',
      description: 'Challenge your mind with brain-teasing puzzles and logical challenges.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'puzzle',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Adventure Quest',
      description: 'Embark on epic adventures in mystical lands filled with treasures.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'adventure',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Strategy Empire',
      description: 'Build and manage your empire through strategic planning and warfare.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'strategy',
      rating: 4.7
    },
    {
      id: '4',
      title: 'Racing Thunder',
      description: 'Experience high-speed racing with stunning graphics and realistic physics.',
      image: 'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'racing',
      rating: 4.6
    },
    {
      id: '5',
      title: 'Memory Matrix',
      description: 'Test and improve your memory with increasingly challenging patterns.',
      image: 'https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'puzzle',
      rating: 4.5
    },
    {
      id: '6',
      title: 'Space Explorer',
      description: 'Navigate through galaxies and discover new planets in this space adventure.',
      image: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'adventure',
      rating: 4.8
    }
  ];

  const categories = ['all', 'puzzle', 'adventure', 'strategy', 'racing'];

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Games
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of engaging games across various genres. Fun for all ages!
          </p>
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

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{game.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{game.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {game.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Multiplayer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Game of the Week</h2>
          <p className="text-lg mb-6 opacity-90">
            Try our featured game and compete with players worldwide for the highest score!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Play Featured Game
          </button>
        </div>
      </div>
    </div>
  );
}