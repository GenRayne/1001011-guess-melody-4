import React from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerArtist from '../answer-artist/answer-artist.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';
import {useAudioPlayer} from '../../hooks/use-audio-player/use-audio-player.jsx';

const AUDIO_ID = `1`;

const QuestionArtist = ({question, onAnswer}) => {
  const {song, answers} = question;

  const {activePlayerId, handlePlayButtonClick} = useAudioPlayer(AUDIO_ID);

  const handleButtonClick = () => {
    handlePlayButtonClick(AUDIO_ID);
  };

  return (
    <>
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <AudioPlayer
            src={song.src}
            isNowPlaying={AUDIO_ID === activePlayerId}
            onPlayButtonClick={handleButtonClick}
          />
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
};

export default QuestionArtist;
