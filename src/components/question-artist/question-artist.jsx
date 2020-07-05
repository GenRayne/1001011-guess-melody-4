import React from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerArtist from '../answer-artist/answer-artist.jsx';

const QuestionArtistScreen = ({question, onAnswer}) => {
  const {song, answers} = question;

  return (
    <>
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
        {answers.map((answer) => <AnswerArtist answer={answer} question={question} key={answer.id} onAnswer={onAnswer} />)}
      </form>
    </>
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
