import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({
  propertyList = [],
  handleSortBy,
  currentDirection,
  currentColumn,
  handleAddFavorite
}) => {
  const tableLabels = [
    'id',
    'address',
    'price',
    'lastUpdate',
    'type',
    'favorite'
  ];

  return (
    <table>
      <TableHead
        tableLabels={tableLabels}
        handleSortBy={handleSortBy}
        currentDirection={currentDirection}
        currentColumn={currentColumn}
      />
      <TableBody
        propertyList={propertyList}
        handleAddFavorite={handleAddFavorite}
      />
    </table>
  );
};

export default Table;
