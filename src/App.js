import React, { Component } from 'react';
import './App.css';
import properties$ from './mock';

class App extends Component {
  componentDidMount() {
    properties$.subscribe(data => {
      const a = 'adad';
      // console.log('data', data);
    });
  }

  render() {
    console.log(this.props);

    return <div className="app"></div>;
  }
}

export default App;
