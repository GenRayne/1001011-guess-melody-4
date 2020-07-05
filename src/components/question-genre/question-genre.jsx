import React, {useState} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerGenre from '../answer-genre/answer-genre.jsx';

const QuestionGenreScreen = ({question, onAnswer}) => {
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
        {answers.map((answer, i) => (
          <AnswerGenre
            key={answer.id}
            answer={answer}
            userAnswer={userAnswers[i + 1]}
            onAnswerChange={handleGenreAnswer}
          />
        ))}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </>
  );
};

QuestionGenreScreen.propTypes = {
  question: shape({
    type: string.isRequired,
    genre: string.isRequired,
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    }))
  }),
  onAnswer: func.isRequired
};

export default QuestionGenreScreen;
