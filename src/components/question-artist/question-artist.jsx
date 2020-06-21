import React from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerArtist from '../answer-artist/answer-artist.jsx';

const QuestionArtistScreen = ({question, onAnswer}) => {
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio src={song.src} />
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer) => <AnswerArtist answer={answer} key={answer.id} onAnswer={onAnswer} />)}
        </form>
      </section>
    </section>
  );
};

QuestionArtistScreen.propTypes = {
  question: shape({
    type: string.isRequired,
    song: shape({
      artist: string.isRequired,
      src: string.isRequired,
    }),
    answers: arrayOf(shape({
      picture: string.isRequired,
      artist: string.isRequired,
    }))
  }),
  onAnswer: func.isRequired
};

export default QuestionArtistScreen;
