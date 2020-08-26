import {capitalizeFirstLetter} from './utils.js';
import {genreQuestion, artistQuestion} from './mocks/test-questions.js';
import {isGenreAnswerCorrect, isArtistAnswerCorrect, isAnswerCorrect} from './utils.js';

describe(`capitalize`, () => {
  it(`capitalizes the first letter`, () => {
    const word = `pause`;
    const capitalizedWord = capitalizeFirstLetter(word);

    expect(capitalizedWord).toEqual(`Pause`);
  });
});

describe(`answer correctness`, () => {
  it(`returns true if genre answer is correct`, () => {
    expect(isGenreAnswerCorrect(genreQuestion, {1: true})).toEqual(true);
  });

  it(`returns true if artist answer is correct`, () => {
    expect(isArtistAnswerCorrect(artistQuestion, {artist: `correct`})).toEqual(true);
  });

  it(`returns true if answer is correct`, () => {
    expect(isAnswerCorrect(genreQuestion, {1: true})).toEqual(true);
    expect(isAnswerCorrect(artistQuestion, {artist: `correct`})).toEqual(true);
  });
});
