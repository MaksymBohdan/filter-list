import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';

import * as actions from '../../redux/actions/actions';
import * as selectors from '../../redux/selectors/selectors';
import { filterTable } from '../../helpers/filteringUtils';

class HeaderContainer extends Component {
  state = {
    inputValue: ''
  };

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleTableFilter = e => {
    if (e.key === 'Enter') {
      const { inputValue } = this.state;
      const { filterBy } = this.props;

      console.log('onEnter', e.key);
      filterBy(inputValue);
    }

    return;
  };

  handleResetFilter = () => {
    const { filterBy } = this.props;
    filterBy('');

    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { propertyList } = this.props;
    const { inputValue } = this.state;
    const filteredList = filterTable(propertyList, inputValue);

    return (
      <HeaderView
        inputValue={inputValue}
        filteredList={filteredList}
        handleInput={this.handleInput}
        handleTableFilter={this.handleTableFilter}
        handleResetFilter={this.handleResetFilter}
      />
    );
  }
}

const MSTP = state => ({
  propertyList: selectors.propertyList(state)
});

const MDTP = dispatch => ({
  filterBy: filterValue => dispatch(actions.filterBy(filterValue))
});

export default connect(MSTP, MDTP)(HeaderContainer);
