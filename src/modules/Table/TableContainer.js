import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import merge from 'lodash.merge';

import TableView from './TableView';

import properties$ from '../../services/mock';
import { setNextSortDirection } from '../../helpers/sortingUtils';
import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';

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
  propertyList: selectors.propertyList(state),
  currentDirection: selectors.currentDirection(state),
  currentColumn: selectors.currentColumn(state),
  allProperties: selectors.allProperties(state)
});

const MDTP = dispatch => ({
  addProperties: list => dispatch(actions.addProperties(list)),
  addSortBy: sortData => dispatch(actions.addSortBy(sortData)),
  manageFavorite: property => dispatch(actions.manageFavorite(property))
});

export default connect(MSTP, MDTP)(TableContainer);
