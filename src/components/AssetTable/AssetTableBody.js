import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAssets } from '../../redux/assets.duck';

import { AssetTableItem } from './AssetTableItem';

const AssetTableBodyComponent = ({ items, sortBy, loadAssets }) => {
  useEffect(() => {
    loadAssets();
  }, [loadAssets]);
  const { type, positiveDirection } = sortBy;
  const entries = Object.entries(items).sort(([id, obj], [id2, obj2]) =>
    positiveDirection ? obj2[type] - obj[type] : obj[type] - obj2[type],
  );

  return (
    <tbody>
      {entries.map(([assetID, assetData]) => (
        <AssetTableItem assetData={assetData} key={assetID} />
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.assets.items,
    sortBy: state.assets.sortBy,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadAssets: () => dispatch(loadAssets()),
});

export const AssetTableBody = connect(mapStateToProps, mapDispatchToProps)(AssetTableBodyComponent);
