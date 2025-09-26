import React from "react";

const PolicyRefund = () => {
  return (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold text-gray-800">
        Refund & Cancellation Policy
      </h2>

      {/* Paid Services Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Paid Services</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Subscriptions and paid services are billed in advance.</li>
          <li>
            <span className="font-semibold">Refunds:</span> Not provided once a
            service is consumed or a subscription term has started.
          </li>
          <li>
            <span className="font-semibold">Cancellations:</span> Can be
            requested any time; your service will continue until the end of the
            billing cycle.
          </li>
        </ul>
      </div>

      {/* Exceptional Refunds Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">
          Exceptional Refunds
        </h3>
        <p className="mt-2 text-gray-600">
          Refunds may be granted only in cases of:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
          <li>Duplicate transaction charged.</li>
          <li>
            Failure of service from our end for more than{" "}
            <span className="font-semibold">72 hours</span>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PolicyRefund;
