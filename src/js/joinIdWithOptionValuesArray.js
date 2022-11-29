export const joinIdWithOptionValuesArray = (id, optionValuesArray) => {
  return (id += optionValuesArray.join(''));
};
