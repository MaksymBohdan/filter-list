import React, { memo } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  border-radius: 5px;
  padding: 10px 20px;
  line-height: 20px;
  outline: none;
  border: none;
`;

const SearchInput = ({ value, onChange, onKeyPress }) => (
  <Input
    type="text"
    onChange={onChange}
    value={value}
    onKeyPress={onKeyPress}
    placeholder="filter properties..."
  />
);

export default memo(SearchInput);
