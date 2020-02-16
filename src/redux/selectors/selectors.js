import { createSelector } from 'reselect';
import { sortText, sortNumbers } from '../../helpers/sortingUtils';
import { filterTable } from '../../helpers/filteringUtils';

export const allProperties = state => state.property;
export const currentColumn = state => state.sortBy.column;
export const currentDirection = state => state.sortBy.direction;
const filterBy = state => state.filterBy;

export const propertyList = createSelector(
  [allProperties, currentColumn, currentDirection, filterBy],
  (list, column, direction, filterValue) =>
    filterTable(
      Object.values(list).sort((a, b) =>
        typeof a[column] === 'string'
          ? sortText(column)[direction](a, b)
          : sortNumbers(column)[direction](a, b)
      ),
      filterValue
    )
);
