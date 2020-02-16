export const filterTable = (filterArr = [], byValue = '') =>
  filterArr.filter(property =>
    ['id', 'address', 'type'].some(col =>
      property[col]
        .toString()
        .toLowerCase()
        .includes(byValue.toLowerCase())
    )
  );
