import Filters from '../components/Filters'
import CollectionsComponent from '../components/CollectionsComponent'
import React from 'react';
const Collection: React.FC = () => {
  return (
    <div className="mt-10 max-w-[1440px] mx-auto">
      <div className="flex">
        <Filters />
        <CollectionsComponent />
      </div>
    </div>
  );
};

export default Collection
