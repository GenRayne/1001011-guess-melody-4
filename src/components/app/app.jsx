import React, {useState, useCallback} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {array, number} from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import {QuestionType} from '../../const.js';

const START_STEP = -1;

const App = ({errorsCount, questions}) => {
  const [step, setStep] = useState(START_STEP);

  const handlePlayButtonClick = useCallback(() => setStep(0), []);
  const handleAnswer = useCallback(() => setStep((prevStep) => prevStep + 1), []);

  const renderGameScreen = useCallback(
      () => {
        const question = questions[step];

        if (step === START_STEP || step >= questions.length) {
          return (
            <WelcomeScreen
              errorsCount={errorsCount}
              onPlayButtonClick={handlePlayButtonClick}
            />
          );
        }

        if (question) {
          switch (question.type) {
            case QuestionType.ARTIST:
              return (
                <QuestionArtistScreen
                  question={questions[1]}
                  onAnswer={handleAnswer}
                />
              );
            case QuestionType.GENRE:
              return (
                <QuestionGenreScreen
                  question={questions[0]}
                  onAnswer={handleAnswer}
                />
              );
          }
        }

        return null;
      }, [step]
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderGameScreen()}
        </Route>
        <Route exact path="/artist">
          <QuestionArtistScreen question={questions[1]} onAnswer={() => {}} />
        </Route>
        <Route exact path="/genre">
          <QuestionGenreScreen question={questions[0]} onAnswer={() => {}} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: number.isRequired,
  questions: array.isRequired
};

export default App;
