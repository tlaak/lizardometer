// Caculate position for the pointer
// Handles edge cases where value is smaller than min or larger than max
export function getPointerPosition(value, min, max) {
  let pointerPosition = calculatePercentageValue(value, min, max);

  if (value < min) {
    pointerPosition = 0;
  }

  if (value > max) {
    pointerPosition = 100;
  }

  return pointerPosition;
}

// Calculate the percentage value
// min equals 0, max equals 100 and the given value is the position as percentage between these two limits
function calculatePercentageValue(value, min, max) {
  return (value - min) / (max - min) * 100;
}

// Get a symbol for a currency
export function getCurrencySymbol(currency) {
  const currencySymbols = {
    'USD': '$',
    'GBP': '£',
    'EUR': '€'
  };

  const currencySymbol = Object.keys(currencySymbols).includes(currency)
    ? currencySymbols[currency]
    : currency;

  return currencySymbol;
}
