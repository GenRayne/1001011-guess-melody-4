import React, {useState} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import AnswerArtist from '../answer-artist/answer-artist.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

const QuestionArtistScreen = ({question, onAnswer}) => {
  const {song, answers} = question;

  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlayButtonClick = () => setIsPlaying((prevState) => !prevState);

  return (
    <>
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <AudioPlayer
            src={song.src}
            isNowPlaying={isPlaying}
            onPlayButtonClick={handlePlayButtonClick}
          />
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer) => <AnswerArtist answer={answer} question={question} key={answer.id} onAnswer={onAnswer} />)}
      </form>
    </>
  );
};

QuestionArtistScreen.propTypes = {
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

export default QuestionArtistScreen;
