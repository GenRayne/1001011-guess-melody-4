import React, {useState, useCallback} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {array, number} from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import {QuestionType} from '../../const.js';

const START_STEP = -1;

const App = ({errorsCount, questions}) => {
  const [step, setStep] = useState(START_STEP);

  const handlePlayButtonClick = useCallback(() => setStep(0), []);
  const handleAnswer = useCallback(() => setStep((prevStep) => prevStep + 1), []);

  const renderGameScreen = () => {
    const currentQuestion = questions[step];

    if (step === START_STEP || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onPlayButtonClick={handlePlayButtonClick}
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
                onAnswer={handleAnswer}
              />
            </GameScreen>
          );
        case QuestionType.GENRE:
          return (
            <GameScreen type={QuestionType.GENRE}>
              <QuestionGenreScreen
                question={currentQuestion}
                onAnswer={handleAnswer}
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
          <QuestionArtistScreen question={questions[1]} onAnswer={handleAnswer} />
        </Route>
        <Route exact path="/genre">
          <QuestionGenreScreen question={questions[0]} onAnswer={handleAnswer} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: number.isRequired,
  questions: array.isRequired,
};

export default App;
