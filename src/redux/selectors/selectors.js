import { createSelector } from 'reselect';
import { sortList } from '../../helpers/sortingUtils';
import { filterList } from '../../helpers/filteringUtils';

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
  (list, column, direction, filterBy, pageLimit, offset) =>
    Object.values(list)
      .filter(filterList(filterBy))
      .sort(sortList(column, direction))
      .slice(offset, offset + pageLimit)
);
