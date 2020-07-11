import {reducer, ActionType} from './reducer.js';

const initialState = {
  step: -1,
  mistakes: 0,
};

describe(`test reducer`, () => {
  it(`returns initial state when called without additional parameters`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`increments the current step by a given value`, () => {
    const creactAction = (payload) => ({
      type: ActionType.INCREMENT_STEP,
      payload,
    });

    expect(reducer(initialState, creactAction(1))).toEqual({
      step: 0,
      mistakes: 0,
    });

    expect(reducer(initialState, creactAction(0))).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

  it(`increments the number of mistakes by a given value`, () => {
    const creactAction = (payload) => ({
      type: ActionType.INCREMENT_MISTAKES,
      payload,
    });

    expect(reducer(initialState, creactAction(1))).toEqual({
      step: -1,
      mistakes: 1,
    });

    expect(reducer(initialState, creactAction(0))).toEqual({
      step: -1,
      mistakes: 0,
    });
  });
});
