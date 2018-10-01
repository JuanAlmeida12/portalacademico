import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './App'
//import DefaultPage from '../pages/Default'
import LoginPage from '../pages/auth/LoginPage'
import RegisterUserPage from '../pages/auth/RegisterPage'

export default props => (

    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={LoginPage} />
            <Route path='register' component={RegisterUserPage}/>
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)