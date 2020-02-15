import * as types from '../types/types';

export const addProperties = list => ({
  type: types.ADD_PROPERTY,
  payload: list
});

export const manageFavorite = property => ({
  type: types.MANAGE_FAVORITE,
  payload: property
});

export const addSortBy = sortData => ({
  type: types.SORT_BY,
  payload: sortData
});
