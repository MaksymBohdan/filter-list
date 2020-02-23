import React from 'react';
import styled from 'styled-components';

import { formatDate, formatCurrency } from '../helpers/textUtils';

const Tr = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background: #aed6f1;
  }
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Star = styled.span`
  border-radius: 50%;
  border: 1px solid yellow;
  padding: 2px;
  background-color: yellow;
  color: white;
`;

const TableRow = ({
  id,
  address,
  price,
  lastUpdate,
  type,
  isFavorite,
  handleAddFavorite
}) => (
  <Tr key={id}>
    <Td>{id}</Td>
    <Td>{address}</Td>
    <Td>{formatCurrency(price)}</Td>
    <Td>{formatDate(lastUpdate)}</Td>
    <Td>{type}</Td>
    <Td onClick={() => handleAddFavorite(id)}>
      {isFavorite ? (
        <Star>
          <i class="far fa-star" />{' '}
        </Star>
      ) : (
        <span>-</span>
      )}
    </Td>
  </Tr>
);

export default TableRow;
