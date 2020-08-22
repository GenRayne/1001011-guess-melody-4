import {QuestionType} from './const.js';

export const capitalizeFirstLetter = (word) => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

export const isGenreAnswerCorrect = (question, userAnswer) => {
  return Object.values(userAnswer).every((answer, i) => {
    const correctAnswer = question.answers[i].genre === question.genre;
    return answer === correctAnswer;
  });
};

export const isArtistAnswerCorrect = (question, userAnswer) => userAnswer.artist === question.song.artist;

export const isAnswerCorrect = (question, userAnswer) => {
  let isCorrect = false;

  switch (question.type) {
    case QuestionType.GENRE:
      isCorrect = isGenreAnswerCorrect(question, userAnswer);
      break;
    case QuestionType.ARTIST:
      isCorrect = isArtistAnswerCorrect(question, userAnswer);
      break;
  }
  return isCorrect;
};
