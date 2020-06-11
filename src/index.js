import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const GameSettings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={GameSettings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
