import React from 'react';

import { AssetTableBody } from './AssetTableBody';
import { AssetTableHeader } from './AssetTableHeader';
import './AssetTable.css';

export const AssetTable = () => {
  return (
    <table>
      <AssetTableHeader />
      <AssetTableBody />
    </table>
  );
};
