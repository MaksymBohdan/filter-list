import React, { memo } from 'react';
import styled from 'styled-components';

import { adjustLable } from '../helpers/textUtils';
import { setIconClass } from '../helpers/sortingUtils';
import { TABLE_LABELS } from '../constants/constants';

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: teal;
  color: white;
`;

const TableHead = ({ handleSortBy, currentDirection, currentColumn }) => (
  <thead>
    <tr>
      {TABLE_LABELS.map(label => (
        <Th data-name={label} key={label} onClick={handleSortBy}>
          {adjustLable(label)}
          <span>
            <i
              className={setIconClass(currentDirection, currentColumn, label)}
            />
          </span>
        </Th>
      ))}
    </tr>
  </thead>
);

export default memo(TableHead);
