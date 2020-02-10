import React from 'react';

const Table = ({ propertyList, handleSortBy }) => {
  return (
    <table>
      <thead>
        <tr onClick={handleSortBy}>
          <th data-name="id">ID</th>
          <th data-name="address">Address</th>
          <th data-name="price">Price</th>
          <th data-name="lastUpdate">Last Update</th>
          <th data-name="type">Type</th>
          <th data-name="favorite">Favorite</th>
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
