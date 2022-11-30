export const toFixedNumber = (number, roundTo = 2) => {
  return Number(number?.toFixed(roundTo));
};
