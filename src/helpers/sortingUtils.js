export const sortText = name => ({
  default: (a, b) => a,
  asc: (a, b) => (a[name] > b[name] ? 1 : -1),
  dsc: (a, b) => (b[name] < a[name] ? -1 : 1)
});

export const sortNumbers = name => ({
  default: (a, b) => a,
  asc: (a, b) => a[name] - b[name],
  dsc: (a, b) => b[name] - a[name]
});

export const setNextSortDirection = currentDirection =>
  ({ default: 'asc', asc: 'dsc', dsc: 'default' }[currentDirection]);

export const setIconClass = (currentDirection, currentColumn, label) => {
  const classes = {
    default: 'fas fa-sort',
    asc: 'fas fa-sort-up',
    dsc: 'fas fa-sort-down'
  };

  if (currentColumn !== label) return classes.default;

  return classes[currentDirection];
};
