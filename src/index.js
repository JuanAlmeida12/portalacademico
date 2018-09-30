import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import Routes from './main/routes'


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
