import { createSelector } from 'reselect';
import { sortText, sortNumbers } from '../../helpers/sortingUtils';

const property = state => state.property;
export const currentColumn = state => state.sortBy.column;
export const currentDirection = state => state.sortBy.direction;

export const propertyList = createSelector(
  [property, currentColumn, currentDirection],
  (list, column, direction) =>
    Object.values(list).sort((a, b) =>
      typeof a[column] === 'string'
        ? sortText(column)[direction](a, b)
        : sortNumbers(column)[direction](a, b)
    )
);
