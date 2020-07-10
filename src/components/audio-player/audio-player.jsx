import React, {createRef, useState, useEffect} from 'react';
import {string, bool, func} from 'prop-types';
import {capitalizeFirstLetter} from '../../utils.js';

const PlayerAction = {
  PLAY: `play`,
  PAUSE: `pause`,
};

const AudioPlayer = ({src, isNowPlaying, onPlayButtonClick}) => {
  const audioRef = createRef();

  const [, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => setIsLoading(false);
    audio.ontimeupdate = () => setProgress(audio.currentTime);

    // componentWillUnmount
    return () => {
      audio.src = ``;
      audio.oncanplaythrough = null;
      audio.ontimeupdate = null;
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    const audio = audioRef.current;

    if (isNowPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isNowPlaying]);

  const buttonName = isNowPlaying ? capitalizeFirstLetter(PlayerAction.PAUSE) : capitalizeFirstLetter(PlayerAction.PLAY);

  return (
    <>
      <button
        type="button"
        className={`track__button track__button--${isNowPlaying ? PlayerAction.PAUSE : PlayerAction.PLAY}`}
        aria-label={buttonName}
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio ref={audioRef} />
      </div>
    </>
  );
};

AudioPlayer.propTypes = {
  src: string.isRequired,
  isNowPlaying: bool.isRequired,
  onPlayButtonClick: func.isRequired,
};

export default AudioPlayer;
