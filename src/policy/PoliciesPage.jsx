import React, { useMemo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Policy2 from "./Policy2";
import Policy3 from "./Policy3";
import Policy4 from "./Policy4";
import CancellationPolicy from "./policy2_1";

import { Shield, RefreshCcw, XCircle, FileText, ArrowUp } from "lucide-react";

// --- Particle Card ---
const ParticleCard = ({ children, className = "", style, onClick }) => {
  return (
    <div
      className={`${className} relative overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// --- Main Policies Page ---
const PoliciesPage = () => {
  const navigate = useNavigate();
  const { policyId } = useParams(); // read policy from URL

  const [showScroll, setShowScroll] = useState(false);

  const policiesData = useMemo(
    () => [
      {
        id: "privacy",
        title: "Privacy Policy",
        desc: "Learn how we collect, use, store, and protect your personal information.",
        color: "from-purple-500 to-indigo-400",
        icon: <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
        component: <Policy4 />,
      },
      {
        id: "refund",
        title: "Refund Policy",
        desc: "Understand our fair and transparent process for handling refunds.",
        color: "from-pink-500 to-red-400",
        icon: <RefreshCcw className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500" />,
        component: <Policy2 />,
      },
      {
        id: "cancel",
        title: "Cancellation Policy",
        desc: "Learn about our process for handling cancellations fairly.",
        color: "from-orange-500 to-yellow-400",
        icon: <XCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
        component: <CancellationPolicy />,
      },
      {
        id: "terms",
        title: "Terms & Conditions",
        desc: "Review the rules, responsibilities, and conditions for using our services.",
        color: "from-green-500 to-emerald-400",
        icon: <FileText className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
        component: <Policy3 />,
      },
    ],
    []
  );

  // find the selected policy based on URL param
  const selectedPolicy = policiesData.find((p) => p.id === policyId);

  // --- Scroll-to-top button visibility ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-16 sm:py-20 mt-[-5rem] px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-5 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
          Our Policies
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Understand our policies that keep your experience safe, fair, and transparent.
        </p>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 place-items-center">
          {policiesData.map((policy) => (
            <ParticleCard
              key={policy.id}
              onClick={() => navigate(`/policies/${policy.id}`)}
              className="relative w-full max-w-[18rem] aspect-square rounded-3xl p-[2px] bg-gradient-to-br from-gray-200 via-gray-100 to-white hover:from-blue-200 hover:to-emerald-200 group"
            >
              <div className="relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-6 py-8 bg-white/95 backdrop-blur-md text-gray-800 shadow-inner">
                <div
                  className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${policy.color}`}
                >
                  {policy.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {policy.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{policy.desc}</p>
              </div>
            </ParticleCard>
          ))}
        </div>

        {/* Selected Policy Content */}
        <div id="seehere" className="mt-16">
          {selectedPolicy ? (
            <div className="rounded-2xl bg-white text-gray-900 p-8 shadow-xl border border-gray-200 animate-fadeIn">
              {selectedPolicy.component}
            </div>
          ) : (
            <p className="text-black mt-8">Click on any policy to view details.</p>
          )}
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      )}
    </section>
  );
};

export default PoliciesPage;
