import React from 'react';
import './App.css';
import Meter from './Meter';

export const App = React.createClass({

  render() {
    return (
      <div className="meter">
        <Meter />
      </div>
    );
  }
});

export default App;
