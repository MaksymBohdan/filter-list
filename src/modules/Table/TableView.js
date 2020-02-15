import React from 'react';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';

const Table = ({
  propertyList = [],
  handleSortBy,
  currentDirection,
  currentColumn,
  handleAddFavorite
}) => (
  <table>
    <TableHead
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

export default Table;
