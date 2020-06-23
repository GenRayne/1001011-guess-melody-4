import React from 'react';
import {mount} from 'enzyme';
// import {shallow} from 'enzyme';
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

describe(`check user answer`, () => {
  it(`doesn't sumbit the form`, () => {
    const handleAnswer = jest.fn();
    const genreQuestion = mount(
        <QuestionGenre
          onAnswer={handleAnswer}
          question={question}
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
          question={question}
        />
    );

    const form = questionScreen.find(`form`);
    const secondInput = questionScreen.find(`input`).at(1);

    secondInput.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(handleAnswer).toHaveBeenCalledTimes(1);
    expect(handleAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(handleAnswer.mock.calls[0][1]).toMatchObject(userAnswers);

    // expect(questionScreen.find(`input`).map((it, i) => it.prop(`checked`)))
    expect(questionScreen.find(`input`).reduce((acc, it, i) => Object.assign(
        acc,
        {[i + 1]: it.prop(`checked`)}
    ), {}))
      .toEqual(userAnswers);
  });
});
