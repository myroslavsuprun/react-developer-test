export const createOptionIdState = name => {
  return `option${name.replaceAll(' ', '')}Id`;
};
