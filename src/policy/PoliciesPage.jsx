import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Policy2 from "./Policy2";
import Policy3 from "./Policy3";
import Policy4 from "./Policy4";

// --- Particle Card ---
const ParticleCard = ({ children, className = "", style, onClick }) => {
  return (
    <div
      className={`${className} relative overflow-hidden cursor-pointer`}
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

  const policiesData = useMemo(
    () => [
      {
        id: "privacy",
        title: "Privacy Policy",
        desc: "Learn how we collect, use, store, and protect your personal information on our platform.",
        color: "from-purple-500 to-indigo-400",
        component: <Policy4 />,
      },
      {
        id: "refund",
        title: "Refund & Cancellation",
        desc: "Understand our fair and transparent process for handling refunds and cancellations.",
        color: "from-pink-500 to-red-400",
        component: <Policy2 />,
      },
      {
        id: "terms",
        title: "Terms & Conditions",
        desc: "Review the rules, responsibilities, and conditions for using our services.",
        color: "from-green-500 to-emerald-400",
        component: <Policy3 />,
      },
    ],
    []
  );

  // find the selected policy based on URL param
  const selectedPolicy = policiesData.find((p) => p.id === policyId);

  return (
    <section className="relative w-full py-16 sm:py-20 mt-[-5rem] px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-5 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
          Our Policies
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
          Understand our policies that keep your experience safe, fair, and transparent.
        </p>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 place-items-center">
          {policiesData.map((policy) => (
            <ParticleCard
              key={policy.id}
              onClick={() => navigate(`/policies/${policy.id}`)} // update URL only
              className="relative w-full max-w-[18rem] aspect-square rounded-3xl p-[2px]"
            >
              <div className="relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-4 py-6 bg-white/90 backdrop-blur-sm text-gray-800">
                <div
                  className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${policy.color}`}
                ></div>
                <h3 className="font-bold text-lg sm:text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {policy.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{policy.desc}</p>
              </div>
            </ParticleCard>
          ))}
        </div>

        {/* Selected Policy Content */}
        <div id="seehere" className="mt-12">
          {selectedPolicy ? (
            <div className="rounded-lg bg-white text-gray-900 p-6 shadow">
              {selectedPolicy.component}
            </div>
          ) : (
            <p className="text-black">Click on any policy to view details.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PoliciesPage;
