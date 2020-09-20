import React from 'react';

const AssetTableItemComponent = ({ assetData }) => {
  const { id, assetName, price, lastUpdate, type } = assetData;

  return (
    <tr>
      <td>{id}</td>
      <td>{assetName}</td>
      <td>{price}</td>
      <td>{lastUpdate}</td>
      <td>{type}</td>
    </tr>
  );
};

export const AssetTableItem = AssetTableItemComponent;
