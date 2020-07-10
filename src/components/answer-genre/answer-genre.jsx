import React from 'react';
import {shape, string, bool, func} from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

const AnswerGenre = ({
  answer,
  userAnswer = false,
  onAnswerChange,
  activePlayerId,
  onPlayButtonClick,
}) => {
  const {id, src: audioSrc} = answer;

  const handlePlayButtonClick = () => {
    onPlayButtonClick(id);
  };

  const handleAnswerChange = () => {
    onAnswerChange(id);
  };

  return (
    <div className="track">
      <AudioPlayer
        src={audioSrc}
        isNowPlaying={id === activePlayerId}
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
  activePlayerId: string.isRequired,
  onPlayButtonClick: func.isRequired,
};

export default AnswerGenre;
