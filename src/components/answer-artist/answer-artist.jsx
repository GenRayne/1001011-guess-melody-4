import React from 'react';
import {string, func, shape, arrayOf} from 'prop-types';

const AnswerArtist = ({answer, question, onAnswer}) => {
  const {id, artist, picture} = answer;
  return (
    <div key={id} className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value={`artist-${id}`}
        id={`answer-${id}`}
        onChange={(evt) => {
          evt.preventDefault();
          onAnswer(question, answer);
        }}
      />
      <label className="artist__name" htmlFor={`answer-${id}`}>
        <img className="artist__picture" src={picture} alt={artist} />
        {artist}
      </label>
    </div>
  );
};

AnswerArtist.propTypes = {
  answer: shape({
    id: string.isRequired,
    artist: string.isRequired,
    picture: string.isRequired,
  }),
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
  onAnswer: func.isRequired,
};

export default AnswerArtist;
