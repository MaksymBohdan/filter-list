import React, { Component } from 'react';
import './App.css';
import properties$ from './mock';

class App extends Component {

  componentDidMount() {
    properties$.subscribe((data) => {
      console.log('data', data);
    })
  }

  render() {
    return (
      <div className="app">
      </div>
    );
  }
}

export default App;
