import React, {createRef, useState, useEffect} from 'react';
import {string, bool, func} from 'prop-types';
import {Color} from '../../const';
import {capitalizeFirstLetter, getPercentage} from '../../utils.js';

const PlayerAction = {
  PLAY: `play`,
  PAUSE: `pause`,
};

const AudioPlayer = ({src, isNowPlaying, onPlayButtonClick}) => {
  const audioRef = createRef();

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => setIsLoading(false);
    audio.ontimeupdate = () => {
      setProgress(Math.floor(audio.currentTime));
      if (!duration) {
        setDuration(audio.duration);
      }
    };

    // componentWillUnmount
    return () => {
      audio.src = ``;
      audio.oncanplaythrough = null;
      audio.ontimeupdate = null;
      setDuration(null);
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

  const getTrackLineStyle = () => {
    if (!progress || !duration) {
      return undefined;
    }
    const percentage = getPercentage(progress, duration).toFixed(3);

    return {
      backgroundImage:
        `linear-gradient(to right,
          ${Color.ORANGE},
          ${Color.ORANGE} ${percentage}%,
          ${Color.TRANSPARENT} ${percentage}%,
          ${Color.TRANSPARENT}
        )`
    };
  };

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
        <div className="track__status-line" style={getTrackLineStyle()} />
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
