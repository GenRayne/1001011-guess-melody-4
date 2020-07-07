import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre.jsx';
import questions from '../../mocks/test-questions.js';

const noopHandler = () => {};

describe(`render QuestionGenre`, () => {
  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <QuestionGenre
            question={questions[0]}
            onAnswer={noopHandler}
            renderPlayer={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

