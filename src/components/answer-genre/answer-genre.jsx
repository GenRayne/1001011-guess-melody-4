import React from 'react';
import {shape, string, bool, func} from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

const AnswerGenre = ({answer, userAnswer, onAnswerChange}) => {
  const {id, src: audioSrc} = answer;

  const handleAnswerChange = () => {
    onAnswerChange(id);
  };

  return (
    <div className="track">
      <AudioPlayer src={audioSrc} isNowPlaying={id === `1`} />
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
    id: string,
  }),
  userAnswer: bool,
  onAnswerChange: func,
};

export default AnswerGenre;
