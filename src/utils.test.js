import {
  capitalizeFirstLetter,
  isGenreAnswerCorrect,
  isArtistAnswerCorrect,
  isAnswerCorrect,
  getPercentage,
} from './utils.js';
import {genreQuestion, artistQuestion} from './mocks/test-questions.js';

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

  it(`returns false if genre answer is incorrect`, () => {
    expect(isGenreAnswerCorrect(genreQuestion, {})).toEqual(false);
    expect(isGenreAnswerCorrect(genreQuestion, {2: true})).toEqual(false);
    expect(isGenreAnswerCorrect(genreQuestion, {1: true, 2: true})).toEqual(false);
  });

  it(`returns true if artist answer is correct`, () => {
    expect(isArtistAnswerCorrect(artistQuestion, {artist: `correct`})).toEqual(true);
  });

  it(`returns false if artist answer is incorrect`, () => {
    expect(isArtistAnswerCorrect(artistQuestion, {artist: `incorrect`})).toEqual(false);
  });

  it(`returns true if answer is correct`, () => {
    expect(isAnswerCorrect(genreQuestion, {1: true})).toEqual(true);
    expect(isAnswerCorrect(artistQuestion, {artist: `correct`})).toEqual(true);
  });

  it(`returns false if answer is incorrect`, () => {
    expect(isAnswerCorrect(genreQuestion, {2: true})).toEqual(false);
    expect(isAnswerCorrect(artistQuestion, {artist: `incorrect`})).toEqual(false);
  });
});

describe(`calculate trackLine percentage`, () => {
  it(`calulates percentage correctly`, () => {
    const duration = 100;
    const progress = 30;

    const percentage = getPercentage(progress, duration);

    expect(percentage).toEqual(30);
  });
});
