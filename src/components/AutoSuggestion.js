import React from 'react';
import styled from 'styled-components';

import { formatCurrency } from '../helpers/textUtils';

const SuggestionList = styled.ul`
  width: 600px;
  background-color: white;
  padding: 5px;
  position: absolute;
  top: 40px;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 8px 6px -6px black;
`;

const SuggestionElement = styled.li`
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

const AutoSuggestion = ({ isOpen, listToRender }) =>
  isOpen && (
    <SuggestionList>
      {listToRender.length === 0
        ? 'No mached properties..'
        : listToRender.map(({ id, address, type, price }) => (
            <SuggestionElement key={id}>
              <Span>ID: </Span> {id}
              <Span> INFO: </Span> {address} {type}
              <Span> PRICE: </Span>
              {formatCurrency(price)}
            </SuggestionElement>
          ))}
    </SuggestionList>
  );

export default AutoSuggestion;
