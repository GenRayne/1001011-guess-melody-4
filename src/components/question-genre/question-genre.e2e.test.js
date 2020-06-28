import React from 'react';
import {mount} from 'enzyme';
import QuestionGenre from './question-genre.jsx';
import questions from '../../mocks/test-questions.js';

describe(`check user answer`, () => {
  it(`doesn't sumbit the form`, () => {
    const handleAnswer = jest.fn();
    const genreQuestion = mount(
        <QuestionGenre
          onAnswer={handleAnswer}
          question={questions[0]}
        />
    );

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention
    });

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`checks if user answers are consistent with userAnswers prop`, () => {
    const handleAnswer = jest.fn();
    const userAnswers = {
      1: false,
      2: true,
      3: false,
      4: false,
    };

    const questionScreen = mount(
        <QuestionGenre
          onAnswer={handleAnswer}
          question={questions[0]}
        />
    );

    const form = questionScreen.find(`form`);
    const secondInput = questionScreen.find(`input`).at(1);

    secondInput.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(handleAnswer).toHaveBeenCalledWith(questions[0], userAnswers);

    expect(questionScreen.find(`input`)
      .reduce((acc, it, i) => ({
        ...acc,
        [i + 1]: it.prop(`checked`)
      }), {}))
      .toEqual(userAnswers);
  });
});
