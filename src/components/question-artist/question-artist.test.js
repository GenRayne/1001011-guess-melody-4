import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist.jsx';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  },
  answers: [
    {
      id: `1`,
      picture: `https://api.adorable.io/avatars/128/10`,
      artist: `John Snow`,
    },
    {
      id: `2`,
      picture: `https://api.adorable.io/avatars/128/16`,
      artist: `Jack Daniels`,
    },
    {
      id: `3`,
      picture: `https://api.adorable.io/avatars/128/24`,
      artist: `Jim Beam`,
    },
  ]
};

const handleAnswer = () => {};

describe(`render QuestionArtist`, () => {
  it(`renders QuestionArtist`, () => {
    const tree = renderer
      .create(
          <QuestionArtist
            question={question}
            onAnswer={handleAnswer}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
