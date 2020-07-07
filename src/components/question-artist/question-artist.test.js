import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist.jsx';
import questions from '../../mocks/test-questions.js';

const noopHandler = () => {};

describe(`render QuestionArtist`, () => {
  it(`renders QuestionArtist`, () => {
    const tree = renderer
      .create(
          <QuestionArtist
            question={questions[1]}
            onAnswer={noopHandler}
            renderPlayer={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
