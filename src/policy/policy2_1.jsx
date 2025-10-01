import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="space-y-10 text-left max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-4">
        Cancellation Policy
      </h2>

      {/* Subscription Cancellations */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">
          1. Subscription Cancellations
        </h3>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
          <li>
            You may cancel your subscription at any time from your account
            settings or by contacting support.
          </li>
          <li>
            Services will remain active until the end of the current billing
            cycle and will not renew automatically.
          </li>
          <li>
            Cancellations are not eligible for a pro-rated refund of unused time
            within the billing cycle.
          </li>
        </ul>
      </div>

      {/* One-Time Services */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          2. One-Time Services & Digital Products
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Once a one-time digital service (e.g., horoscope report, custom
          consultation, or digital product) has been delivered, it cannot be
          cancelled or refunded.
        </p>
      </div>

      {/* Exceptional Cancellations */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          3. Exceptional Cancellations
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          In rare cases where Fnysta cannot provide the promised service due to
          unforeseen issues, your subscription or service will be cancelled with
          a full refund.
        </p>
      </div>

      <p className="text-gray-600 italic mt-8">
        By purchasing or subscribing to our services, you acknowledge that you
        have read and agreed to this Cancellation Policy.
      </p>
    </div>
  );
};

export default CancellationPolicy;
