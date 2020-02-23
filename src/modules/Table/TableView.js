import React from 'react';
import styled from 'styled-components';

import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';

const StyledTable = styled.table`
  margin: auto;
  width: 800px;
`;

const Table = ({
  propertyList = [],
  handleSortBy,
  currentDirection,
  currentColumn,
  handleAddFavorite
}) => (
  <StyledTable>
    <TableHead
      handleSortBy={handleSortBy}
      currentDirection={currentDirection}
      currentColumn={currentColumn}
    />
    <TableBody
      propertyList={propertyList}
      handleAddFavorite={handleAddFavorite}
    />
  </StyledTable>
);

export default Table;
