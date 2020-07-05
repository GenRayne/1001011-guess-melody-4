import React from 'react';
import renderer from 'react-test-renderer';
import AnswerGenre from './answer-genre.jsx';

const answer = {
  id: `1`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

const userAnswer = true;
const randomHandler = () => {};

describe(`render AnswerGenre`, () => {
  it(`renders AnswerGenre`, () => {
    const tree = renderer
      .create(
          <AnswerGenre
            answer={answer}
            userAnswer={userAnswer}
            onAnswerChange={randomHandler}
            renderPlayer={randomHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
