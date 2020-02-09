import * as types from './types';

export const addProperties = list => ({
  type: types.ADD_PROPERTY,
  payload: list
});
