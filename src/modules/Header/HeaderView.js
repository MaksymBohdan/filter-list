import React from 'react';
import SearchInput from '../../components/SearchInput';
import AutoSuggestion from '../../components/AutoSuggestion';
import ResetButton from '../../components/ResetButton';

const Header = ({
  inputValue,
  filteredList,
  handleInput,
  handleTableFilter,
  handleResetFilter
}) => (
  <>
    <div className="app">MAIN</div>
    <SearchInput
      onChange={handleInput}
      value={inputValue}
      onKeyPress={handleTableFilter}
    />
    <ResetButton onReset={handleResetFilter} />
    <AutoSuggestion isOpen={!!inputValue} listToRender={filteredList} />
  </>
);

export default Header;
