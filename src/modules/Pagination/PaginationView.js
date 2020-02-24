import React from 'react';
import styled from 'styled-components';

import { LEFT_PAGE, RIGHT_PAGE } from '../../constants/constants';

const PaginationCmp = styled.ul`
  margin: auto;
  padding: 10px;
  width: 500px;
  display: flex;
  justify-content: center;
`;

const PageItem = styled.li`
  width: 30px;
  padding: 5px;
  margin: 3px;
  text-align: center;
  color: white;
  background-color: ${props => (props.active ? 'darkblue' : 'teal')};
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
`;

const Pagination = ({ isPagite, pages, handlePageChange, currentPage }) =>
  isPagite ? (
    <PaginationCmp>
      {pages.map(page => {
        if (page === RIGHT_PAGE)
          return (
            <PageItem key={page} data-page={page} onClick={handlePageChange}>
              <span>&raquo;</span>
            </PageItem>
          );

        if (page === LEFT_PAGE)
          return (
            <PageItem key={page} data-page={page} onClick={handlePageChange}>
              <span>&laquo;</span>
            </PageItem>
          );
        return (
          <PageItem
            active={currentPage === page}
            key={page}
            data-page={page}
            onClick={handlePageChange}
          >
            <span>{page}</span>
          </PageItem>
        );
      })}
    </PaginationCmp>
  ) : null;

export default Pagination;
