import React from 'react';
import { adjustLable } from '../helpers/textUtils';
import { setIconClass } from '../helpers/sortingUtils';

const TableHead = ({
  tableLabels,
  handleSortBy,
  currentDirection,
  currentColumn
}) => (
  <thead>
    <tr>
      {tableLabels.map(label => (
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

export default TableHead;
