// Action Types
export const CREATE_ASSET = 'CREATE_ASSET';
export const LOAD_ASSETS = 'LOAD_ASSETS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_FILTER_BY = 'SET_FILTER_BY';

const defaultState = {
  items: {},
  sortBy: {
    type: 'id',
    positiveDirection: true,
  },
  filterBy: '',
};

// Actions
export const createAsset = (asset) => ({
  type: CREATE_ASSET,
  payload: asset,
});

export const loadAssets = () => ({
  type: LOAD_ASSETS,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

// Reducers
export const assetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state[action.payload.id],
            ...action.payload,
          },
        },
      };

    case SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          type: action.payload,
          positiveDirection: !state.sortBy.positiveDirection,
        },
      };

    case SET_FILTER_BY: {
      return {
        ...state,
        filterBy: action.payload,
      };
    }

    default:
      return state;
  }
};
