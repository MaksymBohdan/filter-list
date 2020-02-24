import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderView from './HeaderView';

import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';
import { filterList } from '../../helpers/filteringUtils';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const autoSuggestList = useSelector(selectors.allPropertiesArray);
  const [inputValue, setInputValue] = useState('');

  const filteredList = autoSuggestList.filter(filterList(inputValue));

  const handleInput = useCallback(e => setInputValue(e.target.value), []);

  const handleTableFilter = useCallback(
    e => e.key === 'Enter' && dispatch(actions.filterBy(inputValue)),
    [dispatch, inputValue]
  );

  const handleResetFilter = useCallback(() => {
    dispatch(actions.filterBy(inputValue));
    setInputValue('');
  }, [dispatch, inputValue]);

  return (
    <HeaderView
      inputValue={inputValue}
      filteredList={filteredList}
      handleInput={handleInput}
      handleTableFilter={handleTableFilter}
      handleResetFilter={handleResetFilter}
    />
  );
};

export default HeaderContainer;
