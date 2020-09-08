import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import {GameScreen} from '../game-screen/game-screen.jsx';
import {QuestionType} from '../../const.js';
import {isAnswerCorrect} from '../../utils';

const START_STEP = -1;

export const App = () => {
  const dispatch = useDispatch();
  const {step, mistakes, maxMistakes, questions} = useSelector((state) => ({
    step: state.step,
    mistakes: state.mistakes,
    maxMistakes: state.maxMistakes,
    questions: state.questions,
  }));

  const onPlayButtonClick = () => {
    dispatch(ActionCreator.incrementStep());
  };

  const onUserAnswer = (question, answer) => {
    const isCorrect = isAnswerCorrect(question, answer);

    if (!isCorrect) {
      dispatch(ActionCreator.incrementMistakes());
    }

    if (step + 1 >= questions.length || (!isCorrect && mistakes + 1 >= maxMistakes)) {
      dispatch(ActionCreator.returnToStart());
    } else {
      dispatch(ActionCreator.incrementStep());
    }
  };

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
