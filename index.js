import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

import './src/css/mui.min.css';
import './src/css/style.scss';
import App from './src/components/app.js';
import allReducers from './src/reducers';

const store = createStore(allReducers,applyMiddleware(thunk, promise(), createLogger()));

render(
    <Provider  store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
