import React, {useState} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerGenre from '../answer-genre/answer-genre.jsx';

const initialUserAnswers = {
  1: false,
  2: false,
  3: false,
  4: false,
};

const QuestionGenreScreen = ({question, onAnswer}) => {
  const {answers} = question;
  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong" />
          <div className="wrong" />
          <div className="wrong" />
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks">
          {answers.map((answer) => (
            <AnswerGenre
              key={answer.id}
              answer={answer}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
            />
          ))}
          <button className="game__submit button" type="submit" onClick={onAnswer}>Ответить</button>
        </form>
      </section>
    </section>
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
