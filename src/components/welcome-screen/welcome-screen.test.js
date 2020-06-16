import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`Render WelcomeScreen`, () => {
  it(`renders WelcomeScreen`, () => {
    const tree = renderer
    .create(
        <WelcomeScreen
          errorsCount={3}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
