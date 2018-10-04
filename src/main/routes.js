import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

//import DefaultPage from '../pages/Default'
import AuthOrApp from './authOrApp'
import RegisterUserPage from '../pages/auth/RegisterPage'
import Dashboard from '../pages/dashboard/DashBoardPage'
import RegisterSubjectPage from '../pages/registerSubject/registerPage'
import SubjectPage from '../pages/subject/subjectPage'

export default props => (

    <Router history={browserHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='subject'>
                <Route path='register' component={RegisterSubjectPage} />
                <Route path='page(/:id)' component={SubjectPage} />
            </Route>
        </Route>
        <Route path='register' component={RegisterUserPage}/>
        <Redirect from='*' to='/' />
    </Router>

)