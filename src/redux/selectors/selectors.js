import { createSelector } from 'reselect';
import { sortList } from '../../helpers/sortingUtils';
import { filterList } from '../../helpers/filteringUtils';

// TABLE
export const allProperties = state => state.property;
export const currentColumn = state => state.sortBy.column;
export const currentDirection = state => state.sortBy.direction;

// PAGINATION
export const currentPage = state => state.pagination.currentPage;
export const pageLimit = state => state.pagination.pageLimit;
const offset = createSelector(
  [currentPage, pageLimit],
  (page, limit) => (page - 1) * limit
);

// FILTER
const filterBy = state => state.filterBy;

// LISTS
export const propertyList = createSelector(
  [allProperties, currentColumn, currentDirection, filterBy, offset, pageLimit],
  (list, column, direction, filterBy, offset, limit) =>
    Object.values(list)
      .filter(filterList(filterBy))
      .sort(sortList(column, direction))
      .slice(offset, offset + limit)
);

export const totalRecords = createSelector(
  [allProperties, filterBy],
  (updatedList, filterBy) =>
    Object.values(updatedList).filter(filterList(filterBy)).length
);
