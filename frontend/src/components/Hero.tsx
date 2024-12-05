// Hero.tsx
import React from 'react';
import { assets, products } from '../assets/assets';
import Product from '../interfaces/Product';
import Card from './Card';

const Hero = () => {
  const { hero_img } = assets;
  const latestArray: Product[] = [...products].sort((a, b) => b.date - a.date).slice(0, 10);
  const bestSellerArray: Product[] = products.filter((item) => item.bestseller).slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row border-b border-light-secondary/20">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-24 px-6 lg:px-12">
          <div className="text-light-primary text-center sm:text-left max-w-xl">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-8 md:w-12 h-[2px] bg-light-primary"></div>
              <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
            </div>
            <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight py-6">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <div className="w-8 md:w-12 h-[2px] bg-light-primary"></div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img className="w-full h-full object-cover" src={hero_img} alt="Latest Collection" />
        </div>
      </div>

      {/* Products Sections Container */}
      <div className="container mx-auto px-6">
        {/* Latest Collections */}
        <section className="py-16">
          <h2 className="text-xl font-semibold text-light-primary border-b border-light-secondary/20 pb-4 mb-8">
            LATEST COLLECTIONS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {latestArray.map((item) => (
              <Card key={item._id} {...item} />
            ))}
          </div>
        </section>

        {/* Best Seller */}
        <section className="py-16">
          <h2 className="text-xl font-semibold text-light-primary border-b border-light-secondary/20 pb-4 mb-8">
            BEST SELLER
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestSellerArray.map((item) => (
              <Card key={item._id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;