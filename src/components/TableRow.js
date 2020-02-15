import React from 'react';
import { formatDate, formatCurrency } from '../helpers/textUtils';

const TableRow = ({
  id,
  address,
  price,
  lastUpdate,
  type,
  isFavorite,
  handleAddFavorite
}) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{address}</td>
      <td>{formatCurrency(price)}</td>
      <td>{formatDate(lastUpdate)}</td>
      <td>{type}</td>
      <td onClick={() => handleAddFavorite(id)}>{isFavorite ? 'yes' : 'no'}</td>
    </tr>
  );

export default TableRow;
