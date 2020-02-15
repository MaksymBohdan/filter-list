import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ propertyList, handleAddFavorite }) => (
  <tbody>
    {propertyList.map(property => (
      <TableRow
        {...property}
        key={property.id}
        handleAddFavorite={handleAddFavorite}
      />
    ))}
  </tbody>
);

export default TableBody;
