import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

//import DefaultPage from '../pages/Default'
import AuthOrApp from './authOrApp'
import RegisterUserPage from '../pages/auth/RegisterPage'
import Dashboard from '../pages/dashboard/DashBoardPage'

export default props => (

    <Router history={browserHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='register' component={RegisterUserPage}/>
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)