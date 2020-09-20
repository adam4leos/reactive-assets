import { combineReducers } from 'redux';
import { assetsReducer } from './assets.duck';

const rootReducer = combineReducers({
  assets: assetsReducer,
});

export default rootReducer;
