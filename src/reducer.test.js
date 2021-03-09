import {reducer, ActionType, ActionCreator} from './reducer.js';
import questions from './mocks/test-questions.js';
import {GameStatus} from './const.js';

const initialState = {
  step: -1,
  correctAnswers: 0,
  mistakes: 0,
  maxMistakes: 3,
  questions,
  gameStatus: GameStatus.START,
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
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });
  });

  it(`increments the number of correct answers by a given value`, () => {
    const createAction = (payload) => ({
      type: ActionType.INCREMENT_CORRECT_ANSWERS,
      payload,
    });

    expect(reducer(initialState, createAction(1))).toEqual({
      step: -1,
      correctAnswers: 1,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });
  });

  it(`increments the number of mistakes by a given value`, () => {
    const createAction = (payload) => ({
      type: ActionType.INCREMENT_MISTAKES,
      payload,
    });

    expect(reducer(initialState, createAction(1))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 1,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.START,
    });
  });

  it(`changes status to a given value`, () => {
    const createAction = (payload) => ({
      type: ActionType.SET_GAME_STATUS,
      payload,
    });

    expect(reducer(initialState, createAction(GameStatus.QUESTION))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.QUESTION,
    });

    expect(reducer(initialState, createAction(GameStatus.FAIL))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.FAIL,
    });

    expect(reducer(initialState, createAction(GameStatus.SUCCESS))).toEqual({
      step: -1,
      correctAnswers: 0,
      mistakes: 0,
      maxMistakes: 3,
      questions,
      gameStatus: GameStatus.SUCCESS,
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
});
