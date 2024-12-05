import React, { FC, useState } from "react";

const PaymentMethod: FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("razorpay");

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-center">
        <span className="text-gray-400">PAYMENT</span> METHOD
      </h2>
      <div className="mx-auto mt-1 h-1 w-12 bg-black"></div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="stripe"
            name="payment"
            value="stripe"
            checked={selectedPayment === "stripe"}
            onChange={() => setSelectedPayment("stripe")}
            className="mr-2"
          />
          <label htmlFor="stripe" className="cursor-pointer">
            Stripe
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="razorpay"
            name="payment"
            value="razorpay"
            checked={selectedPayment === "razorpay"}
            onChange={() => setSelectedPayment("razorpay")}
            className="mr-2"
          />
          <label htmlFor="razorpay" className="cursor-pointer">
            Razorpay
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="cod"
            name="payment"
            value="cod"
            checked={selectedPayment === "cod"}
            onChange={() => setSelectedPayment("cod")}
            className="mr-2"
          />
          <label htmlFor="cod" className="cursor-pointer">
            Cash on Delivery
          </label>
        </div>
      </div>

      <button className="mt-6 w-full bg-black text-white py-3 rounded">
        PLACE ORDER
      </button>
    </div>
  );
};

export default PaymentMethod;
