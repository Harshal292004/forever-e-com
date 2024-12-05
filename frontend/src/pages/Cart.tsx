// Cart.tsx
import React from 'react';
import { products } from '../assets/assets';
import CartComponent from '../components/CartComponent';
import CartTotal from '../components/CartTotal';

const Cart: React.FC = () => {
  const arrayProd = products.slice(0, 3);

  return (
    <div className="container mx-auto py-10">

      <div className='justify-around font-semibold text-lg mb-3'>
        <span className='text-gray-100'>YOUR</span> CART <div className='w-3 h-1 bg-black'></div>
      </div>
      {arrayProd.map((item) => (
        <CartComponent key={item._id} {...item} />
      ))}
      <div className='mt-3'>
        <CartTotal />
      </div>
      
    </div>
  );
};

export default Cart;