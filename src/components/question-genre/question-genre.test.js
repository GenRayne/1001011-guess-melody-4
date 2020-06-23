import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre.jsx';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: `1`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    },
    {
      id: `2`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    },
    {
      id: `3`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    },
    {
      id: `4`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }
  ]
};

const handleAnswer = () => {};

describe(`render QuestionGenre`, () => {
  it(`renders QuestionGenre`, () => {
    const tree = renderer
      .create(
          <QuestionGenre
            question={question}
            onAnswer={handleAnswer}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

