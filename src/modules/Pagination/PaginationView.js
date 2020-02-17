import React from 'react';
import styled from 'styled-components';
import { calculatePagination } from '../../helpers/paginationUtils';

const PaginationCmp = styled.ul`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid black;
`;
const PageItem = styled.li`
  padding: 5px;
  border: 1px solid black;
  margin: 3px;
  background-color: ${props => (props.active ? 'blue' : 'red')};
`;

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const Pagination = ({ paginationAttributes, handlePageChange }) => {
  const pages = calculatePagination(paginationAttributes) || [];
  const { totalRecords, pageLimit, currentPage } = paginationAttributes;
  const shouldPaginationRedder =
    totalRecords || !(totalRecords / pageLimit) === 1;

  return (
    <>
      {shouldPaginationRedder ? (
        <PaginationCmp>
          {pages.map(page => {
            if (page === RIGHT_PAGE)
              return (
                <PageItem
                  key={page}
                  data-page={page}
                  onClick={handlePageChange}
                >
                  <span>&raquo;</span>
                </PageItem>
              );

            if (page === LEFT_PAGE)
              return (
                <PageItem
                  key={page}
                  data-page={page}
                  onClick={handlePageChange}
                >
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
      ) : null}
    </>
  );
};

export default Pagination;
