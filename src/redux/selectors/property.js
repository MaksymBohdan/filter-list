import { createSelector } from 'reselect';

const property = state => state.property;

export const propertyList = createSelector(property, list =>
  Object.values(list)
);

