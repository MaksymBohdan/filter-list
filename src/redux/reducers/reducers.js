import * as types from '../types/types';

const initialProperty = {};

export const property = (state = initialProperty, { type, payload }) => {
  switch (type) {
    case types.ADD_PROPERTY:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};

const initialSortBy = {
  column: 'id',
  direction: 'default'
};

export const sortBy = (state = initialSortBy, { type, payload }) => {
  switch (type) {
    case types.SORT_BY:
      return { ...payload };

    default:
      return state;
  }
};
