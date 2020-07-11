export const capitalizeFirstLetter = (word) => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
