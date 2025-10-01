import React from "react";

const PolicyTerms = () => {
  return (
    <div className="space-y-8 text-left max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-3">
        Terms & Conditions
      </h2>

      <p className="text-gray-700">
        <span className="font-semibold">Effective Date:</span> [Insert Date]
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Company:</span> Fnysta Technologies (Sole Proprietorship)
      </p>

      {/* 1. Definitions */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">1. Definitions</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">“Company,” “We,” “Our,” or “Us”</span> refers to Fnysta Technologies, a sole proprietorship operating in India.
          </li>
          <li>
            <span className="font-semibold">“Platform”</span> refers to the website, mobile applications, games, quizzes, communities, APIs, and all digital products developed, owned, or operated by Fnysta.
          </li>
          <li>
            <span className="font-semibold">“User,” “You,” or “Your”</span> refers to any individual or entity accessing or using the Platform.
          </li>
          <li>
            <span className="font-semibold">“Services”</span> means astrology consultations, horoscopes, forums, news feeds, games, quizzes, and other offerings by Fnysta.
          </li>
        </ul>
      </div>

      {/* 2. Acceptance of Terms */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">2. Acceptance of Terms</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          By accessing or using the Platform, you agree that:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>You have read, understood, and consent to be legally bound by these Terms.</li>
          <li>You are at least 18 years old (or of legal age as per applicable law) and legally competent.</li>
          <li>You will use the Platform in compliance with Indian laws and international regulations.</li>
        </ul>
        <p className="mt-2 text-gray-600 italic">
          If you do not agree, you must stop using the Platform immediately.
        </p>
      </div>

      {/* 3. Scope of Services */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">3. Scope of Services</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>Astrology Services – horoscope generation, matchmaking, consultations.</li>
          <li>Communities & Forums – group interactions and user content.</li>
          <li>News & Articles – curated feeds and blogs.</li>
          <li>Software Development – web, app, and API projects.</li>
          <li>Skill-Based Games & Quizzes – knowledge-based contests.</li>
          <li>Future Services – Fnysta may add or remove offerings at its discretion.</li>
        </ul>
      </div>

      {/* 4. Eligibility & Registration */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">4. Eligibility & Registration</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          You must be legally capable of entering into binding contracts under the Indian Contract Act, 1872.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Certain services require account registration with accurate details. You are solely responsible for maintaining the confidentiality of your account credentials.
        </p>
      </div>

      {/* 5. User Obligations */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">5. User Obligations</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>No defamatory, obscene, or illegal content.</li>
          <li>No harassment, abuse, or threats toward users.</li>
          <li>No bots, scripts, or automation exploitation.</li>
          <li>No malware or harmful code uploads.</li>
          <li>No infringement on intellectual property rights.</li>
        </ul>
      </div>

      {/* 6. Payments & Fees */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">6. Payments & Fees</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>Some services are free; others require payments.</li>
          <li>All prices include GST where applicable.</li>
          <li>Payments accepted via UPI, Razorpay, cards, wallets, and net banking.</li>
          <li>Refunds are subject to our Refund & Cancellation Policy.</li>
          <li>Unjustified chargebacks may result in account suspension.</li>
        </ul>
      </div>

      {/* 7. Intellectual Property */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">7. Intellectual Property</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          All content, designs, software, and trademarks belong to Fnysta. You are granted a limited, non-transferable license for personal or business use only. Redistribution, resale, or unauthorized commercial use is prohibited.
        </p>
      </div>

      {/* 8. Astrology Disclaimer */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">8. Astrology Disclaimer</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>Services are for informational purposes only, not professional or legal advice.</li>
          <li>No guarantee of accuracy or outcomes is provided.</li>
          <li>Users are solely responsible for decisions made based on the information provided.</li>
        </ul>
      </div>

      {/* 9. Skill-Based Games */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">9. Skill-Based Games & Quizzes</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>All games are skill-based, not gambling.</li>
          <li>Results depend on knowledge, speed, and accuracy.</li>
          <li>Prizes are subject to TDS rules under the Indian Income Tax Act.</li>
        </ul>
      </div>

      {/* 10. User Content */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">10. User-Generated Content & Community Rules</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Users may post content and grant Fnysta rights to use, distribute, and display it. Fnysta reserves the right to remove or restrict content that violates these Terms or community standards.
        </p>
      </div>

      {/* 11–18 Remaining Sections */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">11. Third-Party Links</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Fnysta is not responsible for third-party websites, APIs, or payment gateways linked on the Platform.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">12. Privacy & Data Protection</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Fnysta processes personal data under the Digital Personal Data Protection (DPDP) Act, 2023. Please review our Privacy Policy for full details.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">13. Limitation of Liability</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Fnysta shall not be liable for direct, indirect, incidental, or consequential damages including data loss, financial loss, or emotional distress arising from use of our Platform.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">14. Indemnity</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          You agree to indemnify and hold Fnysta harmless from any claims, damages, liabilities, or expenses resulting from your use of the Platform or violation of these Terms.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">15. Termination & Suspension</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Fnysta may suspend or terminate your account without notice for violations of these Terms, fraudulent activity, or legal obligations.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">16. Governing Law & Dispute Resolution</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          These Terms are governed by the laws of India. Disputes will fall under the exclusive jurisdiction of the courts in [Insert City], India.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">17. Amendments</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Fnysta may revise these Terms at any time. Continued use of the Platform constitutes your acceptance of updated Terms.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800">18. Contact Information</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>Email: [Insert Official Email]</li>
          <li>Phone: [Insert Contact Number]</li>
          <li>Address: [Insert Proprietor Address]</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-600 italic">
        By using our Platform, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default PolicyTerms;
