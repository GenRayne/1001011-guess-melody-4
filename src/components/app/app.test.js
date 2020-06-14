import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`Render App`, () => {
  it(`renders App`, () => {
    const tree = renderer
      .create(
          <App
            errorsCount={3}
            onPlayButtonClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
