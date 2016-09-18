import React from 'react';
import gradient from './images/red-green-gradient.svg';
import arrow from './images/arrow.svg';
import './Meter.css';

export const Meter = React.createClass({
  meterData: {
    'min': 383,
    'value': 640,
    'max': 897,
    'format': 'currency',
    'unit': 'GBP'
  },

  // convert 897 to 100%
  // convert 383 to 0%

  render() {
    const pointerPosition =
      (this.meterData.value - this.meterData.min) / (this.meterData.max - this.meterData.min) * 100;

    return (
      <div className="lizardometer">
        <img src={gradient} role="presentation" className="lizardometer__background" />
        <img src={arrow} role="presentation"
          className="lizardometer__pointer" style={{left: `calc(${pointerPosition}% - 10px`}} />
      </div>
    );
  }
});

export default Meter;
