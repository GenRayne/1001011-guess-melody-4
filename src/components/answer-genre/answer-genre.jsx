import React from 'react';
import {shape, string, bool, func} from 'prop-types';

const AnswerGenre = ({answer, userAnswers, setUserAnswers}) => {
  const {id, src: audioSrc} = answer;
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
          checked={userAnswers[id]}
          onChange={() => {
            setUserAnswers(() => (Object.assign(
                {},
                userAnswers,
                {[id]: !userAnswers[id]}
            )));
            // Почему-то линтер не пропускает ({...userAnswers, [id]: !userAnswers[id]})
          }}
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
  userAnswers: shape({
    1: bool,
    2: bool,
    3: bool,
    4: bool,
  }),
  setUserAnswers: func,
};

export default AnswerGenre;
