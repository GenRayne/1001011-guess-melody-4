import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen.jsx';
import {QuestionType} from '../../const.js';

const children = <div />;

describe(`render GameScreen`, () => {
  it(`renders GameScreen with QuestionArtist`, () => {
    const tree = renderer
      .create(
          <GameScreen type={QuestionType.ARTIST} mistakes={3}>
            {children}
          </GameScreen>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GameScreen with QuestionGenre`, () => {
    const tree = renderer
      .create(
          <GameScreen type={QuestionType.GENRE} mistakes={3}>
            {children}
          </GameScreen>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
