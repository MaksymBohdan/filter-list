import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import TableView from './TableView';

import properties$ from '../../services/mock';
import { setNextSortDirection } from '../../helpers/sortingUtils';
import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';

const TableContainer = () => {
  const propertyList = useSelector(selectors.propertyList);
  const currentDirection = useSelector(selectors.currentDirection);
  const currentColumn = useSelector(selectors.currentColumn);
  const dispatch = useDispatch();

  const handleDebounce = useCallback(
    debounce(data => dispatch(actions.addProperties(data)), 3000),
    []
  );

  useEffect(() => {
    let propertiesToUpdate = {};

    properties$.subscribe(data => {
      propertiesToUpdate[data.id] = data;

      handleDebounce(propertiesToUpdate);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSortBy = useCallback(
    e => {
      dispatch(
        actions.addSortBy({
          direction: setNextSortDirection(currentDirection),
          column: e.currentTarget.dataset.name
        })
      );
    },
    [currentDirection, dispatch]
  );

  const handleAddFavorite = useCallback(
    id => dispatch(actions.manageFavorite(id.toString())),
    [dispatch]
  );

  return (
    <TableView
      propertyList={propertyList}
      handleSortBy={handleSortBy}
      currentDirection={currentDirection}
      currentColumn={currentColumn}
      handleAddFavorite={handleAddFavorite}
    />
  );
};

export default TableContainer;
