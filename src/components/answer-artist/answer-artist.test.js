import React from 'react';
import renderer from 'react-test-renderer';
import AnswerArtist from './answer-artist.jsx';

const answer = {
  id: `1`,
  picture: `https://api.adorable.io/avatars/128/10`,
  artist: `John Snow`,
};

describe(`render AnswerArtist`, () => {
  it(`renders AnswerArtist`, () => {
    const tree = renderer
      .create(
          <AnswerArtist
            answer={answer}
            onAnswer={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
