import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre.jsx';
import questions from '../../mocks/test-questions.js';

const handleAnswer = () => {};

describe(`render QuestionGenre`, () => {
  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <QuestionGenre
            question={questions[0]}
            onAnswer={handleAnswer}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

