import React from 'react';
import {shallow} from 'enzyme';
import AudioPlayer from '../audio-player/audio-player.jsx';

describe(`toggle Play/Pause`, () => {
  it(`toggles play/pause when the Play button is pressed`, () => {
    const playerProps = {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      isPlaying: true,
      onPlayButtonClick: jest.fn(),
    };

    const audioPlayer = shallow(
        <AudioPlayer
          src={playerProps.src}
          isNowPlaying={playerProps.isPlaying}
          onPlayButtonClick={playerProps.onPlayButtonClick}
        />
    );

    let playButton = audioPlayer.find(`button.track__button`);

    playButton.simulate(`click`);

    audioPlayer.update();
    playButton = audioPlayer.find(`button.track__button`);

    expect(playerProps.onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(playButton.hasClass(`track__button--pause`)).toEqual(true);
  });
});
