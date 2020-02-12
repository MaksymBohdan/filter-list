import React from 'react';
import { formatDate, formatCurrency } from '../helpers/textUtils';

const TableBody = ({ propertyList }) => (
  <tbody>
    {propertyList.map(({ id, address, price, lastUpdate, type }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{address}</td>
        <td>{formatCurrency(price)}</td>
        <td>{formatDate(lastUpdate)}</td>
        <td>{type}</td>
        <td>NO</td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
