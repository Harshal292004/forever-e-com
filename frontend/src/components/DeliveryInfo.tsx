import { FC } from "react";


const DeliveryInfo: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center font-semibold text-lg mb-3">
        <span className="text-gray-700">DELIVERY</span> <span>INFORMATION</span>
        <div className="w-10 h-1 bg-black"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-2"
          type="text"
          placeholder="First name"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Last name"
        />
        <input
          className="border p-2 col-span-2"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border p-2 col-span-2"
          type="text"
          placeholder="Street"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="City"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="State"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Zipcode"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Country"
        />
        <input
          className="border p-2 col-span-2"
          type="text"
          placeholder="Phone"
        />
      </div>
    </div>
  );
};

export default DeliveryInfo;
