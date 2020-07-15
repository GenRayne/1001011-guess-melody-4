import {reducer, ActionType, ActionCreator} from './reducer.js';
import questions from './mocks/test-questions.js';

const initialState = {
  step: -1,
  mistakes: 0,
  maxMistakes: 3,
  questions,
};

const artistQuestion = {
  type: `artist`,
  song: {
    artist: `correct`,
    src: ``,
  },
  answers: [
    {
      artist: `correct`,
      picture: ``,
    }, {
      artist: `incorrect`,
      picture: ``,
    }, {
      artist: `incorrect-2`,
      picture: ``,
    },
  ]
};

const genreQuestion = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: `1`,
      genre: `rock`,
      src: ``,
    }, {
      id: `2`,
      genre: `jazz`,
      src: ``,
    }, {
      id: `3`,
      genre: `blues`,
      src: ``,
    }, {
      id: `4`,
      genre: `blues`,
      src: ``,
    },
  ]
};

describe(`test reducer`, () => {
  it(`returns initial state when called without additional parameters`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`increments the current step by a given value`, () => {
    const createAction = (payload) => ({
      type: ActionType.INCREMENT_STEP,
      payload,
    });

    expect(reducer(initialState, createAction(1))).toEqual({
      step: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
      questions,
    });
  });

  it(`increments the number of mistakes by a given value`, () => {
    const createAction = (payload) => ({
      type: ActionType.INCREMENT_MISTAKES,
      payload,
    });

    expect(reducer(initialState, createAction(1))).toEqual({
      step: -1,
      mistakes: 1,
      maxMistakes: 3,
      questions,
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
      questions,
    });
  });
});

describe(`test ActionCreator`, () => {
  it(`returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`returns action with 0 payload for mistakes if artist answer is correct`, () => {
    expect(ActionCreator.incrementMistakes(
        artistQuestion,
        {
          artist: `correct`,
          picture: ``
        }
    )).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`returns action with 1 payload for mistakes if artist answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes(
        artistQuestion,
        {
          artist: `incorrect`,
          picture: ``
        }
    )).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`returns action with 0 payload for mistakes if genre answer is correct`, () => {
    expect(ActionCreator.incrementMistakes(
        genreQuestion,
        {
          1: true,
          2: false,
          3: false,
          4: false,
        }
    )).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`returns action with 1 payload for mistakes if genre answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes(
        genreQuestion,
        {
          1: false,
          2: true,
          3: false,
          4: false,
        }
    )).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
