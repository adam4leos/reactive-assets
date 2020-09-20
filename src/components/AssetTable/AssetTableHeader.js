import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { setSortBy } from '../../redux/assets.duck';

const AssetsTableHeaderComponent = ({ setSortBy }) => {
  const onClickSetCategoryFilterMovie = useCallback(
    ({ target }) => {
      setSortBy(target.getAttribute('type'));
    },
    [setSortBy],
  );

  return (
    <thead>
      <tr onClick={onClickSetCategoryFilterMovie}>
        <th type="id">Id</th>
        <th type="name">Asset name</th>
        <th type="price">Price</th>
        <th type="update">Last update</th>
        <th type="type">Type</th>
      </tr>
    </thead>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSortBy: (sortByType) => dispatch(setSortBy(sortByType)),
});

export const AssetTableHeader = connect(null, mapDispatchToProps)(AssetsTableHeaderComponent);
