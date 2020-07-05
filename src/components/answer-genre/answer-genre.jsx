import React from 'react';
import {shape, string, bool, func} from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

const AnswerGenre = ({answer, userAnswer = false, onAnswerChange, activePlayer, onPlayButtonClick}) => {
  const {id, src: audioSrc} = answer;

  const handleAnswerChange = () => {
    onAnswerChange(id);
  };

  const handlePlayButtonClick = () => {
    onPlayButtonClick(activePlayer === id ? `` : id);
  };

  return (
    <div className="track">
      <AudioPlayer
        src={audioSrc}
        isNowPlaying={id === activePlayer}
        onPlayButtonClick={handlePlayButtonClick}
      />
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${id}`}
          id={`answer-${id}`}
          checked={Boolean(userAnswer)}
          onChange={handleAnswerChange}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

AnswerGenre.propTypes = {
  answer: shape({
    id: string.isRequired,
  }).isRequired,
  userAnswer: bool,
  onAnswerChange: func.isRequired,
  activePlayer: string.isRequired,
  onPlayButtonClick: func.isRequired,
};

export default AnswerGenre;
