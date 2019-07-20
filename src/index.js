import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
