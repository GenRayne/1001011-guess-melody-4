import React from 'react';
import {ResultLogo} from '../result-logo/result-logo.jsx';
import {ReplayButton} from '../replay-button/replay-button.jsx';

export const FailScreen = () => {
  return (
    <section className="result">
      <ResultLogo />
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">
        У вас закончились все попытки. Ничего, повезёт в следующий раз!
      </p>
      <ReplayButton />
    </section>
  );
};
