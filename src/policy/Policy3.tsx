import React from "react";

const PolicyTerms = () => {
  return (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold text-gray-800">Terms & Conditions</h2>
      <p className="text-gray-600">
        <span className="font-semibold">Effective Date:</span> [Insert Date]
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Company:</span> Fnysta Technologies (Sole Proprietorship)
      </p>

      {/* 1. Definitions */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">1. Definitions</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
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
        <h3 className="text-xl font-semibold text-gray-700">2. Acceptance of Terms</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>You have read, understood, and consent to be legally bound by these Terms.</li>
          <li>You are at least 18 years old (or of legal age as per applicable law) and legally competent.</li>
          <li>You will use the Platform in compliance with Indian laws and international regulations.</li>
        </ul>
        <p className="mt-2 text-gray-600">If you do not agree, you must stop using the Platform immediately.</p>
      </div>

      {/* 3. Scope of Services */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">3. Scope of Services</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
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
        <h3 className="text-xl font-semibold text-gray-700">4. Eligibility & Registration</h3>
        <p className="mt-2 text-gray-600">
          You must be legally capable of entering into binding contracts under the Indian Contract Act, 1872.
        </p>
        <p className="mt-2 text-gray-600">
          Certain services require account registration with accurate details. You are responsible for your account and credentials.
        </p>
      </div>

      {/* 5. User Obligations */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">5. User Obligations</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>No defamatory, obscene, or illegal content.</li>
          <li>No harassment or threats toward users.</li>
          <li>No bots, scripts, or automation exploitation.</li>
          <li>No malware or harmful code uploads.</li>
          <li>No infringement on intellectual property rights.</li>
        </ul>
      </div>

      {/* 6. Payments & Fees */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">6. Payments & Fees</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Some services are free; others require payments.</li>
          <li>All prices include GST where applicable.</li>
          <li>Payments accepted via UPI, Razorpay, cards, wallets, and net banking.</li>
          <li>Refunds as per Refund & Cancellation Policy.</li>
          <li>Unjustified chargebacks may lead to suspension.</li>
        </ul>
      </div>

      {/* 7. Intellectual Property */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">7. Intellectual Property</h3>
        <p className="mt-2 text-gray-600">
          All content, designs, software, and trademarks belong to Fnysta. Limited license is granted for personal or business use only.
        </p>
      </div>

      {/* 8. Astrology Disclaimer */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">8. Astrology Disclaimer</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Services are for informational purposes, not professional advice.</li>
          <li>No guarantee of accuracy or outcomes.</li>
          <li>Users are responsible for decisions made.</li>
        </ul>
      </div>

      {/* 9. Skill-Based Games */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">9. Skill-Based Games & Quizzes</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Games are skill-based, not gambling.</li>
          <li>Results depend on knowledge, speed, and accuracy.</li>
          <li>Prizes follow TDS rules under Income Tax Act.</li>
        </ul>
      </div>

      {/* 10. User Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">10. User-Generated Content & Community Rules</h3>
        <p className="mt-2 text-gray-600">
          Users may post content and grant Fnysta rights to use and display it. Fnysta may remove content that violates terms.
        </p>
      </div>

      {/* 11. Third-Party Links */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">11. Third-Party Links</h3>
        <p className="mt-2 text-gray-600">
          Fnysta is not responsible for third-party websites, APIs, or payment gateways.
        </p>
      </div>

      {/* 12. Privacy */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">12. Privacy & Data Protection</h3>
        <p className="mt-2 text-gray-600">
          Fnysta processes personal data under DPDP Act, 2023. See our Privacy Policy for details.
        </p>
      </div>

      {/* 13. Limitation of Liability */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">13. Limitation of Liability</h3>
        <p className="mt-2 text-gray-600">
          Fnysta is not liable for damages, including data loss, financial loss, or emotional distress.
        </p>
      </div>

      {/* 14. Indemnity */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">14. Indemnity</h3>
        <p className="mt-2 text-gray-600">
          You agree to indemnify Fnysta from claims, liabilities, or expenses arising from your use of the Platform or violation of Terms.
        </p>
      </div>

      {/* 15. Termination */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">15. Termination & Suspension</h3>
        <p className="mt-2 text-gray-600">
          Fnysta may suspend or terminate accounts for violations, fraud, or legal requirements.
        </p>
      </div>

      {/* 16. Governing Law */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">16. Governing Law & Dispute Resolution</h3>
        <p className="mt-2 text-gray-600">
          Governed by Indian laws. Disputes fall under jurisdiction of courts in [Insert City], India.
        </p>
      </div>

      {/* 17. Amendments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">17. Amendments</h3>
        <p className="mt-2 text-gray-600">
          Fnysta may update Terms. Continued use constitutes acceptance.
        </p>
      </div>

      {/* 18. Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">18. Contact Information</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Email: [Insert Official Email]</li>
          <li>Phone: [Insert Contact Number]</li>
          <li>Address: [Insert Proprietor Address]</li>
        </ul>
      </div>
    </div>
  );
};

export default PolicyTerms;
