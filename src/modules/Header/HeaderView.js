import React from 'react';
import styled from 'styled-components';

import SearchInput from '../../components/SearchInput';
import AutoSuggestion from '../../components/AutoSuggestion';
import ResetButton from '../../components/ResetButton';

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const FilterContainer = styled.div`
  margin: 10px auto;
  width: 500px;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const Header = ({
  inputValue,
  filteredList,
  handleInput,
  handleTableFilter,
  handleResetFilter
}) => (
  <>
    <Title className="app">PROPERTIES TABLE</Title>
    <FilterContainer>
      <SearchInput
        onChange={handleInput}
        value={inputValue}
        onKeyPress={handleTableFilter}
      />
      <ResetButton onReset={handleResetFilter} />
      <AutoSuggestion isOpen={!!inputValue} listToRender={filteredList} />
    </FilterContainer>
  </>
);

export default Header;
