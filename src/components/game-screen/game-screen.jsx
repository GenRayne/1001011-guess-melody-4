import React from 'react';
import {oneOf, oneOfType, arrayOf, node, number} from 'prop-types';
import {connect} from 'react-redux';
import {QuestionType} from '../../const.js';
import Mistakes from '../mistakes/mistakes.jsx';

const GameScreen = ({type, children, mistakes}) => {
  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
          />
        </svg>

        <Mistakes count={mistakes} />
      </header>

      <section className="game__screen">
        {children}
      </section>
    </section>
  );
};

GameScreen.propTypes = {
  type: oneOf([
    QuestionType.ARTIST,
    QuestionType.GENRE,
  ]).isRequired,
  children: oneOfType([
    node,
    arrayOf(node),
  ]).isRequired,
  mistakes: number.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: state.mistakes,
});

export {GameScreen};
export default connect(mapStateToProps)(GameScreen);
