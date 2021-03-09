import React from 'react';
import {useTranslation} from 'react-i18next';
import {number} from 'prop-types';
import {ResultLogo} from '../result-logo/result-logo.jsx';
import {ReplayButton} from '../replay-button/replay-button.jsx';

export const SuccessScreen = ({correctAnswersCount, mistakesCount}) => {
  const {t} = useTranslation();
  const questionNoun = t(`question`, {count: correctAnswersCount});
  const mistakesNoun = t(`mistake`, {count: mistakesCount});

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
  correctAnswersCount: number.isRequired,
  mistakesCount: number.isRequired,
};
