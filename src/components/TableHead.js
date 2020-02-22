import React, { memo } from 'react';
import { adjustLable } from '../helpers/textUtils';
import { setIconClass } from '../helpers/sortingUtils';
import { TABLE_LABELS } from '../constants/constants';

const TableHead = ({ handleSortBy, currentDirection, currentColumn }) => (
  <thead>
    <tr>
      {TABLE_LABELS.map(label => (
        <th data-name={label} key={label} onClick={handleSortBy}>
          {adjustLable(label)}
          <span>
            <i
              className={setIconClass(currentDirection, currentColumn, label)}
            />
          </span>
        </th>
      ))}
    </tr>
  </thead>
);

export default memo(TableHead);
