import React, { useState } from "react";
import {
  Calculator,
  DollarSign,
  Home,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string>("loan");

  const calculators = [
    {
      id: "loan",
      title: "Loan Calculator",
      icon: DollarSign,
      description: "Calculate your monthly loan payments",
      about: (
        <>
          <p className="mb-4">
            A loan calculator helps you estimate the monthly payments,
            total interest, and total repayment amount for a loan. 
            This is useful when comparing different loan options or planning
            for future debt.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Understand how interest rates affect monthly payments.</li>
            <li>Compare different loan terms before committing.</li>
            <li>Plan your finances with clarity on repayment obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "investment",
      title: "Investment Calculator",
      icon: TrendingUp,
      description: "Plan your investment growth",
      about: (
        <>
          <p className="mb-4">
            An investment calculator helps you project the future value of
            your investments, considering compound growth, contributions,
            and returns.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Estimate how your money could grow over time.</li>
            <li>Visualize the impact of regular contributions.</li>
            <li>Understand the power of compounding returns.</li>
          </ul>
        </>
      ),
    },
    {
      id: "mortgage",
      title: "Mortgage Calculator",
      icon: Home,
      description: "Calculate home loan payments",
      about: (
        <>
          <p className="mb-4">
            A mortgage calculator helps you estimate your monthly home loan
            payments, including principal and interest, based on loan amount,
            interest rate, and loan term.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Plan for your monthly housing budget.</li>
            <li>Compare mortgage options before buying a home.</li>
            <li>Understand the long-term cost of a mortgage.</li>
          </ul>
        </>
      ),
    },
    {
      id: "savings",
      title: "Savings Calculator",
      icon: PiggyBank,
      description: "Track your savings growth",
      about: (
        <>
          <p className="mb-4">
            A savings calculator shows you how much your money can grow with
            consistent contributions and interest over time.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Set savings goals and track progress.</li>
            <li>See how time and interest increase your savings.</li>
            <li>Plan for emergencies or big purchases.</li>
          </ul>
        </>
      ),
    },
  ];

  const active = calculators.find((c) => c.id === activeCalculator);

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-500 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Calculators
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how each calculator can guide your financial decisions.
          </p>
        </motion.div>

        {/* Calculator Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calculators.map((calc) => (
            <motion.button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl transition-all duration-300 relative overflow-hidden ${
                activeCalculator === calc.id
                  ? "bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              {/* Glow effect */}
              {activeCalculator === calc.id && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <calc.icon className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">{calc.title}</h3>
              <p className="text-sm opacity-75">{calc.description}</p>
            </motion.button>
          ))}
        </div>

        {/* About Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Calculator className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">{active?.title}</h2>
          </div>
          <div className="text-gray-700 text-lg">{active?.about}</div>
        </motion.div>
      </div>
    </div>
  );
}
