import { createOptionIdState } from 'js';

export const createDefaultOptionValues = attributes => {
  return attributes.reduce((acc, { name, items }) => {
    return { ...acc, [createOptionIdState(name)]: items[0].id };
  }, {});
};
