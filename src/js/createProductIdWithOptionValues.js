export const createProductIdWithOptionValues = (id, optionValuesArray) => {
  return (id += optionValuesArray.join(''));
};
