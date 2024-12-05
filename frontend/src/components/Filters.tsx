import React from 'react';

const Filters: React.FC = () => {
  return (
    <div className="w-64 p-8">
      <h2 className="text-2xl font-bold text-light-primary mb-8">FILTERS</h2>
      
      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-light-primary mb-4">CATEGORIES</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">Men</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">Women</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">kids</span>
          </label>
        </div>
      </div>

      {/* Type Section */}
      <div>
        <h3 className="text-lg font-semibold text-light-primary mb-4">TYPE</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">Topwear</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">Bottomwear</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-2 border-light-secondary rounded" />
            <span className="text-light-secondary">Winterwear</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Filters;
