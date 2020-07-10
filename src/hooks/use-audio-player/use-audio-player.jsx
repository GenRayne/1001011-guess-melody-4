import {useState} from 'react';

const useAudioPlayer = (defaultId) => {
  const [activePlayerId, setActivePlayerId] = useState(defaultId);

  const handlePlayButtonClick = (id) => setActivePlayerId(activePlayerId === id ? `` : id);

  return {activePlayerId, handlePlayButtonClick};
};

export {useAudioPlayer};
