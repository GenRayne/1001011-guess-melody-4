import React from 'react';
import {shallow} from 'enzyme';
import '../../i18n';
import WelcomeScreen from './welcome-screen.jsx';

describe(`Play button click`, () => {
  it(`presses Play button`, () => {
    const onPlayButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          mistakesCount={3}
          onPlayButtonClick={onPlayButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);
    welcomeButton.simulate(`click`);

    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
