import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import QuestionArtist from '../question-artist/question-artist.jsx';
import questions from '../../mocks/test-questions.js';
import {QuestionType} from '../../const.js';

describe(`render GameScreen`, () => {
  it(`renders GameScreen`, () => {
    const handler = () => {};

    const tree = renderer
      .create(
          <GameScreen type={QuestionType.ARTIST}>
            <QuestionArtist
              question={questions[1]}
              onAnswer={handler}
              renderPlayer={handler}
            />
          </GameScreen>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
