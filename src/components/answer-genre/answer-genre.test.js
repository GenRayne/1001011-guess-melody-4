import React from 'react';
import renderer from 'react-test-renderer';
import AnswerGenre from './answer-genre.jsx';

const answer = {
  id: `1`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

const userAnswer = true;

describe(`render AnswerGenre`, () => {
  it(`renders AnswerGenre`, () => {
    const activePlayer = `1`;

    const tree = renderer
      .create(
          <AnswerGenre
            answer={answer}
            userAnswer={userAnswer}
            onAnswerChange={() => {}}
            activePlayer={activePlayer}
            onPlayButtonClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
