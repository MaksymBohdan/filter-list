import React from 'react';

import { PageItem, PaginationCmp } from './styles';
import { LEFT_PAGE, RIGHT_PAGE } from '../../constants/constants';

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
