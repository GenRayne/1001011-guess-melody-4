import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';
import questions from '../../mocks/test-questions.js';

const noopHandler = () => {};
const mockStore = configureStore([]);

const store = mockStore({
  mistakes: 0
});

describe(`Render App`, () => {
  it(`renders WelcomeScreen`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onPlayButtonClick={noopHandler}
              onUserAnswer={noopHandler}
              step={-1}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onPlayButtonClick={noopHandler}
              onUserAnswer={noopHandler}
              step={0}
            />
          </Provider>, {
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
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onPlayButtonClick={noopHandler}
              onUserAnswer={noopHandler}
              step={1}
            />
          </Provider>, {
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
