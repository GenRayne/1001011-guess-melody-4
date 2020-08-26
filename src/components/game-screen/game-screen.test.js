import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {GameScreen} from './game-screen.jsx';
import {QuestionType} from '../../const.js';

const mockStore = configureStore([]);
const children = <div />;

const store = mockStore({
  mistakes: 0,
});

describe(`render GameScreen`, () => {
  it(`renders GameScreen with QuestionArtist`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <GameScreen type={QuestionType.ARTIST} mistakes={3}>
              {children}
            </GameScreen>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GameScreen with QuestionGenre`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <GameScreen type={QuestionType.GENRE} mistakes={3}>
              {children}
            </GameScreen>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
