import React from 'react';
import {number} from 'prop-types';
import {getDeclinedNoun} from '../../utils';
import {questionDeclensions, mistakesDeclensions} from '../../const';
import {ResultLogo} from '../result-logo/result-logo.jsx';
import {ReplayButton} from '../replay-button/replay-button.jsx';

export const SuccessScreen = ({questionsCount, mistakesCount}) => {
  const correctAnswersCount = questionsCount - mistakesCount;
  const questionNoun = getDeclinedNoun(correctAnswersCount, questionDeclensions);
  const mistakesNoun = getDeclinedNoun(mistakesCount, mistakesDeclensions);

  return (
    <section className="result">
      <ResultLogo />
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы ответили правильно на {correctAnswersCount}&nbsp;{questionNoun} и совершили {mistakesCount}&nbsp;{mistakesNoun}
      </p>
      <ReplayButton />
    </section>
  );
};

SuccessScreen.propTypes = {
  questionsCount: number.isRequired,
  mistakesCount: number.isRequired,
};
