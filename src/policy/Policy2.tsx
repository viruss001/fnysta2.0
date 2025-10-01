import React from "react";

const RefundPolicy = () => {
  return (
    <div className="space-y-10 text-left max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-4">
        Refund Policy
      </h2>

      {/* Paid Services Refunds */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">
          1. Paid Services & Subscriptions
        </h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>
            All subscriptions and paid services are billed{" "}
            <span className="font-semibold">in advance</span>.
          </li>
          <li>
            <span className="font-semibold">Refunds:</span> Once a service is
            consumed or a subscription period has started, refunds will{" "}
            <span className="underline">not</span> be issued.
          </li>
          <li>
            <span className="font-semibold">Trials:</span> If a trial period is
            offered, charges will only apply after the trial ends unless
            cancelled before renewal.
          </li>
        </ul>
      </div>

      {/* Exceptional Refunds */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          2. Exceptional Refunds
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Refunds may be granted only in the following exceptional
          circumstances:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>Accidental duplicate payment or double billing.</li>
          <li>
            Prolonged failure of service from our end lasting more than{" "}
            <span className="font-semibold">72 consecutive hours</span>.
          </li>
          <li>
            Technical errors that prevent access to the purchased service
            despite multiple support attempts.
          </li>
        </ul>
      </div>

      {/* Non-Refundable Items */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          3. Non-Refundable Items
        </h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>One-time setup or activation fees.</li>
          <li>Partially used subscription periods.</li>
          <li>
            Customized services or digital products delivered upon purchase.
          </li>
        </ul>
      </div>

      {/* Request Refund */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          4. Requesting a Refund
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          To request a refund, please contact our{" "}
          <span className="font-semibold">support team</span> at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 underline"
          >
            support@example.com
          </a>{" "}
          within <span className="font-semibold">7 days</span> of the
          transaction. Include your transaction ID, registered email, and reason
          for the request.
        </p>
      </div>

      {/* Processing Timeline */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          5. Processing Timeline
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Approved refunds will be processed within{" "}
          <span className="font-semibold">5–10 business days</span>. The amount
          will be credited back to your original payment method, depending on
          your bank or payment provider.
        </p>
      </div>

      <p className="text-gray-600 italic mt-8">
        By subscribing to or purchasing our services, you agree to this Refund
        Policy.
      </p>
    </div>
  );
};

export default RefundPolicy;
