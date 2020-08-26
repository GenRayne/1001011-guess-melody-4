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
  switch (question.type) {
    case QuestionType.GENRE:
      return isGenreAnswerCorrect(question, userAnswer);
    case QuestionType.ARTIST:
      return isArtistAnswerCorrect(question, userAnswer);
    default:
      return false;
  }
};
