import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({
  propertyList = [],
  handleSortBy,
  currentDirection,
  currentColumn
}) => {
  const tableLabels =
    (propertyList.length > 0 && Object.keys(propertyList[0])) || [];

  return (
    <table>
      <TableHead
        tableLabels={tableLabels}
        handleSortBy={handleSortBy}
        currentDirection={currentDirection}
        currentColumn={currentColumn}
      />
      <TableBody propertyList={propertyList} />
    </table>
  );
};

export default Table;
