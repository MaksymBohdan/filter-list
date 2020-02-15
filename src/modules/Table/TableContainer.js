import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import merge from 'lodash.merge';

import properties$ from '../../services/mock';
import { setNextSortDirection } from '../../helpers/sortingUtils';

import TableView from './TableView';
import {
  addProperties,
  addSortBy,
  manageFavorite
} from '../../redux/actions/actions';
import {
  propertyList,
  currentDirection,
  currentColumn,
  allProperties
} from '../../redux/selectors/selectors';


class TableContainer extends Component {
  componentDidMount() {
    const handleDebounce = debounce(this.updateProperties, 3000);
    let propertiesToUpdate = {};

    properties$.subscribe(data => {
      propertiesToUpdate[data.id] = data;

      handleDebounce(propertiesToUpdate);
    });
  }

  updateProperties = data => {
    const { addProperties, allProperties } = this.props;

    addProperties(merge({}, allProperties, data));
  };

  handleSortBy = e => {
    const { currentDirection, addSortBy } = this.props;

    addSortBy({
      direction: setNextSortDirection(currentDirection),
      column: e.currentTarget.dataset.name
    });
  };

  handleAddFavorite = id => {
    const { allProperties, manageFavorite } = this.props;
    const currentProperty = { ...allProperties[id] };

    !!currentProperty.isFavorite
      ? (currentProperty.isFavorite = false)
      : (currentProperty.isFavorite = true);

    return manageFavorite(currentProperty);
  };

  render() {
    const { propertyList, currentDirection, currentColumn } = this.props;

    return (
      <TableView
        propertyList={propertyList}
        handleSortBy={this.handleSortBy}
        currentDirection={currentDirection}
        currentColumn={currentColumn}
        handleAddFavorite={this.handleAddFavorite}
      />
    );
  }
}

const MSTP = state => ({
  propertyList: propertyList(state),
  currentDirection: currentDirection(state),
  currentColumn: currentColumn(state),
  allProperties: allProperties(state)
});

const MDTP = dispatch => ({
  addProperties: list => dispatch(addProperties(list)),
  addSortBy: sortData => dispatch(addSortBy(sortData)),
  manageFavorite: property => dispatch(manageFavorite(property))
});

export default connect(MSTP, MDTP)(TableContainer);
