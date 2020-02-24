import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import styled from 'styled-components';

import { formatCurrency } from '../helpers/textUtils';
import '../index.css';

const Container = styled.div`
  position: absolute;
  width: 600px;
  background-color: white;
  padding: 5px;
  top: 40px;
  border: 1px solid black;
  box-shadow: 0 8px 6px -6px black;
  height: 300px;
`;

const SuggestionElement = styled.div`
  padding: 6px 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: #aed6f1;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

const AutoSuggestion = ({ isOpen, filteredList }) => {
  const Row = ({ index, style }) => {
    if (!filteredList.length) return;

    const { id, address, price, type } = filteredList[index];

    return (
      <SuggestionElement style={style}>
        <Span>ID: </Span> {id}
        <Span> INFO: </Span> {address} {type}
        <Span> PRICE: </Span>
        {formatCurrency(price)}
      </SuggestionElement>
    );
  };

  return (
    isOpen && (
      <Container>
        {filteredList.length ? (
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                itemCount={filteredList.length}
                itemSize={40}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        ) : (
          <SuggestionElement>
            <Span>No matches...</Span>
          </SuggestionElement>
        )}
      </Container>
    )
  );
};

export default AutoSuggestion;
