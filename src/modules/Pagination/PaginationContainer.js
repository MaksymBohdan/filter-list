import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PaginationView from './PaginationView';

import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';
import { calculatePagination } from '../../helpers/paginationUtils';

const PaginationContainer = () => {
  const currentPage = useSelector(selectors.currentPage);
  const pageLimit = useSelector(selectors.pageLimit);
  const totalRecords = useSelector(selectors.totalRecords);
  const dispatch = useDispatch();
  
  const pages = calculatePagination(currentPage, totalRecords, pageLimit) || [];
  const isPagite = totalRecords || !(totalRecords / pageLimit) === 1;

  const handlePageChange = e => {
    const clickedPage = e.currentTarget.dataset.page;
    const pointerStep = 2;

    if (currentPage !== clickedPage) {
      if (clickedPage === 'RIGHT')
        return dispatch(actions.setPage(currentPage + pointerStep));
      if (clickedPage === 'LEFT')
        return dispatch(actions.setPage(currentPage - pointerStep));

      dispatch(actions.setPage(Number(clickedPage)));
    }
  };

  return (
    <PaginationView
      handlePageChange={handlePageChange}
      isPagite={isPagite}
      pages={pages}
      currentPage={currentPage}
    />
  );
};

export default PaginationContainer;
