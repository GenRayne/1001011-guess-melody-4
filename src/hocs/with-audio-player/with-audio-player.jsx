import React, {useState} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const withAudioPlayer = (Component) => {
  const WithAudioPlayer = (props) => {
    const [activePlayerId, setActivePlayerId] = useState(`1`);

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

export default withAudioPlayer;
