import React from 'react';
import styled from 'styled-components';

const Overlay = styled.h1`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const Spinner = ({ loading, children }) =>
  loading ? <Overlay>LOADING....</Overlay> : children;

export default Spinner;
