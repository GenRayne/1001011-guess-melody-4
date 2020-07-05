import React, {createRef, useState, useEffect} from 'react';
import {string, bool, func} from 'prop-types';

const PlayerAction = {
  PLAY: `play`,
  PAUSE: `pause`,
};

const AudioPlayer = ({src, isNowPlaying, onPlayButtonClick}) => {
  const audioRef = createRef();
  let audio = null;

  const [, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    audio = audioRef.current;
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

  // componentDidUpdate (?)
  useEffect(() => {
    audio = audioRef.current;

    if (isNowPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isNowPlaying]);

  return (
    <>
      <button
        type="button"
        className={`track__button track__button--${isNowPlaying ? PlayerAction.PAUSE : PlayerAction.PLAY}`}
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
