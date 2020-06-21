import React from 'react';
import renderer from 'react-test-renderer';
import AnswerGenre from './answer-genre.jsx';

const answer = {
  id: `1`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

const userAnswers = {
  1: false,
  2: false,
  3: false,
  4: false,
};

describe(`render AnswerGenre`, () => {
  it(`renders AnswerGenre`, () => {
    const tree = renderer
      .create(
          <AnswerGenre
            answer={answer}
            userAnswers={userAnswers}
            setUserAnswers={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
