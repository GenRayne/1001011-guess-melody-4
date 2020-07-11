import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import questions from '../../mocks/test-questions.js';

const noopHandler = () => {};

describe(`Render App`, () => {
  it(`renders WelcomeScreen`, () => {
    const tree = renderer
      .create(
          <App
            mistakesCount={3}
            questions={questions}
            onPlayButtonClick={noopHandler}
            onUserAnswer={noopHandler}
            step={-1}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <App
            mistakesCount={3}
            questions={questions}
            onPlayButtonClick={noopHandler}
            onUserAnswer={noopHandler}
            step={0}
          />, {
            createNodeMock: () => ({
              play: noopHandler,
              pause: noopHandler,
            }),
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders QuestionArtist`, () => {
    const tree = renderer
      .create(
          <App
            mistakesCount={3}
            questions={questions}
            onPlayButtonClick={noopHandler}
            onUserAnswer={noopHandler}
            step={1}
          />, {
            createNodeMock: () => ({
              play: noopHandler,
              pause: noopHandler,
            }),
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
