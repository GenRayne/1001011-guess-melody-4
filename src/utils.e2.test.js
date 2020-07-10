import {capitalizeFirstLetter} from './utils.js';

describe(`capitalize`, () => {
  it(`capitalizes the first letter`, () => {
    const word = `pause`;
    const capitalizedWord = capitalizeFirstLetter(word);

    expect(capitalizedWord).toEqual(`Pause`);
  });
});
