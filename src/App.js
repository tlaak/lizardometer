import React, { Component } from 'react';
import './App.css';
import { getData } from './api';
import Meter from './Meter';

class App extends Component {
  componentDidMount() {
    getData()
      .then((response) => {
        console.log('response', response);
      });
  }

  render() {
    return (
      <div className="meter">
        <Meter />
      </div>
    );
  }
}

export default App;
