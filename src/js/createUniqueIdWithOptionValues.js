import { joinIdWithOptionValuesArray, createDefaultOptionValues } from 'js';

export const createUniqueIdWithOptionValues = ({
  attributes,
  optionValues,
  id,
}) => {
  if (!optionValues) {
    optionValues = createDefaultOptionValues(attributes);
  }

  const optionValuesArray = Object.values(optionValues);

  return joinIdWithOptionValuesArray(id, optionValuesArray);
};
