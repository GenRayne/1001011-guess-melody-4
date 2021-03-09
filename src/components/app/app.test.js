import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import '../../i18n';
import questions from '../../mocks/test-questions.js';
import {GameStatus} from '../../const';
import {App} from './app.jsx';

const noopHandler = () => {};
const mockStore = configureStore([]);
const maxMistakes = 3;

describe(`Render App`, () => {
  it(`renders WelcomeScreen`, () => {
    const store = mockStore({
      correctAnswers: 0,
      mistakes: 0,
      step: -1,
      questions,
      maxMistakes,
      onPlayButtonClick: noopHandler,
      gameStatus: GameStatus.START,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders QuestionGenre`, () => {
    const store = mockStore({
      correctAnswers: 0,
      mistakes: 0,
      step: 0,
      questions,
      maxMistakes,
      onPlayButtonClick: noopHandler,
      gameStatus: GameStatus.QUESTION,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
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
    const store = mockStore({
      correctAnswers: 0,
      mistakes: 0,
      step: 1,
      questions,
      maxMistakes,
      onPlayButtonClick: noopHandler,
      gameStatus: GameStatus.QUESTION,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
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
    const store = mockStore({
      correctAnswers: 0,
      mistakes: 3,
      step: 2,
      questions,
      maxMistakes,
      onPlayButtonClick: noopHandler,
      gameStatus: GameStatus.FAIL,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders SuccessScreen`, () => {
    const store = mockStore({
      correctAnswers: 3,
      mistakes: 0,
      step: 3,
      questions,
      maxMistakes,
      onPlayButtonClick: noopHandler,
      gameStatus: GameStatus.SUCCESS,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
