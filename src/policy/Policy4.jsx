import React from "react";

const PolicyPrivacy = () => {
  return (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
      <p className="text-gray-600">
        <span className="font-semibold">Effective Date:</span> [Insert Date]
      </p>

      {/* Introduction */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Introduction</h3>
        <p className="mt-2 text-gray-600">
          Fnysta Technologies (“we,” “our,” “us”) values your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, store, and share your information.
        </p>
      </div>

      {/* Information We Collect */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">
          Information We Collect
        </h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>
            <span className="font-semibold">Personal Information:</span> Name,
            email, phone number, payment details (if applicable).
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span> Device info, IP
            address, pages visited, session duration.
          </li>
          <li>
            <span className="font-semibold">Voluntary Data:</span> Horoscope
            details, quiz responses, posts in communities.
          </li>
        </ul>
      </div>

      {/* How We Use Your Data */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">
          How We Use Your Data
        </h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>To provide and improve our services.</li>
          <li>To process payments and subscriptions.</li>
          <li>
            To personalize user experience (e.g., astrology charts,
            recommendations).
          </li>
          <li>
            To communicate with you (transactional emails, notifications).
          </li>
          <li>To comply with legal and regulatory obligations.</li>
        </ul>
      </div>

      {/* Data Security */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Data Security</h3>
        <p className="mt-2 text-gray-600">
          We use industry-standard encryption and secure servers to protect your
          data, but no system is 100% secure.
        </p>
      </div>

      {/* Sharing of Data */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Sharing of Data</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>With payment gateways, hosting partners, analytics providers.</li>
          <li>
            When required by law, regulatory bodies, or legal process.
          </li>
          <li>With your consent, for promotional or partner offers.</li>
        </ul>
      </div>

      {/* Your Rights */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Your Rights</h3>
        <p className="mt-2 text-gray-600">
          You can request access, correction, or deletion of your data by
          writing to us.
        </p>
      </div>

      {/* Retention */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Retention</h3>
        <p className="mt-2 text-gray-600">
          Data is retained for as long as required for business/legal purposes,
          then securely deleted.
        </p>
      </div>
    </div>
  );
};

export default PolicyPrivacy;
