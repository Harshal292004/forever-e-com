import React, { FC } from 'react';
import Order from '../interfaces/user/IOrder';

const OrderComponent: FC<Order> = ({ image, name, price, quantity, size, date }) => {
  const convertTimeStamp = (time: number): string => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <div className='border-t-2 border-b-2 border-gray-400 w-full flex flex-row justify-around py-4'>
      {/* Image and details */}
      <div className='flex flex-row space-x-4'>
        <img src={image} alt={name} className="w-20 h-20 object-cover" />
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-sm">{name}</p>
          <div className="flex flex-row space-x-3 justify-around">
            <p>${price}</p>
            <p>{quantity}</p>
            <p>{size}</p>
          </div>
          <p>Date: {convertTimeStamp(date)}</p>
        </div>
      </div>

      {/* Select amount */}
      <div className="border px-2 py-1">
        <input type="number" className="w-12 text-center" />
      </div>
    </div>
  );
};

export default OrderComponent;
