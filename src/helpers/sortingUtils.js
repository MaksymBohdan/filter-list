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

export const sortText = name => ({
  default: (a, b) => sortFavorite(a, b, a),
  asc: (a, b) => sortFavorite(a, b, a[name] > b[name] ? 1 : -1),
  dsc: (a, b) => sortFavorite(a, b, b[name] < a[name] ? -1 : 1)
});

export const sortNumbers = name => ({
  default: (a, b) => sortFavorite(a, b, a),
  asc: (a, b) => sortFavorite(a, b, a[name] - b[name]),
  dsc: (a, b) => sortFavorite(a, b, b[name] - a[name])
});

export const setNextSortDirection = currentDirection =>
  ({ default: 'asc', asc: 'dsc', dsc: 'default' }[currentDirection]);

export const setIconClass = (currentDirection, currentColumn, label) => {
  const classes = {
    default: 'fas fa-sort',
    asc: 'fas fa-sort-down',
    dsc: 'fas fa-sort-up'
  };

  if (currentColumn !== label) return classes.default;

  return classes[currentDirection];
};
