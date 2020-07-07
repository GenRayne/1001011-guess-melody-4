import React, {useState} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerGenre from '../answer-genre/answer-genre.jsx';

const QuestionGenre = ({question, onAnswer, renderPlayer}) => {
  const {answers} = question;

  const [userAnswers, setUserAnswers] = useState({});

  const handleGenreAnswer = (id) => {
    setUserAnswers((prevAnswers) => ({...prevAnswers, [id]: !prevAnswers[id]}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAnswer(question, userAnswers);
  };

  return (
    <>
      <h2 className="game__title">Выберите инди-рок треки</h2>
      <form
        className="game__tracks"
        onSubmit={handleSubmit}
      >
        {answers.map((answer) => (
          <AnswerGenre
            key={answer.id}
            answer={answer}
            userAnswer={userAnswers[answer.id]}
            onAnswerChange={handleGenreAnswer}
            renderPlayer={renderPlayer}
          />
        ))}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </>
  );
};

QuestionGenre.propTypes = {
  question: shape({
    type: string.isRequired,
    genre: string.isRequired,
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: func.isRequired,
  renderPlayer: func.isRequired,
};

export default QuestionGenre;
