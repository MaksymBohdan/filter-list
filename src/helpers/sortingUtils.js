import {
  DEFAULT,
  ASC,
  DSC,
  ARROW_DEFAULT,
  ARROW_DOWN,
  ARROW_UP
} from '../constants/constants';

const sortFavorite = (a, b, sortFn) => {
  if (a.isFavorite || b.isFavorite) {
    if (a.isFavorite && !b.isFavorite) {
      return -1;
    }
    if (!a.isFavorite && b.isFavorite) {
      return 1;
    }
    return 0;
  }
  return sortFn;
};

const sortText = name => ({
  default: (a, b) => sortFavorite(a, b, a),
  asc: (a, b) => sortFavorite(a, b, a[name] > b[name] ? 1 : -1),
  dsc: (a, b) => sortFavorite(a, b, b[name] < a[name] ? -1 : 1)
});

const sortNumbers = name => ({
  [DEFAULT]: (a, b) => sortFavorite(a, b, a),
  [ASC]: (a, b) => sortFavorite(a, b, a[name] - b[name]),
  [DSC]: (a, b) => sortFavorite(a, b, b[name] - a[name])
});

export const sortList = (column, direction) => (a, b) =>
  typeof a[column] === 'string'
    ? sortText(column)[direction](a, b)
    : sortNumbers(column)[direction](a, b);

export const setNextSortDirection = currentDirection =>
  ({ [DEFAULT]: ASC, [ASC]: DSC, [DSC]: DEFAULT }[currentDirection]);

export const setIconClass = (currentDirection, currentColumn, label) => {
  const classes = {
    [DEFAULT]: ARROW_DEFAULT,
    [ASC]: ARROW_DOWN,
    [DSC]: ARROW_UP
  };

  if (currentColumn !== label) return classes.default;

  return classes[currentDirection];
};
