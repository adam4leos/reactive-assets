import 'rxjs/add/operator/filter';

import { LOAD_ASSETS, createAsset } from '../assets.duck';
import { mockData } from '../../mockData';

const assetsMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ASSETS:
      mockData.subscribe((asset) => {
        store.dispatch(createAsset(asset));
      });
      break;

    default:
      break;
  }

  return next(action);
};

export default assetsMiddleWare;
