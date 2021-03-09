import React from 'react';
import renderer from 'react-test-renderer';
import '../../i18n';
import WelcomeScreen from './welcome-screen.jsx';

describe(`Render WelcomeScreen`, () => {
  it(`renders WelcomeScreen`, () => {
    const tree = renderer
    .create(
        <WelcomeScreen
          mistakesCount={3}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
