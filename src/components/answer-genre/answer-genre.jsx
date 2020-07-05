import React from 'react';
import {shape, string, bool, func} from 'prop-types';

const AnswerGenre = ({
  answer,
  userAnswer = false,
  onAnswerChange,
  renderPlayer,
}) => {
  const {id, src: audioSrc} = answer;

  const handleAnswerChange = () => {
    onAnswerChange(id);
  };

  return (
    <div className="track">
      {renderPlayer(audioSrc, id)}
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
  renderPlayer: func.isRequired,
};

export default AnswerGenre;
