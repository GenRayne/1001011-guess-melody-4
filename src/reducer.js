import {QuestionType} from './const.js';
import mockQuestions from './mocks/questions.js';

const initialState = {
  step: -1,
  mistakes: 0,
  maxMistakes: 3,
  questions: mockQuestions,
};

const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RETURN_TO_START: `RETURN_TO_START`,
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return Object.values(userAnswer).every((answer, i) => {
    const correctAnswer = question.answers[i].genre === question.genre;
    return answer === correctAnswer;
  });
};

const isArtistAnswerCorrect = (question, userAnswer) => userAnswer.artist === question.song.artist;

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  returnToStart: () => ({
    type: ActionType.RETURN_TO_START,
  }),

  incrementMistakes: (question, userAnswer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case QuestionType.GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
      case QuestionType.ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: isAnswerCorrect ? 0 : 1,
    };
  },
};

const reducer = (state = initialState, action) => {
  const {step} = state;

  switch (action.type) {
    case ActionType.RETURN_TO_START:
      return {...initialState};

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
