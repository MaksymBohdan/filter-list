import React from 'react';
import { formatDate, formatCurrency } from '../helpers/textUtils';

const TableBody = ({ propertyList, handleAddFavorite }) => (
  <tbody>
    {propertyList.map(
      ({ id, address, price, lastUpdate, type, isFavorite = false }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{address}</td>
          <td>{formatCurrency(price)}</td>
          <td>{formatDate(lastUpdate)}</td>
          <td>{type}</td>
          <td onClick={() => handleAddFavorite(id)}>
            {isFavorite ? 'yes' : 'no'}
          </td>
        </tr>
      )
    )}
  </tbody>
);

export default TableBody;
