export const toFixedNumber = (number, roundTo = 2) => {
  return parseFloat(number).toFixed(roundTo);
};
