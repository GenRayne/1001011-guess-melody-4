import React, {useState} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerGenre from '../answer-genre/answer-genre.jsx';
import {useAudioPlayer} from '../../hooks/use-audio-player/use-audio-player.jsx';

const DEFAULT_ID = `1`;

const QuestionGenre = ({question, onAnswer}) => {
  const {answers} = question;

  const [userAnswers, setUserAnswers] = useState({});
  const {activePlayerId, handlePlayButtonClick} = useAudioPlayer(DEFAULT_ID);

  const handleGenreAnswer = (id) => {
    setUserAnswers((prevAnswers) => ({...prevAnswers, [id]: !prevAnswers[id]}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAnswer(question, userAnswers);
  };

  return (
    <>
      <h2 className="game__title">Выберите инди-рок треки</h2>
      <form
        className="game__tracks"
        onSubmit={handleSubmit}
      >
        {answers.map((answer) => (
          <AnswerGenre
            key={answer.id}
            answer={answer}
            userAnswer={userAnswers[answer.id]}
            onAnswerChange={handleGenreAnswer}
            activePlayerId={activePlayerId}
            onPlayButtonClick={handlePlayButtonClick}
          />
        ))}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </>
  );
};

QuestionGenre.propTypes = {
  question: shape({
    type: string.isRequired,
    genre: string.isRequired,
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: func.isRequired,
};

export default QuestionGenre;
