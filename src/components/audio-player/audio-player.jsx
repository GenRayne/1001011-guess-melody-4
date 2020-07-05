import React, {createRef, useState, useEffect} from 'react';
import {string, bool} from 'prop-types';

const PlayerAction = {
  PLAY: `play`,
  PAUSE: `pause`,
};

const AudioPlayer = ({src, isNowPlaying}) => {
  const audioRef = createRef();
  let audio = null;

  const [, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(isNowPlaying);

  // componentDidMount
  useEffect(() => {
    audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => setIsLoading(false);
    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.ontimeupdate = () => setProgress(audio.currentTime);

    // componentWillUnmount
    return () => {
      audio.src = ``;
      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
    };
  }, []);

  // componentDidUpdate (?)
  useEffect(() => {
    audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleOnButtonClick = () => setIsPlaying((prevState) => !prevState);

  return (
    <>
      <button
        type="button"
        className={`track__button track__button--${isPlaying ? PlayerAction.PAUSE : PlayerAction.PLAY}`}
        disabled={isLoading}
        onClick={handleOnButtonClick}
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
};

export default AudioPlayer;
