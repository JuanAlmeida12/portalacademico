import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import Routes from './main/routes'


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
