import React from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerArtist from '../answer-artist/answer-artist.jsx';

const QuestionArtist = ({question, onAnswer, renderPlayer}) => {
  const {song, answers} = question;
  const AUDIO_ID = `1`;

  return (
    <>
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, AUDIO_ID)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer) => <AnswerArtist answer={answer} question={question} key={answer.id} onAnswer={onAnswer} />)}
      </form>
    </>
  );
};

QuestionArtist.propTypes = {
  question: shape({
    type: string.isRequired,
    song: shape({
      artist: string.isRequired,
      src: string.isRequired,
    }).isRequired,
    answers: arrayOf(shape({
      picture: string.isRequired,
      artist: string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: func.isRequired,
  renderPlayer: func.isRequired,
};

export default QuestionArtist;
