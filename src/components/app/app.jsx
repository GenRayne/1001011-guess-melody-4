import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {array, number, func} from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import {QuestionType} from '../../const.js';

const START_STEP = -1;

const App = ({
  mistakesCount,
  questions,
  onPlayButtonClick,
  onUserAnswer,
  step,
}) => {
  const renderGameScreen = () => {
    const currentQuestion = questions[step];

    if (step === START_STEP || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakesCount={mistakesCount}
          onPlayButtonClick={onPlayButtonClick}
        />
      );
    }

    if (currentQuestion) {
      switch (currentQuestion.type) {
        case QuestionType.ARTIST:
          return (
            <GameScreen type={QuestionType.ARTIST}>
              <QuestionArtistScreen
                question={currentQuestion}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case QuestionType.GENRE:
          return (
            <GameScreen type={QuestionType.GENRE}>
              <QuestionGenreScreen
                question={currentQuestion}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderGameScreen()}
        </Route>
        <Route exact path="/artist">
          <QuestionArtistScreen question={questions[1]} onAnswer={onUserAnswer} />
        </Route>
        <Route exact path="/genre">
          <QuestionGenreScreen question={questions[0]} onAnswer={onUserAnswer} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mistakesCount: number.isRequired,
  questions: array.isRequired,
  onPlayButtonClick: func.isRequired,
  onUserAnswer: func.isRequired,
  step: number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
