import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaginationView from './PaginationView';

import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';

class PaginationContainer extends Component {
  handlePageChange = e => {
    const {
      paginationAttributes: { currentPage, pointerStep },
      setPage
    } = this.props;

    const clickedPage = e.currentTarget.dataset.page;

    if (currentPage !== clickedPage) {
      if (clickedPage === 'RIGHT') return setPage(currentPage + pointerStep);
      if (clickedPage === 'LEFT') return setPage(currentPage - pointerStep);

      setPage(Number(clickedPage));
    }
  };

  render() {
    const { paginationAttributes } = this.props;

    return (
      <PaginationView
        paginationAttributes={paginationAttributes}
        handlePageChange={this.handlePageChange}
      />
    );
  }
}

const MSTP = state => ({
  paginationAttributes: selectors.paginationAttributes(state)
});
const MDTP = dispatch => ({
  setPage: page => dispatch(actions.setPage(page))
});

export default connect(MSTP, MDTP)(PaginationContainer);
