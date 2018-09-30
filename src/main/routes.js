import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './App'
//import DefaultPage from '../pages/Default'
import AuthPage from '../pages/auth/AuthPage'

export default props => (

    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={AuthPage} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)