import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                Fynsta
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for games, news, financial tools, and
              astrology insights.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/games" className="hover:text-white transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/calculators"
                  className="hover:text-white transition-colors"
                >
                  Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/astrology"
                  className="hover:text-white transition-colors"
                >
                  Astrology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <p className="text-gray-400 text-sm">
              Follow us on social media for the latest updates and exclusive
              content.
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Fynsta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
