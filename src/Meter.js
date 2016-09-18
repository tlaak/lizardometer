import React from 'react';
import arrow from './images/arrow.svg';
import './Meter.css';
import { getData } from './api';

export const Meter = React.createClass({

  getInitialState() {
    return {
      'min': 0,
      'value': 0,
      'max': 1000
    };
  },

  componentDidMount() {
    getData()
      .then((response) => {
        this.setState({
          min: response.min,
          max: response.max,
          value: response.value
        });
      })
      .catch((error) => {
        console.error('Error when fetching meter data', error);
      });
  },

  render() {
    const pointerPosition =
      (this.state.value - this.state.min) /
      (this.state.max - this.state.min) * 100;

    return (
        <img src={arrow} role="presentation"
          className="lizardometer__pointer" style={{left: `calc(${pointerPosition}% - 10px`}} />
      </div>
    );
  }
});

export default Meter;
