import {useState} from 'react';
import {string} from 'prop-types';

const useAudioPlayer = (defaultId) => {
  const [activePlayerId, setActivePlayerId] = useState(defaultId);

  const handlePlayButtonClick = (id) => setActivePlayerId(activePlayerId === id ? `` : id);

  return {activePlayerId, handlePlayButtonClick};
};

useAudioPlayer.propTypes = {
  defaultId: string,
};

export {useAudioPlayer};
