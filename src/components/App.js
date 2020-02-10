import React, { Component } from 'react';
import { connect } from 'react-redux';
import properties$ from '../helpers/mock';
import { addProperties, addSortBy } from '../redux/actions/actions';
import { propertyList, currentDirection } from '../redux/selectors/selectors';
import Table from './Table';
import { setNextSortDirection } from '../helpers/sortingUtils';

class App extends Component {
  componentDidMount() {
    properties$.subscribe(data => {
      this.props.addProperties(data);
    });
  }

  handleSortBy = e => {
    const { currentDirection, addSortBy } = this.props;

    addSortBy({
      direction: setNextSortDirection(currentDirection),
      column: e.target.dataset.name
    });
  };

  render() {
    const { propertyList } = this.props;

    return (
      <>
        <div className="app">MAIN</div>
        <Table propertyList={propertyList} handleSortBy={this.handleSortBy} />
      </>
    );
  }
}

const MSTP = state => ({
  propertyList: propertyList(state),
  currentDirection: currentDirection(state)
});

const MDTP = dispatch => ({
  addProperties: list => dispatch(addProperties(list)),
  addSortBy: sortData => dispatch(addSortBy(sortData))
});

export default connect(MSTP, MDTP)(App);
