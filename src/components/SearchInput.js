import React, { memo } from 'react';

const SearchInput = ({ value, onChange, onKeyPress }) => (
  <input
    type="text"
    onChange={onChange}
    value={value}
    onKeyPress={onKeyPress}
  />
);

export default memo(SearchInput);
