import {
  capitalizeFirstLetter,
  isGenreAnswerCorrect,
  isArtistAnswerCorrect,
  isAnswerCorrect,
  getDeclinedNoun,
} from './utils.js';
import {genreQuestion, artistQuestion} from './mocks/test-questions.js';

describe(`capitalize`, () => {
  it(`capitalizes the first letter`, () => {
    const word = `pause`;
    const capitalizedWord = capitalizeFirstLetter(word);

    expect(capitalizedWord).toEqual(`Pause`);
  });
});

describe(`getDeclinedNoun`, () => {
  it(`returns correct declension`, () => {
    const words = [`день`, `дня`, `дней`];

    const declined1 = getDeclinedNoun(1, words);
    expect(declined1).toEqual(words[0]);

    const declined2 = getDeclinedNoun(2, words);
    expect(declined2).toEqual(words[1]);

    const declined5 = getDeclinedNoun(5, words);
    expect(declined5).toEqual(words[2]);

    const declined11 = getDeclinedNoun(11, words);
    expect(declined11).toEqual(words[2]);

    const declined21 = getDeclinedNoun(21, words);
    expect(declined21).toEqual(words[0]);

    const declined101 = getDeclinedNoun(101, words);
    expect(declined101).toEqual(words[0]);
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
