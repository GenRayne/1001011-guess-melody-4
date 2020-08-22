import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {array, number, func} from 'prop-types';
import {connect} from 'react-redux';
import {store} from '../../index.js';
import {ActionCreator} from '../../reducer.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import {QuestionType} from '../../const.js';

const START_STEP = -1;

export const App = ({
  maxMistakes,
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
          mistakesCount={maxMistakes}
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
  maxMistakes: number.isRequired,
  questions: array.isRequired,
  onPlayButtonClick: func.isRequired,
  onUserAnswer: func.isRequired,
  step: number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },

  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistakes(question, answer));
    const {step, questions, mistakes, maxMistakes} = store.getState();

    if (step + 1 >= questions.length || mistakes + 1 >= maxMistakes) {
      dispatch(ActionCreator.returnToStart());
    } else {
      dispatch(ActionCreator.incrementStep());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
