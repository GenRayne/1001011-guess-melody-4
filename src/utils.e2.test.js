import {capitalizeFirstLetter, extend} from './utils.js';

describe(`capitalize`, () => {
  it(`capitalizes the first letter`, () => {
    const word = `pause`;
    const capitalizedWord = capitalizeFirstLetter(word);

    expect(capitalizedWord).toEqual(`Pause`);
  });
});

describe(`extend`, () => {
  it(`creates a new object with a and b`, () => {
    const a = {a: `a`};
    const b = {b: `b`};
    const c = extend(a, b);

    expect(c).toEqual({a: `a`, b: `b`});
  });
});
