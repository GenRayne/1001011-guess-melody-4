import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {statusCalculatorMiddleware} from './middleware';
import {App} from './components/app/app.jsx';
import {reducer} from './reducer.js';
import './i18n';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(statusCalculatorMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
