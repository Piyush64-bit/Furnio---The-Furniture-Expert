import React from 'react';
import Location from './components/location';
import Wishlist_products from './components/wishlist_products';
import Quality_assurance from './components/quality_assurance';

const Wishlist = () => {
  return (
    <div>
      <Location title="WISHLIST" />
      <Wishlist_products />
      <Quality_assurance />
    </div>
  );
};

export default Wishlist;
