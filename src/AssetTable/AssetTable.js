import React, { useState, useEffect } from 'react';

import { mockData } from '../mockData';

export default function AssetTable() {
  const [assets, addAsset] = useState([]);

  useEffect(() => {
    const subscription = mockData.subscribe((asset) => {
      //console.log(asset, assets);
      //addAsset([...assets, asset]);
    });

    return () => subscription.unsubscribe();
  });

  return (
    <div>
      Hahaha{' '}
      {assets.forEach(({ id, price }) => (
        <div>
          <span>{id}</span>
          <span>{price}</span>
        </div>
      ))}
    </div>
  );
}
