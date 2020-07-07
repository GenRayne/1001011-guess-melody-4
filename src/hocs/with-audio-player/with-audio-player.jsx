import React, {useState} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const DEFAULT_ID = `1`;

// ------------------ HOC ------------------

const withAudioPlayer = (Component) => {
  const WithAudioPlayer = (props) => {
    const [activePlayerId, setActivePlayerId] = useState(DEFAULT_ID);

    return (
      <Component
        {...props}
        renderPlayer={
          (src, id) => {
            const handlePlayButtonClick = () => setActivePlayerId(activePlayerId === id ? `` : id);

            return (
              <AudioPlayer
                src={src}
                isNowPlaying={id === activePlayerId}
                onPlayButtonClick={handlePlayButtonClick}
              />
            );
          }
        }
      />
    );
  };

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

// ------------------ Hook ------------------

const useAudioPlayer = () => {
  const [activePlayerId, setActivePlayerId] = useState(DEFAULT_ID);

  const handlePlayButtonClick = (id) => setActivePlayerId(activePlayerId === id ? `` : id);

  return {activePlayerId, handlePlayButtonClick};
};

export {useAudioPlayer};
export default withAudioPlayer;
