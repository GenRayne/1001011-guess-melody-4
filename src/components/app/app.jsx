import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const playButtonClickHandler = () => {};

const App = ({errorsCount}) => {
  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      onPlayButtonClick={playButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
