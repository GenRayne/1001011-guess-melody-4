import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import questions from '../../mocks/test-questions.js';

describe(`Render App`, () => {
  it(`renders App`, () => {
    const tree = renderer
      .create(
          <App
            errorsCount={3}
            questions={questions}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
