import React from 'react';
import {mount} from 'enzyme';
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
      artist: `John Doe`,
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

const mockEvent = {
  preventDefault() {}
};

describe(`pass userAnswer data to the callback`, () => {
  it(`passes a data object from the answer that was clicked`, () => {
    const handleAnswer = jest.fn();
    const userAnswer = {
      artist: `John Doe`,
      picture: `https://api.adorable.io/avatars/128/10`
    };

    const questionScreen = mount(
        <QuestionArtist
          onAnswer={handleAnswer}
          question={question}
        />
    );

    const answerInputs = questionScreen.find(`input`);
    const firstAnswer = answerInputs.at(0);

    firstAnswer.simulate(`change`, mockEvent);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(handleAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(handleAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
