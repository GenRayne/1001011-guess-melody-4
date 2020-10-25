import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import questions from '../../mocks/test-questions.js';
import {GameStatus} from '../../const';
import {App} from './app.jsx';

const noopHandler = () => {};
const mockStore = configureStore([]);
const maxMistakes = 3;

const store1 = mockStore({
  mistakes: 0,
  step: -1,
  questions,
  maxMistakes,
  onPlayButtonClick: noopHandler,
  gameStatus: GameStatus.START,
});

const store2 = mockStore({
  mistakes: 0,
  step: 0,
  questions,
  maxMistakes,
  onPlayButtonClick: noopHandler,
  gameStatus: GameStatus.QUESTION,
});

const store3 = mockStore({
  mistakes: 0,
  step: 1,
  questions,
  maxMistakes,
  onPlayButtonClick: noopHandler,
  gameStatus: GameStatus.QUESTION,
});

const store4 = mockStore({
  mistakes: 3,
  step: 2,
  questions,
  maxMistakes,
  onPlayButtonClick: noopHandler,
  gameStatus: GameStatus.FAIL,
});

const store5 = mockStore({
  mistakes: 0,
  step: 3,
  questions,
  maxMistakes,
  onPlayButtonClick: noopHandler,
  gameStatus: GameStatus.SUCCESS,
});

describe(`Render App`, () => {
  it(`renders WelcomeScreen`, () => {
    const tree = renderer
      .create(
          <Provider store={store1}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <Provider store={store2}>
            <App />
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
          <Provider store={store3}>
            <App />
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

  it(`renders FailScreen`, () => {
    const tree = renderer
      .create(
          <Provider store={store4}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders SuccessScreen`, () => {
    const tree = renderer
      .create(
          <Provider store={store5}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
