import React, { useState } from 'react';
import { Star as Stars, Calendar, Moon, Sun } from 'lucide-react';
import { ZodiacSign } from '../types';

export default function AstrologyPage() {
  const [selectedSign, setSelectedSign] = useState<string>('aries');

  const zodiacSigns: ZodiacSign[] = [
    {
      name: 'Aries',
      symbol: '♈',
      element: 'Fire',
      dates: 'Mar 21 - Apr 19',
      description: 'Aries are natural leaders, full of energy and enthusiasm. They are pioneering spirits who love to take on new challenges.'
    },
    {
      name: 'Taurus',
      symbol: '♉',
      element: 'Earth',
      dates: 'Apr 20 - May 20',
      description: 'Taurus individuals are reliable, practical, and devoted. They appreciate beauty and have a strong connection to the material world.'
    },
    {
      name: 'Gemini',
      symbol: '♊',
      element: 'Air',
      dates: 'May 21 - Jun 20',
      description: 'Geminis are curious, adaptable, and expressive. They love to communicate and are always seeking new experiences and knowledge.'
    },
    {
      name: 'Cancer',
      symbol: '♋',
      element: 'Water',
      dates: 'Jun 21 - Jul 22',
      description: 'Cancer individuals are intuitive, emotional, and nurturing. They have strong connections to home and family.'
    },
    {
      name: 'Leo',
      symbol: '♌',
      element: 'Fire',
      dates: 'Jul 23 - Aug 22',
      description: 'Leos are confident, generous, and creative. They love to be in the spotlight and inspire others with their warmth.'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      element: 'Earth',
      dates: 'Aug 23 - Sep 22',
      description: 'Virgos are practical, analytical, and detail-oriented. They strive for perfection and are always looking to improve.'
    },
    {
      name: 'Libra',
      symbol: '♎',
      element: 'Air',
      dates: 'Sep 23 - Oct 22',
      description: 'Libras are diplomatic, charming, and seek harmony. They have a natural sense of justice and love beautiful things.'
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      element: 'Water',
      dates: 'Oct 23 - Nov 21',
      description: 'Scorpios are intense, passionate, and mysterious. They have strong intuition and are not afraid to explore deep truths.'
    },
    {
      name: 'Sagittarius',
      symbol: '♐',
      element: 'Fire',
      dates: 'Nov 22 - Dec 21',
      description: 'Sagittarians are adventurous, optimistic, and freedom-loving. They are natural philosophers seeking truth and meaning.'
    },
    {
      name: 'Capricorn',
      symbol: '♑',
      element: 'Earth',
      dates: 'Dec 22 - Jan 19',
      description: 'Capricorns are ambitious, disciplined, and responsible. They are natural leaders who value tradition and hard work.'
    },
    {
      name: 'Aquarius',
      symbol: '♒',
      element: 'Air',
      dates: 'Jan 20 - Feb 18',
      description: 'Aquarians are innovative, independent, and humanitarian. They are forward-thinking and always looking to make the world better.'
    },
    {
      name: 'Pisces',
      symbol: '♓',
      element: 'Water',
      dates: 'Feb 19 - Mar 20',
      description: 'Pisceans are compassionate, artistic, and intuitive. They have rich inner lives and strong connections to the spiritual realm.'
    }
  ];

  const todaysHoroscope = {
    general: "Today brings opportunities for growth and self-discovery. Trust your intuition and embrace positive changes coming your way.",
    love: "Romantic energy is high today. Single? Keep your heart open to new connections. Partnered? Plan something special together.",
    career: "Your professional life is gaining momentum. A project you've been working on may receive recognition or positive feedback.",
    health: "Focus on balance today. Take time for both physical activity and mental relaxation to maintain your well-being."
  };

  const selectedZodiac = zodiacSigns.find(sign => sign.name.toLowerCase() === selectedSign);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cosmic Insights & Astrology
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the mysteries of the universe and explore what the stars have in store for you.
          </p>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.name}
              onClick={() => setSelectedSign(sign.name.toLowerCase())}
              className={`p-4 rounded-xl transition-all duration-300 ${
                selectedSign === sign.name.toLowerCase()
                  ? 'bg-white text-purple-800 shadow-lg scale-105'
                  : 'bg-white bg-opacity-10 text-black hover:bg-opacity-20'
              }`}
            >
              <div className="text-3xl mb-2">{sign.symbol}</div>
              <div className="font-semibold text-sm">{sign.name}</div>
              <div className="text-xs opacity-75">{sign.dates}</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Selected Sign Details */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedZodiac?.symbol}</div>
              <h2 className="text-3xl font-bold text-black mb-2">{selectedZodiac?.name}</h2>
              <div className="flex items-center justify-center space-x-4 text-black-200">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedZodiac?.dates}
                </span>
                <span className="flex items-center">
                  <Stars className="w-4 h-4 mr-1" />
                  {selectedZodiac?.element}
                </span>
              </div>
            </div>
            <p className="text-black text-center leading-relaxed">
              {selectedZodiac?.description}
            </p>
          </div>

          {/* Today's Horoscope */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Today's Horoscope</h3>
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                  <h4 className="font-semibold text-black">General</h4>
                </div>
                <p className="text-black-100 text-sm">{todaysHoroscope.general}</p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Moon className="w-5 h-5 text-pink-400 mr-2" />
                  <h4 className="font-semibold text-black">Love</h4>
                </div>
                <p className="text-black-100 text-sm">{todaysHoroscope.love}</p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Stars className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="font-semibold text-black">Career</h4>
                </div>
                <p className="text-black-100 text-sm">{todaysHoroscope.career}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Daily Readings</h3>
            <p className="text-blue-200 text-sm">Get personalized daily horoscope readings based on your zodiac sign and planetary alignments.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Moon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Moon Phases</h3>
            <p className="text-blue-200 text-sm">Track lunar cycles and understand how moon phases influence your emotions and energy levels.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Stars className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Birth Chart</h3>
            <p className="text-blue-200 text-sm">Discover your complete astrological profile with detailed birth chart analysis and interpretations.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-black text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock Your Cosmic Potential</h2>
          <p className="text-lg mb-6 opacity-90">
            Get personalized astrological insights and discover what the stars have planned for your future.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Personal Reading
          </button>
        </div>
      </div>
    </div>
  );
}