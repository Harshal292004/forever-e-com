import React, { FC } from "react";
import OrderComponent from "../components/OrderComponent";
import Order from "../interfaces/Order";

const Orders: FC = () => {
  const orderArray: Order[] = [
    {
      image: "https://example.com/image1.jpg",
      name: "Item 1",
      price: 100,
      quantity: 1,
      size: "L",
      date: 1627849200000,
      orderState: 'Placed',
    },
    {
      image: "https://example.com/image2.jpg",
      name: "Item 2",
      price: 200,
      quantity: 2,
      size: "M",
      date: 1627849200000,
      orderState: 'Ready to ship',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div>
        {orderArray.map((order, index) => (
          <OrderComponent key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
