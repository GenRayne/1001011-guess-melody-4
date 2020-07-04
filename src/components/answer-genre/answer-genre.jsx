import React from 'react';
import {shape, string, bool, func} from 'prop-types';

const AnswerGenre = ({answer, userAnswer, onAnswerChange}) => {
  const {id, src: audioSrc} = answer;

  const handleAnswerChange = () => {
    onAnswerChange(id);
  };

  return (
    <div className="track">
      <button className="track__button track__button--play" type="button" />
      <div className="track__status">
        <audio src={audioSrc} />
      </div>
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
