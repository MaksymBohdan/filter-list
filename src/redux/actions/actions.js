import * as types from './types';

export const addProperties = list => ({
  type: types.ADD_PROPERTY,
  payload: list
});

export const addSortBy = sortData => ({
  type: types.SORT_BY,
  payload: sortData
});
