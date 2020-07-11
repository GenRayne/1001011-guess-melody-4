import {reducer, ActionType, ActionCreator} from './reducer.js';

const initialState = {
  step: -1,
  mistakes: 0,
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
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      mistakes: 0,
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
    });

    expect(reducer(initialState, createAction(0))).toEqual({
      step: -1,
      mistakes: 0,
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
