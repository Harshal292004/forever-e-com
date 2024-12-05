import React from 'react';
import Product from '../interfaces/Product';

const Card: React.FC<Product> = (props:Product) => {
  return (
    <div className="group w-[200px]  bg-white   overflow-hidden ">
      
      <div className="relative aspect-square overflow-hidden">
        <img
          src={props.image[0]}
          className="transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-light-primary truncate">
          {props.name}
        </h3>
        <div className="pt-2">
          <span className="text-xl font-bold text-light-primary">
            ${props.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;