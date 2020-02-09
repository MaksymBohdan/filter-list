import React from 'react';

const Table = ({ propertyList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>Price</th>
          <th>Last Update</th>
          <th>Type</th>
          <th>Favorite</th>
        </tr>
      </thead>
      <tbody>
        {propertyList.map(({ id, address, price, lastUpdate, type }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{address}</td>
            <td>{price}</td>
            <td>{lastUpdate}</td>
            <td>{type}</td>
            <td>NO</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
