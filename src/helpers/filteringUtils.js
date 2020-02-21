import { FILTER_COLUMNS } from '../constants/constants';

export const filterList = byValue => property =>
  FILTER_COLUMNS.some(col =>
    property[col]
      .toString()
      .toLowerCase()
      .includes(byValue.toLowerCase())
  );
