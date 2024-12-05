import  { FC } from "react";

const CartTotal: FC = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            <span className="text-gray-400">CART</span> TOTAL
          </h2>
          <div className="mx-auto mt-1 h-1 w-12 bg-black"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$160.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>$10.00</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>$170.00</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="w-full bg-black py-3 text-white rounded">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
