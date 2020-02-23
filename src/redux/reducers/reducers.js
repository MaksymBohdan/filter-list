import * as types from '../types/types';
import merge from 'lodash.merge';

const initialProperty = {};

export const property = (state = initialProperty, { type, payload }) => {
  switch (type) {
    case types.ADD_PROPERTY:
      return merge({}, state, payload);

    case types.MANAGE_FAVORITE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          isFavorite: !state[payload].favorite
        }
      };

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

const initialFilterBy = '';
export const filterBy = (state = initialFilterBy, { type, payload }) => {
  switch (type) {
    case types.FILTER_BY:
      return payload;

    default:
      return state;
  }
};

const initialPagination = {
  currentPage: 1,
  pageLimit: 10
};

export const pagination = (state = initialPagination, { type, payload }) => {
  switch (type) {
    case types.SET_PAGE:
      return { ...state, currentPage: payload };

    default:
      return state;
  }
};
