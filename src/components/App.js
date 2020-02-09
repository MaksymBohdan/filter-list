import React, { Component } from 'react';
import { connect } from 'react-redux';
import properties$ from '../helpers/mock';
import { addProperties } from '../redux/actions/property';
import { propertyList } from '../redux/selectors/property';
import Table from './Table';

class App extends Component {
  componentDidMount() {
    properties$.subscribe(data => {
      console.log('data', data);
      this.props.addProperties(data);
    });
  }

  render() {
    console.log(this.props.propertyList);
    const { propertyList } = this.props;

    return (
      <>
        <div className="app">MAIN</div>
        <Table propertyList={propertyList} />
      </>
    );
  }
}

const MSTP = state => ({
  propertyList: propertyList(state)
});

const MDTP = dispatch => ({
  addProperties: list => dispatch(addProperties(list))
});

export default connect(MSTP, MDTP)(App);
