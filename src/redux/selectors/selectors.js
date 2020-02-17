import { createSelector } from 'reselect';
import { sortText, sortNumbers } from '../../helpers/sortingUtils';
import { filterTable } from '../../helpers/filteringUtils';

export const allProperties = state => state.property;
export const currentColumn = state => state.sortBy.column;
export const currentDirection = state => state.sortBy.direction;

export const paginationAttributes = state => state.pagination;
const pageLimit = state => state.pagination.pageLimit;
const offset = createSelector(
  [paginationAttributes, pageLimit],
  (pagination, limit) => (pagination.currentPage - 1) * limit
);

const filterBy = state => state.filterBy;

export const propertyList = createSelector(
  [allProperties, currentColumn, currentDirection, filterBy, pageLimit, offset],
  (list, column, direction, filterValue, pageLimit, offset) =>
    filterTable(
      Object.values(list).sort((a, b) =>
        typeof a[column] === 'string'
          ? sortText(column)[direction](a, b)
          : sortNumbers(column)[direction](a, b)
      ),
      filterValue
    ).slice(offset, offset + pageLimit)
);
