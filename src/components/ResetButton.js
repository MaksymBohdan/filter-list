import React, { memo } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  outline: none;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

const ResetButton = ({ onReset }) => (
  <Button type="button" onClick={onReset}>
    Reset Search
  </Button>
);

export default memo(ResetButton);
