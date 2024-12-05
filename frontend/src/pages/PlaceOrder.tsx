import { FC } from "react";
import CartTotal from "../components/CartTotal";
import DeliveryInfo from "../components/DeliveryInfo";
import PaymentMethod from "../components/PaymentMethod";

const PlaceOrder: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-6">
      <div className="flex-1 lg:mr-8 mb-6 lg:mb-0">
        <DeliveryInfo />
      </div>
      <div className="flex-1 flex flex-col space-y-4">
        <CartTotal />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default PlaceOrder;
