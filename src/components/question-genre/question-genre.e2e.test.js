import React from 'react';
import {mount} from 'enzyme';
import QuestionGenre from './question-genre.jsx';
import questions from '../../mocks/test-questions.js';

const randomHandler = () => {};

describe(`check user answer`, () => {
  it(`calls the handler on submit event`, () => {
    const handleAnswer = jest.fn();
    const genreQuestion = mount(
        <QuestionGenre
          onAnswer={handleAnswer}
          question={questions[0]}
          renderPlayer={randomHandler}
        />
    );

    const form = genreQuestion.find(`form`);

    form.simulate(`submit`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });

  it(`checks if user answers are consistent with userAnswers prop`, () => {
    const handleAnswer = jest.fn();
    const userAnswers = {
      2: true,
    };

    const questionScreen = mount(
        <QuestionGenre
          onAnswer={handleAnswer}
          question={questions[0]}
          renderPlayer={randomHandler}
        />
    );

    const form = questionScreen.find(`form`);
    const secondInput = questionScreen.find(`input`).at(1);

    secondInput.simulate(`change`);
    form.simulate(`submit`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(handleAnswer).toHaveBeenCalledWith(questions[0], userAnswers);
  });
});
