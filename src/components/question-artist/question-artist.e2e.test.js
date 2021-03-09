import React from 'react';
import {mount} from 'enzyme';
import QuestionArtist from './question-artist.jsx';
import questions, {AVATAR_URL} from '../../mocks/test-questions.js';

describe(`pass userAnswer data to the callback`, () => {
  it(`passes a data object from the answer that was clicked`, () => {
    const handleAnswer = jest.fn();
    const userAnswer = {
      id: `1`,
      picture: `${AVATAR_URL}?rnd=1`,
      artist: `John Snow`,
    };

    const questionScreen = mount(
        <QuestionArtist
          onAnswer={handleAnswer}
          question={questions[1]}
        />
    );

    const answerInputs = questionScreen.find(`input`);
    const firstAnswer = answerInputs.at(0);

    firstAnswer.simulate(`change`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(handleAnswer).toHaveBeenCalledWith(questions[1], userAnswer);
  });
});
