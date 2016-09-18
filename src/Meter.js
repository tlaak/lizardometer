import React from 'react';
import pointer from './images/pointer.svg';
import background from './images/background.svg';
import './Meter.css';
import { getData } from './api';
import {
  getPointerPosition,
  getCurrencySymbol
} from './helpers';

export const Meter = React.createClass({
  // Default values for the meter
  getInitialState() {
    return {
      'min': 0,
      'value': 0,
      'max': 1000,
      'format': '',
      'unit': ''
    };
  },

  componentDidMount() {
    // Gets the data from the API and assigns the response to the component state
    getData()
      .then((response) => {
        this.setState({
          min: response.min,
          max: response.max,
          value: response.value,
          format: response.format,
          unit: response.unit
        });
      })
      .catch((error) => {
        // Not sure what kind of errors it's possible to get...
        console.error('Error when fetching meter data', error);
      });
  },

  render() {
    // Calculate the pointer position as percentage
    const pointerPosition = getPointerPosition(this.state.value, this.state.min, this.state.max);
    const { unit, value } = this.state;

    // Get a currency symbol for the unit
    const symbolOrCurrencyCode = getCurrencySymbol(unit);

    // Show the currency symbol as prefix if it's $ or £
    const currencyPrefix = (symbolOrCurrencyCode === '$' || symbolOrCurrencyCode === '£')
      ? symbolOrCurrencyCode
      : '';

    // Show the currency symbol or the currency code as suffix if it's not $ or £
    const currencySuffix = (symbolOrCurrencyCode === '$' || symbolOrCurrencyCode === '£')
      ? ''
      : symbolOrCurrencyCode;

    return (
      <div className="lizardometer__container">
        <div className="lizardometer__values">
          <span className="lizardometer__value--min">{this.state.min}</span>
          <span className="lizardometer__value">{currencyPrefix}{value}{currencySuffix}</span>
          <span className="lizardometer__value--max">{this.state.max}</span>
        </div>
        <img src={background} role="presentation"
          className="lizardometer__background" />
        {/* Subtract 50% of the pointer width from the position to prevent position outside of the container */}
        <img src={pointer} role="presentation"
          className="lizardometer__pointer" style={{left: `calc(${pointerPosition}% - 5px`}} />
      </div>
    );
  }
});

export default Meter;
