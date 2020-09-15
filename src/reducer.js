import mockQuestions from './mocks/questions.js';
import {START_STEP} from './const.js';

const initialState = {
  step: START_STEP,
  mistakes: 0,
  maxMistakes: 3,
  questions: mockQuestions,
};

const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RETURN_TO_START: `RETURN_TO_START`,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  returnToStart: () => ({
    type: ActionType.RETURN_TO_START,
  }),

  incrementMistakes: () => ({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  }),
};

const reducer = (state = initialState, action) => {
  const {step} = state;

  switch (action.type) {
    case ActionType.RETURN_TO_START:
      return {...initialState, step: 0};

    case ActionType.INCREMENT_STEP:
      return {
        ...state,
        step: step + action.payload,
      };

    case ActionType.INCREMENT_MISTAKES:
      return {
        ...state,
        mistakes: state.mistakes + action.payload,
      };
  }

  return state;
};

export {ActionType, reducer, ActionCreator};
