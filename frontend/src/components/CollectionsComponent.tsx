import React from 'react';
import { products } from '../assets/assets';
import Product from '../interfaces/product/IProduct';
import Card from './Card';
import CustomHeading from './CustomHeading';
const CollectionsComponent: React.FC = () => {
  const productsArray: Product[] = products;
  const head={
    t1:"ALL",
    t2:"COLLECTIONS"
  }
  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-12">
        <CustomHeading
        {...head}
        ></CustomHeading>
        <div>
          <select 
            className="min-w-[200px] p-2 border border-light-secondary rounded focus:outline-none focus:border-light-accent"
            defaultValue="relevant"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsArray.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsComponent