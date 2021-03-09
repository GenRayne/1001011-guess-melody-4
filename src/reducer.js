import mockQuestions from './mocks/questions.js';
import {START_STEP, GameStatus} from './const.js';

const initialState = {
  step: START_STEP,
  correctAnswers: 0,
  mistakes: 0,
  maxMistakes: 3,
  questions: mockQuestions,
  gameStatus: GameStatus.START,
};

const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_CORRECT_ANSWERS: `INCREMENT_CORRECT_ANSWERS`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RETURN_TO_START: `RETURN_TO_START`,
  SET_GAME_STATUS: `SET_GAME_STATUS`,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  returnToStart: () => ({
    type: ActionType.RETURN_TO_START,
  }),

  incrementCorrectAnswers: () => ({
    type: ActionType.INCREMENT_CORRECT_ANSWERS,
    payload: 1,
  }),

  incrementMistakes: () => ({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  }),

  setGameStatus: (status) => ({
    type: ActionType.SET_GAME_STATUS,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  const {step, correctAnswers, mistakes} = state;

  switch (action.type) {
    case ActionType.RETURN_TO_START:
      return {
        ...initialState,
        step: 0,
        gameStatus: GameStatus.QUESTION,
      };

    case ActionType.INCREMENT_STEP:
      return {
        ...state,
        step: step + action.payload,
      };

    case ActionType.INCREMENT_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: correctAnswers + action.payload,
      };

    case ActionType.INCREMENT_MISTAKES:
      return {
        ...state,
        mistakes: mistakes + action.payload,
      };

    case ActionType.SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload,
      };
  }

  return state;
};

export {ActionType, reducer, ActionCreator};
