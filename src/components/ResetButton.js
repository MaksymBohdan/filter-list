import React, { memo } from 'react';

const ResetButton = ({ onReset }) => (
  <button type="button" onClick={onReset}>
    Reset Search
  </button>
);

export default memo(ResetButton);
