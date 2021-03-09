import {ActionCreator, ActionType} from '../reducer';
import {GameStatus} from '../const';

export const statusCalculatorMiddleware = (store) => (next) => (action) => {
  const {dispatch} = store;

  const {step, mistakes, maxMistakes, questions} = store.getState();

  if (action.type === ActionType.INCREMENT_MISTAKES) {
    if (mistakes >= maxMistakes - 1) {
      dispatch(ActionCreator.setGameStatus(GameStatus.FAIL));
    }
  }

  const {gameStatus} = store.getState();

  if (action.type === ActionType.INCREMENT_STEP) {
    if (step >= questions.length - 1 && mistakes < maxMistakes) {
      dispatch(ActionCreator.setGameStatus(GameStatus.SUCCESS));
    } else if (gameStatus !== GameStatus.FAIL) {
      dispatch(ActionCreator.setGameStatus(GameStatus.QUESTION));
    }
  }

  next(action);
};
