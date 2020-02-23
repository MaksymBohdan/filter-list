import React from 'react';
import styled from 'styled-components';

import Table from './modules/Table/TableContainer';
import Header from './modules/Header/HeaderContainer';
import Pagination from './modules/Pagination/PaginationContainer';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #20bf55;
  background-image: linear-gradient(#02aab0, #00cdac);
`;

const App = () => (
  <MainContainer>
    <Header />
    <Table />
    <Pagination />
  </MainContainer>
);

export default App;
