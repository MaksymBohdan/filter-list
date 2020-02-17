import * as types from '../types/types';

const initialProperty = {};

export const property = (state = initialProperty, { type, payload }) => {
  switch (type) {
    case types.ADD_PROPERTY:
      return { ...payload };

    case types.MANAGE_FAVORITE:
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
  totalRecords: 0,
  pageLimit: 10,
  pageNeighbours: 2,
  pointerStep: 2
};

export const pagination = (state = initialPagination, { type, payload }) => {
  switch (type) {
    case types.ADD_PROPERTY:
      return { ...state, totalRecords: Object.keys(payload).length };

    case types.SET_PAGE:
      return { ...state, currentPage: payload };
      
    default:
      return state;
  }
};
